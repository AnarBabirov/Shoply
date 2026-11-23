export class UserDTO {
  id;
  name;
  email;
  role;
  createdAt;
  constructor(user) {
    this.id = user._id;
    this.name = user.name;
    this.email = user.email;
    this.role = user.role;
    this.createdAt = user.createdAt;
  }
}

export class LoginDTO {
  id;
  name;
  email;
  role;
  token;

  constructor(token, user) {
    this.token = token;
    this.id = user._id;
    this.name = user.name;
    this.email=user.email;
    this.role = user.role;
  }
}
