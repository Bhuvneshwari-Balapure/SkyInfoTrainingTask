import multer from "multer";
import sharp from "sharp";
import path from "path";
import fs from "fs";

const paths = "../public/images/products/";

if (fs.existsSync(paths)) {
  console.log("File exists");
  // Proceed with unlink operation
} else {
  console.log("File does not exist");
}

import { fileURLToPath } from "url";
import { cloudinaryUploadingImg } from "../utils/cloudinary.js";

// ESM-compatible __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/products"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};

export const uploadPhoto = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fieldSize: 2000000 },
});

// export const productImgResize = async (req, res, next) => {
//   if (!req.files) return next();
//   await Promise.all(
//     req.files.map(async (file) => {
//       await sharp(file.path)
//         .resize(300, 300)
//         .toFormat("jpeg")
//         .jpeg({ quality: 90 })
//         .toFile(`public/images/products/${file.filename}`);
//       fs.unlinkSync(`public/images/products/${file.filename}`);
//     })
//   );
//   next();
// };

export const productImgResize = async (req, res, next) => {
  try {
    if (!req.files) return next();

    const uploaderPromises = req.files.map(async (file) => {
      // Resize image
      const buffer = await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toBuffer();

      // Save buffer temporarily
      const tempPath = `temp_${file.filename}`;
      fs.writeFileSync(tempPath, buffer);

      // Upload to Cloudinary
      const uploadedImage = await cloudinaryUploadingImg(tempPath);

      // Delete temporary file
      fs.unlinkSync(tempPath);
      fs.unlinkSync(file.path); // Also delete multer uploaded file

      return uploadedImage;
    });

    const uploadedImages = await Promise.all(uploaderPromises);

    req.body.images = uploadedImages; // Attach uploaded images to req.body
    next();
  } catch (error) {
    next(error);
  }
};

export const blogImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/blogs/${file.filename}`);
      fs.unlinkSync(`public/images/products/${file.filename}`);
    })
  );
  next();
};
