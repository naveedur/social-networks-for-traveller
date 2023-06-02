const express=require('express')
const mongoose=require('mongoose')
const userRouter=require('./routers/userRoutes.js')
const blogPostRouter=require('./routers/blogPostRoutes.js')
const conversationRouter=require('./routers/conversationRoutes.js')
const messageRouter=require('./routers/messageRoutes.js')
const cors = require('cors');


const app=express()
app.use(cors())
app.use(express.json())
app.use('/api',userRouter)
app.use('/api/blog',blogPostRouter)
app.use('/api/conversation',conversationRouter)
app.use('/api/message',messageRouter)


const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log('server in running on the port '+ PORT))

const CONNECTION_URL="mongodb+srv://todoapp:todoapp@cluster0.pwrvf1f.mongodb.net/travellerDB?retryWrites=true&w=majority"



mongoose.connect(CONNECTION_URL)
   .then(()=> console.log("database connected"))
   .catch((error)=> console.log(error.message))

mongoose.set('strictQuery', true)