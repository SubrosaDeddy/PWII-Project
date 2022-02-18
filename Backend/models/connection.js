const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
.connect("", {useNewUrlParser:true})
.then(() => console.log("Conectado a la base de datos MongoDB"))
.catch(()=> {
    console.error("Error, no se pudo conectar a la base de datos");
    process.exit();
});