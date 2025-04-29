//-------------Product Category--------------------

import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
  updateCategory,
} from "../Controller/categoryCtrl.js";

const router = express.Router();

router.post("/create", createCategory);

router.get("/get-category", getAllCategory);

router.get("/:id", getCategory);

router.put("/update/:id", authMiddleware, isAdmin, updateCategory);

router.delete("/delete/:id", authMiddleware, isAdmin, deleteCategory);

export default router;
