const express = require("express");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const app = express();

app.use(express.static('/views'));
app.use(bodyParser.urlencoded({extended: true}));
app.set("views", "views");
app.set("view engine", "ejs");


app.get("/", function (req, res) {
  console.log("Received a request for the HOME page");
  res.render("index");
  res.end()
});

app.get("/getPerson")


app.listen(PORT, function() {
  console.log("The server is up and listening on port 5000");
});
