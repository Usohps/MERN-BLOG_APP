const blogSchema = require("../model/blogSchema")
const mongoose = require("mongoose");

const createBlog = async (req ,res) => {
    const {title , body,image,author} = req.body
    const emptyfeild = []
if (!title){
    emptyfeild.push("title")
}
if(!body){
    emptyfeild.push("body")
}
if(!image){
    emptyfeild.push("image")
}
if(!author){
    emptyfeild.push("author")
}
if(emptyfeild.length > 0){
   return res
   .status(400)
   .json({error:"Please complete give all required details to create a blog", emptyfeild})
}
try{
    const blog = await blogSchema.create({title,body,image,author})
    res.status(200).json(blog);
}catch (error){
    res.status(400).json({error: error.message})
}
}
const getAllBlogs = async(req ,res)=>{
 const blog = await blogSchema.find({}).sort({createdAt:-1})
 res.status(200).json(blog)
}
module.exports = {createBlog,getAllBlogs}