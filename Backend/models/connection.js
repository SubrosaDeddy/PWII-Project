const mongoose = require('mongoose');
const logger = require("../util/logger");

mongoose.Promise = global.Promise;

mongoose
.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false", {useNewUrlParser:true})
.then(() => {
    logger.info(`Conectado a la base de datos MongoDB`);
    console.log("Conectado a la base de datos MongoDB")
})
.catch(()=> {
    logger.error(`No se pudo establecer conexión con la base de datos`);
    process.exit();
});