import express from 'express';
import authFunctions from '../controllers/auth.controller.js';

const authRouter = express.Router();

const { register, login } = authFunctions;

authRouter.route("/register").post(register);
authRouter.route("/login").post(login);

export default authRouter;