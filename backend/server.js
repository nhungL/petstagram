import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/petstagram");

app.get("/", (req, res) => {
  res.send("Server is ready.");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});