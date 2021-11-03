const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("<h1>Welcome to React1</h1>") );

app.listen(port, ()=> console.log (`Example app listening on port ${port}.`))