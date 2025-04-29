// import mongoose from "mongoose";

// const validateMongodbId = (id) => {
//   const isValid = mongoose.Types.ObjectId.isValid(id);
//   if (!isValid) {
//     throw new Error("MongoDB Id is not Valid OR not found");
//   }
// };

// export default validateMongodbId;

import mongoose from "mongoose";

// Function to validate MongoDB ID format
const validateMongodbId = (id) => {
  // Check if the ID is a valid MongoDB ObjectId format
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) {
    throw new Error("Invalid MongoDB ObjectId format.");
  }
};

export default validateMongodbId;
