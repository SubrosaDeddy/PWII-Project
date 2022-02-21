const mongoose = require("mongoose");

// Publicaciones de trabajo
const JobSchema = new mongoose.Schema({
    title:
    {
        type:String,
        required: true,
        minlength: 5,
        maxlength:100
    },
    description:
    {
        type:String,
        required: true,
        minlength:10,
        maxlength:500
    },
    _workerinfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "worker"
    },
    _photos: 
    [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "multimedia"
        }
    ],
    _category:
    [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "ocupation"
        }
    ]
});

const Job = mongoose.model("job", JobSchema);
module.exports = Job;