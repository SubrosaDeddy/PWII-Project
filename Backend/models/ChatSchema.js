const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({

    _usersend: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "user", 
        required: [true, 'Emisor es requisito']
    }, 
    _userreceive: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "user", 
        required: [true, 'Receptor es requisito']
    },
    content: {
        type:String
    }

 
});

const Chat = mongoose.model("chat", ChatSchema);
module.exports = Chat;