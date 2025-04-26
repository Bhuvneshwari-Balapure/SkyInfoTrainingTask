import multer from "multer";
import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { cloudinaryUploadingImg } from "../utils/cloudinary.js";

// ESM-compatible __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure upload directory exists
const uploadDir = path.resolve(__dirname, "../public/images/products");
if (!fs.existsSync(uploadDir)) {
  console.log(`Creating upload directory: ${uploadDir}`);
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Ensure temp directory exists for resized images
const tempDir = path.resolve(__dirname, "../public/images/temp");
if (!fs.existsSync(tempDir)) {
  console.log(`Creating temp directory: ${tempDir}`);
  fs.mkdirSync(tempDir, { recursive: true });
}

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(`Multer saving to: ${uploadDir}`);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = `${file.fieldname}-${uniqueSuffix}.jpeg`;
    console.log(`Multer filename: ${filename}`);
    cb(null, filename);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file format"), false);
  }
};

export const uploadPhoto = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fileSize: 2000000 }, // Limit file size to 2MB
});

export const productImgResize = async (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0) {
      console.log("No files uploaded, skipping resize");
      return next();
    }

    const uploadedImages = await Promise.all(
      req.files.map(async (file) => {
        try {
          console.log(`Processing file: ${file.path}`);

          // Verify file exists before processing
          if (!fs.existsSync(file.path)) {
            throw new Error(`File not found: ${file.path}`);
          }

          // Resize image
          const buffer = await sharp(file.path)
            .resize(300, 300)
            .toFormat("jpeg")
            .jpeg({ quality: 90 })
            .toBuffer();

          // Save resized image to temp directory
          const tempPath = path.join(tempDir, `resized-${file.filename}`);
          fs.writeFileSync(tempPath, buffer);
          console.log(`Resized image saved to: ${tempPath}`);

          // Upload to Cloudinary
          const uploadedImage = await cloudinaryUploadingImg(tempPath);
          console.log(`Uploaded to Cloudinary: ${uploadedImage.url}`);

          // Clean up files
          try {
            fs.unlinkSync(tempPath);
            fs.unlinkSync(file.path);
            console.log(`Deleted temp file: ${tempPath}`);
            console.log(`Deleted original file: ${file.path}`);
          } catch (unlinkError) {
            console.error(`Error deleting file: ${unlinkError.message}`);
          }

          return uploadedImage;
        } catch (error) {
          console.error(`Error processing file ${file.filename}:`, error);
          throw error;
        }
      })
    );

    req.body.images = uploadedImages;
    console.log("Uploaded images:", uploadedImages);
    next();
  } catch (error) {
    console.error("Error in productImgResize:", error);
    next(error);
  }
};

export const blogImgResize = async (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0) {
      console.log("No files uploaded for blog, skipping resize");
      return next();
    }

    // Ensure blog images directory exists
    const blogDir = path.resolve(__dirname, "../public/images/blogs");
    if (!fs.existsSync(blogDir)) {
      console.log(`Creating blog directory: ${blogDir}`);
      fs.mkdirSync(blogDir, { recursive: true });
    }

    await Promise.all(
      req.files.map(async (file) => {
        const outputPath = path.join(blogDir, file.filename);
        console.log(`Resizing blog image to: ${outputPath}`);

        // Verify file exists
        if (!fs.existsSync(file.path)) {
          throw new Error(`File not found: ${file.path}`);
        }

        await sharp(file.path)
          .resize(300, 300)
          .toFormat("jpeg")
          .jpeg({ quality: 90 })
          .toFile(outputPath);

        // Delete original file
        try {
          fs.unlinkSync(file.path);
          console.log(`Deleted original blog file: ${file.path}`);
        } catch (unlinkError) {
          console.error(`Error deleting blog file: ${unlinkError.message}`);
        }
      })
    );
    next();
  } catch (error) {
    console.error("Error in blogImgResize:", error);
    next(error);
  }
};
