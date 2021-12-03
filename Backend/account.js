const express = require("express");
const connection = require("./database");

let router = express.Router();

//  To get all the accounts.
router.get("/account/all", (request, response) => {
  connection.query(`select * from account`, (error, records) => {
    if (error) {
      console.log(error);
      response.status(500).send("Some error ocurred while executing query");
    } else {
      response.status(200).send(records);
    }
  });
});

// To GET request on API path /account/by-aid
router.get("/account/by-aid", (request, response) => {
  connection.query(`select * from account where User_ID = '${request.query.user_id}'`, (error, records) => {
    if (error) {
      console.log(error);
      response.status(500).send("Internal Serve Error"); // status(500) sets the status code to 500, which means some error occurred in the server.
    } else {
      response.status(200).send(records); // status(200) sets the status code to 200, which means response is OK.
    }
  });
});

// To GET request on API path (for password login)
router.get("/account/login", (request, response) => {
  connection.query(`select * from account where User_ID = '${request.query.user_id}' AND Password =  '${request.query.pwd}'`, (error, records) => {
    if (error) {
      console.log(error);
      response.status(500).send("Internal Serve Error"); 
    } else {
      response.status(200).send(records); 
    }
  });
});

module.exports = { router };