import mongoose from "mongoose";

var cartSchema = new mongoose.Schema(
  {
    Products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        count: Number,
        color: String,
        price: Number,
      },
    ],
    cartTotal: {},
    totalAfterDiscount: Number,
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
const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
