const mongoose = require("mongoose");

const OcupationSchema = new mongoose.Schema({
    title:
    {
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    },
    description:
    {
        type:String,
        required:true,
        minlength:20,
        maxlength:500
    }
});

const Ocupation = mongoose.model("ocupation", OcupationSchema);
module.exports = Ocupation;