const mongoose = require("mongoose");

const WorkerSchema = new mongoose.Schema({
    
    _userinfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    _ocupations:
    [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ocupation"
        }
    ],

    businessname:
    {
        type:String,
        maxlength:[30, 'Nombre del negocio es muy largo']
    },

    rating:
    {
        type:Number,
        default:null
    }
    // Disponibilidad
    
});

const Worker = mongoose.model("worker", WorkerSchema);
module.exports = Worker;