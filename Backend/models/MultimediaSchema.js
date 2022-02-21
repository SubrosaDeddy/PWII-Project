const mongoose = require("mongoose");

const MultimediaSchema = new mongoose.Schema({
    title:{
        type:String, 
        required:true
    },
    url:{
        type:String,
        required: true
    }, 
    shortdescription:{
        type:String,
        minlength: 20,
        maxlength: 80
    }
});

const Multimedia = mongoose.model("multimedia", MultimediaSchema);
module.exports = Multimedia;