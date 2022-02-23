const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minlength: 4,
        maxlength: 50
    },
    description:{
        type:String,
        required: true,
        minlength: 10,
        maxlength: 80
    }
});
const Categories = mongoose.model("categories_rp", CategoriesSchema);
module.exports = Categories;