const Device = require("../models/ReportSchema");

exports.device_getall = async(req, res) =>{
    const data = await Device.find();

    res.send(data);
}

exports.device_create = async(req,res) =>{
    const{body} = req;

    // Validación de la info
    // ...
    // ...
    // ...

    let newDevice = new Device(body);

    await new newDevice.save()
    .then((newObject => console.log("Success!"), newObject))
    .catch((err) => {
        console.error("oops!!", err);
        res.send(err.errors);
    });

    res.send(newUser);
}