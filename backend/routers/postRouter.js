import express from "express";
import expressAsyncHandler from "express-async-handler";
import Post from "../models/postModel.js";
import User from "../models/userModel.js";


const postRouter = express.Router();
//create a post
postRouter.post("/", async (req, res) => {
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

//update a post
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
postRouter.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).send(post);
    } catch (err) {
        res.status(500).send({ message: "error" });
    }
});

//get timeline posts
postRouter.get("/timeline", async (req, res) => {
    try {
        // console.log(currentUser);
        const userPosts = await Post.find({ });
        res.status(200).send(userPosts);

        res.send(userPosts);
    } catch (err) {
        res.status(500).send({ message: "error" });
    }
    // Post.find({}, function (err, allPosts) {
    //     if (err) {
    //         console.log("not ok");
    //     }
    //     else {
    //         res.render({ posts: allPosts, noMatch: noMatch });
    //     }
    // })
});

//get user's all posts: get by userId
postRouter.get("/profile/:id", async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.id);
        // console.log(currentUser);
        const userPosts = await Post.find({ author: currentUser._id });
        res.status(200).send(userPosts);
    } catch (err) {
        res.status(500).send({ message: "error" });
    }
});

export default postRouter;
