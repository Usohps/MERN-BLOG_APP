import axios from "axios";
import React, { useContext, useState } from "react";
import BlogDetails from "../components/BlogDetails";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Homecontext } from "../context/HomeContext";
function Home() {
  const {SetUpload,uploads}= useContext(Homecontext);
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  console.log({uploads})
  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/blog/blogs`, {})
      .then((response) => {
        const data = response.data;
        setBlogs(data);
        SetUpload(data)
      });
  };

  return (
    <>
      <div className="mt-10 text-center text-2xl font-bold">
        <h1>WELCOME TO MY BLOG</h1>
      </div>
      {uploads.length > 0 ? (
        <div className="w-full md:container flex flex-col md:flex-row gap-4 items-center justify-center flex-wrap m-auto">
        {uploads &&
          uploads.map((blog) => (
              <div
                className="w-full lg:w-[400px] shadow-lg space-y-4 hover:shadow-none ease-in-out duration-500"
                key={blog._id}
              >
                <BlogDetails blog={blog} />
              </div>
          ))}
      </div>
      ):(
        <div className="container m-auto shadow-xl rounded flex flex-col justify-center text-center items-center font-medium border border-t-0 h-[400px] p-4">
          <div>
            <h1 className="text-lg font-bold"> <span className="font-extrabold text-red-900 text-5xl">Sorry</span>,<br></br> No new Blogs yet please ensure you click the button on your screen below to create new blogs</h1>
          </div>
        </div>
      )}
      
      <Link to={"/create"}>
      <div className=" items-center flex flex-col p-2 my-6">
         <button className=" bg-green-400 border p-2 font-extrabold rounded-md">click to create blog</button>
      </div>
      </Link>
    </>
  );
}

export default Home;
