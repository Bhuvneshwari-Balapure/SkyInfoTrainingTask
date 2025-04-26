import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

export default router;
