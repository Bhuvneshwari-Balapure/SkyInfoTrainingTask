import asyncHandler from "express-async-handler";
import Blog from "../Models/blogModel.js";
import User from "../Models/UserModel.js";
import validateMongoDbID from "../utils/validateMongodbId.js";
import { cloudinaryUploadingImg } from "../utils/cloudinary.js";

export const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json({
      newBlog,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const newBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
    res.json({
      newBlog,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    // const getBlog = await Blog.findById(id, req.body, { new: true });
    const getBlog = await Blog.findById(id)
      .populate("likes")
      .populate("dislikes");

    const blog = await Blog.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: 1 },
      },
      { new: true }
    );

    res.json(getBlog);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllBlog = asyncHandler(async (req, res) => {
  try {
    const getAllBlog = await Blog.find();

    res.json({ getAllBlog });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    await Blog.findByIdAndDelete(id);
    res.json({ message: "delete successfully" });
  } catch (error) {
    throw new Error(error);
  }
});

export const likeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  validateMongoDbID(blogId);

  try {
    const blog = await Blog.findById(blogId);
    const loginUserId = req?.user?._id.toString();

    const isLiked = blog?.isLiked;
    const alreadyDisliked = blog?.dislikes?.find(
      (userId) => userId?.toString() === loginUserId?.toString()
    );

    if (alreadyDisliked) {
      await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { dislikes: loginUserId },
          isDisLiked: false,
        },
        { new: true }
      );
    }

    if (isLiked) {
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { likes: loginUserId },
          isLiked: false,
        },
        { new: true }
      );
      res.json(updatedBlog);
    } else {
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $push: { likes: loginUserId },
          isLiked: true,
        },
        { new: true }
      );
      res.json(updatedBlog);
    }
  } catch (error) {
    throw new Error(error);
  }
});

export const disLikeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  validateMongoDbID(blogId);

  try {
    const blog = await Blog.findById(blogId);
    const loginUserId = req?.user?._id.toString();

    const isDisLiked = blog?.isDisLiked;
    const alreadyLiked = blog?.likes?.find(
      (userId) => userId?.toString() === loginUserId
    );

    if (alreadyLiked) {
      // Remove like first if user had liked it
      await Blog.findByIdAndUpdate(
        blogId,
        { $pull: { likes: loginUserId }, isLiked: false },
        { new: true }
      );
    }

    if (isDisLiked) {
      // If already disliked, remove dislike
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        { $pull: { dislikes: loginUserId }, isDisLiked: true },
        { new: true }
      );
      res.json(updatedBlog);
    } else {
      // Otherwise, add dislike
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        { $push: { dislikes: loginUserId }, isDisLiked: true },
        { new: true }
      );
      res.json(updatedBlog);
    }
  } catch (error) {
    throw new Error(error);
  }
});

// export const uploadImages = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   validateMongoDbID(id);
//   try {
//     const uploader = (path) => cloudinaryUploadingImg(path, "images");
//     const urls = [];
//     const files = req.files;

//     for (const file of files) {
//       const { path } = file;
//       const newPath = await uploader(path);
//       urls.push(newPath);
//       fs.unlinkSync(path);
//     }
//     const findBlog = await Blog.findByIdAndUpdate(
//       id,
//       {
//         images: urls.map((file) => {
//           return file;
//         }),
//       },
//       { new: true }
//     );

//     res.json(findBlog);
//   } catch (error) {
//     throw new Error(error);
//   }
// });
