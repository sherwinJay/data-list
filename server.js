const express = require('express');
const path = require('path');
const cors = require("cors");

clientsRouter = require('./routes/clients');
const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/clients/data', clientsRouter);

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);