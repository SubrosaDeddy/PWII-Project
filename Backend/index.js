const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.listen(port, () =>{
    console.log("Escuchando al puerto: ", + port);
})

// Conexion Base de Datos
require('./models/connection')


// Require Chats
const chat_router = require('./routes/ChatRoutes');
app.use('/api', chat_router);