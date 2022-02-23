const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Nombre es requisito'],
        minlength: [4, 'Nombre es muy corto'],
        maxlength: [50, 'Nombre es muy largo']
    },
    description:{
        type:String,
        required: [true, 'Descripción es requisito'],
        minlength: [10, 'Descripción es muy corta'],
        maxlength: [80, 'Descripción es muy larga']
    }
});
const Categories = mongoose.model("categories_rp", CategoriesSchema);
module.exports = Categories;