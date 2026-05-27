import jwt from "jsonwebtoken";

const verifyUserToken = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) {
      // No token provided
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }
    const token = header.split(" ")[1];
    if (!token) {
      // No token provided
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      // Invalid token
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    }
    // Attach the decoded user information to the request
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
  }
};

export default verifyUserToken;
