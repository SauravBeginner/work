import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto lg:px-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 py-20">
        <div className="text-center lg:text-left">
          <h1 className="  text-gray-900 mb-6">
            <span className="block text-2xl">Secure your documents with</span>
            <span className="block text-[#22c55e] py-4 text-3xl font-bold font-heading">
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
            {/* <button className="bg-[#22c55e] text-white px-6 py-3 rounded-md hover:bg-[#16a34a]">
              How does it work?
            </button> */}
            <Button onClick={() => navigate("/login")}>
              Get Started | Login{" "}
            </Button>
          </div>
        </div>
        <div className="hidden lg:flex justify-end">
          <div className="space-y-6">
            <div className="bg-[#22c55e] h-64 w-64 rounded-lg" />
            <div className="flex justify-between space-x-6">
              <div className="bg-[#a3e635] h-32 w-32 rounded-lg" />
              <div className="bg-[#a3e635] h-32 w-32 rounded-lg" />
            </div>
            <div className="flex space-x-6">
              <div className="bg-[#a3e635] h-16 w-16 rounded-lg" />
              <div className="bg-[#a3e635] h-16 w-16 rounded-lg" />
              <div className="bg-[#a3e635] h-16 w-16 rounded-lg" />
              <div className="bg-[#a3e635] h-16 w-16 rounded-lg" />
            </div>
            <div className="bg-[#a3e635] h-8 w-32 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};
