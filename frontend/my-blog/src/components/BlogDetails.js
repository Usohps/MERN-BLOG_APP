import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Homecontext } from "../context/HomeContext";
function BlogDetails({ blog }) {
  const {Delete}=useContext(Homecontext)
  const handleDelete = async () => {
    await axios
      .delete(`${process.env.REACT_APP_BASE_URL}/api/blog/${blog._id}`)
      .then((response) => {
        Delete(response.data._id)
        console.log(`Successfully deleted element with ID ${blog._id}`);
      })
      .catch((error) => {
        console.error(
          `Failed to delete element with ID ${blog._id}. Error: ${error}`
        );
      });
  };

  return (
    <>
      <Link to={`/book/${blog._id}`}>
        <div className=" w-full cursor-pointer p-4 space-y-3">
          <h1>{new Date(blog.createdAt).toDateString()}</h1>
          <div className="flex gap-4 items-center">
            <div className="border">
              <img
                src={blog.image}
                className="w-full h-44 object-center object-cover"
                alt=""
              />
            </div>
            <div>
              <p className="font-semibold ">
                {blog.title.slice(0, 50)}{" "}
                <span className="font-thin italic">...Learn More</span>
              </p>
            </div>
          </div>
          <h3 className="text-right">Authored by: {blog.author}</h3>
        </div>
      </Link>
      <button
        onClick={handleDelete}
        className="border p-1 bg-red-600 text-white rounded font-bold"
      >
        DELETE
      </button>
    </>
  );
}

export default BlogDetails;
