const express = require("express");
const cors = require("cors");

const account_mapping = require("./account");
const user_mapping = require("./user");
const transaction_mapping = require("./transaction");

let server = express();

server.use(express.json());
server.use(cors());

server.use(user_mapping.router);
server.use(account_mapping.router);
server.use(transaction_mapping.router);

server.listen(3000, (error) => {
if (error) {
    console.log(error);    
} else {
    console.log("server started at port 3000")
}

})

