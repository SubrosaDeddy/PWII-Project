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


// Require User
const user_routes = require('./routes/UserRoutes');
app.use('/api', user_routes);

// Require Worker
const worker_routes = require('./routes/WorkerRoutes');
app.use('/api', worker_routes);

// Require Ocupation
const ocupation_routes = require('./routes/OcupationRoutes');
app.use('/api', ocupation_routes);

// Require Multimedia
const multimedia_routes = require('./routes/MultimediaRoutes');
app.use('/api', multimedia_routes);

// Require Chats
const chat_router = require('./routes/ChatRoutes');
app.use('/api', chat_router);

