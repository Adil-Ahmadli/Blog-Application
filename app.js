import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/user-routes.js"
import bodyParser from "body-parser"

import 'dotenv/config'

const app = express()

app.use(bodyParser.json())
app.use("/api/user", userRouter)

mongoose
.connect(process.env.MONGO_URL)
.then(()=>app.listen(5000))
.then(()=>console.log("Everything is fine!"))
.catch((err)=>console.log(err))
