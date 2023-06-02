const BlogPost=require('../models/blogModel.js')

exports.addPost=async(req,res)=>{
    try {
        const post= new BlogPost({
            title:req.body.title,
            content:req.body.content,
        });
        const newPost=await post.save();
        res.status(200).json({type:"success",data:newPost});      
    } catch (error) {
        res.status(500).json({type:"error", message:error.message});
        
    }
};

exports.getAllPosts=async(req,res)=>{
    try {
        const posts=await BlogPost.find();
        res.status(200).json({type:"success", data:posts});  
    } catch (error) {
        res.status(500).json({type:"erroris comming", message:error.message});
        
    }
};

exports.getPost=async(req,res)=>{
    try {
        const post=await BlogPost.findById(req.params.id);
        if(!post){
            res.status(400).json({type:"error", mesage:"post not found"}) ;
        }else{
            res.status(200).json({type:"success",data:post})  ;
        }
            
    } catch (error) {
        res.status(500).json({type:"error", mesage:error.message});
        
    }
};

exports.updatePost=async(req,res)=>{
    try {
        const post=await BlogPost.findByIdAndUpdate(req.params.id,{$set:req.body});
        res.status(200).json({type:"success",message:"post updated successfully"}) ;     
    } catch (error) {
        res.status(500).json({type:"error", mesage:error.message});
        
    };
};

exports.deletePost=async(req,res)=>{
    try {
        const post=await BlogPost.findByIdAndDelete(req.params.id);
        res.status(200).json({type:"success",message:"post deleted Sucessfully"}) ;     
    } catch (error) {
        res.status(500).json({type:"error", mesage:error.message});
        
    }
};


