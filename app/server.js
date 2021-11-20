const express = require("express");
const app = express();
const DB = require("../database/connection.js")
const bodyParser = require("body-parser")
const port = 5000;
const routes = require("./routes.js")

//Using body parser for post request data
app.use(bodyParser.urlencoded({extended:true}));

//Routes
app.use("/", routes)

//Static Filrd Folder
app.use(express.static('public'))

//Template engine
app.set("view engine", "pug");

//Listen on port 5000
app.listen(port, ()=> console.log (`Example app listening on port ${port}.`))

