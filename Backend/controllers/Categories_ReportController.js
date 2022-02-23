const { response } = require("express");
const Categories = require("../models/Categories_ReportSchema");

exports.categories_getall = async(req, res) =>{
    const data = await Categories.find();

    res.send(data);
}

exports.categories_create = async(req, res) =>{
    const {body} = req;
    let newCategory = new Categories(body);

    try 
    {
        let response = {};
        await newCategory.save()
        .then((newObject) => {
            response = newObject;
            console.log("Success!", newObject)
        })
        .catch((err) => {
            response = err;
            console.error("oops!!", err);
            // res.send(err.errors);
        });

        res.send(response);
    } 
    catch (e) 
    {
        res.send(e);
    }
}

exports.categories_getById = async(req, res) =>{
    const {id} = req.params;
    const data = await Categories.findById(id);

    if(data){
        res.send(data);
    }else{
        res.send({message: "Error, no se encontro el registro"});
    }
}

exports.categories_update = async(req, res) =>{
    const {id} = req.params;
    const {body} = req;

    const categoriesdb = await Categories.findById(id);

    try {
        if(categoriesdb){
            const data = await Categories.findOneAndUpdate({_id: id}, body, {returnOriginal: false});
            res.send({message: "Registro actualizado exitosamente", data});
        }else{
            res.send({message: "El registro que intentas actualizar no existe"})
        }
    } catch (e) {
        res.send(e);
    }
}

exports.categories_delete = async(req, res) =>{
    const {id} = req.params;

    await Categories.deleteOne({_id: id});

    res.send({message: "Categoria eliminada"});
}