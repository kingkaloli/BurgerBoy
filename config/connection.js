var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password: process.env.password,
  database : `burger_db`
});

    connection.connect(function(err) {
    if (err)throw err;
    console.log('connected as id ' + connection.threadId);
    
    });
mudule.exports = connection;