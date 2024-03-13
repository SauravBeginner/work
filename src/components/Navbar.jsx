import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
import { LogoHeader } from "./LogoHeader";
import { LogoImage } from "./LogoImage";

export const Navbar = () => {
  return (
    <nav className="hidden md:flex py-4 px-8  justify-between items-center bg-[#fbfff5] fixed z-50 left-0 right-0">
      <Link className="flex  items-center space-x-1 cursor-pointer" to="/">
        <LogoImage />
        <LogoHeader />
        {/* <div className="hidden md:flex space-x-4">
          <a
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
            href="#"
          >
            Figma Plugin
          </a>
          <a
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
            href="#"
          >
            VS Code Theme Editor
          </a>
          <a
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
            href="#"
          >
            Docs
          </a>
          <div className="relative">
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Templates
            </button>
            <div className="absolute hidden mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <a
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                href="#"
              >
                Template 1
              </a>
              <a
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                href="#"
              >
                Template 2
              </a>
            </div>
          </div>
        </div> */}
      </Link>
      <div className="hidden md:block">
        <Avatar />
      </div>
    </nav>
  );
};
