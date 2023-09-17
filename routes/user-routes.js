import express from "express"
import { getAllUsers, signup } from "../controllers/user-controllers.js"

const router = express.Router()

router
.get("/", getAllUsers)
.post("/signup", signup)

export default router