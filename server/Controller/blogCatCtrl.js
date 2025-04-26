import asyncHandler from "express-async-handler";
import Category from "../Models/blogCatModel.js";
import User from "../Models/UserModel.js";
import validateMongodbId from "../utils/validateMongodbId.js";
import BlogCategory from "../Models/blogCatModel.js";

export const createBlogCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json({
      newCategory,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const getBlogCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const category = await BlogCategory.findById(id);

    res.json({ category });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateBlogCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const category = await BlogCategory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({
      category,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllBlogCategory = asyncHandler(async (req, res) => {
  try {
    const category = await BlogCategory.find();

    res.json({ category });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteBlogCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    await BlogCategory.findByIdAndDelete(id);
    res.json({ message: "delete successfully" });
  } catch (error) {
    throw new Error(error);
  }
});
