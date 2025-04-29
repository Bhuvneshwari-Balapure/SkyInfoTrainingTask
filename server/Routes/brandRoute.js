import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";
import {
  createBrand,
  deleteBrand,
  getAllBrand,
  getBrand,
  updateBrand,
} from "../Controller/brandCtrl.js";

const router = express.Router();

router.post("/create", createBrand);

router.get("/get-brand", getAllBrand);

router.get("/:id", getBrand);

router.put("/update/:id", authMiddleware, isAdmin, updateBrand);

router.delete("/delete/:id", authMiddleware, isAdmin, deleteBrand);

export default router;
