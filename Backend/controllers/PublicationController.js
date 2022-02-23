const Publication = require("../models/PublicationSchema");

// Publicaciones de trabajo

exports.publication_getall = async(req, res) =>{
    const data = await Publication.find();

    res.send(data);
}

exports.publication_create = async(req,res) =>{
    const{body} = req;

    let newPublication = new Publication(body);


    try
    {
        let response = {};
        await newPublication.save()
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

exports.publication_getById = async(req, res) =>{
    const {id} = req.params;
    const data = await Publication.findById(id);

    if(data){
        res.send(data);
    }else{
        res.send({message: "Error, no se encontro el registro"});
    }
}

exports.publication_update = async (req, res) =>{
    const {id} = req.params;
    const { body }= req;

    const publicationdb = await Publication.findById(id);

    try {
        if(publicationdb){
            const data = await Publication.findOneAndUpdate({_id: id}, body, {returnOriginal: false});
            res.send({message: "Registro actualizado exitosamente", data});
        }else{
            res.send({message: "El registro que intentas actualizar no existe"})
        }
    } catch (e) {
        res.send(e);
    }
}

exports.publication_delete = async (req, res) =>{
    const {id} = req.params;

    await Publication.deleteOne({_id: id});

    res.send({message: "Publicacion eliminada"})
}

