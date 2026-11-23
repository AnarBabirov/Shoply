import { UserService } from "../services/User.service.js";
export class UserController {
  userService = new UserService();

  userRegistration = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const user = await this.userService.registerUser(name, email, password);
      res.status(201).json({
        message: "Registration is successful!",
        user,
      });
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
  };
  userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await this.userService.login(email, password);
      res.status(200).json({
        message: "You logged in successfuly!",
        user,
      });
    } catch (error) {
      res.status(401).send({
        message: error.message,
      });
    }
  };
  getUserById = async (req, res) => {
    const userid = req.user.id;
    try {
      const user = await this.userService.getProfile(userid);
      res.status(200).json({
        message: "Search is successfuly!",
        user,
      });
    } catch (error) {
      res.status(401).send({
        message: error.message,
      });
    }
  };
  updateUser = async (req, res) => {
    const userid = req.user.id;
    const  user  = req.body
    try {
      const updateUser = await this.userService.updateUser(userid, user);
      res.status(200).json({
        message: "Updated successfuly!",
        updateUser,
      });
    } catch (error) {
      res.status(404).send({
        message: error.message,
      });
    }
  };
  deleteUser = async (req, res) => {
    const userid = req.user.id;
  
    try {
      const deleteUser = await this.userService.deleteUser(userid);
      res.status(200).json({
        message: "Deleted successfuly!",
        deleteUser,
      });
    } catch (error) {
      res.status(404).send({
        message: error.message,
      });
    }
  };
}
