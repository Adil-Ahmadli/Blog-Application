import express from "express"
import { getAllBlogs, addBlog } from "../controllers/blog-controllers"

const router = express.Router()

router
.get("/", getAllBlogs)
.post("/add", addBlog)

export default router