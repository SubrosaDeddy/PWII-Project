const Comment = require("../models/CommentSchema");
const logger = require("../util/logger");

exports.comment_getall = async(req, res) =>{
    const data = await Comment.find();

    res.send(data);
}

exports.comment_create = async(req, res) => {
    const{body} = req;
    let newComment = new Comment(body);

    try 
    {
        let response = {};
        await newComment.save()
        .then((newObject) => {
            response = newObject;
            // console.log("Success!", newObject)
            logger.info(`Comentario creado exitosamente: ${newObject}`);
        })
        .catch((err) => {
            response = err;
            // console.error("oops!!", err);
            // res.send(err.errors);
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

exports.comment_getallByPost = async(req, res) =>{
    const {id} = req.params;
    const data = await Comment.find({_publication: id});

    res.send(data);
}

exports.comment_update = async(req, res) =>{
    const {id} = req.params;
    const {body} = req;

    const commentdb = await Comment.findById(id);

    try {
        if(commentdb){
            const data = await Comment.findOneAndUpdate({_id: id}, body, {returnOriginal: false});
            res.send({message: "Registro actualizado exitosamente", data});
            logger.info(`Comentario actualizado exitosamente: ${data}`);
        }else{
            res.send({message: "El registro que intentas actualizar no existe"})
        }
    } catch (e) {
        res.send(e);
    }
}

exports.comment_delete = async(req, res) =>{
    const {id} = req.params;

    await Comment.deleteOne({_id: id});

    res.send({message: "Comentario eliminado"});
}