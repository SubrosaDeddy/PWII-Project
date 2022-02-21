const Ocupation = require("../models/OcupationSchema");

exports.ocupation_getall = async(req, res) =>{
    const data = await Ocupation.find();

    res.send(data);
}

exports.ocupation_create = async(req,res) =>{
    const {body} = req;

    var validation = false;
    var mess= "";
    let newOcupation = new Ocupation(body);

    // Validación de la información
    if(body.title == null || body.description == null){
        mess = "Los datos no pueden ser null";
        validation = true;
    }

    try {
        if(validation){
            res.send({message: mess})
        }
        else{
            await newOcupation.save()
            .then((newObject) => console.log("Success!", newObject))
            .catch((err) => {
                console.error("oops!!", err);
                res.send(err.errors);
            });
    
            res.send(newOcupation);
        }
    } catch (e) {
        res.send(e);
    }

}

exports.ocupation_getById = async (req, res) =>{
    const {id} = req.params;
    const data = await Ocupation.findById(id);

    if(data){
        res.send(data);
    }else{
        res.send({message: "Error, no se encontro el registro"});
    }
}

exports.ocupation_update = async (req, res) =>{
    const {id} = req.params;
    const {body} = req;

    const ocupationdb = await Ocupation.findById(id);

    try {
        if(ocupationdb){
            const data = await Ocupation.findOneAndUpdate({_id: id}, body, {returnOriginal: false})
            res.send({message: "Registro actualizado exitosamente", data});
        }else{
            res.send({message: "El registro que intentas actualizar no existe"});
        }
    } catch (e) {
        res.send(e);
    }
}

exports.ocupation_delete = async (req, res) =>{
    const {id} = req.params;

    await Ocupation.deleteOne({_id: id});

    res.send({message: "Dato eliminado"})
}

