import asyncHandler from "express-async-handler";
import Coupon from "../Models/couponModel.js";
import User from "../Models/UserModel.js";
import validateMongodbId from "../utils/validateMongodbId.js";

export const createCoupon = asyncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.status(201).json({
      newCoupon,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const getCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const getCoupon = await Coupon.findById(id);

    res.json({ getCoupon });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const update = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ update });
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllCoupon = asyncHandler(async (req, res) => {
  try {
    const allCoupon = await Coupon.find();

    res.json({ allCoupon });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    await Coupon.findByIdAndDelete(id);
    res.json({ message: "delete successfully" });
  } catch (error) {
    throw new Error(error);
  }
});
