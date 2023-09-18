import express from "express"
import { getAllBlogs } from "../controllers/blog-controllers"

const router = express.Router()

router
.get("/", getAllBlogs)

export default router