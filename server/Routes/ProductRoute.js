import express from "express";
import * as ProductCtrl from "../Controller/ProductCtrl.js";
import { isAdmin, authMiddleware } from "../middlewares/authMiddleware.js";
import { productImgResize, uploadPhoto } from "../middlewares/uploadImages.js";

const router = express.Router();

router.put("/wishlist", authMiddleware, ProductCtrl.addToWishList);
router.post("/createProduct", ProductCtrl.CreateProduct);
router.put(
  "/upload",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  ProductCtrl.uploadImages
);
router.put("/rating", authMiddleware, ProductCtrl.rating);
router.get("/", ProductCtrl.GetAllProducts);
router.get("/:id", ProductCtrl.GetProduct);
router.put("/:id", authMiddleware, isAdmin, ProductCtrl.UpdateProducts);
router.delete("/:id", authMiddleware, isAdmin, ProductCtrl.DeleteProduct);

export default router;
