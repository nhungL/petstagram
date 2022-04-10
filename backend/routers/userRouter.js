import express from "express";
import data from "../data.js";
import User from "../models/userModel.js";

const userRouter = express.Router();

userRouter.get("/seed", async (req, res) => {
  const createdUser = await User.insertMany(data.users);
  res.send({ createdUser });
});

export default userRouter;
