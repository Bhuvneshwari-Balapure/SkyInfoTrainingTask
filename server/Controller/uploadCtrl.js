import {
  cloudinaryDeleteImg,
  cloudinaryUploadingImg,
} from "../utils/cloudinary.js";
import fs from "fs";

const uploadImages = asyncHandler(async (req, res) => {
  try {
    const images = req.body.images || [];

    if (!images || images.length === 0) {
      return res.status(400).json({ message: "No images uploaded" });
    }

    const formattedImages = images.map((image) => ({
      url: image.url,
      public_id: image.public_id,
      asset_id: image.asset_id,
    }));

    res.json({
      message: "Images uploaded successfully",
      images: formattedImages,
    });
  } catch (error) {
    console.error("Error in uploadImages:", error);
    res.status(500).json({
      message: "Failed to upload images",
      error: error.message,
    });
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

export { uploadImages, deleteUploadImages };
