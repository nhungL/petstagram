import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import postRouter from "./routers/postRouter.js";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import data from "./data.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  process.env.MONGODB_URL ||
    "mongodb+srv://admin:1234@petstagramdb.eiljr.mongodb.net/PetstagramDB?retryWrites=true"
);

// //Misc
const __dirname = path.resolve();
app.use(
  "/images",
  express.static(path.join(__dirname, "public/images/testImage"))
);

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/images/testImage");
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.body.name);
//   },
// });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Pets_Post",
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("imageUpload"), function (req, res) {
  try {
    // console.log("in upload backend");
    // console.log(req.body, req.file);
    const filePath = req.file.path;
    return res.status(200).json(filePath);
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/posts", postRouter);

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Server is ready.");
});

//error catcher
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
