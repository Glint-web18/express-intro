const express = require("express");
const app = express();
const port = 5000;
const routes = require("./routes.js")

//Routes
app.use("/", routes)

//Static Filrd Folder
app.use(express.static('public'))

//Template engine
app.set("view engine", "pug");

//Listen on port 5000
app.listen(port, ()=> console.log (`Example app listening on port ${port}.`))

