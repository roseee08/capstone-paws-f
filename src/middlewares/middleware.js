import { auth } from "../configs/firebase.js";

export const authenticateToken = async (req, res, next) => {
  try {
    const bearerHeader = req.headers["authorization"];
    if (!bearerHeader) {
      return res.status(401).json({ message: "Token required" });
    }

    const token = bearerHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Invalid token format" });
    }

    const decodedToken = await auth.verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Error in authentication middleware:", error.message);
    res.status(403).json({ message: "Forbidden", error: error.message });
  }
};
