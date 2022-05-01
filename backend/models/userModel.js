import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    avatar: { type: String, required: true },
    petname: { type: String, required: true },
    age: { type: String, required: false },
    species: { type: String, required: false },
    post: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: false,
      },
    ],
    introduction: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
