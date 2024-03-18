import User from "../models/user.model.js";

const register = async (email, password) => {

    try {
        // Check if a user with this email exists
        const existingUser = await User.findOne({ email });
        if(existingUser){
            throw new Error("User already exists.");
        }

        // Create a new User with the correct details
        const user = new User({ email, password });
        await user.save();

    } catch (e) {
        throw e;
    }

};

const login = async (email, password) => {
    // Check if a user with this email exists
    const user = await User.findOne({ email });

    if(!user){
        throw new Error("User not found.");
    }

    if(password != user.password) {
        throw new Error("Login failed.");
    }

    return user;
};

export const authService = {
    register, login,
};