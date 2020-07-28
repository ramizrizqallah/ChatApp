const mongoose = require('mongoose')
const messageSchema = new mongoose.Schema({

    id:{
        type:Number,
        
    },
    idOfSender:{
        type:Number,
        
    },
    idOfReceiver:{
        type:Number,
        
    },
    text:{
        type:String,
        
    },
    status:{
        type:String,
        
    },
    dateOfSending:{
        type:Date,
        
    },
    attachment:{
        type:Object,
        
    },

})

let message = mongoose.model('message',messageSchema);

module.exports = message