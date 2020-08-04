//const User = require('../database/models/user')
const db = require('../database/db')
const { response } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
var config = require('../config'); 
// show the list of user
const index = (req, res, next) => {
    db.User.find().then(response => {       // return all of the user in the db
        res.json({
            response
        })
    }).catch(error => {
        res.json({
            message: 'an Error occurred'
        })
    })
}

// show single user
const showUser = (req, res, next) => {
    let userID = req.body.userID
    db.User.findById(userID).then(response => {
        res.json({
            response
        })
    }).catch(error => {
        res.json({
            message: 'an Error occurred'
        })
    })
}


// add new user
const addUser = (req, res, next) => {
    let userEmail = req.body.email
    //check if the email is already exist in the db
    db.User.find({ email: userEmail }).count()
        .then((count) => {
            if (count > 0) {
                console.log("usssseerrr here", userEmail)
                console.log("count sdjshdflguhgl here", count)
                //Route to Login and show error
                res.json({
                    doesExist: true
                })
            } else {
                var hashedPassword = bcrypt.hashSync(req.body.password, 8);
                let user = new db.User({
                    fullName: req.body.fullName,
                    bio: req.body.bio,
                    avatar: req.body.avatar,
                    listOfFriends: req.body.listOfFriends,
                    listOfChatRoom: req.body.listOfChatRoom,
                    password: hashedPassword,
                    email: userEmail,
                    numberOfUnRead: req.body.numberOfUnRead

                })
                user.save().then(response => {
                    // if is okay return response
                    // create a token
                    var token = jwt.sign({ id: user._id }, config.secret, {
                        expiresIn: 86400 // expires in 24 hours
                    });
                    res.status(200).send({ auth: true, token: token });
                    res.json({
                        message: 'user Added successfully'
                    })
                    // if not return an error
                }).catch(error => {
                    res.json({
                        message: 'an Error occurred'
                    })
                })
            }
        });
}
//update a user
const updateUser = (req, res, next) => {
    let userID = req.body.userID

    let updateData = {
        fullName: req.body.fullName,
        Id: req.body.Id,
        bio: req.body.bio,
        avatar: req.body.avatar,
        listOfFriends: req.body.listOfFriends,
        listOfChatRoom: req.body.listOfChatRoom,
        email: req.body.email,
        password: req.body.password,
        numberOfUnRead: req.body.numberOfUnRead,
        gender: req.body.gender
    }

    db.User.findByIdAndUpdate(userID, { $set: updateData })
        .then(() => {
            res.json({
                message: 'user updated successfully'
            })
        }).catch(error => {
            res.json({
                message: 'an Error occurred'
            })
        })
}

// delete a user

const deleteUser = (req, res, next) => {
    let userID = req.body.userID

    db.User.findByIdAndDelete(userID)
        .then(() => {
            res.json({
                message: 'user deleted successfully'
            })
        }).catch(error => {
            res.json({
                message: 'an Error occurred'
            })
        })
}

module.exports = {
    index, updateUser, showUser, deleteUser,
    addUser
}