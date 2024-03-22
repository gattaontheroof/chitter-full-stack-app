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

    if(!user){
        // Check if a user with this username exists
        user = await User.findOne({ username: identifier });
    }

    if(!user){
        throw new Error("User not found.");
    }

    if(password != user.password) {
        throw new Error("Login failed.");
    }

    // placeholder for signing new jwt access token

    return {
        token: "123",
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