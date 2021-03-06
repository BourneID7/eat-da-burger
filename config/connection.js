var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
  });
}
  
  // Make connection.
  connection.connect(function(err) {
    if (err){
      console.log("Error: " + err)

      // throw err;
    } 
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for ORM to use.
  module.exports = connection;