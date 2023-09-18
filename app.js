import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import 'dotenv/config'

import userRouter from "./routes/user-routes.js"
import blogRouter from "./routes/blog-routes.js"

const app = express()

app.use(bodyParser.json())

app.use("/api/user", userRouter)
app.use("/api/blog", blogRouter)

mongoose
.connect(process.env.MONGO_URL)
.then(()=>app.listen(5000))
.then(()=>console.log("Everything is fine!"))
.catch((err)=>console.log(err))
