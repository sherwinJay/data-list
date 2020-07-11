const express = require('express');
const path = require('path');
const cors = require("cors");

clientsRouter = require('./routes/clients');
const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/clients/data', clientsRouter);

// serve static assets if in production
if (process.env.NODE_ENV === "production") {

    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

// this is a comment and and


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);