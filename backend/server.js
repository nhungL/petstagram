import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  process.env.MONGODB_URL ||
    "mongodb+srv://admin:1234@petstagramdb.eiljr.mongodb.net/PetstagramDB?retryWrites=true"
);

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
