import Brand from "../Models/brandModel.js";
import asyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";
import validateMongodbId from "../utils/validateMongodbId.js";

export const createBrand = asyncHandler(async (req, res) => {
  const { title } = req.body;

  console.log("Creating brand with data:", req.body);

  // Validation
  if (!title || title.trim() === "") {
    return res
      .status(400)
      .json({ message: "Title is required and cannot be empty" });
  }

  try {
    // Check if brand already exists
    const brandExists = await Brand.findOne({ title });
    if (brandExists) {
      return res
        .status(400)
        .json({ message: "Brand with this title already exists" });
    }

    // Create brand
    const newBrand = await Brand.create(req.body);
    res.status(201).json({ newBrand });
  } catch (error) {
    // Handle duplicate key errors
    if (error.code === 11000) {
      return res.status(400).json({ message: "Brand already exists." });
    }

    // Generic error handling
    res.status(500).json({ message: error.message });
  }
});

export const getBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const brand = await Brand.findById(id);

    res.json({ brand });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const brand = await Brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ brand });
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllBrand = asyncHandler(async (req, res) => {
  try {
    const brand = await Brand.find();

    res.json({ brand });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    await Brand.findByIdAndDelete(id);
    res.json({ message: "delete successfully" });
  } catch (error) {
    throw new Error(error);
  }
});
