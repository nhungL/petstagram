import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true },
        image: { type: String, required: false },
        imageId: { type: String, required: false, unique: true },
        description: { type: String, required: true },
        like: { type: Number, default: 0 },
        author: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            username: String
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Post", postSchema);