import express from "express"
import { signup, login, logout, checkAuth } from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js"
import { getUsers } from "../controllers/post.controller.js"

const router = express.Router()

router.post("/signup", signup)

router.post("/login", login)

router.post("/logout", logout)

router.get("/getUsers", getUsers)

router.get("/check", protectRoute, checkAuth)

export default router