import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/util";

import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";
import { Button } from "./Button";
import { Img } from "./Img";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

export const LoginComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { setToken } = useToken();

  const dispatch = useDispatch();
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/user/login`, {
        email,
        password,
      });

      const { data } = response;

      // console.log(data.existingUser.usrname);
      if (data?.token) {
        setToken(data.token);
      }

      if (
        data?.existingUser?.username === null ||
        data?.existingUser?.username === undefined
      ) {
        navigate("/");
        setIsModalOpen(true);
      } else {
        navigate("/mydocuments");
      }

      console.log(data.token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAuth = () => {
    dispatch(login());
    navigate("/");
  };

  return (
    <div className="bg-[#f2f4ea]">
      <div className="mx-auto font-body">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 ">
          <div className="bg-[rgb(220,252,231)] mt-10 ">
            <div className="hidden lg:flex ">
              <div className=" w-full h-full">
                <Img src="https://i.pinimg.com/originals/d1/54/66/d154660a6ae3104de2b0a314667a5ab6.png" />
              </div>
            </div>
          </div>

          <div className="max-w-lg mx-auto lg:max-w-lg lg:px-8 font-body mb-20 lg:mb-0 mt-0 lg:mt-10">
            <div className="bg-[#fefffc] space-x-4 p-20 rounded-lg flex items-center flex-col space-y-4 shadow-2xl  mt-10 lg:mt-0 ">
              <Img
                src="https://i.pinimg.com/originals/d1/54/66/d154660a6ae3104de2b0a314667a5ab6.png"
                alt="Logo"
                className="w-40 h-40"
              />
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-2">Welcome Back!</h2>
                <p className="text-gray-00">
                  Sign in with your Google account to continue.
                </p>
              </div>
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none shadow-md"
                onClick={handleAuth}
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <section>
<div className="grid grid-cols-1 lg:grid-cols-2">
  <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
    <div className="absolute inset-0">
      <img
        className="h-full w-full rounded-md object-cover object-top"
        src="./assets/mobile_login.gif"
        alt=""
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#b4e0a1] to-transparent"></div>
    <div className="relative">
      <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
        <h3 className="text-2xl font-bold text-white">
          Now you dont have to rely on your designer to create a new
          page
        </h3>
        <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          <li className="flex items-center space-x-3">
            <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
              <svg
                className="h-3.5 w-3.5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-lg font-medium text-white">
              {" "}
              Commercial License{" "}
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
              <svg
                className="h-3.5 w-3.5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-lg font-medium text-white">
              Unlimited Exports{" "}
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
              <svg
                className="h-3.5 w-3.5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-lg font-medium text-white">
              {" "}
              120+ Coded Blocks{" "}
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
              <svg
                className="h-3.5 w-3.5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-lg font-medium text-white">
              {" "}
              Design Files Included{" "}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>{" "}
  <div className="min-h-screen bg-gradient-2 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-0  bg-gradient-1 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div action="#" method="POST" className="mt-8">
          <div className="space-y-5">
            <div>
              <label
                htmlFor=""
                className="text-base font-medium text-gray-900"
              >
                Email address{" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Password{" "}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
        {/* <div className="mt-3 space-y-3">
        <button
          type="button"
          className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          onClick={handleLogin}
        >
          Login
        </button>
      </div> */
}
//       </div>
//     </div>
//   </div>
// </div>
// </section> */}
