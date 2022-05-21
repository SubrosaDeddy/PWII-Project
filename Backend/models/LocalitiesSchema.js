const mongoose = require("mongoose");

const LocalitySchema = new mongoose.Schema({
    city:
    {
        type:String,
        required:[true, 'Ciudad es requisito'],
        minlength:[5, 'Ciudad es muy corta'],
        maxlength:[30, 'Ciudad es muy larga']
    } 
});

const Locality = mongoose.model("locality", LocalitySchema);
module.exports = Locality;