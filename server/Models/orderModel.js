import mongoose from "mongoose";
var orderSchema = new mongoose.Schema(
  {
    Products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        count: Number,
        color: String,
      },
    ],
    paymentIntent: {},
    orderStatus: {
      type: String,
      default: "Not Processed",
      enum: [
        "Not Processed",
        "Cash on Delivery",
        "Cash On Delivery", // <-- Add this line if you want both spellings
        "Processing",
        "Dispatched",
        "Cancelled",
        "Delivered",
      ],
    },
    orderby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
const Order = mongoose.model("Order", orderSchema);

export default Order;
