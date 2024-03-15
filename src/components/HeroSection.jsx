import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Img } from "./Img";
import { useDispatch, useSelector } from "react-redux";

export const HeroSection = () => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.status);

  return (
    <div className="max-w-7xl mx-auto lg:px-8 font-body">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 py-20">
        <div className="text-center lg:text-left">
          <h1 className="text-gray-900 mb-6 font-heading">
            <span className="block text-2xl">Secure your documents with</span>
            <span className="block text-[#22c55e] py-4 text-3xl font-bold">
              VersionVault
            </span>
            <span className="block text-2xl">
              the ultimate cloud storage solution for seamless version control.
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Choosing colors or typography for your website? Use the Toolbar
            below to realize your choices.
          </p>
          <div className="space-x-4">
            {!isAuthenticated && (
              <Button onClick={() => navigate("/login")}>
                Get Started | Login
              </Button>
            )}
          </div>
        </div>
        <div className="hidden lg:flex justify-end">
          <Img
            // src="https://i.pinimg.com/originals/d1/54/66/d154660a6ae3104de2b0a314667a5ab6.png"

            src="https://img.freepik.com/free-vector/browsing-online-concept-illustration_114360-4319.jpg?w=740&t=st=1710472612~exp=1710473212~hmac=5834a3f3f3b03bbd3207c20e321530a62c4629066d0d2485ba7a0bfbcd510f78"
          />
        </div>
      </div>
    </div>
  );
};
