import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import { LoginDTO, UserDTO } from "../dto/User.dto.js";
import jwt from "jsonwebtoken";
export class UserService {
  async registerUser(name, email, password) {
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      throw new Error("This email already exists!");
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashpassword });
    const userDTO = new UserDTO(user);
    return userDTO;
  }
  async login(email, password) {
    const findEmail = await User.findOne({ email });
    if (!findEmail) {
      throw new Error("Invalid email or password");
    }
    const pass = await bcrypt.compare(password, findEmail.password);
    if (!pass) {
      throw new Error("Invalid email or password");
    }
    const token = jwt.sign(
      {
        id: findEmail._id,
        name: findEmail.name,
        email: findEmail.email,
        role: findEmail.role,
      },
      process.env.MY_SECRET_KEY,
      { expiresIn: "9h" },
    );

    const log = new LoginDTO(token, findEmail);
    return log;
  }
  async getProfile(userid) {
    const getUser = await User.findById(userid).select("-password");
    if (!getUser) {
      throw new Error("No user found!");
    }
    return getUser;
  }
  async updateUser(userid, user) {
    const updateUser = await User.findOneAndUpdate(
      { _id: userid },
      {
        $set: {
          name: user.name,
        },
      },
      {
        returnDocument: "after",
        runValidators: true,
      },
    ).select("-password");
    if (!updateUser) {
      throw new Error("No user found");
    }
    return updateUser;
  }
  async deleteUser(userid) {
    const deleteUser = await User.findOneAndDelete({ _id: userid }).select(
      "-password",
    );
    if (!deleteUser) {
      throw new Error("No user found!");
    }
    return deleteUser;
  }
}
