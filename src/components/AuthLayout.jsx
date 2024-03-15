// AuthLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
// import { isAuthenticated } from "../App";

const AuthLayout = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const isAuthenticated = useSelector((state) => state.auth.status);

  return (
    <div className="flex">
      {isAuthenticated && <Sidebar />}
      <main
        className={`flex-1 mt-6  mx-10 min-h-screen ${
          isAuthenticated ? (isSidebarOpen ? "md:ml-56" : "md:ml-28") : ""
        } `}
      >
        <Outlet />
        {/* This will render the currently selected route’s component */}
      </main>
    </div>
  );
};

export default AuthLayout;
