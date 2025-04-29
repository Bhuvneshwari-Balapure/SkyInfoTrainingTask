import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";
import {
  createEnq,
  deleteEnq,
  getAllEnq,
  getEnq,
  updateEnq,
} from "../Controller/enqCtrl.js";

const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createEnq);

router.get("/get-allEnq", getAllEnq);

router.get("/:id", getEnq);

router.put("/update/:id", authMiddleware, isAdmin, updateEnq);

router.delete("/delete/:id", authMiddleware, isAdmin, deleteEnq);

export default router;
