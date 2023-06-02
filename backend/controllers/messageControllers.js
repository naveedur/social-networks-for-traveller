const message=require('../models/messageModel.js')

exports.addMessage= async(req,res)=>{
  try {
    const newMessage= new message(req.body)

    const saveMessage= await newMessage.save();
    res.status(200).json({type:"success",data:saveMessage})
  } catch (error) {
    res.status(500).json({type:"error", message:error.message})
    
  }
};

exports.getMessages= async(req, res)=>{
    try {
      const messages = await message.find({
        conversationId: req.params.conversationId,
      });
      res.status(200).json({type:"success",data:messages});
    } catch (error) {
      res.status(500).json({type:"success",message:error.message});
    }
  }