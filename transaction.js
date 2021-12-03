const express = require("express");
const connection = require("./database");

let router = express.Router();

//  To get all the users.
router.get("/transaction/all", (request, response) => {
  connection.query("select * from transaction", (error, records) => {
    if (error) {
      console.log(error);
      response.status(500).send("Some error ocurred while executing query");
    } else {
      response.status(200).send(records);
    }
  });
});

router.get("/transaction/by-tid", (request, response) => {
  connection.query(`select * from transaction where Transaction_ID = '${request.query.transaction_id}'`, (errors, results) => {
    if (errors) {
      console.log(errors);
      response.status(500).send("Internal Serve Error");
    } else {
      response.status(200).send(results);
    }
  });
});

router.get("/transaction/by-uid", (request, response) => {
  connection.query(`select * from transaction where User_ID = '${request.query.user_id}'`, (errors, results) => {
    if (errors) {
      console.log(errors);
      response.status(500).send("Internal Serve Error");
    } else {
      response.status(200).send(results);
    }
  });
});


module.exports = { router };
