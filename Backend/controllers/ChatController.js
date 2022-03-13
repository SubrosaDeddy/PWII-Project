const Chat = require("../models/ChatSchema");
const logger = require("../util/logger");

exports.chat_getall = async(req, res)=>{
    const data = await Chat.find();

    res.send(data);
}

exports.chat_create = async (req, res) =>{
    const {body} = req;
    let newChat = new Chat(body);

    try
    {
        let response = {};
        await newChat.save()
        .then((newObject) => {
            response = newObject;
            logger.info(`Chat creado exitosamente: ${newObject}`);
        })
        .catch((err)=>{
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

exports.chat_delete = async(req, res) =>{
    const {id} = req.params;

    await Chat.deleteOne({_id: id});

    res.send({message: "Mensaje eliminado"});
}

exports.chat_getallChats = async(req, res)=>{
    const {id} = req.params;
    const data = await Chat.find({_usersend: id});

    res.send(data);
}


