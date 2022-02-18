const User = require("../models/UserSchema");
const Worker = require("../models/WorkerSchema")

exports.worker_getall = async(req, res) =>{
    const data = await Worker.find();

    res.send(data);
};

exports.worker_create = async(req, res) =>{
    const {body} = req;

    // Validación de info
    // ...
    // ...
    // ...

    let newWorker = new Worker(body);

    await new newWorker.save()
    .then((newObject) => console.log("Success!"), newObject)
    .catch((err) => {
        console.error("oops!!", err);
        res.send(err.errors);
    });

    res.send(newWorker);
};