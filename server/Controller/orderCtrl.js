import User from "../Models/UserModel.js";
import Color from "../Models/colorModel.js";
import asyncHandler from "express-async-handler";
import validateMongodbId from "../utils/validateMongodbId.js";

export const createColor = asyncHandler(async (req, res) => {
  try {
    const newColor = await Color.create(req.body);
    res.status(201).json({
      newColor,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const getColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const color = await Color.findById(id);

    res.json({ color });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const color = await Color.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ color });
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllColor = asyncHandler(async (req, res) => {
  try {
    const color = await Color.find();

    res.json({ color });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    await Color.findByIdAndDelete(id);
    res.json({ message: "delete successfully" });
  } catch (error) {
    throw new Error(error);
  }
});
