const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName:{
        type:String
    },
    Id:{
        type:Number
    },
    bio:{
        type:String
    },
    avatar:{
        type:String
    },
    listOfFriends:{
        type:Array
    },
    listOfChatRoom:{
        type:Array
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
    numberOfUnRead:{
        type:Number
    }
},
    {timestamps:true})

let user = mongoose.model('user',userSchema);

module.exports = user