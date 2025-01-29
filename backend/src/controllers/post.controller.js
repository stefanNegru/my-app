import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import Comment from "../models/comment.model.js"

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({})
        res.status(200).json(posts)
    } catch (error) {
        console.log("Error in getPosts:", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}

export const createPost = async (req, res) => {
    try {
        const { id: userId } = req.params;
        const { title, content } = req.body
        //const userId = req.user._id

        const newPost = new Post({
            userId,
            title,
            content,
        })
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        console.log("Error in createPost", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}

export const commentPost = async (req, res) => {
    try {
        const { id: postId } = req.params
        const { userId, content } = req.body

        const newComment = new Comment({
            userId,
            postId,
            content,
        })
        await newComment.save()
        res.status(201).json(newComment)
    } catch (error) {
        console.log("Error in createPost", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}

export const getComments = async (req, res) => {
    try {
        //const { id: postId } = req.body
        //const { id } = req.params;
        //const { postId } = req.body;
        const { id: postId } = req.query;
        console.log("getComments--req.body", req.body)
        console.log("getComments--req.query", req.query)
        console.log("postId", postId)
        //const comments = await Comment.find({ postId })
        const comments = await Comment.find({ postId })
        res.status(200).json(comments)
    } catch (error) {
        console.log("Error in getComments", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}

export const getUsers = async (req, res) => {
    try {
        const allUsers = await User.find({}).select("-password")
        res.status(200).json(allUsers)
    } catch (error) {
        console.log("Error in getUsers:", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}