const express =  require("express")
const router = express.Router()
const {createBlog, getAllBlogs} = require("../controllers/blogController")
 router.post("/", createBlog)
 router.get("/allBlogs",getAllBlogs)
 module.exports = router 