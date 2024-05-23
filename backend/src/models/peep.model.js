import mongoose from "mongoose";

const peepSchema = new mongoose.Schema({

    content: {
        type: String,
        required: true,
        maxlength: [300, 'Content cannot be more than 300 characters']
      },
      date: {
        type: Date,
        default: Date.now,
        required: true
      },
      user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
      }

});

const Peep = mongoose.model("Peep", peepSchema); 

export default Peep;
