const Worker = require("../models/WorkerSchema");
const User = require("../models/UserSchema");
const logger = require("../util/logger");
const { data } = require("../util/logger");

exports.worker_getall = async (req, res) => {
  const data = await Worker.find();

  res.send(data);
};

exports.worker_create = async (req, res) => {
  const { body } = req;
  let newWorker = new Worker(body);

  try {
    let response = {};
    await newWorker
      .save()
      .then((newObject) => {
        response = newObject;
        logger.info(`Trabajador creado exitosamente: ${newObject}`);
      })
      .catch((err) => {
        response = err;
        logger.error(err);
      });
    res.send(response);
  } catch (e) {
    logger.error(e);
    res.send(e);
  }
};

exports.worker_getById = async (req, res) => {
  const { id } = req.params;
  const data = await Worker.findById(id).populate(
    "_userinfo",
    "username email"
  );

  if (data) {
    res.send(data);
  } else {
    res.send({ message: "Error, no se encontro el registro" });
  }
};

exports.worker_update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const workerdb = await Worker.findById(id);

  try {
    if (workerdb) {
      const data = await Worker.findOneAndUpdate({ _id: id }, body, {
        returnOriginal: false,
      });
      res.send({ message: "Registro actualizado exitosamente" });
      logger.info(`Trabajador actualizado exitosamente: ${data}`);
    } else {
      res.send({ message: "El registro que intentas actualizar no existe" });
    }
  } catch (e) {
    logger.error(e);
    res.send(e);
  }
};

exports.worker_delete = async (req, res) => {
  const { id } = req.params;

  await Worker.deleteOne({ _id: id });

  res.send({ message: "Usuario eliminado" });
};

exports.worker_localities = async (req, res) => {
  const { id } = req.params;
  const data = await Worker.find().populate("_userinfo");
  let arr = [];

  try {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i]._userinfo != null) {
          if (data[i]._userinfo._address == id) {
            arr.push(data[i]);
          }
        }
      }
      res.send({arr, conteo: arr.length});
    } else {
      res.send("No hay nada");
    }
  } catch (e) {
    logger.error(e);
    res.send(e);
  }
};

exports.worker_ocupation = async (req, res) => {

  const { id } = req.params;
  const data = await Worker.find({ _ocupations: id }).populate("_userinfo");
  let arr = [];
  
  try{
    if (data) {
      for(let i= 0; i<data.length; i++){
        arr.push(data[i]);
      }
      res.send({arr, conteo: arr.length});

    } else {
      res.send({ message: "Error, no se encontro el registro" });
    }
  }catch(e){
    logger.error(e);
    res.send(e);
  }
  
};

exports.worker_getByEmailValidation = async (req, res) => {
  const { id } = req.params;
  const data = await User.findOne({ email: id });

  if (data) {

    const worker_data = await Worker.findOne({ _userinfo: data._id }).populate(
      "_userinfo"
    );
    if (worker_data) {
      res.send(worker_data);
    } else {
      res.send({ message: "Error, no se encontro el worker" });
    }
  } else {
    res.send({ message: "Error, no se encontro el registro" });
  }
};

exports.getUserinfo = async (req, res) => {
  const { id } = req.params;
  const data = await User.findOne({ email: id });

  if (data) {
    res.send(data.id);
  } else {
    res.send("No existe el usuario");
  }
};

exports.getWorker_Localities_Ocupation = async (req, res) =>{

  const id_localities = req.params.localidad;
  const id_ocupation = req.params.ocupacion;

  const data_localities = await Worker.find().populate("_userinfo");

  let arr =[];

  try {
      if(data_localities){
        for(let i = 0; i< data_localities.length; i++){
          if(data_localities[i]._userinfo != null){
            if(data_localities[i]._userinfo._address == id_localities && data_localities[i]._ocupations == id_ocupation){
              arr.push(data_localities[i]);
            }
          }
        }
        res.send({arr, conteo: arr.length});
      }else {
        res.send("No hay nada");
      }

  } catch (error) { 
    logger.error(error);
    res.send(error);
  }
}