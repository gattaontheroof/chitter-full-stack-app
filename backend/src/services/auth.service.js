import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const register = async (name, username, email, password) => {

    try {
        // Check if a user with this email or username exists
        const existingUserWithEmail = await User.findOne({ email });
        const existingUserWithUsername = await User.findOne({ username });

        if(existingUserWithEmail || existingUserWithUsername){
            throw new Error("User already exists.");
        }

        // Create a new User with the correct details
        const user = new User({ 
            name, 
            username, 
            email, 
            password: bcrypt.hashSync(password, 8) 
        });
        await user.save();

    } catch (e) {
        throw e;
    }

};

const login = async (identifier, password) => {

    // Check if a user with this email exists
    let user = await User.findOne({ email: identifier });

    if(!user){
        // Check if a user with this username exists
        user = await User.findOne({ username: identifier });
    }

    if(!user){
        throw new Error("User not found.");
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if(!validPassword) {
        throw new Error("Login failed.");
    }

    // generate jwt access token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 86400 } )

    return {
        token: token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            username: user.username
        }
    };
};

export const authService = {
    register, login,
};