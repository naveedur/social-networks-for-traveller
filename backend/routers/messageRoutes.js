const express=require('express')
const {addMessage,getMessages}=require('../controllers/messageControllers.js')

const router=express.Router()

//add message
router.post('/add', addMessage)

//get

router.get("/:conversationId", getMessages);

module.exports=router