import mongoose from "mongoose";

const peepSchema = new mongoose.Schema({

    content: { type: String, required: true },
    date: { type: Date, default: Date.now, required: true }

});

const Peep = mongoose.model("Peep", peepSchema); 

export default Peep;
