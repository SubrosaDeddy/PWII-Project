const Job = require("../models/JobSchema");
const User = require("../models/UserSchema");

// Publicaciones de trabajo

exports.job_getall = async(req, res) =>{
    const data = await Job.find();

    res.send(data);
}

exports.job_create = async(req,res) =>{
    const{body} = req;

    // Validación de la info
    var validation = false;
    var mess = "";
    let newJob = new Job(body);

    if(body.title = null || body.description == null ){
        // res.send({message: "Los datos no puede ser null"})
        mess = "Los datos no pueden ser null";
        validation = true;
    }

    try{
        if(validation){
            res.send({message: mess});
        }else{
            await newJob.save()
            .then((newObject) => console.log("Success!", newObject))
            .catch((err) => {
                console.error("oops!!", err);
                res.send(err.errors);
            });

            res.send(newJob);
        }
    }catch(e){
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

