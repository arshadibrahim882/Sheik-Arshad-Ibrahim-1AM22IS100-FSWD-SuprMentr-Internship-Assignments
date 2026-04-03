const express = require("express")
const router = express.Router()

const User = require("../models/User")
const Post = require("../models/Post")
const Comment = require("../models/Comment")

//Test Route.
router.get("/", (req, res) => {
    res.send("Blog API Running...")
})

/* ---------------- USERS ---------------- */

//Create User.
router.post("/users", async (req, res) => {
    const user = await User.create(req.body)
    res.status(201).json(user)
})

//Get Users.
router.get("/users", async (req, res) => {
    const users = await User.find()
    res.json(users)
})

/* ---------------- POSTS ---------------- */

//Create Post.
router.post("/posts", async (req, res) => {
    const post = await Post.create(req.body)
    res.status(201).json(post)
})

//Get Posts.
router.get("/posts", async (req, res) => {
    const posts = await Post.find().populate("author")
    res.json(posts)
})

/* ---------------- COMMENTS ---------------- */

//Create Comment.
router.post("/comments", async (req, res) => {
    const comment = await Comment.create(req.body)
    res.status(201).json(comment)
})

//Get Comments.
router.get("/comments", async (req, res) => {
    const comments = await Comment.find()
        .populate("user")
        .populate("post")
    res.json(comments)
})

module.exports = router