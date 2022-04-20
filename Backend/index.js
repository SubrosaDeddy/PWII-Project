const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const logger = require("./util/logger");
const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.json());

app.listen(port, () =>{
    console.log("Escuchando al puerto: ", + port);
    logger.info(`API iniciada en el puerto ${port}`);
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

// Publications
const publications_routes = require("./routes/PublicationRoutes");
app.use('/api', publications_routes);

// Locality 
const locality_routers = require("./routes/LocalitiesRoutes");
app.use('/api', locality_routers);

// Categories
const category_routers = require("./routes/Categories_ReportRoutes");
app.use('/api', category_routers);

// Reports
const report_routers = require("./routes/ReportRoutes");
app.use('/api', report_routers);


// Comments
const comment_router = require("./routes/CommentRoutes");
app.use('/api', comment_router);

// Chats
const chat_router = require('./routes/ChatRoutes');
app.use('/api', chat_router);

