<<<<<<< HEAD
import { Schema, model } from "mongoose";

const productSchema = new Schema({
  productId: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 10000,
    max: 50000
  },
  brand: {
    type: String,
    required: true
  }
});

=======
import { Schema, model } from "mongoose";

const productSchema = new Schema({
  productId: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 10000,
    max: 50000
  },
  brand: {
    type: String,
    required: true
  }
});

>>>>>>> 555dabf37545356cc9042d7c760c20490f4df6ff
export const Product = model("product", productSchema);