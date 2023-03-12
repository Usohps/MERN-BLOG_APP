// const { response } = require("express");
const express = require("express");
const {default: mongoose}= require("mongoose")
require("dotenv").config();
const cors = require('cors')
// import the routes into the costant below
const blogRoutes = require("../backend/routes/blogRoute")
// To initiate express next line
const app = express();
app.use(express.json())
app.use(cors())
app.use((request, response,next) =>{
    console.log(request.path, request.method)
    next()
})
app.use("/api/blog",blogRoutes)
const start = async () =>{
    try{
       await mongoose.connect("mongodb://127.0.0.1:27017/userSignup")
       await app.listen(process.env.PORT, () => {
        console.log("I am connected to db and listening on port", process.env.PORT);
      });
    } catch (err) {}
};
start().catch((err) => {
    console.log(err);
  });
