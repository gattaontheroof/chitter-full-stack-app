import Peep from "../models/peep.model.js";

const createPeep = async (content) => {

    // Create a new peep 
    const peep = new Peep({ content });
    return await peep.save();

};

const viewAllPeeps = async () => {

    // return all Peeps in descending order of date
    return await Peep
                    .find({})
                    .select('_id content date')
                    .sort({ date: 'desc' });
};


export const peepService = {
    createPeep, viewAllPeeps 
};