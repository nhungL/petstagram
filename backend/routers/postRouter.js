import bcrypt from "bcryptjs";
import express from "express";
import expressAsyncHandler from "express-async-handler";
import postData from "../postData.js";
import Post from "../models/postModel.js";
import { generateToken } from "../utils.js";
import User from "../models/userModel.js";

const postRouter = express.Router();
//create a post
postRouter.post("/", async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).send({ message: "succeed" });
    } catch (err) {
        res.status(500).send({ message: "error" });
    }
});

//update a post
postRouter.put("/:id", async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === res.body.userId) {
            await post.updateOne({$set:req.body});
            res.status(200).send({ message: "updated your post" });
        } else {
            res.status(403).send({ message: "only update your post" });
        }
    } catch (err) {
        res.status(500).send({ message: "error" });
    }
});

//update a post
postRouter.delete("/:id", async(req, res) => {
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
postRouter.put("/:id/like", async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.like.includes(req.body.userId)) {
            await post.updateOne({$push: {like: req.body.userId}});
            res.status(200).send({ message: "liked your post" });
        } else {
            await post.updateOne({$pull: {like: req.body.userId}});
            res.status(200).send({ message: "disliked your post" });
        }
    } catch (err) {
        res.status(500).send({ message: "error" });
    }
});

//get a post
postRouter.get("/:id", async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).send({ message: "succeed" });
    } catch (err) {
        res.status(500).send({ message: "error" });
    }
});

//get timeline posts
postRouter.get("timeline/all", async(req, res) => {
    let postArray = [];
    try {
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        // const friendPosts = await Promise.all(); 

        res.send(userPosts);
    } catch (err) {
        res.status(500).send({ message: "error" });
    }
});

export default postRouter;
