const Worker = require("../models/WorkerSchema")
const User = require("../models/UserSchema");
const logger = require("../util/logger");

exports.worker_getall = async(req, res) =>{
    const data = await Worker.find();

    res.send(data);
};

exports.worker_create = async(req, res) =>{
    const {body} = req;
    let newWorker = new Worker(body);

    try 
    {
        let response = {};
        await newWorker.save()
        .then((newObject) => {
            response = newObject
            logger.info(`Trabajador creado exitosamente: ${newObject}`);
        })
        .catch((err) => {
            response = err;
            logger.error(err);
        });
        res.send(response);
    } 
    catch (e) 
    {
        logger.error(e);
        res.send(e);
    }
};

exports.worker_getById = async(req, res) =>{
    const {id} = req.params;
    const data = await Worker.findById(id).populate("_userinfo", "username email");

    if(data){
        res.send(data);
    }else{
        res.send({message: "Error, no se encontro el registro"})
    }
}

exports.worker_update = async(req, res) =>{
    const {id} = req.params;
    const {body} = req;

    const workerdb = await Worker.findById(id);

    try{    
        if(workerdb){
            const data = await Worker.findOneAndUpdate({_id : id}, body, {returnOriginal:false});
            res.send({message: "Registro actualizado exitosamente"});
            logger.info(`Trabajador actualizado exitosamente: ${data}`);
        }else{
            res.send({message: "El registro que intentas actualizar no existe"});
        }
    }catch(e){
        res.send(e);
    }
}

exports.worker_delete = async(req, res) =>{
    const {id} = req.params;

    await Worker.deleteOne({_id: id});

    res.send({message: "Usuario eliminado"});
}

exports.worker_localities = async(req, res) =>{
    const {id} = req.params;
    const data = await Worker.find().populate("_userinfo");
    let arr = []

    if(data){
        for(let i= 0; i < data.length; i++){
            if(data[i]._userinfo._address == id){
                arr.push(data[i]);
            }
        }
        res.send({arr, conteo: arr.length});
    }
}

exports.worker_ocupation = async(req, res)=>{
    const {id} = req.params;
    const data = await Worker.find({_ocupations: id}).populate("_ocupations");

    if(data){
        res.send(data);
    }else{
        res.send({message: "Error, no se encontro el registro"});
    }
}
