import { authService } from "../services/auth.service.js";

const register = async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await authService.register(email, password);
        res.status(201).send({ message: `Register Success`, user });
    } catch (error) {
        res.status(400).send({
            message: error.message,
            user: req.body,
        });
    }
}

const login = async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await authService.login(email, password);
        res.status(200).send({ message: `Login Success`, user });
    } catch (error) {
        res.status(400).send({
            message: error.message,
            user: req.body,
        });
    }
}

const authFunctions = { register, login };

export default authFunctions;