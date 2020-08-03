const express = require('express')
const router = express.Router()
// const db = require('../database/db')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')


process.env.SECRET_KEY = 'secret'

const authController = require('../Controllers/authController')

router.get('/me',authController.verifyUser)
router.post('/login',authController.login)



module.exports = router