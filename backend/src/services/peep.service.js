import Peep from "../models/peep.model.js";

const createPeep = async (content, userId) => {

    // Create a new peep 
    const peep = new Peep({ content, user: userId });
    return await peep.save();

};

const viewAllPeeps = async () => {

    // return all Peeps in descending order of date
    return await Peep
                    .find({})
                    .select('_id content date')
                    .populate('user', '_id name username')
                    .sort({ date: 'desc' });
};


export const peepService = {
    createPeep, viewAllPeeps 
};