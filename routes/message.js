const express = require('express')
const router = express.Router()
const messageController = require('../Controllers/messageController')


router.get('/',messageController.list)
router.post('/append',messageController.appendMessage)
router.post('/get',messageController.getMessage)
router.post('/delete',messageController.deleteMessage)


module.exports = router