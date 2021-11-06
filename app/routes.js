const express = require("express"),
router = express.Router();


router.get("/", (req, res) => res.send("<h1>Welcome to React</h1>") );

router.get("/about", function(req, res){
    console.log("Go to about page")
    res.send("<h1>About Page</h1>")
})

router.get("/user/:username/:status", function(req, res) {
    console.log(req.params);
    const user = req.params;
    const query = req.query;
    res.send(`
    <h1>User: ${user.username}</h1>
    <h1>Status: ${user.status}</h1>
    <h1>Low: ${query.low}</h1>
    <h1>High: ${query.high}</h1>
    <h1>Car: ${req.query.car}</h1>`)
} );

module.exports =router;