const mongoose = require("mongoose");

const WorkerSchema = new mongoose.Schema({
    
    _userinfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    _ocupations:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ocupation"
    },
    description:
    {
        type:String,
        minlength:[10, "La Descripción es muy corta"],
        maxlength:[300, 'La Descripcion es muy larga']
    },
    rating:
    {
        type:Number,
        default:null
    }
    
});

const Worker = mongoose.model("worker", WorkerSchema);
module.exports = Worker;