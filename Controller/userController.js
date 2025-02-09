import userModel from "../Model/userModel.js";
import jwt from "jsonwebtoken";

// function to add a user to our dataBase

export async function registerUser(req, res) {
  try {
    const { name, email } = req.body;
    const newUser = await userModel.create({ name, email });
    res.status(201).send(newUser);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Issue", error: err.message });
  }
}

// function to login so that we can get token from jwt

export async function loginUser(req, res) {
  const { name } = req.userInfo;
  const token = jwt.sign({ name }, "shoppyGlobe", { expiresIn: "10m" });
  res.json({ token });
}
