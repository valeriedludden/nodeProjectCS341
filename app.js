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
// app.use('/activity', activtyRouter);
// const activtyRouter = require("./src/routes/activityRoutes");
// const connectionString = process.env.DATABASE_URL;
// app.set("views", "views"); todo is the needed?


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

app.get('/ajax', function(req, res){
  console.log("ajax request")
  res.render('ajax', {title: 'An Ajax Example', quote: "AJAX is great!"});
});
app.post('/ajax', function(req, res){
  res.render('ajax', {title: 'Valerie', quote: req.body.quote});
});


var sql = "SELECT a.name, a.price, a.type_id, t.name, p.amount FROM activity a, type t, price p where a.type_id = t.id AND a.price = p.id;"

// pool.query(sql, function(err, result) {
//   // If an error occurred...
//   if (err) {
//     console.log("Error in query: ");
//     console.log(err);
//   }
//
//   //Log this to the console for debugging purposes.
//   console.log("Back from DB with result:");
//   console.log(JSON.stringify(result.rows));
//
//
// });
// function getActivites(callback) {
//
//   pool.query(sql, function (err, result) {
//     if (err) {
//       console.log("Error in query: ")
//       console.log(err);
//       callback(err, null);
//     }
//     // callback(null, result.rows);
//     console.log(JSON.stringify(result.rows));
//   });
// }


app.listen(PORT, function() {
  console.log("The server is up and listening on port 5000");
});
