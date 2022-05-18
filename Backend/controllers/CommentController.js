const Comment = require("../models/CommentSchema");
const logger = require("../util/logger");

exports.comment_getall = async(req, res) =>{
    const data = await Comment.find();

    res.send(data);
}

exports.comment_create = async(req, res) => {
    let{body} = req;
    let prevComments = await Comment.findOne({_user: body._user, _publication: body._publication});
    if(prevComments)
    {
        body.comment.push(...prevComments.comment);
        var newComment = new Comment(body);
    }
    else
    {
        var newComment = new Comment(body);
    }

    try 
    {
        let response = {};
        await Comment.findOneAndUpdate({_user: body._user, _publication: body._publication}, {comment: newComment.comment},{upsert:true})
        .then((newObject) => {
            response = newObject;
            logger.info(`Comentario creado exitosamente: ${newObject}`);
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

exports.comment_like = async (req, res) =>{
    let{body} = req;

    try 
    {
        console.log(body);
        await Comment.findOneAndUpdate({_user: body._user, _publication: body._publication}, {like: body.like}, {upsert:true})
        .then((newObject) => {
            res.send(newObject);
        })
        .catch((err) =>{
            res.send({error:err});
        });
    } 
    catch (err) 
    {
        res.send({error: err});
    }
} 

exports.comment_getallByPost = async(req, res) =>{
    const {id} = req.params;
    const data = await Comment.find({_publication: id}).populate("_user");

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