import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
function Login() {
  const { Login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  async function handleLogin(e) {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/user/login`, {
        email,
        password,
      })
      .then((response) => {
        const data = response.data.token;
        console.log(response.data);
        Login(data);
        navigate("/home");
      })
      .catch((error) => {
        const errormsg = error.response.data.Error;
        console.log(errormsg);
        setError(errormsg);
      });
  }

  return (
    <div className="flex flex-col justify-center items-center pt-6">
      <div className="w-full px-6 md:px-0 md:container text-center py-6 space-y-3">
        <h1 className="text-2xl font-extrabold">Welcome Back</h1>
        <p className="italic font-mono text-green-600">
          To gain full access please enter your correct credentials below
        </p>
      </div>
      <form
        onSubmit={handleLogin}
        className="space-y-10 md:space-y-6  w-full md:w-[600px] shadow-lg flex flex-col justify-center items-center  md:p-4 h-[350px] m-auto md:border border-gray-200 border-r-0 border-l-0"
      >
        <div className="space-y-2">
          <label htmlFor="">EMAIL</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="block outline-none border w-[300px] p-2"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="">PASSWORD</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="block outline-none border w-[300px] p-2"
          />
        </div>
        <div className="w-full p-2 flex flex-col md:items-end items-center">
          <button className="border p-2">LOG IN</button>
        </div>
        {error && (
          <span className="border container text-center md:w-[600px] bg-red-500 p-2 text-black font-extrabold">
            {error}
          </span>
        )}
      </form>
    </div>
  );
}

export default Login;
