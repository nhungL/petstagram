import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        // id: { type: String, required: true, unique: true },
        image: { type: String, required: false },
        //imageId: { type: String, required: false, unique: true },
        description: { type: String, required: true },
        like: { type: Array, default: [] },
        author: {
            // id: {
            //     type: mongoose.Schema.Types.ObjectId,
            //     ref: "User"
            // },
            // username: String
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