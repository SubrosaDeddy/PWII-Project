const Ocupation = require("../models/OcupationSchema");
const logger = require("../util/logger");

exports.ocupation_getall = async(req, res) =>{
    const data = await Ocupation.find();

    res.send(data);
}

exports.ocupation_create = async(req,res) =>{
    const {body} = req;
    let newOcupation = new Ocupation(body);

    try
    {
        let response = {};
        await newOcupation.save()
        .then((newObject) => {
            response = newObject;
            logger.info(`Ocupación creada exitosamente: ${newObject}`);
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
            logger.info(`Ocupación actualizada exitosamente: ${data}`);
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

exports.ocupation_getByName = async(req, res) =>{
    const {id} = req.params; 
    const data = await Ocupation.findOne({title: id});

    if(data){
        res.send(data._id);
    }else{
        res.send({message: "Error, no se encontro el registro"});
    }
}
