const mongoose = require('mongoose')

const chatRoomSchema = new mongoose.Schema({
    name:{
        type:String
    },
    Id:{
        type:Number
    },
    listOfMembers:{
        type:Array
    },
    listOfMessages:{
        type:Array
    }
},
{timestamps:true})

let chatRoom = mongoose.model('chatRoom',chatRoomSchema);

module.exports = chatRoom