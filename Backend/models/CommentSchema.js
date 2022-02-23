const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    _user:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    comment:
    {
        type:String,
        required: true
    },
    _publication:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "publication"
    },
    like:{
        type:Boolean,
        required: true
    }
});

const Comments = mongoose.model("comments", CommentSchema);
module.exports = Comments;