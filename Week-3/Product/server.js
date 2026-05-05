import exp from "express";
import mongoose from "mongoose";
import productApp from "./APIs/productAPI.js";
const app = exp();
app.use(exp.json());
mongoose.connect("mongodb://127.0.0.1:27017/productDB")
.then(()=>console.log("DB connected"));

app.use("/api", productApp);

app.listen(4000, () => console.log("Server running on port 4000"));