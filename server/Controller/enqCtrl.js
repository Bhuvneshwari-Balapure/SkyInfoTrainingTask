import Enq from "../Models/enqModel.js";
import User from "../Models/UserModel.js";
import asyncHandler from "express-async-handler";
import validateMongodbId from "../utils/validateMongodbId.js";

export const createEnq = asyncHandler(async (req, res) => {
  try {
    const newEnq = await Enq.create(req.body);
    res.status(201).json({
      newEnq,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const getEnq = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const enq = await Enq.findById(id);

    res.json({ enq });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateEnq = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const enq = await Enq.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ enq });
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllEnq = asyncHandler(async (req, res) => {
  try {
    const enq = await Enq.find();

    res.json({ enq });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteEnq = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    await Enq.findByIdAndDelete(id);
    res.json({ message: "delete successfully" });
  } catch (error) {
    throw new Error(error);
  }
});
