//import express module
//express module used to develop the Rest API'S
var express = require("express");

//import body-parser module
//body-parser module used to read the client data
var bodyparser = require("body-parser");

//import cors module
//cors module used to enable the ports communication
var cors = require("cors");

//create the Rest Object
//we must call express class constructor
var app = express();
//where "app" object used to develop the Rest API'S

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//enable the cors
app.use(cors());

//import the fetch module
var fetch = require('./fetch/fetch');
app.use('/fetch',fetch);

var insert = require('./insert/insert');
app.use('/insert',insert);

var update = require('./update/update');
app.use('/update',update);

var remove = require('./delete/delete');
app.use('/delete',remove);
//assign the port no
app.listen(8080);
console.log("Server Listening the port no.8080");