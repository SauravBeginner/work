import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
import { LogoHeader } from "./LogoHeader";
import { LogoImage } from "./LogoImage";
import { IconMenu2 } from "@tabler/icons-react";
import { toggleSidebar } from "../redux/sidebarSlice";

import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from "../App";
import { Button } from "./Button";

export const Navbar = () => {
  const dispatch = useDispatch();
  //const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <nav className="flex py-4 px-5 justify-between items-center bg-[#f2f4ea] fixed z-50 left-0 right-0 shadow-lg">
      {isAuthenticated && (
        <div className="md:block cursor-pointer" onClick={handleSidebar}>
          <IconMenu2 />
        </div>
      )}
      <Link className="flex items-center space-x-1 cursor-pointer" to="/">
        <LogoImage />
        <LogoHeader />
      </Link>
      <div className="md:block">
        <Link to={"/profile"}>
          {isAuthenticated ? (
            <Avatar />
          ) : (
            <Button className="h-10 px-10 text-center">Login</Button>
          )}
        </Link>
      </div>
    </nav>
  );
};
