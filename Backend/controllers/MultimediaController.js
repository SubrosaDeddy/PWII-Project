const Multimedia = require("../models/MultimediaSchema");

exports.multimedia_getall = async(req, res) =>{
    const data = await Multimedia.find();

    res.send(data);
}

exports.multimedia_create = async(req, res) =>{
    const {body} = req;
    let newMultimedia = new Multimedia(body)

    try 
    {
        let response = {};
        await newMultimedia.save()
        .then((newObject) => {
            console.log("Success!", newObject)
            response = newObject;
        })
        .catch((err) => {
            response = err;
            console.error("oops!!", err);
            // res.send(err.errors);
        });
        res.send(response);
    } 
    catch (e) 
    {
        res.send(e);
    }
}

exports.multimedia_getById = async(req, res) =>{
    const {id} = req.params;
    const data = await Multimedia.findById(id);

    if(data){
        res.send(data);
    }else{
        res.send({message: "Error, no se encontro el registro"});
    }
}

exports.multimedia_update = async(req, res) =>{
    const {id} = req.params;
    const { body }= req;

    const userdb = await Multimedia.findById(id);

    try{
        if(userdb){
            const data = await Multimedia.findOneAndUpdate({_id: id}, body, {returnOriginal: false});
            res.send({message: "Registro actualizado exitosamente", data});

        }else{
            res.send({message: "El registro que intentas actualizar no existe"})
        }
    }catch(e){
        res.send(e);
    }
}

exports.multimedia_delete = async(req, res) =>{
    const {id} = req.params;

    await Multimedia.deleteOne({_id: id});

    res.send({message: "Registro eliminado"})
}
