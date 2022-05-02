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
          followers: user.followers,
          following: user.following,
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
      avatar: req.body.avatar,
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
      avatar: createdUser.avatar,
      species: createdUser.species,
      followers: createdUser.followers,
      following: createdUser.following,
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

//find users using email
userRouter.get(
  "/searchUser/:email",
  expressAsyncHandler(async (req, res) => {
    try {
      const users = await User.find({ email: req.params.email });
      console.log(users);
      res.send(users);
    } catch (error) {
      console.error(error);
    }
  })
);

//Add following
userRouter.put(
  "/following/",
  expressAsyncHandler(async (req, res) => {
    try {
      console.log("hi");
      const user = await User.findByIdAndUpdate(req.body.id, {
        $push: { following: req.body.followed },
      });
      console.log("hi2");
      res.status(200).send({ message: "update following" });
    } catch (error) {
      console.error(error);
    }
  })
);
//Add follower
userRouter.put(
  "/followers/",
  expressAsyncHandler(async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.body.id, {
        $push: { followers: req.body.follow },
      });
    } catch (error) {
      console.error(error);
    }
  })
);

//delete follower
userRouter.put(
  "/unfollowers/",
  expressAsyncHandler(async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.body.id, {
        $pull: { followers: req.body.follow },
      });
      console.log("hi3");
    } catch (error) {
      console.error(error);
    }
  })
);

//delete following
userRouter.put(
  "/unfollowing/",
  expressAsyncHandler(async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.body.id, {
        $pull: { following: req.body.followed },
      });
      console.log("hi4");
    } catch (error) {
      console.error(error);
    }
  })
);

userRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      await user.updateOne({ $set: req.body });
      res.status(200).send({ message: "updated your info" });
    } catch (err) {
      res.status(500).json(err);
    }
  })
);

export default userRouter;
