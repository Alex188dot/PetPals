import UserModel from "../models/UserModel.js";

export const registerUser = async (req, res) => {
  const { username, password, firstName, lastName } = req.body;

  const newUser = new UserModel({ username, password, firstName, lastName });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
