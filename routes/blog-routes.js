import express from "express"
import { getAllBlogs, addBlog, getOneBlog } from "../controllers/blog-controllers"

const router = express.Router()

router
.get("/", getAllBlogs)
.post("/add", addBlog)
.get("/:id", getOneBlog)

export default router