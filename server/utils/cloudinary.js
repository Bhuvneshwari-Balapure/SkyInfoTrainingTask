// import cloudinary from "cloudinary";
// import config from "../confilg/env.config.js";

// cloudinary.config({
//   cloud_name: config.CLOUD_NAME,
//   api_key: config.API_KEY,
//   api_secret: config.SECRET_KEY,
// });

// export const cloudinaryUploadingImg = async (fileToUploads) => {
//   return new Promise((resolve) => {
//     cloudinary.uploader.upload(fileToUploads, (result) => {
//       resolve(
//         {
//           url: result.secure_url,
//           asset_id: result.asset_id,
//           public_id: result.public_id,
//         },
//         {
//           resource_type: "auto",
//         }
//       );
//     });
//   });
// };

// export const cloudinaryDeleteImg = async (fileTodDelete) => {
//   return new Promise((resolve) => {
//     cloudinary.uploader.destroy(fileTodDelete, (result) => {
//       resolve(
//         {
//           url: result.secure_url,
//           asset_id: result.asset_id,
//           public_id: result.public_id,
//         },
//         {
//           resource_type: "auto",
//         }
//       );
//     });
//   });
// };
import { v2 as cloudinary } from "cloudinary";
import config from "../confilg/env.config.js"; // Assuming your config file is correct

cloudinary.config({
  cloud_name: config.CLOUD_NAME,
  api_key: config.API_KEY,
  api_secret: config.SECRET_KEY,
});

export const cloudinaryUploadingImg = async (fileToUploads) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      fileToUploads,
      { resource_type: "auto" }, // ✅ Correct place for options
      (error, result) => {
        if (error) reject(error);
        else {
          resolve({
            url: result.secure_url,
            asset_id: result.asset_id,
            public_id: result.public_id,
          });
        }
      }
    );
  });
};

export const cloudinaryDeleteImg = async (fileToDelete) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(fileToDelete, (error, result) => {
      if (error) reject(error);
      else {
        resolve(result);
      }
    });
  });
};
