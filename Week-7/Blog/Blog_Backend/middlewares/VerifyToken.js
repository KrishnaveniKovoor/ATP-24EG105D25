import jwt from "jsonwebtoken";
import { config } from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const { verify } = jwt;

config();

// helper: load UserModel dynamically and case-insensitively
async function loadUserModel() {
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const modelsDir = path.join(__dirname, "..", "models");

    const files = fs.readdirSync(modelsDir);
    const match = files.find((f) => f.toLowerCase() === "usermodel.js");

    if (!match) {
      throw new Error("UserModel file not found in models directory");
    }

    const moduleUrl = pathToFileURL(path.join(modelsDir, match)).href;
    const mod = await import(moduleUrl);
    return mod.UserModel ?? mod.default ?? null;
  } catch (err) {
    console.log("error loading UserModel:", err);
    return null;
  }
}

export const verifyToken = (...allowedRoles) => {
  return async (req, res, next) => {
    try {
      // get token from cookies
      const token = req.cookies?.token;

      console.log("token from cookies:", token);

      // if token missing
      if (!token) {
        return res.status(401).json({
          message: "Please login first",
        });
      }

      // verify token
      const decodedToken = verify(token, process.env.SECRET_KEY);

      console.log("decoded token:", decodedToken);
      console.log("allowed roles:", allowedRoles);

      // role check
      if (!allowedRoles.includes(decodedToken.role)) {
        console.log("role mismatch");

        return res.status(403).json({
          message: "You are not authorized",
        });
      }

      // dynamically load UserModel (handles case-sensitive deploys)
      const UserModel = await loadUserModel();
      if (!UserModel) {
        return res.status(500).json({ message: "Server configuration error" });
      }

      // find user in DB
      const dbUser = await UserModel.findById(decodedToken.id).select(
        "role isUserActive"
      );

      console.log("db user:", dbUser);

      // if user not found
      if (!dbUser) {
        return res.status(401).json({
          message: "User not found",
        });
      }

      // if blocked
      if (!dbUser.isUserActive) {
        return res.status(403).json({
          message: "Your account is blocked",
        });
      }

      // attach user
      req.user = decodedToken;

      next();
    } catch (err) {
      console.log("verify token error:", err);

      res.status(401).json({
        message: "Invalid token",
      });
    }
  };
};