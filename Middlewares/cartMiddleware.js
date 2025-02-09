import jwt from "jsonwebtoken";
import cartModel from "../Model/cartModel.js";

// function to verify the user is login or not this will run for every route that start with "/cart"

export function cartMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ").at(1);
  jwt.verify(token, "shoppyGlobe", (err, payload) => {
    if (err) {
      return res.status(404).json({ message: "Login to access" });
    }
    next();
  });
}

// function to check if the product is already added in the cart or not using product id (POST)

export async function addProductMiddleware(req, res, next) {
  try {
    const { id } = req.body;
    const item = await cartModel.findOne({ _id: id });
    if (item) {
      return res.status(400).json({ message: "Product already exist in cart" });
    }
    next();
  } catch (err) {
    res.status(500).json({ message: "Internal server issue", error: err });
  }
}
