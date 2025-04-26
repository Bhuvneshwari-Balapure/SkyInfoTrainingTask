import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";
import {
  createCoupon,
  deleteCoupon,
  getAllCoupon,
  getCoupon,
  updateCoupon,
} from "../Controller/couponCtrl.js";

const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createCoupon);

router.get("/getallcoupon", authMiddleware, isAdmin, getAllCoupon);

router.get("/:id", getCoupon);

router.put("/update/:id", authMiddleware, isAdmin, updateCoupon);

router.delete("/delete/:id", authMiddleware, isAdmin, deleteCoupon);

export default router;
