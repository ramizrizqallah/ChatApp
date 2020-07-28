const mongoose = require("mongoose");
const URI = "mongodb+srv://mays:alsalamhuna1@chatapp.xkxye.mongodb.net/chatApp?retryWrites=true&w=majority"

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("We are connected");
});

module.exports = {
  User:require('./models/user'),
  ChatRoom:require('./models/chatRoom')
}