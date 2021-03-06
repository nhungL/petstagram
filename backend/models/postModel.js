import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        image: { type: String, required: false },
        imageId: {type: String, required: false},
        description: { type: String, required: true },
        like: { type: Array, default: [] },
        author: {
            // id: {
            //     type: mongoose.Schema.Types.ObjectId,
            //     ref: "User"
            // },
            // username: String,
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model("Post", postSchema);
export default Post;