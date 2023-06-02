const express=require('express')
const {addConversation,getConversations}=require('../controllers/conversationControllers.js')

const router=express.Router()

router.post('/add',addConversation)

//get conv of a user

router.get("/:userId",getConversations );
  

module.exports=router