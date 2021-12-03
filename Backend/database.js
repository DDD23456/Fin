const mysql = require("mysql");
// Import dotenv to import properties from .env file
const dotenv = require("dotenv").config();

// Define properties to be used for mysql connection
const properties = {
    host: `${process.env.DBHOST}`,
    port: `${process.env.DBPORT}`,
    user: `${process.env.DBUSER}`,
    password: `${process.env.DBPASSWD}`,
    database: `${process.env.DBNAME}`,
};

let connection = mysql.createConnection(properties);

connection.connect((errors) => {
  if (errors) console.log(errors);
  else console.log("Connected to MySQL server!");
});

module.exports = connection;
