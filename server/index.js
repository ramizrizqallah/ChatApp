const path = require("path");
const express = require("express");
const app = express(); // create express app
var bodyParser = require("body-parser");
const morgan = require('morgan')

const userRoute = require('../routes/user')
const chatRoomRoute = require('../routes/chatRoom') 

// var db = require("../database");
app.use(morgan('dev'))
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

app.use('/api/user',userRoute)
app.use('/api/chatRoom',chatRoomRoute)