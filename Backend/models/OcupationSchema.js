const mongoose = require("mongoose");

const OcupationSchema = new mongoose.Schema({
    title:
    {
        type:String,
        required:[true, 'El título es requisito'],
        minlength:[5, 'El título es muy corto'],
        maxlength:[50, 'El título es muy largo']
    }
});

const Ocupation = mongoose.model("ocupation", OcupationSchema);
module.exports = Ocupation;