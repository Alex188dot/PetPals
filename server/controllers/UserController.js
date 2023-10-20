import UserModel from "../models/UserModel.js";

// Get a user from DB

export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);
    if (user) {
      // take away the pwd
      const { password, ...otherDetails } = user._doc;
      // just send otherDetails
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("User does not exist");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
