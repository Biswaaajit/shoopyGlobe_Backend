import userModel from "../Model/userModel.js";

// function to check if user is already in database or not

export async function registerMiddleware(req, res, next) {
  try {
    const { email } = req.body;
    const presentEmail = await userModel.findOne({ email });
    if (presentEmail) {
      return res.status(409).json({ message: "Email is already registered" });
    }
    next();
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Issue", error: err.message });
  }
}

// function to check if user is present in database or not

export async function loginMiddleware(req, res, next) {
  try {
    const { email } = req.body;
    const emailCheck = await userModel.findOne({ email });
    if (!emailCheck) {
      return res.status(404).json({ message: "User does not exist !!!" });
    }
    req.userInfo = emailCheck;
    next();
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Issue", error: err.message });
  }
}
