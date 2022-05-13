const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Nombre es requisito'],
        minlength: [4, 'Nombre es muy corto'],
        maxlength: [50, 'Nombre es muy largo']
    }
});
const Categories = mongoose.model("categories_rp", CategoriesSchema);
module.exports = Categories;