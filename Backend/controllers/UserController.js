const User = require("../models/UserSchema");

exports.user_getall = async(req, res) =>{
    const data = await User.find();

    res.send(data);
}

exports.user_create = async(req,res) =>{
    const {body} = req;

    var validation = false;
    var mess = "";
    let newUser = new User(body);

    // Validacion de la info
    if(body.username = null || body.email == null || body.fullname == null || body.password == null){
        // res.send({message: "Los datos no puede ser null"})
        mess = "Los datos no pueden ser null";
        validation = true;
    }

    try{
        // Validación de la info
        if(validation){ 
            res.send({message: mess});
        } else{
            await newUser.save()
            .then((newObject) => console.log("Success!", newObject))
            .catch((err) => {
                console.error("oops!!", err);
                res.send(err.errors);
            });
    
            res.send(newUser);
        }

    }catch(e){
        res.send(e);
    }  
};

exports.user_getById = async(req, res) =>{
    const {id} = req.params;
    // const data = await User.findOne({_username : name})
    const data = await User.findById(id);

    if(data){
        res.send(data);
    }else{
        res.send({message: "Error, no se encontro el registro"});
    }
}

exports.user_update = async (req, res) =>{
    const {id} = req.params;
    const { body }= req;

    const userdb = await User.findById(id);

    try{
        if(userdb){
            const data = await User.findOneAndUpdate({_id: id}, body, {returnOriginal: false});
            res.send({message: "Registro actualizado exitosamente", data});

        }else{
            res.send({message: "El registro que intentas actualizar no existe"})
        }
    }catch(e){
        res.send(e);
    }
}

exports.user_delete = async (req, res) =>{
    const {id} = req.params;

    await User.deleteOne({_id: id});

    res.send({message: "Usuario eliminado"})
}