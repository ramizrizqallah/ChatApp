const express = require('express')
const router = express.Router()
// const db = require('../database/db')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')


process.env.SECRET_KEY = 'secret'

const userController = require('../Controllers/userController')

router.get('/',userController.index)
router.post('/show',userController.showUser)
router.post('/store',userController.addUser)
router.post('/update',userController.updateUser)
router.post('/delete',userController.deleteUser)
router.post('/login',userController.login)
// router.post('/login', (req, res) => {
//     //email and password
//     const email = req.body.email
//     const password = req.body.password

//     //find user exist or not
//    db.User.findOne({ email })
//         .then(user => {
//             //if user not exist than return status 400
//             if (!user) return res.status(400).json({ msg: "User not exist" })

//             //if user exist than compare password
//             //password comes from the user
//             //user.password comes from the database
//             bcrypt.compare(password, user.password, (err, data) => {
//                 //if error than throw error
//                 if (err) throw err

//                 //if both match than you can do anything
//                 if (data) {
//                     return res.status(200).json({ msg: "Login success" })
//                 } else {
//                     return res.status(401).json({ msg: "Invalid credencial" })
//                 }

//             })

//         })

// })


module.exports = router