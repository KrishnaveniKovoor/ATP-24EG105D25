import exp from "express";
import { Product } from "../models/productModel.js";

const productApp = exp.Router();

// a. Create product
productApp.post("/product", async (req, res) => {
  const newProduct = new Product(req.body);
  const product = await newProduct.save();
  res.send(product);
});

// b. Read all products
productApp.get("/products", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

// c. Read product by productId
productApp.get("/product/:productId", async (req, res) => {
  const pid = req.params.productId;
  const product = await Product.findOne({ productId: pid });
  res.send(product);
});

// d. Update product by productId
productApp.put("/product/:productId", async (req, res) => {
  const pid = req.params.productId;

  const updatedProduct = await Product.findOneAndUpdate(
    { productId: pid },
    req.body,
    { new: true }
  );

  res.send(updatedProduct);
});

// e. Delete product by productId
productApp.delete("/product/:productId", async (req, res) => {
  const pid = req.params.productId;

  await Product.findOneAndDelete({ productId: pid });

  res.send({ message: "Product deleted" });
});

export default productApp;