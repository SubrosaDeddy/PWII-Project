const Report = require("../models/ReportSchema");

exports.report_getall = async(req, res) =>{
    const data = await Report.find();

    res.send(data);
}

exports.report_create = async(req,res) =>{
    const{body} = req;

    // Validación de la info
    // ...
    // ...
    // ...

    let newReport = new Report(body);

    try {
        await newReport.save()
        .then((newObject) => console.log("Success!", newObject))
        .catch((err) => {
            console.error("oops!!", err);
            res.send(err.errors);
        });
    
        res.send(newReport); 
    } catch (e) {
        res.send(e);
    }  
}

exports.report_getById = async(req, res) =>{
    const {id} = req.params;
    const data = await Report.findById(id);

    if(data){
        res.send(data);
    }else{
        res.send({message: "Error, no se encontro el registro"});
    }
}

exports.report_update = async(req, res) =>{
    const {id} = req.params;
    const {body} = req;

    const reportdb = await Report.findById(id);

    try {
        if(reportdb){
            const data = await Report.findOneAndUpdate({_id: id}, body, {returnOriginal: false});
            res.send({message: "Registro actualizado exitosamente", data});
        }else{
            res.send({message: "El registro que intentas actualizar no existe"})
        }
    } catch (e) {
        res.send(e);
    }
}

exports.report_delete = async(req, res) =>{
    const {id} = req.params;

    await Report.deleteOne({_id: id});

    res.send({message: "Reporte eliminado"});
}