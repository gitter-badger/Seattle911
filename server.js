'use strict';
const debug = require('debug')('seattle911:server');
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require(`${__dirname}/env.js`);
const mongoose = require('mongoose');
const Socrata = require(`${__dirname}/app/controller/socrata_data.js`);
const PointController = require(`${__dirname}/app/controller/incident_points_ctrl.js`);
require(`${__dirname}/app/routes.js`)(app, morgan, Socrata, PointController);

mongoose.connect(config.db);
app.use(bodyParser.json());



const server = app.listen(config.port, ()=>{debug(`Port ${config.port} is listening..`);});
server.isRunning = true;
module.exports = server;