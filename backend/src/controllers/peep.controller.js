import { peepService } from "../services/peep.service.js";

const createPeep = async (req, res) => {

    const userId = req.userId;
    const { content }= req.body;

    try {
        await peepService.createPeep(content, userId);
        res.status(201).send();
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
}

const viewAllPeeps = async (req, res) => {

    try {
        const peeps = await peepService.viewAllPeeps();
        res.json(peeps);
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
}

const peepControllers = { createPeep, viewAllPeeps };

export default peepControllers;