import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useSignup } from "../hooks/useSignUp";
function Register() {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const usersDetails = { names, email, password };
  // console.log(usersDetails)
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/user/signup`, usersDetails)
      .then((res) => navigate("/login"))
      .catch((err) => {
        if (err) {
          const error = err.response.data.error;
          console.log(error);
          setErrorMsg(error);
          setError(true);
        }
      });
    // const data = `${process.env.REACT_APP_BASE_URL}/api/user/login`
    // console.log(data)
  };
  return (
    <div className="flex flex-col justify-center items-center pt-6">
      <div className="w-full md:w-[50%] text-center py-6 space-y-3">
        <h1 className="text-2xl font-extrabold">Welcome To CozyBlog</h1>
        <p className="italic font-mono">
          To gain access enter credentials below, if already a user please
          <Link to={"/login"}>
            <span className="text-green-400 font-bold "> Log in</span>
          </Link>
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-10 md:space-y-6 w-full md:w-[600px] shadow-lg flex flex-col justify-center items-center  md:p-4 md:h-[400px] m-auto md:border border-gray-200 border-r-0 border-l-0"
      >
        <div className="space-y-2">
          <label htmlFor="">FULL-NAME</label>
          <input
            value={names}
            name="names"
            onChange={(e) => {
              setNames(e.target.value);
            }}
            type="text"
            className={"block outline-none border w-[300px] p-2 rounded"}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="">EMAIL</label>
          <input
            value={email}
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className={"block  outline-none border w-[300px] p-2 rounded "}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="">PASSWORD</label>
          <input
            value={password}
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className={"block outline-none border w-[300px] p-2 rounded"}
          />
        </div>
        <div className="w-full p-2 flex flex-col md:items-end items-center">
          <button className="border p-2">SIGN UP</button>
        </div>
        {error && (
          <span className="border container text-center md:w-[600px] bg-red-500 p-2 text-black font-extrabold">{errorMsg}</span>
        )}
      </form>
    </div>
  );
}

export default Register;
