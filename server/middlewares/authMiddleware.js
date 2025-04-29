import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";
// import config from "../confilg/env.config.js"; // Assuming your config file is correct
const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        console.log(token);
        const decoded = jwt.verify(token, "MYsecret");
        console.log(decoded);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Not Authorized");
    }
  } else {
    throw new Error("No token attached to the header");
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  console.log(req.user);
  const { email } = req.user;
  const adminUser = await User.findOne({ email });
  if (adminUser.role !== "admin") {
    throw new Error("You are Not an Admin");
  } else {
    next();
  }
});

export { authMiddleware, isAdmin };
