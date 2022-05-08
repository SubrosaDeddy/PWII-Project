const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title:
    {
        type:String,
        required: [true, 'El título es requisito'],
        minlength: [5, 'El título es muy corto'],
        maxlength:[100, 'El título es muy largo']
    },
    description:
    {
        type:String,
        required: [true, 'La descripción es requisito'],
        minlength:[10, 'La descripción es muy corta'],
        maxlength:[500, 'La descripción es muy larga']
    },
    _workerinfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "worker"
    },
    photos: 
    [
        {
            type:String
        }
    ],
    _category:
    [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "ocupation"
        }
    ],
    counting: {
        type: Number 
    }
});

const Post = mongoose.model("post", PostSchema);
module.exports = Post;