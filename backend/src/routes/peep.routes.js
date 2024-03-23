import express from 'express';
import peepControllers from '../controllers/peep.controller.js';
import authJwt from '../middlewares/authJwt.js';

const peepRouter = express.Router();

const { createPeep, viewAllPeeps } = peepControllers;

peepRouter.use((req, res, next) => {
    res.header(
        `Access-Control-Allow-Headers`,
        `x-access-token, Origin, Content-Type, Accept`
    );
    next();
});

// protect peep creation with valid jwt token
peepRouter.post("/", [authJwt.verifyToken], createPeep);
peepRouter.get("/", viewAllPeeps);

export default peepRouter;