const express = require("express"),
router = express.Router();


router.get("/", (req, res) => {
  return res.render("../assets/views/homepage.pug") ; 
})

router.get("/pug", (req, res) => {
    return res.render("../assets/views/testing.pug",{
        username: "justinMac",
        fname: "Justin",
        lname:  "Glinton",
        loggedIn: true,
        friends: ['Dev', 'Erin', 'Fran', "Leigh" ]
    }) ; 
  })
  



module.exports =router;