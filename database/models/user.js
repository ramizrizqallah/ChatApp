const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    Id: {
        type: Number
    },
    bio: {
        type: String
    },
    avatar:{
        type:Object
    },
    listOfFriends: {
        type: Array
    },
    listOfChatRoom: {
        type: Array
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    numberOfUnRead: {
        type: Number
    },
    gender: {
        type: String
    }
},
    { timestamps: true })

userSchema.index({"fullName":"text"})
let user = mongoose.model('user',userSchema);

module.exports = user