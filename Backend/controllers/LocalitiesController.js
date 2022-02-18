const Locality = require("../models/LocalitiesSchema");

exports.locality_getall = async(req, res) =>{
    const data = await Locality.find();

    res.send(data);
}

exports.locality_create = async(req, res) =>{
    const{body} = req;

    // Validación de la info 
    // ...
    // ...
    // ...

    let newLocality = new Locality(body);

    await new newLocality.save()
    .then((newObject) => console.log("Success!"), newObject)
    .catch((err) => {
        console.error("oops!!", err);
        res.send(err.errors);
    });

    res.send(newLocality);
}