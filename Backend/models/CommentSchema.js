const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    user:
    {
        type:String,
        required:String
    },
    comment:
    {
        type:String,
        required:String
    }
});