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

exports.chat_messagesget = async(req, res) =>{
    const {id1}=req.params;
    const {id2}=req.params;

    const data = await Chat.find();
    //const data = await Chat.find({_usersend: id1 })
    //const data2 = await Chat.find({_userreceive: id2 })
    
    let ChatMsgS = [];
    try {
        if (data) {
          for (let i = 0; i < data.length; i++) {           
              if((data[i]._usersend == id1 && data[i]._userreceive == id2)||(data[i]._usersend == id2 && data[i]._userreceive == id1))
                {
                    ChatMsgS.push(data[i]);
                }
          }
        // res.send(ChatMsgS/*, conteo: ChatMsgS.length*/);
        res.send({ChatMsgS, conteo: ChatMsgS.length})
        } else {
          res.send("No hay nada");
        }
      } catch (e) {
        res.send("e");
      }
};

exports.mychats = async (req, res) =>{
    const {id} = req.params;

    const data_re = await Chat.find({_usersend: id}).populate("_userreceive");
    const data_se = await Chat.find({_userreceive: id}).populate("_usersend");

    let chats =[];
    let chats2 =[];
    let resultArr =[];

    try {

        if(data_re){
            for(let i=0; i< data_re.length; i++){
                chats.push(data_re[i]._userreceive);
            }
        }

        if(data_se){
            for(let i=0; i< data_se.length; i++){
                chats2.push(data_se[i]._usersend);
            }
        }

        let Arr1 = [...new Set(chats)];

        let Arr2 = [...new Set(chats2)];

        let Arr3 = Arr1.concat(Arr2);

        const unique = [... new Map(Arr3.map(item => [JSON.stringify(item), item])).values()];

        res.send({unique, conteo: unique.length});
        
    } catch (error) {
        res.send(error);
    }
}

