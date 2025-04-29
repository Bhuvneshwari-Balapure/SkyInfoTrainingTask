import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";
import {
  createBlogCategory,
  deleteBlogCategory,
  getAllBlogCategory,
  getBlogCategory,
  updateBlogCategory,
} from "../Controller/blogCatCtrl.js";

const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createBlogCategory);

router.get("/get-blogcategory", getAllBlogCategory);

router.get("/get-blogcategory/:id", getBlogCategory);

router.put("/update/:id", authMiddleware, isAdmin, updateBlogCategory);

router.delete("/delete/:id", authMiddleware, isAdmin, deleteBlogCategory);

export default router;
