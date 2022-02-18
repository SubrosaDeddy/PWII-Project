const Job = require("../models/JobSchema");

exports.job_getall = async(req, res) =>{
    const data = await Job.find();

    res.send();
}

exports.job_create = async(req,res) =>{
    const{body} = req;

    // Validación de la info
    // ...
    // ...
    // ...

    let newJob = new Job(body);

    await new newJob.save()
    .then((newObject) => console.log("Success!"), newObject)
    .catch((err) => {
        console.error("oops!!", err);
        res.send(err.errors);
    });

    res.send(newJob);
};