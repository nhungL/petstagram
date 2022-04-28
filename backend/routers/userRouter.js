import bcrypt from "bcryptjs";
import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import User from "../models/userModel.js";
import { generateToken } from "../utils.js";
import multer from "multer";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { v4 as uuidv4 } from "uuid";
let path = require("path");

const userRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

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
  upload.single("photo"),
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 7),
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      petname: req.body.petname,
      age: req.body.age,
      species: req.body.species,
      avatar: req.body.filename,
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

export default userRouter;
