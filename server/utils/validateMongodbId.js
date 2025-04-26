import mongoose from "mongoose";

const validateMongodbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) {
    throw new Error("MongoDB Id is not Valid OR not found");
  }
};

export default validateMongodbId;
