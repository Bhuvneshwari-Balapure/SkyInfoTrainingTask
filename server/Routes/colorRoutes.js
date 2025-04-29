import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";
import {
  createColor,
  deleteColor,
  getAllColor,
  getColor,
  updateColor,
} from "../Controller/colorCtrl.js";

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createColor);

router.get("/get-color", getAllColor);

router.get("/get-color/:id", getColor);

router.put("/:id", authMiddleware, isAdmin, updateColor);

router.delete("/:id", authMiddleware, isAdmin, deleteColor);

export default router;
