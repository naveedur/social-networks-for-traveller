const mongoose=require("mongoose")


const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
      
    },
    headerImage:{
        type:String
    },
    content:{
        type:String,
        required:true
    }
},
{timestamps:true}
);
module.exports=mongoose.model('post',blogSchema)