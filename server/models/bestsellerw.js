import { Schema,model } from "mongoose";

const productSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 1,
  },
  category: {
    type: String,
    required: true,
  },
});

const BestSellerW = model("BestSellerW", productSchema);
export default BestSellerW;
