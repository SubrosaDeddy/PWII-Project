const Job = require("../models/JobSchema");
const User = require("../models/UserSchema");

// Publicaciones de trabajo

exports.job_getall = async(req, res) =>{
    const data = await Job.find();

    res.send(data);
}

exports.job_create = async(req,res) =>{
    const{body} = req;

    let newJob = new Job(body);


    try
    {
        let response = {};
        await newJob.save()
        .then((newObject) => {
            console.log("Success!", newObject)
            response = newObject;
        })
        .catch((err) => {
            response = err;
            // res.send(err.errors);
            console.error("oops!!", err);
        });

        res.send(response);
    }
    catch(e)
    {
        res.send(e);
    }
};

exports.job_getById = async(req, res) =>{
    const {id} = req.params;
    const data = await Job.findById(id);

    if(data){
        res.send(data);
    }else{
        res.send({message: "Error, no se encontro el registro"});
    }
}

exports.job_update = async (req, res) =>{
    const {id} = req.params;
    const { body }= req;

    const jobdb = await Job.findById(id);

    try {
        if(jobdb){
            const data = await Job.findOneAndUpdate({_id: id}, body, {returnOriginal: false});
            res.send({message: "Registro actualizado exitosamente", data});
        }else{
            res.send({message: "El registro que intentas actualizar no existe"})
        }
    } catch (e) {
        res.send(e);
    }
}

exports.job_delete = async (req, res) =>{
    const {id} = req.params;

    await Job.deleteOne({_id: id});

    res.send({message: "Publicacion eliminada"})
}

