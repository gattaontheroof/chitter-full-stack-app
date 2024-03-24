import { authService } from "../services/auth.service.js";

const register = async (req, res) => {

    const { name, username, email, password } = req.body;

    try {
        const user = await authService.register(name, username, email, password);
        res.status(201).send({ message: `Register Success` });
    } catch (error) {
        res.status(400).send({
            message: error.message,
            user: req.body,
        });
    }
}

const login = async (req, res) => {

    // identifier can be username or email address
    const { identifier, password } = req.body;

    try {
        const { token, user} = await authService.login(identifier, password);
        res.json({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            accessToken: token
        })
    } catch (error) {
        res.status(401).send({
            message: error.message
        });
    }
}

const authFunctions = { register, login };

export default authFunctions;