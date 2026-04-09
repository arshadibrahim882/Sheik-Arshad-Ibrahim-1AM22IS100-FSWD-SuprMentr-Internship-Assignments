const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//Get all posts.
router.get("/", async (req, res) => {
    const posts = await Post.find().populate("author");
    res.json(posts);
});

//Create post.
router.post("/", async (req, res) => {
    const post = await Post.create(req.body);
    res.json(post);
});

module.exports = router;