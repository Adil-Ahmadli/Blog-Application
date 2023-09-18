import express from "express"
import { getAllBlogs, addBlog, getBlogById, deleteBlogById, 
         updateBlogById } from "../controllers/blog-controllers"

const router = express.Router()

router
.get("/", getAllBlogs)
.post("/add", addBlog)
.get("/:id", getBlogById)
.delete("/:id", deleteBlogById)
.put("/:id", updateBlogById)

export default router