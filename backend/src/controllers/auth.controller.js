import { authService } from "../services/auth.service.js";

const register = async (req, res) => {

    const { name, username, email, password } = req.body;

    try {
        const user = await authService.register(name, username, email, password);
        res.status(201).send({ message: `Register Success`, user });
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
        const user = await authService.login(identifier, password);
        res.status(200).send({ message: `Login Success`, user });
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
}

const authFunctions = { register, login };

export default authFunctions;