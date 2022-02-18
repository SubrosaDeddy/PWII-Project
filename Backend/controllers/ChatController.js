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

    await newChat.save()
    .then((newObject) => console.log("Success!", newObject))
    .catch((err)=>{
        console.error("oops!!", err);
        // res.send(err.errors);
    });

    res.send(newChat);
};