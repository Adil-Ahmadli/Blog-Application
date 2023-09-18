import express from "express"
import { getAllUsers, signup, login } from "../controllers/user-controllers.js"

const router = express.Router()

router
.get("/", getAllUsers)
.post("/signup", signup)
.post("/login", login)

export default router