import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Homecontext } from "../context/HomeContext";
function CreateBlog() {
  const { AddUpload } = useContext(Homecontext);
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dyse70wfx",
      uploadPreset: "myfsqlsx",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        setImage(result.info.secure_url);
        console.log("Done! Here is the image info: ", result.info);
      }
    }
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/blog/`, {
        title,
        body,
        image,
        author,
      })
      .then((res) => AddUpload(res.data), history("/home"));
    // (history("/home", { replace: true }));
  };
  return (
    <div className="w-full shadow-lg border mt-12 lg:w-[800px] md:w-[600px] m-auto ">
      <form
        className=" w-full space-y-12 items-center justify-center flex flex-col "
        onSubmit={handleSubmit}
      >
        <div
          className="w-[240px] border-[3px] border-dashed border-gray-500 h-[240px] flex justify-center items-center cursor-pointer rounded-xl"
          onClick={() => myWidget.open()}
        >
          {image ? (
            <img src={"image"} className="w-40" alt="blogimg" />
          ) : (
            <h3 className="text-gray-500 font-bold">Upload Photos Here</h3>
          )}
        </div>
        <div className="w-full flex md:flex-row flex-col justify-around gap-4 items-center">
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border outline-none rounded p-2 border-gray-500 block w-[250px]"
            />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border outline-none rounded p-2 border-gray-500 block w-[250px]"
            />
          </div>
        </div>
        <div className="w-full px-5 flex md:flex-row flex-col justify-between items-center ">
          <div className="w-full">
            <textarea
              name=""
              id=""
              cols="30"
              rows="8"
              value={body}
              className="border w-full p-2 outline-none rounded-md "
              placeholder="Type or paste blog contents here"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button className=" bg-green-400 border p-2 font-extrabold rounded-md">
          CREATE NOW
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
