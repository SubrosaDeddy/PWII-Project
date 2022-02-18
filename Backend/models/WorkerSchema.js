const mongoose = require("mongoose");

const WorkerSchema = new mongoose.Schema({
    ocupations:
    [
        {
            type: String,
            required:true,
            minlength:5,
            maxlength:50
        }
    ],

    businessname:
    {
        type:String,
        maxlength:30
    },

    rating:
    {
        type:Number,
        default:null
    }
});