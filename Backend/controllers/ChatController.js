const Chat = require("../models/ChatSchema");

exports.chat_getall = async(req, res)=>{
    const data = await Chat.find();

    res.send(data);
}

exports.chat_create = async (req, res) =>{
    const {body} = req;

    // Validación de la info 
    // ...
    // ...
    // ...

    let newChat = new Chat(body);

    
    try{
        await newChat.save()
        .then((newObject) => console.log("Success!", newObject))
        .catch((err)=>{
            console.error("oops!!", err);
            // res.send(err.errors);
        });
    
        res.send(newChat);
    }
    catch(e){
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

// exports.chat_getallMessage = async(req, res)=>{
//     const {user_1} = req.params;
//     const {user_2} = req.params;
//     const data = await Chat.find({_usersend: user_1, _userreceive: user_2});

//     res.send(data.content);
// }
