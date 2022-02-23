const Locality = require("../models/LocalitiesSchema");

exports.locality_getall = async(req, res) =>{
    const data = await Locality.find();

    res.send(data);
}

exports.locality_create = async(req, res) =>{
    const{body} = req;

    // Validación de la info 

    let newLocality = new Locality(body);

    try {
        await newLocality.save()
        .then((newObject) => console.log("Success!", newObject))
        .catch((err) => {
            console.error("oops!!", err);
            res.send(err.errors);
        });
    
        res.send(newLocality);
    } catch (e) {
        res.send(e);
    }
   
}

exports.locality_getById = async(req, res) =>{
    const {id} = req.params;
    const data = await Locality.findById(id);

    if(data){
        res.send(data);
    }else{
        res.send({message: "Error, no se encontro el registro"});
    }

}


exports.locality_update = async(req, res) =>{
    const {id} = req.params;
    const {body} = req;

    const localitydb = await Locality.findById(id);

    try {
        if(localitydb){
            const data = await Locality.findOneAndUpdate({_id: id}, body, {returnOriginal: false});
            res.send({message: "Registro actualizado exitosamente", data});
        }else{
            res.send({message: "El registro que intentas actualizar no existe"})
        }
    } catch (e) {
        res.send(e);
    }
}

exports.locality_delete = async (req, res) =>{
    const {id} = req.params;

    await Locality.deleteOne({_id: id});

    res.send({message: "Localidad eliminada"});
}