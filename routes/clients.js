const express = require("express");
// const clientData = require('../data/ClientsApi');
const fs = require('fs');
const moment = require('moment');
let rawdata = require('../data/clients.json');
let clientData = rawdata;


let router = express.Router();

// Get All Clients
router.get('/', (req, res) => {
    console.log(clientData);
    res.json(clientData);
});

console.log('data from server')
console.log(rawdata)

// Get Single Client
router.get('/:id', (req, res) => {
    const foundClient = clientData.some( client => client.id === req.params.id);

    if(foundClient){
        res.json(clientData.filter(client => client.id === req.params.id));
    } else {
        res.status(400).json({msg: 'Client not found'});
    }
    // console.log(clientData);
    // res.json(clientData);
});

// Create Client 
router.post('/', (req, res) => {
    // res.send(req.body)
    const newClient = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        dateCreated: moment().format()
    }

    if(!newClient.name) {
      return res.status(400).json({ msg: "please put new name" });
    }
    console.log('new client added');

    clientData.push(newClient);

    const json = JSON.stringify(clientData);

    fs.writeFile('./data/clients.json', json, 'utf8', function(err) {
        if (err) throw err;
        console.log('complete');
    });
    // console.log(clientData)
    res.json(clientData)
});


// Update for Client
router.put('/:id', (req, res) => {
    const foundClient = clientData.some( client => client.id === req.params.id);

    if(foundClient){
        const updateClient = req.body;

        clientData.forEach((client) => {
            if(client.id === req.params.id){
                client.name = updateClient.name ? updateClient.name : client.name;
                client.age = updateClient.age ? updateClient.age : client.age;
                client.id = updateClient.id ? updateClient.id : client.id;

                const json = JSON.stringify(clientData);

                fs.writeFile('./data/clients.json', json, 'utf8', function(err) {
                    if (err) throw err;
                    console.log('complete');
                });

                res.json({msg: "Client Updates", client});
            }
        });
    } else {
        res.status(400).json({msg: 'Client not found'});
    }
});


// Delete Client
router.delete('/:id', (req, res) => {
    const foundClient = clientData.some( client => client.id === req.params.id);

    if(foundClient){
        clientData = clientData.filter(client => client.id !== req.params.id);

        const json = JSON.stringify(clientData);
        console.log(`delete function data: ${json}`)

        fs.writeFile('./data/clients.json', json, 'utf8', function(err) {
            if (err) throw err;
            console.log('complete');
        });

        res.json({msg: "Client Deleted", clientData: clientData.filter(client => client.id !== req.params.id)});
    } else {
        res.status(400).json({msg: 'Client not found'});
    }
});

module.exports = router; 
