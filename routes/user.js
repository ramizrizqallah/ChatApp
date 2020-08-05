const express = require('express')
const router = express.Router()
const User = require('../database/models/user')
// const db = require('../database/db')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')


process.env.SECRET_KEY = 'secret'

const userController = require('../Controllers/userController')

router.get('/',userController.index)
router.post('/show',userController.showUser)
router.post('/store',userController.addUser)
router.put('/update',userController.updateUser)
router.post('/delete',userController.deleteUser)
router.post('/search',userController.userSearch)


module.exports = router