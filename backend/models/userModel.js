const mongoose=require('mongoose')


const userSchema=new  mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        requied:true,
        unique:true,
    },
    profileImage:{
        type:String
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    }
},
{ timestamps: true }
);

module.exports=mongoose.model("user",userSchema)