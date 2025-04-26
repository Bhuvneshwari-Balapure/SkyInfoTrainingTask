import asyncHandler from "express-async-handler";
import slugify from "slugify";
import Product from "../Models/ProductModel.js";
import User from "../Models/UserModel.js";
import {
  cloudinaryDeleteImg,
  cloudinaryUploadingImg,
} from "../utils/cloudinary.js";
import fs from "fs";
const CreateProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await Product.create(req.body);

    res.send(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const GetProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const findProduct = await Product.findById(id);

    if (!findProduct) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.send(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const GetAllProducts = asyncHandler(async (req, res) => {
  // 1. Filtering
  const queryObj = { ...req.query };
  const excludeFields = ["page", "sort", "limit", "fields"];
  excludeFields.forEach((field) => delete queryObj[field]);

  // 2. Advanced filtering (gte, lte, etc.)
  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
  let query = Product.find(JSON.parse(queryStr));

  // 3. Sorting
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt");
  }

  // 4. Field Limiting
  if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ");
    query = query.select(fields);
  } else {
    query = query.select("-__v");
  }

  // 5. Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const totalProducts = await Product.countDocuments(JSON.parse(queryStr));
  if (skip >= totalProducts) {
    throw new Error("This page does not exist");
  }

  query = query.skip(skip).limit(limit);

  // 6. Execute Query
  const products = await query;

  res.json({
    total: totalProducts,
    count: products.length,
    page,
    limit,
    data: products,
  });
});

const UpdateProducts = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updateProduct) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.json(updateProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const DeleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const DelProduct = await Product.findByIdAndDelete(id);

    if (!DelProduct) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.json(DelProduct);
  } catch (error) {
    throw new Error(error);
  }
});
const addToWishList = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { prodId } = req.body;

  try {
    const user = await User.findById(_id);

    const alreadyAdded = user.wishlist.find((id) => id.toString() === prodId);

    if (alreadyAdded) {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishlist: prodId },
        },
        { new: true }
      );

      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: prodId },
        },
        { new: true }
      );

      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});
const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, prodId, comment } = req.body;

  try {
    const product = await Product.findById(prodId);
    const alreadyRated = product.ratings.find(
      (userId) => userId.postedBy.toString() === _id.toString()
    );

    if (alreadyRated) {
      await Product.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: { "ratings.$.star": star, "ratings.$.comment": comment },
        }
      );
    } else {
      await Product.findByIdAndUpdate(prodId, {
        $push: { ratings: { star: star, comment: comment, postedBy: _id } },
      });
    }

    const getAllRatings = await Product.findById(prodId);
    const totalRatings = getAllRatings.ratings.length;
    const ratingSum = getAllRatings.ratings.reduce(
      (sum, item) => sum + item.star,
      0
    );
    const actualRating = Math.round(ratingSum / totalRatings);

    const finalProduct = await Product.findByIdAndUpdate(
      prodId,
      { totalRating: actualRating },
      { new: true }
    );

    res.json(finalProduct);
  } catch (error) {
    throw new Error(error);
  }
});
const uploadImages = asyncHandler(async (req, res) => {
  try {
    const uploader = (path) => cloudinaryUploadingImg(path, "images");
    const urls = [];
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    for (const file of files) {
      const { path } = file;

      // Cloudinary upload
      const newPath = await uploader(path);
      console.log(newPath, "Files");
      urls.push(newPath);

      // Delete file after upload
      fs.unlink(path, (err) => {
        if (err) {
          console.error(`Error deleting file ${path}:`, err);
        }
      });
    }

    // Return image URLs
    res.json(urls);
  } catch (error) {
    console.error("Error in uploading images:", error);
    res
      .status(500)
      .json({ message: "Failed to upload images", error: error.message });
  }
});

const deleteUploadImages = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const uploader = cloudinaryDeleteImg(id, "images");
    res.json({ message: "Deleted" });
  } catch (error) {
    throw new Error(error);
  }
});
export {
  CreateProduct,
  GetProduct,
  GetAllProducts,
  UpdateProducts,
  DeleteProduct,
  addToWishList,
  rating,
  uploadImages,
  deleteUploadImages,
};
