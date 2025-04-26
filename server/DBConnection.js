import mongoose from "mongoose";

const DBConnection = () => {
  try {
    mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("DB connected");
    });
  } catch (error) {
    console.error(" DB Connection Error:", error);
  }
};

export default DBConnection;
