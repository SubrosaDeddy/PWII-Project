const mongoose = require("mongoose");

const OcupationSchema = new mongoose.Schema({
    title:
    {
        type:String,
        required:[true, 'El título es requisito'],
        minlength:[5, 'El título es muy corto'],
        maxlength:[50, 'El título es muy largo']
    }
    // description:
    // {
    //     type:String,
    //     required:[true, 'La descripción es requisito'],
    //     minlength:[20, 'La descripción es muy corta'],
    //     maxlength:[500, 'La descripción es muy larga']
    // }
});

const Ocupation = mongoose.model("ocupation", OcupationSchema);
module.exports = Ocupation;