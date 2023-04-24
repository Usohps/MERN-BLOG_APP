import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
// import { useHref } from 'react-router-dom'
function BlogInfo() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getSingleBlog();
  }, []);

  const getSingleBlog = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/blog/${id}`,
      {}
    );
    console.log(response.data);
    setBlog(response.data);
    setIsLoading(false);
  };
  return isLoading ? (
    <div>Please Wait Loading....</div>
  ) : (
    <div className="container m-auto">
      <Link to={"/home"}>
        <button className="p-3 font-bold border mx-4 shadow-xl rounded-sm my-3">Back</button>
      </Link>
      <div className="container flex flex-col items-center pt-4 m-auto my-2">
        <img src={blog.image} alt="" className="w-[400px] rounded" />
      </div>
      <div className=" p-6 leading-8">
        <h1>{blog.body}</h1>
      </div>
      <div className=" m-4 py-6 font-bold flex items-center justify-between">
        <h3>{ new Date(blog.createdAt).toDateString}</h3>
        <h2><span className="font-thin">Posted by </span> {blog.author}</h2>
      </div>
    </div>
  );
}

export default BlogInfo;
