const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
    users:
    [
        {
            type:String,
            required:true
        }
    ],
    messages:
    [
        {
            type:String
        }
    ]
});

const Chat = mongoose.model("chat", ChatSchema);
module.exports = Chat;