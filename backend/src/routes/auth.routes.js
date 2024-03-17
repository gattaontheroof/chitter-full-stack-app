import express from 'express';


const authRouter = express.Router();

authRouter.route("/register").post(authController);

export { authRouter };