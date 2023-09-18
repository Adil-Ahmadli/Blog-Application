import Blog from "../model/Blog"

export async function getAllBlogs(req, res, next) {
    let blogs
    try {
        blogs = await Blog.find()
    } catch (error) {
        console.log(err);
    }

    if (!blogs) {
        return res.status(404).json({message: "No blogs found!"})
    }

    return res.status(200).json({blogs})
}