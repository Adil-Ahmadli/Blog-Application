import User from "../model/User.js";
import bcrypt from "bcrypt"

const saltRounds = 10;


export async function getAllUsers(req,res,next) {
    let users
    try {
        users = await User.find()
    } catch (error) {
        return res.status(404).json({message: error})
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
        return res.status(404).json({message: error})
    }

    if (existingUser) {
        return res.status(400).json({message: "User already exists."})
    }

    const hashedPwd = bcrypt.hashSync(password, saltRounds)

    const user = new User({
        name,
        email,
        password: hashedPwd
    })

    try {
        await user.save()
    } catch (error) {
        return res.status(404).json({message: error})
    }

    return res.status(201).json({user})
}

export async function login(req, res, next) {
    const { email, password} = req.body
    let existingUser

    try {
        existingUser = await User.findOne({email})
    } catch (error) {
        return res.status(404).json({message: error})
    }

    if (!existingUser) {
        return res.status(400).json({message: "User does not exist!"})
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)

    if (!isPasswordCorrect) {
        return res.status(400).json({message: "Incorrect Password!"})
    }

    return res.status(200).json({message: "Successfully Logged In!"})

}