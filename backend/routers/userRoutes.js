const express=require('express')
const {registerUser,loginUser,updateUser,deleteUser,getUser}=require('../controllers/userControllers.js')

const router=express.Router()

//register user
router.post('/register', registerUser)

//login user
router.post ('/login',loginUser)

// update user
router.put('/:id', updateUser)

//delete user
router.delete('/:id',deleteUser)

//get user
router.get('/:id', getUser)

module.exports=router