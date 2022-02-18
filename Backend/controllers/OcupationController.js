const Ocupation = require("../models/OcupationSchema");

exports.ocupation_getall = async(req, res) =>{
    const data = await Ocupation.find();

    res.send(data);
}

exports.ocupation_create = async(req,res) =>{
    const {body} = req;

    // Validación de la información
    // ...
    // ...
    // ...

    let newOcupation = new Ocupation(body);

    await new newOcupation.save()
    .then((newObject) => console.log("Success!"), newObject)
    .catch((err) => {
        console.error("oops!!", err);
        res.send(err.errors);
    });

    res.send(newOcupation);
}