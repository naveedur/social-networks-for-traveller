const User=require('../models/userModel.js')
const bcrypt=require('bcrypt')

exports.registerUser=async(req,res)=>{
    try {
        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(req.body.password,salt);

        const newUser= new User({
            name:req.body.name,
            email:req.body.email,
            password:hashPassword,
        });
        const user=await newUser.save();
        res.status(200).json({type:"success",data:user})
     
    } catch (error) {
        res.status(500).json({types:"error", message:error.message})
    }
}

exports.loginUser=async(req,res)=>{
    try {
        const loginUser=await User.findOne({email:req.body.email})
        if(!loginUser){
            res.status(400).json({type:"error",message:"user not found"})
        }else{
            const validPassword=await bcrypt.compare(req.body.password,loginUser.password);
            if(!validPassword){
                res.status(400).json({type:"error",message:"user not found"})

            }
            res.status(200).json({type:"success", data:loginUser})
        }
        
    } catch (error) {
        res.status(500).json({type:"error", message:error.message}) 
    }
}

exports.updateUser=async(req,res)=>{
    try {
        if(req.body.password){
            const salt=await bcrypt.genSalt(10)
            req.body.password=await bcrypt.hash(req.body.password, salt)
        }
        const user=await User.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).json({type:"success",message:"updated Successfully"})
    } catch (error) {
        res.status(500).json({type:"error", message:error.message})
        
    }
}

exports.deleteUser=async(req,res)=>{
    try {
        const user=await User.findByIdAndDelete(req.params.id)
        res.status(200).json({type:"success",message:"deleted Successfully"})
    } catch (error) {
        res.status(500).json({type:"error", message:error.messagae})
        
    }
}

exports.getUser=async(req,res)=>{
    try {
        const user=await User.findById(req.params.id)
        const {password, updatedAt, ...others}=user._doc;
        res.status(200).json({type:"success",data:others})
    } catch (error) {
        res.status(500).json({type:"error", message:error.messagae})
        
    }
}