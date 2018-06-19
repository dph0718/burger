// Set up MySQL connection.
var mysql = require("mysql");

// const ENV_PASSWORD = "Turkey1Valor";

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: ENV_PASSWORD || "Turkey1Valor",
//   database: "burgers_db"
// });
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
