import userModel from "../Model/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// function to add a user to our dataBase

export async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).send(newUser);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Issue", error: err.message });
  }
}

// function to login so that we can get token from jwt

export async function loginUser(req, res) {
  const { password: hashdPassword, name } = req.userInfo;
  const { password } = req.body;

  const passwordCheck = await bcrypt.compare(password, hashdPassword);

  if (!passwordCheck) {
    return res.status(400).json({ message: "Wrong Password" });
  }

  const token = jwt.sign({ name }, "shoppyGlobe", { expiresIn: "10m" });
  res.json({ token });
}
