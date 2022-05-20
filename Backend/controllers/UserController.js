const User = require("../models/UserSchema");
const logger = require("../util/logger");
const jwt = require("jsonwebtoken");

exports.user_getall = async(req, res) =>{
    const data = await User.find();

    res.send(data);
}

exports.user_create = async(req,res) =>{
    const {body} = req;
    let newUser = new User(body);

    try
    {
        

        let response = {};
        await newUser.save()
        .then((newObject) => {
            response = newObject;
            logger.info(`Usuario creado exitosamente: ${newObject}`);
        })
        .catch((err) => {
            response = err;
            logger.error(err);
        });

        const token = jwt.sign(
            {user_id: response._id, email: response.email},
            'clavesecreta616',
            {
                expiresIn: "2h",
            }
        );
        response.token = token;
        res.send(response);
    }
    catch(e)
    {
        logger.error(e);
        res.send(e);
    }  
};

exports.user_getById = async(req, res) =>{
    const {id} = req.params;

    try
    {
        const data = await User.findById(id);

        if(data){
            res.send(data);
        }else{
            res.send({message: "Error, no se encontro el registro"});
        }
    }
    catch(e)
    {
        logger.error(e);
        res.send(e);
    }
    
}

exports.user_getByEmail = async(req, res) =>{
    const {id} = req.params;
    const data = await User.findOne({email: id});

    const token = jwt.sign(
        { user_id: data._id, email: data.email },
        'clavesecreta616',
        {
          expiresIn: "2h",
        }
      );
      // save user token
      data.token = token;


    if(data){
        res.send(data);
    }else{
        res.send({message: "Error, no se encontro el registro"});
    }
}

exports.user_update = async (req, res) =>{
    const {id} = req.params;
    const { body }= req;

    const userdb = await User.findOne({email: id});

    try{
        if(userdb){
            const data = await User.findOneAndUpdate({email: id}, body, {returnOriginal: false});
            res.send({message: "Registro actualizado exitosamente", data});
            logger.info(`Usuario actualizado exitosamente: ${data}`);
            
        }else{
            res.send({message: "El registro que intentas actualizar no existe"})
        }
    }catch(e){
        logger.error(e);
        res.send(e);
    }
}

exports.user_delete = async (req, res) =>{
    const {id} = req.params;

    await User.deleteOne({_id: id});

    res.send({message: "Usuario eliminado"})
}

exports.user_localities = async(req, res) =>{
    const {id} = req.params;
    const data = await User.find({_address : id}).populate("_address");

    if(data){
        res.send(data);
    }else{
        res.send({message: "Error, no se encontro el registro"});
    }
}
