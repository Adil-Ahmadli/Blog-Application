import User from "../model/User.js";

export async function getAllUsers(req,res,next) {
    let users
    try {
        users = await User.find()
    } catch (error) {
        console.log(error);
    }
    if (!users) {
        res.status(404).json({message: "No users found"})
    }
    res.status(200).json({users})
}