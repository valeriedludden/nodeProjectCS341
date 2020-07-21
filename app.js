const express = require("express");
const PORT = process.env.PORT || 5000;
const path = require("path");
const app = express();
const { Pool } = require('pg');
require('dotenv').config();

const activityController = require("./controller/activityController");

app.use(express.static(path.join(__dirname +'/public')));

app.set("view engine", "ejs");
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({extended: true})); // support url encoded bodies


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
});

app.get("/", function (req, res) {
  console.log("Received a request for the HOME page");
  // res.render("index", {data: data});
  res.render("index");
  res.end()
});
app.get("/list", activityController.getActivityList);
app.get("/item/:id", activityController.getActivityById);

app.get('/ajax', function(req, res){
  console.log("ajax request")
  res.render('ajax', {title: 'An Ajax Example', quote: "AJAX is great!"});
});
app.post('/ajax', function(req, res){
  res.render('ajax', {title: 'Valerie', quote: req.body.quote});
});


app.listen(PORT, function() {
  console.log("The server is up and listening on port 5000");
});
