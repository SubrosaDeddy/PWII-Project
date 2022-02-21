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


// User
const user_routes = require('./routes/UserRoutes');
app.use('/api', user_routes);

// Worker
const worker_routes = require('./routes/WorkerRoutes');
app.use('/api', worker_routes);

// Ocupation
const ocupation_routes = require('./routes/OcupationRoutes');
app.use('/api', ocupation_routes);

// Multimedia
const multimedia_routes = require('./routes/MultimediaRoutes');
app.use('/api', multimedia_routes);

// Publications/Jobs
const jobs_routes = require("./routes/JobRoutes");
app.use('/api', jobs_routes);


// Chats
const chat_router = require('./routes/ChatRoutes');
app.use('/api', chat_router);

