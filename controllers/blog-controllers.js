import Blog from "../model/Blog"

export async function getAllBlogs(req, res, next) {
    let blogs
    try {
        blogs = await Blog.find()
    } catch (error) {
        return res.status(404).json({message: error})
    }

    if (!blogs) {
        return res.status(404).json({message: "No blogs found!"})
    }

    return res.status(200).json({blogs})
}

export async function addBlog(req, res, next) {
    const { title, description, image, user } = req.body
    const newBlog = new Blog({
        title,
        description,
        image, 
        user
    })

    try {
        await newBlog.save()
    } catch (error) {
        return res.status(404).json({message: error})
    }

    return res.status(200).json({newBlog})
}

export async function getBlogById(req, res,next) {
    const { id } = req.params
    let blog
    try {
        blog = await Blog.findById(id)
    } catch (error) {
        return res.status(404).json({error})
    }

    if (!blog) {
        return res.status(404).json({messsage: "Blog does not exist!"})
    }

    return res.status(200).json({blog})
}

export async function deleteBlogById(req, res, next){
    const { id } = req.params
    let blog
    try {
        blog = await Blog.findByIdAndDelete(id)
    } catch (error) {
        return res.status(404).json({error})
    }

    if (!blog) {
        return res.status(400).json({message: "Blog does not exist!"})
    }

    return res.status(200).json({blog})
}

export async function updateBlogById(req, res, next) {
    const { title, description, image } = req.body
    const { id } = req.params
    const update = {
        title: title,
        description: description,
        image: image
    }
    let blog

    try {
        blog = await Blog.findByIdAndUpdate(id, update, {returnDocument: 'after'})
    } catch (error) {
        return res.status(404).json({error})
    }

    if (!blog) {
        return res.status(400).json({message: "Blog does not exist"})
    }

    return res.status(200).json({blog})
}