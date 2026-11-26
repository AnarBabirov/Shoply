import jwt from "jsonwebtoken";

const AuthMiddleWare = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No access to this endpoint!" });
    }

    const token = authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token missing!" });
    }

    const decoded = jwt.verify(token, process.env.MY_SECRET_KEY);

    req.user = decoded;

    return next();
  } catch (error) {
    console.error("Auth error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token!" });
  }
};

const AdminMiddleWare = (req, res, next) => {
  if (req.user.role !== "admin") {
    res.status(403).json({
      message: "You are not admin!"
    })
  }
  else if (req.user.role == "admin") {
    next()
  }




}

export { AuthMiddleWare, AdminMiddleWare };
