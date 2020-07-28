const path = require("path");
const express = require("express");
const app = express(); // create express app
var bodyParser = require("body-parser");
// var db = require("../database");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// add middleware
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("../public"));
app.post("/form", function(req, res) {

});
// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});