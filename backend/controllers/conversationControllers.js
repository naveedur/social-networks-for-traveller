const conversation=require('../models/conversationModel.js')

exports.addConversation=async(req,res)=>{
    try {
        const data= new conversation({
            members:[req.body.senderId, req.body.recevierId],
        })
        const newData=await data.save();
        res.status(200).json({type:"success",data:newData})
        
    } catch (error) {
        res.status(500).json({type:"errorrr", message:error.message})
    }
};
exports.getConversations= async(req, res) => {
    try {
      const conversations = await conversation.find({
        members: { $in: [req.params.userId] },
      });
      res.status(200).json(conversations);
    } catch (err) {
      res.status(500).json(err);
    }
  }