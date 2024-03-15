import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SvgAnalytics,
  SvgDocuments,
  SvgFavorites,
  SvgGallery,
  SvgHome,
  SvgSettings,
  SvgUser,
  SvgVideo,
} from "./Svgcomp";
import { MyModal } from "./MyModal";
import { LogoHeader } from "./LogoHeader";
import { LogoImage } from "./LogoImage";
import {
  IconLayoutSidebarRightCollapse,
  IconLayoutSidebarLeftCollapse,
  IconLogout,
} from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/sidebarSlice";
import { logout } from "../redux/authSlice";
// import { isAuthenticated } from "../App";
import { IconFolderPlus } from "@tabler/icons-react";
import { IconEdit } from "@tabler/icons-react";
import LogoutModal from "./LogoutModal";
const sideBarItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    icon: <SvgHome />,
  },
  {
    id: 2,
    name: "Documents",
    href: "/mydocuments",
    icon: <SvgDocuments />,
  },
  // {
  //   id: 3,
  //   name: "Add Document",
  //   href: "/add",
  //   icon: <SvgVideo disabled={window.location.pathname !== "/mydocuments"} />, // Set disabled dynamically
  // },
  {
    id: 4,
    name: "Add Document",
    href: "/add",
    icon: <IconFolderPlus color="red" />,
    disabledColor: "gray", // Specify the color for the disabled state
  },
];

const bottomItems = [
  // {
  //   id: 4,
  //   name: "Settings",
  //   href: "/settings",
  //   icon: <SvgSettings />,
  // },
  {
    id: 5,
    name: "User",
    href: "/profile",
    icon: <SvgUser />,
  },
  {
    id: 7,
    name: "Edit",
    href: "/editprofile",
    icon: <IconEdit color="green" />,
    disabledColor: "gray", // Specify the color for the disabled state
  },
  {
    id: 6,
    name: "Logout",
    href: "/d",
    icon: <IconLogout color="red" />,
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const isAuthenticated = useSelector((state) => state.auth.status);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleCloseLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

  const handleSaveDocument = (documentName) => {
    console.log("Saving document with name:", documentName);
  };

  return (
    <>
      <aside
        className={`bg-[#fbfff5] py-8 px-6 min-h-screen rounded-lg border-r border-t fixed top-16  z-20 ${
          isSidebarOpen ? "w-52 md:w-52 shadow-lg" : "hidden md:block w-24"
        }`}
      >
        <div className="hidden items-center space-x-4 mb-8 justify-center">
          <span
            className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full z-20 ${
              isSidebarOpen ? "" : "mr-2"
            }`}
          >
            <LogoImage />
          </span>
          {isSidebarOpen && <LogoHeader />}
        </div>
        <nav className="flex flex-col gap-4 lg:pt">
          {sideBarItems.map((item) => (
            <button
              key={item.id}
              className={`inline-flex text-center items-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors ${
                isSidebarOpen
                  ? "px-4 justify-start"
                  : "h-10 w-12 justify-center"
              } py-2  gap-2 text-black ${
                item.name !== "Add Document" ||
                (item.name === "Add Document" &&
                  window.location.pathname === "/mydocuments")
                  ? "hover:font-bold hover:shadow-lg  hover:bg-[#dcf8d7] "
                  : "cursor-not-allowed text-slate-400"
              }`}
              disabled={
                item.name === "Add Document" &&
                window.location.pathname !== "/mydocuments"
              }
              onClick={() => {
                if (
                  item.name === "Add Document" &&
                  window.location.pathname === "/mydocuments"
                ) {
                  setIsModalOpen(true);
                } else {
                  navigate(item.href);
                }
              }}
            >
              {item.name === "Add Document" &&
              window.location.pathname !== "/mydocuments"
                ? React.cloneElement(item.icon, { disabled: true }) &&
                  React.cloneElement(item.icon, {
                    color: item.disabled ? item.disabledColor : undefined,
                  }) // Pass disabled prop to SvgVideo
                : React.cloneElement(item.icon, { disabled: false })}
              <span className={` ${isSidebarOpen ? "" : "hidden"}`}>
                {item.name}
              </span>
            </button>
          ))}
        </nav>
        <div className="mt-8 border-t">
          <nav className="flex flex-col gap-4 mt-8 justify-start ">
            {bottomItems.map((item) => (
              <button
                key={item.id}
                className={`inline-flex text-center items-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors ${
                  isSidebarOpen
                    ? "px-4 justify-start"
                    : "h-14 w-12 justify-center"
                } py-2  gap-2 text-black ${
                  item.name !== "Edit" ||
                  (item.name === "Edit" &&
                    window.location.pathname === "/profile")
                    ? "hover:font-bold hover:shadow-lg  hover:bg-[#dcf8d7] "
                    : "cursor-not-allowed text-slate-400"
                }`}
                disabled={
                  item.name === "Edit" &&
                  window.location.pathname !== "/profile"
                }
                onClick={() => {
                  if (item.name === "Logout") {
                    console.log("logout");
                    setIsLogoutModalOpen(true);
                  } else {
                    navigate(item.href);
                  }
                }}
              >
                {item.name === "Edit" && window.location.pathname !== "/profile"
                  ? React.cloneElement(item.icon, { disabled: true }) &&
                    React.cloneElement(item.icon, {
                      color: item.disabled ? item.disabledColor : undefined,
                    }) // Pass disabled prop to SvgVideo
                  : React.cloneElement(item.icon, { disabled: false })}
                <span className={` ${isSidebarOpen ? "" : "hidden"}`}>
                  {item.name}
                </span>
              </button>
            ))}
            <span
              className="fixed bottom-4 z-50 inline-flex items-center whitespace-nowrap rounded-md text-sm hover:font-bold ring-offset-background transition-colors h-14 px-3 py-2 justify-start gap-2 hover:shadow-lg text-black"
              //  onClick={handleSidebar}
            >
              {isSidebarOpen ? (
                <IconLayoutSidebarLeftCollapse stroke={1} />
              ) : (
                <IconLayoutSidebarRightCollapse stroke={1} />
              )}
            </span>
          </nav>
        </div>
      </aside>{" "}
      {isModalOpen && (
        <MyModal onClose={handleCloseModal} onSave={handleSaveDocument} />
      )}
      {isLogoutModalOpen && (
        <LogoutModal
          onClose={handleCloseLogoutModal}
          onSave={handleSaveDocument}
        />
      )}
    </>
  );
};

export default Sidebar;
