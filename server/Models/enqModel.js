import mongoose from "mongoose";

const enqSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Submitted", "Contacted", "In Progress"],
      default: "Submitted",
    },
  },
  {
    timestamps: true,
  }
);

const Enq = mongoose.model("Enq", enqSchema);

export default Enq;
