const mysql = require("mysql")

const DB = mysql.createConnection({
    host: "remotemysql.com",
    user: "LdyzmV6NgF",
    password:"b3YYrsgbFk",
    database:"LdyzmV6NgF",
    multipleStatements: true
})

DB.connect(error => {
    if(!error){
        console.log("Connected to Database");
        //Running Migration of tables
        DB.query("SELECT 1 FROM posts LIMIT 1", (error,
            result)=>{
                if(error){
                    //Create table
                    console.log("Creating table posts");
                    DB.query(
                        `CREATE TABLE posts(id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, title VARCHAR(60) NOT NULL, description MEDIUMTEXT NOT NULL, image_url MEDIUMTEXT NOT NULL)`,
                        (error, results) => {
                        if(error){
                            console.log("ERROR WITH CREATING TABLE");
                            console.log(error);
                        }else{
                            console.log("Created table");
                        }
                    })
                }else{
                    console.log("Table posts already exist")
                }
            });
    }else{
        console.log("NO CONNECTION");
    }
 });

 module.exports = DB;