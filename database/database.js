const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/eventsDB',{ useUnifiedTopology: true,useNewUrlParser: true },(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("connected to db successfully")
    }
})

module.exports = {
    User: require("./models/user")
};