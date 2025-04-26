import express from "express";
import {
  createBlog,
  deleteBlog,
  disLikeBlog,
  getAllBlog,
  getBlog,
  likeBlog,
  updateBlog,
  //   uploadImages,
} from "../Controller/blogCtrl.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";
// import { productImgResize, uploadPhoto } from "../middlewares/uploadImages.js";

const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createBlog);

router.put("/likes", authMiddleware, likeBlog);

router.get("/get-all", getAllBlog);

router.put("/dislikes", authMiddleware, disLikeBlog);

// router.put(
//   "/upload/:id",
//   authMiddleware,
//   isAdmin,
//   uploadPhoto.array("images", 2),
//   productImgResize,
//   uploadImages
// );

router.put("/update/:id", authMiddleware, isAdmin, updateBlog);

router.get("/:id", getBlog);

router.delete("/delete/:id", authMiddleware, isAdmin, deleteBlog);

export default router;
