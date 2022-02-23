const mongoose = require("mongoose");

const LocalitySchema = new mongoose.Schema({
    country:{
        type:String, 
        required:[true, 'País es requisito'],
        minlength:[2, 'País es muy corto'],
        maxlength:[30, 'País es muy largo']
    },
    city:
    {
        type:String,
        required:[true, 'Ciudad es requisito'],
        minlength:[5, 'Ciudad es muy corta'],
        maxlength:[30, 'Ciudad es muy larga']
    },
    state:
    {
        type:String,
        required:[true, 'Estado es requisito'],
        minlength:[5, 'Estado es muy corto'],
        maxlength:[30, 'Estado es muy largo']
    }
});

const Locality = mongoose.model("locality", LocalitySchema);
module.exports = Locality;