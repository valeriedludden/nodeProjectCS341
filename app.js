const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const { Pool } = require('pg');
require('dotenv').config();
var router = express.Router();

const connectionString = process.env.DATABASE_URL;
app.use(express.static(__dirname +'/public'));
// app.set("views", "views"); todo is the needed?
app.set("view engine", "ejs");
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({extended: true})); // support url encoded bodies
console.log("DATA = ", connectionString);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
});

app.post(function(req, res, next){
  next();
});

app.get('/ajax', function(req, res){
  console.log("ajax request")
  res.render('ajax', {title: 'An Ajax Example', quote: "AJAX is great!"});
});
app.post('/ajax', function(req, res){
  res.render('ajax', {title: 'An Ajax Example', quote: req.body.quote});
});




app.get("/", function (req, res) {
  console.log("Received a request for the HOME page");
  res.render("index");
  res.end()
});



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
function getActivites(callback) {
  let sql = "SELECT a.name, a.price, a.type_id, t.name, p.amount FROM activity a, type t, price p where a.type_id = t.id AND a.price = p.id;"
  pool.query(sql, params, function (err, result) {
    if (err) {
      console.log("Error in query: ")
      console.log(err);
      callback(err, null);
    }
    callback(null, result.rows);
  });
}


app.listen(PORT, function() {
  console.log("The server is up and listening on port 5000");
});
