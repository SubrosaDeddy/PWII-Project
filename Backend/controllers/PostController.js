const Post = require("../models/PostSchema");
const Comments = require("../models/CommentSchema");
const Worker = require("../models/WorkerSchema");
const User = require("../models/UserSchema");
const logger = require("../util/logger");
const { push } = require("../util/logger");


exports.post_getall = async(req, res) =>{
    const data = await Post.find();

    res.send(data);
}

exports.post_create = async(req,res) =>{
    let{body} = req;
    
    const workerData = await Worker.findOne({_userinfo: body._workerinfo});
    body._workerinfo = workerData._id;
    let newPost = new Post(body);

    try
    {
        let response = {};
        await newPost.save()
        .then((newObject) => {
            response = newObject;
            logger.info(`Publicación creada exitosamente: ${newObject}`);
        })
        .catch((err) => {
            response = err;
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

exports.post_getById = async(req, res) =>{
    const {id} = req.params;
    let data = await Post.findById(id).populate("_workerinfo").populate("_category");
    const user = await User.findById(data._workerinfo._userinfo);
    data._workerinfo._userinfo = user;

    if(data){
        res.send(data);
    }else{
        res.send({message: "Error, no se encontro el registro"});
    }
}

exports.post_update = async (req, res) =>{
    const {id} = req.params;
    const { body }= req;

    const postdb = await Post.findById(id);

    try {
        if(postdb){
            const data = await Post.findOneAndUpdate({_id: id}, body, {returnOriginal: false});
            res.send({message: "Registro actualizado exitosamente", data});
            logger.info(`Publicación actualizada exitosamente: ${data}`);
        }else{
            res.send({message: "El registro que intentas actualizar no existe"})
        }
    } catch (e) {
        res.send(e);
    }
}

exports.post_delete = async (req, res) =>{
    const {id} = req.params;

    await Post.deleteOne({_id: id});

    res.send({message: "Publicacion eliminada"})
}

exports.report_posts_worker = async (req, res) =>{
    const {id} = req.params;
    const data = await Post.find({_workerinfo: id});
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
                    temp = await Comments.find({_post: data[i]._id})
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
            }
            
        }else{
            res.send({message: "Error, no se encontro el registro"});
        } 
    } catch (e) {
        logger.error(e);
        res.send(e);
    }

}

exports.posts_worker = async (req, res) => {
    try
    {
        const {id} = req.params;

        const workerInfo = await Worker.findOne({_userinfo: id});
        const posts = await Post.find({_workerinfo: workerInfo._id});
        if(posts)
        {
            res.send(posts);
        }
        else
        {
            res.send({message:"No se encontró"});
        }
    }
    catch(err)
    {
        return {error:err}
    }
}