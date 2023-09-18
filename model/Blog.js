import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    descriprion: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
})

const Blog = mongoose.model("Blog", blogSchema)
export default Blog