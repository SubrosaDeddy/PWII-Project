const Worker = require("../models/WorkerSchema")

exports.worker_getall = async(req, res) =>{
    const data = await Worker.find();

    res.send(data);
};

exports.worker_create = async(req, res) =>{
    const {body} = req;

    var validation = false;
    var mess = "";
    let newWorker = new Worker(body);

    // Validación de info
    if(body._userinfo == null || body._ocupations == null || body.rating == null){
        mess = "Los datos no pueden ser null";
        validation = true;
    }

    try {
        if(validation){
            res.send({message: mess});
        }else{
            await newWorker.save()
            .then((newObject) => console.log("Success!", newObject))
            .catch((err) => {
                console.error("oops!!", err);
                res.send(err.errors);
            });
        
            res.send(newWorker);
        }
    } catch (e) {
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