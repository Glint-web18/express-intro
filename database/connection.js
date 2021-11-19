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
    
    }else{
        console.log("NO CONNECTION");
    }
 });

 module.exports = DB;