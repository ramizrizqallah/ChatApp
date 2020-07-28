const express = require('express')
const router = express.Router()

const chatRoomController = require('../Controllers/chatRoomController')

router.get('/',chatRoomController.index)
router.post('/show',chatRoomController.showChatRoom)
router.post('/store',chatRoomController.addChatRoom)
router.post('/delete',chatRoomController.deleteChatRoom)

module.exports = router