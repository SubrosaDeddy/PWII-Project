const mongoose = require("mongoose");

const MultimediaSchema = new mongoose.Schema({
    title:{
        type:String, 
        required:[true, 'El título es requisito']
    },
    url:{
        type:String,
        required: [true, 'El url es requisito']
    }, 
    shortdescription:{
        type:String,
        minlength: [20, 'La descripción es muy corta'],
        maxlength: [80, 'La descripción es muy larga']
    }
});

const Multimedia = mongoose.model("multimedia", MultimediaSchema);
module.exports = Multimedia;