import express from "express"
import mongoose from "mongoose"

const app = express()

mongoose
.connect("mongodb+srv://admin:admin@mern.mw3gtmd.mongodb.net/?retryWrites=true&w=majority")
.then(()=>app.listen(5000))
.then(()=>console.log("Everything is fine!"))
.catch((err)=>console.log(err))
