import express from "express"
import mongoose from "mongoose"

const app = express()

mongoose
.connect(process.env.MONGO_URL)
.then(()=>app.listen(5000))
.then(()=>console.log("Everything is fine!"))
.catch((err)=>console.log(err))
