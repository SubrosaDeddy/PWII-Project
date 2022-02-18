const mongoose = require("mongoose");

const LocalitySchema = new mongoose.Schema({
    city:
    {
        type:String,
        required:true,
        minlength:5,
        maxlength:30
    },
    state:
    {
        type:String,
        required:true,
        minlength:5,
        maxlength:30
    }
});

const Locality = mongoose.model("locality", LocalitySchema);
module.exports = Locality;