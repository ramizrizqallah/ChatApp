const db = require('../database/db')
const { response } = require('express')

// show the list of user
// next mean go to next execution
const index = (req,res,next) => {
    // return all of the user in the db
    db.ChatRoom.find().then(response =>{
        // if is okay return response
        res.json({
            response
        })
        // if not return an error
    }).catch(error =>{
        res.json({
            message: 'an Error occurred'
        })
    })
}

// show single user
const showChatRoom = (req,res,next) =>{
    let chatRoomID = req.body.chatRoomID
    db.ChatRoom.findById(chatRoomID).then(response =>{
        // if is okay return response
        res.json({
            response
        })
        // if not return an error
    }).catch(error =>{
        res.json({
            message: 'an Error occurred'
        })
    })
}
// add new user
const addChatRoom = (req,res,next)=>{
    let chatRoom = new db.ChatRoom({
        name:req.body.name,
        Id:req.body.Id,
        listOfMembers:req.body.listOfMembers,
        listOfMessages:req.body.listOfMessages

    })
    chatRoom.save().then(response =>{
        // if is okay return response
        res.json({
            message: 'user Added successfully'
        })
        // if not return an error
    }).catch(error =>{
        res.json({
            message: 'an Error occurred'
        })
    })
}


// delete a user
const deleteChatRoom =(req,res,next) =>{
    let chatRoomID = req.body.chatRoomID

    db.ChatRoom.findByIdAndDelete(chatRoomID)
    .then(() =>{
        res.json({
            message: 'user deleted successfully'
        })
    }).catch(error =>{
        res.json({
            message: 'an Error occurred'
        })
    })
}
module.exports = {
 index,showChatRoom,deleteChatRoom,
addChatRoom
}