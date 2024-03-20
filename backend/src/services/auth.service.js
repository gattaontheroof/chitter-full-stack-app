import User from "../models/user.model.js";

const register = async (name, username, email, password) => {

    try {
        // Check if a user with this email or username exists
        const existingUserWithEmail = await User.findOne({ email });
        const existingUserWithUsername = await User.findOne({ username });

        if(existingUserWithEmail || existingUserWithUsername){
            throw new Error("User already exists.");
        }

        // Create a new User with the correct details
        const user = new User({ name, username, email, password });
        await user.save();

    } catch (e) {
        throw e;
    }

};

const login = async (identifier, password) => {

    // Check if a user with this email exists
    let user = await User.findOne({ email: identifier });

    console.log(user);

    if(!user){
        // Check if a user with this username exists
        user = await User.findOne({ username: identifier });

        console.log(user);
    }

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