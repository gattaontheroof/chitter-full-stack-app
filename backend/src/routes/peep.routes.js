import express from 'express';
import peepControllers from '../controllers/peep.controller.js'; 

const peepRouter = express.Router();

const { createPeep, viewAllPeeps } = peepControllers;

peepRouter.route("/").post(createPeep);
peepRouter.route("/").get(viewAllPeeps);


export default peepRouter;