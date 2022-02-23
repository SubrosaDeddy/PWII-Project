const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:
    {
        type: String, 
        required:[true, 'Username es requisito'],
        minlength:[5, 'El nombre es muy corto'],
        maxlength: [50, 'El nombre es muy largo'],
        unique:true
    },
    profilepicture:
    {
        type:String
    },
    fullname:
    {
        type: String,
        required:[true, 'Fullname es requisito'],
        minlength:[10, 'Fullname es muy corto'],
        maxlength:[100, 'Fullname es muy largo'],
    },
    email:
    {
        type:String,
        required:[true, 'Email es requisito'],
        minlength:[10, 'Email es muy corto'],
        maxlength:[100, 'Email es muy largo'],
        unique:true
    },
    password:
    {
        type:String,
        required:[true, 'Contraseña es requisito'],
        minlength:[10, 'La contraseña es muy corta'],
        maxlength:[100, 'La contraseña es muy larga'],
    },
    _address:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref: "locality"
    }
});

const User = mongoose.model("user", UserSchema);
module.exports = User;