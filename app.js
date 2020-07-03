const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const { Pool } = require('pg');
require('dotenv').config();

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://wqtqmfmnksxhcp:80e91f719c5d8acd0c3938dc69200047bb309f3c6622ac19ff76da7aad67793a@ec2-54-81-37-115.compute-1.amazonaws.com:5432/d6121u2v6vbvmt?ssl=true',
  ssl: process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
});

app.post(function(req, res, next){
  next();
});

app.use(express.static('/views'));
app.set("views", "views");
app.set("view engine", "ejs");
console.log("DATA = ", connectionString);

app.get("/", function (req, res) {
  console.log("Received a request for the HOME page");
  res.render("index");
  res.end()
});

var sql = "SELECT first_name FROM document_owner where first_name = 'John'";

pool.query(sql, function(err, result) {
  // If an error occurred...
  if (err) {
    console.log("Error in query: ");
    console.log(err);
  }

  //Log this to the console for debugging purposes.
  console.log("Back from DB with result:");
  console.log(JSON.stringify(result.rows));


});


app.listen(PORT, function() {
  console.log("The server is up and listening on port 5000");
});
