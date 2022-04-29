import express from "express";
import expressAsyncHandler from "express-async-handler";
import Post from "../models/postModel.js";
import User from "../models/userModel.js";
import { Posts } from "../postData.js";

const postRouter = express.Router();

// postRouter.get("/seed",
//     expressAsyncHandler(async (req, res) => {
//         const createdPosts = await Post.insertMany(Posts);
//         res.send({createdPosts});
//     })
// );

//create a post
postRouter.post("/", async (req, res) => {
    // console.log(req.body)
    // console.log(req)
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//update a post
postRouter.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === res.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).send({ message: "updated your post" });
        } else {
            res.status(403).send({ message: "only update your post" });
        }
    } catch (err) {
        res.status(500).send({ message: "error" });
    }
});

//delete a post
postRouter.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === res.body.userId) {
            await post.deleteOne();
            res.status(200).send({ message: "deleted your post" });
        } else {
            res.status(403).send({ message: "only delete your post" });
        }
    } catch (err) {
        res.status(500).send({ message: "error" });
    }
});

//like-dislike a post
postRouter.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.like.includes(req.body.userId)) {
            await post.updateOne({ $push: { like: req.body.userId } });
            res.status(200).send({ message: "liked your post" });
        } else {
            await post.updateOne({ $pull: { like: req.body.userId } });
            res.status(200).send({ message: "disliked your post" });
        }
    } catch (err) {
        res.status(500).send({ message: "error" });
    }
});

//get a post
postRouter.get("/:id",
    expressAsyncHandler(async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            if (post) {
                res.status(200).send(post);
            } else {
                res.status(404).send({ message: 'Post Not Found.' });
            }
        } catch (err) {
            res.status(500).send({ message: "error" });
        }
    })
);

//get timeline posts
postRouter.get("/",
    expressAsyncHandler(async (req, res) => {
        try {
            const allPosts = await Post.find({});
            if (allPosts){
                res.status(200).send(allPosts);
            }else{
                res.status(404).send({ message: 'No Post Not Found.' });
            }
        } catch (err) {
            res.status(500).send({ message: "error" });
        }
    })
);

//get user's all posts: get by userId
postRouter.get("/profile/:id", async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.id);
        const userPosts = await Post.find({ author: currentUser._id });
        // console.log(userPosts);
        res.status(200).send(userPosts);
        return userPosts;
    } catch (err) {
        res.status(500).send({ message: "error" });
    }
});

export default postRouter;