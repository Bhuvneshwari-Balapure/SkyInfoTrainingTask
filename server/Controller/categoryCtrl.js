import asyncHandler from "express-async-handler";
import Category from "../Models/categoryModel.js";
import User from "../Models/UserModel.js";
import validateMongodbId from "../utils/validateMongodbId.js";

//-------------Product Category--------------------

export const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json({
      newCategory,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const getCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const category = await Category.findById(id);

    res.json({ category });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const category = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({
      category,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllCategory = asyncHandler(async (req, res) => {
  try {
    const category = await Category.find();

    res.json({ category });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    await Category.findByIdAndDelete(id);
    res.json({ message: "delete successfully" });
  } catch (error) {
    throw new Error(error);
  }
});
