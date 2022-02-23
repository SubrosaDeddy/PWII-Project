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
    address:
    [
        {
            street:
            {
                type:String,
                minlength:[5, 'Nombre de la calle es muy corto'],
                maxlength:[200, 'Nombre de la calle es muy largo']
            },
            number:
            {
                type:String,
                minlength:[2, 'Numero es muy corto'],
                maxlength:[6, 'Numero es muy largo']
            },
            neighborhood:
            {
                type:String,
                minlength:[3, 'Nombre de la colonia es muy corto'],
                maxlength:[50, 'Nombre de la colonia es muy largo']
            },
            city:
            {
                type:String,
                minlength:[2, 'Nombre de la ciudad es muy corto'],
                maxlength:[50, 'Nombre de la ciudad es muy largo']
            },
            country:
            {
                type:String,
                minlength:[2, 'Nombre del país es muy corto'],
                maxlength:[50, 'Nombre del país es muy largo']
            }
        }
    ]
});

const User = mongoose.model("user", UserSchema);
module.exports = User;