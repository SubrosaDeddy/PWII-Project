const Publication = require("../models/PublicationSchema");
const Comments = require("../models/CommentSchema");
const logger = require("../util/logger");
const { push } = require("../util/logger");

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
            // console.log("Success!", newObject)
            response = newObject;
            logger.info(`Publicación creada exitosamente: ${newObject}`);
        })
        .catch((err) => {
            response = err;
            // res.send(err.errors);
            // console.error("oops!!", err);
            logger.error(err);
        });

        res.send(response);
    }
    catch(e)
    {
        logger.error(e);
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
            logger.info(`Publicación actualizada exitosamente: ${data}`);
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

exports.report_publications_worker = async (req, res) =>{
    const {id} = req.params;
    const data = await Publication.find({_workerinfo: id});
    let temp = []
    let arr_pb =[];
    let c_likes = 0;
    let c_dislikes = 0;


    try {
        if(data){
            if(data == ""){
                res.send({message: "Error, no se encontro el registro"});
            }else{
                for(let i= 0; i < data.length; i++){
                    temp = await Comments.find({_publication: data[i]._id})
                    arr_pb.push(temp)
                }
                for(let i= 0; i<arr_pb.length; i++){
                    for(let j = 0; j <arr_pb[i].length; j++){
                        if(arr_pb[i][j].like == 1){
                            c_likes++;
                        }
                        if(arr_pb[i][j].like == 0){
                            c_dislikes++;
                        }
                    }
                }
                res.send({arr_pb, Comentarios: arr_pb.length, likes: c_likes , dislikes: c_dislikes});
                // res.send(data);
                // res.send(arr_pb)
            }
            
        }else{
            res.send({message: "Error, no se encontro el registro"});
        } 
    } catch (e) {
        logger.error(e);
        res.send(e);
    }

}