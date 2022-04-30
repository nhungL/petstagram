import bcrypt from "bcryptjs";
import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import User from "../models/userModel.js";
import { generateToken } from "../utils.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdUser = await User.insertMany(data.users);
    res.send({ createdUser });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          avatar: user.avatar,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password." });
  })
);

userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 7),
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      petname: req.body.petname,
      age: req.body.age,
      species: req.body.species,
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      firstname: createdUser.firstname,
      lastname: createdUser.lastname,
      avatar: createdUser.avatar,
      petname: createdUser.petname,
      age: createdUser.age,
      species: createdUser.species,
      token: generateToken(createdUser),
    });
  })
);

userRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...other } = user._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
  })
);

userRouter.put(
  "/intro",
  expressAsyncHandler(async (req, res) => {
    try {
      User.findByIdAndUpdate(
        req.body.id,
        {
          $set: { introduction: req.body.intro },
        },
        (err) => {
          console.log(err);
        }
      );
    } catch (err) {
      res.status(500).json(err);
    }
  })
);

export default userRouter;
