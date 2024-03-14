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
import { useState } from "react";
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
  {
    id: 3,
    name: "Add Document",
    href: "/add",
    icon: <SvgVideo />,
  },
];
const bottomItems = [
  {
    id: 4,
    name: "Settings",
    href: "/settings",
    icon: <SvgSettings />,
  },
  {
    id: 5,
    name: "User",
    href: "/profile",
    icon: <SvgUser />,
  },
  {
    id: 6,
    name: "Logout",
    href: "/",
    icon: <IconLogout color="red" />,
  },
];
const Sidebar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  console.log(isSidebarOpen);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
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
        className={` bg-[#fbfff5] p-8 min-h-screen fixed z-20 ${
          isSidebarOpen ? "w-52 md:w-64" : "w-24"
        }`}
      >
        <div className="lg:hidden flex items-center space-x-4 mb-8 justify-center">
          <span
            className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full z-50 ${
              isSidebarOpen ? "" : "mr-2"
            }`}
          >
            <LogoImage />
          </span>
          {isSidebarOpen && <LogoHeader />}
        </div>
        <nav className="flex flex-col gap-4 lg:pt-14">
          {sideBarItems.map((item) => (
            <button
              key={item.id}
              className={`group inline-flex items-center whitespace-nowrap rounded-md text-sm hover:font-bold ring-offset-background transition-colors ${
                isSidebarOpen ? "px-4" : "h-14 w-12"
              } py-2 justify-start gap-2 hover:shadow-lg text-black hover:text-white`}
              onClick={() => {
                if (item.name === "Add Document") {
                  setIsModalOpen(true);
                } else {
                  navigate(item.href);
                }
              }}
            >
              {item.icon}
              <span className={` ${isSidebarOpen ? "" : "hidden"}`}>
                {item.name}
              </span>
              {/* <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                New
              </div> */}
            </button>
          ))}
        </nav>
        {/* will add later from bottom */}
        <div className="mt-8">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            {/* <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
                <span>Cloud Pro</span>
              </div>
              <p className="text-sm mb-4">Lorem ipsum dolor sit amet.</p>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                See Plans
              </button>
            </div> */}
          </div>
          <nav className="flex flex-col gap-4 mt-8 justify-start">
            {bottomItems.map((item) => (
              <button
                key={item.id}
                className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start gap-2"
                onClick={() => {
                  if (item.name === "Logout") {
                    handleLogout();
                  } else {
                    navigate(item.href);
                  }
                }}
              >
                {item?.icon}
                {isSidebarOpen && item?.name}
              </button>
            ))}
            <span
              className="fixed bottom-4  z-50 group inline-flex items-center whitespace-nowrap rounded-md text-sm hover:font-bold ring-offset-background transition-colors h-14 px-3 py-2 justify-start gap-2 hover:shadow-lg text-black hover:text-white"
              onClick={handleSidebar}
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
      <>
        {/* <div className="mt-8">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
                <span>Cloud Pro</span>
              </div>
              <p className="text-sm mb-4">Lorem ipsum dolor sit amet.</p>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                See Plans
              </button>
            </div>
          </div>
          <nav className="flex flex-col gap-4 mt-8">
            <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <rect width={20} height={5} x={2} y={3} rx={1} />
                <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
                <path d="M10 12h4" />
              </svg>{" "}
              Archive
            </button>
            <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
                <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
                <path d="m14 16-3 3 3 3" />
                <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
                <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
                <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
              </svg>{" "}
              Recycle
            </button>
            <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx={12} cy={12} r={3} />
              </svg>{" "}
              Settings
            </button>
            <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>{" "}
              Profile
            </button>
          </nav>
        </div> */}
      </>
    </>
  );
};

export default Sidebar;
