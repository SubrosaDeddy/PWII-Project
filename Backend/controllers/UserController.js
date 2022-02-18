const User = require("../models/UserSchema");

exports.user_getall = async(req, res) =>{
    const data = await User.find();

    res.send(data);
}

exports.user_create = async(req,res) =>{
    const {body} = req;

    // Validación de la info
    // ...
    // ...
    // ...

    let newUser = new User(body);

    await new newUser.save()
    .then((newObject) => console.log("Success!"), newObject)
    .catch((err) => {
        console.error("oops!!", err);
        res.send(err.errors);
    });

    res.send(newUser);
};