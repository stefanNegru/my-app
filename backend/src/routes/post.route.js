import express from "express"
import { getPosts, createPost, getUsers, commentPost, getComments } from "../controllers/post.controller.js"


const router = express.Router()

router.get("/", getPosts)
router.post("/create/:id", createPost)
router.post("/comm/:id", commentPost)
router.get("/comm", getComments)
router.get("/users", getUsers)

export default router