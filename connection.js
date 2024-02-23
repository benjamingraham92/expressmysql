 // MAMP
 const mysql  = require("mysql2");
 const db = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'root',
     database: 'webdev',
     port: '8889' 
 });
 
 db.connect( (err)=> {
     if(err) throw err;
     console.log("Connected to db successfully")
 });
 
 module.exports = db;
 