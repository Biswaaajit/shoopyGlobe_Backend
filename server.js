import express from "express";
import mongoose from "mongoose";
import productRoute from "./Routes/productRoutes.js";
import cartRoutes from "./Routes/cartRoutes.js";
import userRoutes from "./Routes/userRoutes.js";

const app = express();
const cartRouter = express.Router();

app.use(express.json());
app.use("/cart", cartRouter);

mongoose.connect("mongodb://localhost:27017/shoppyGlobe");
const dataBase = mongoose.connection;

app.listen(5100, () => {
  console.log("Server is running on 5100 port number");
});

dataBase.on("open", () => {
  console.log("connection success");
});

dataBase.on("error", () => {
  console.log("error in connection");
});

userRoutes(app);
productRoute(app);
cartRoutes(cartRouter);
