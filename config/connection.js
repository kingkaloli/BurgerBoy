require ('dotenv').config()
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password: process.env.password,
  database : `burger_db`
});

    connection.connect(function(err) {
    if (err)throw err;
   
    
    });
    module.exports  = connection;

    // password: process.env.password,

