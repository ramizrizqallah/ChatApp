const express = require('express')
const router = express.Router()

const userController = require('../Controllers/userController')

router.get('/',userController.index)
router.post('/show',userController.showUser)
router.post('/store',userController.addUser)
router.post('/update',userController.updateUser)
router.post('/delete',userController.deleteUser)

module.exports = router