const express = require("express"),
 router = express.Router();
const DB = require("../database/connection")


router.get("/", (req, res) => {
  return res.render("../assets/views/homepage.pug") ; 
})

router.get("/post/create", (req, res) => {
  return res.render("../assets/views/post/create.pug") ; 
})
router.post("/post/create", (req, res) => {
  const post = req.body;
  DB.query(
    `INSERT INTO posts (title, description, image_url) VALUES ('${post.title}', '${post.description}', '${post.image_url}' )`,
    (error, result) =>{
      if(error){
        console.log("error")
        console.log(error)
        return res.redirect("/post/create")
      }else{
        return res.redirect("/")
      }
    }
    );
})

router.get("/post/:id", (req, res) => {
  DB.query(
    `SELECT * FROM posts WHERE id =${req.params.id}`,
    (error, result) => {
      if(error){
        console.log("error");
        console.log(error);
        return res.redirect("/");
      }else{
        console.log("results:");
        console.log(result[0]);
        return res.render("../assets/views/post/show.pug", result[0]) ; 
      }
    }
  );
  

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