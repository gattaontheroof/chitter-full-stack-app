import express from 'express';
import authFunctions from '../controllers/auth.controller.js';
import { registrationValidation } from '../middlewares/authValidation.js';

const authRouter = express.Router();

const { register, login } = authFunctions;

authRouter.use((req, res, next) => {
    res.header(
        `Access-Control-Allow-Headers`,
        `x-access-token, Origin, Content-Type, Accept`
    );
    next();
});

authRouter.post("/register", [registrationValidation], register);
authRouter.post("/login", login);

export default authRouter;