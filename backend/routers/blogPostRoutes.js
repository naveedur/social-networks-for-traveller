const express=require('express');
const {addPost,getAllPosts,getPost,updatePost,deletePost}=require('../controllers/blogPostControllers.js');

const router=express()

//post blogPost
router.post('/add',addPost)

//get all post
router.get('/all',getAllPosts)

//get single post
router.get('/:id',getPost)

//update blogPost
router.put('/:id',updatePost)

//deltet blogPost
router.delete('/:id',deletePost)

module.exports=router



