import User from "../model/User.js";

export async function getAllUsers(req,res,next) {
    let users
    try {
        users = await User.find()
    } catch (error) {
        console.log(error);
    }
    if (!users) {
        return res.status(404).json({message: "No users found"})
    }
    return res.status(200).json({users})
}

export async function signup(req, res, next) {
    const { name, email, password} = req.body
    let existingUser

    try {
        existingUser = await User.findOne({email})
    } catch (error) {
        console.log(error);
    }

    if (existingUser) {
        return res.status(400).json({message: "User already exists."})
    }

    const user = new User({
        name,
        email,
        password
    })

    try {
        await user.save()
    } catch (error) {
        console.log(error);
    }

    return res.status(201).json({user})
}