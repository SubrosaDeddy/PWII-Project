const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:
    {
        type: String, 
        required:true,
        minlength:5,
        maxlength: 50,
        unique:true
    },
    profilepicture:
    {
        type:String
    },
    fullname:
    {
        type: String,
        required:true,
        minlength:10,
        maxlength:100,
    },
    email:
    {
        type:String,
        required:true,
        minlength:15,
        maxlength:100,
        unique:true
    },
    password:
    {
        type:String,
        required:true,
        minlength:10,
        maxlength:100,
    },
    address:
    [
        {
            street:
            {
                type:String,
                minlength:15,
                maxlength:200,
                // required:true
            },
            number:
            {
                type:String,
                minlength:2,
                maxlength:6,
                // required:true
            },
            neighborhood:
            {
                type:String,
                minlength:3,
                maxlength:50,
                // required:true
            },
            city:
            {
                type:String,
                minlength:2,
                maxlength:50,
                // required:true
            },
            country:
            {
                type:String,
                minlength:2,
                maxlength:50,
                // required:true  
            }
        }
    ]
});

const User = mongoose.model("user", UserSchema);
module.exports = User;