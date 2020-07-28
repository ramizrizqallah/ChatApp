const  db  = require('../database/db')
const { response } = require('express')


const list = (req,res,next) => {
    
    db.Message.find().then(response =>{
       
        res.json({
            response
        })
       
    }).catch(error =>{
        res.json({
            message: 'an Error occurred'
        })
    })
}

//adds the message to the specific ChatRoom
const appendMessage = (req,res,next) => {
    let message = new db.Message({
        id: req.body.id,
        idOfSender:  req.body.idOfSender,
        idOfReceiver:  req.body.idOfReceiver,
        text:  req.body.text,
        status:  req.body.status,
        dateOfSending:  req.body.dateOfSending,
        attachment:  req.body.attachment,

    })
    message.save().then( response =>{
        res.json({
            message: 'Message Saved and Appended Successfully!'
        })
    }).catch(error =>{
        res.json({
            message: 'Message Saving/Appending Error Occurred'
        })
    })

}

//gets a message by ID
const getMessage = (req,res,next) =>{
    let messageID =req.body.messageID

    db.Message.findById(messageID).then(response=>{
        res.json({
            response
        })
    }).catch(error =>{
        res.json({
            message: 'No Message Found By That ID'
        })
    })
    
}


//deletes Message from DB
const deleteMessage = (req,res,next) =>{
    let messageID = req.body.messageID

    db.Message.findByIdAndDelete(messageID)
    .then(() =>{
        res.json({
            message: 'Message Successfully Deleted'
        })
    }).catch(error =>{
        res.json({
            message: 'Error while deleting message'
        })
    })
}
module.exports = {
 list,appendMessage,getMessage,deleteMessage
}