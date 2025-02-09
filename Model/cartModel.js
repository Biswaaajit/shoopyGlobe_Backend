import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    quantities: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const cartModel = mongoose.model("CartData", cartSchema);
export default cartModel;
