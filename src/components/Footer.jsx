import { CiFacebook } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogoImage } from "./LogoImage";
import { LogoHeader } from "./LogoHeader";

export function Footer() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const isAuthenticated = useSelector((state) => state.auth.status);

  return (
    <footer
      className={`bg-[#f2f4ea] shadow-lg  px-10 border rounded-lg ${
        isAuthenticated && (isSidebarOpen ? "ml-56 mr-4" : "lg:ml-32 mr-8")
      } `}
    >
      <div className="container flex flex-col lg:flex-row justify-between items-center">
        <div className="md:mt-0">
          <ul className="flex flex-col md:flex-row md:flex-wrap items-center ">
            <li className="p-2">
              <Link
                className="font-medium text-gray-600 hover:text-gray-700"
                to="#"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="p-2">
              <Link
                className="font-medium text-gray-600 hover:text-gray-700"
                to="#"
              >
                Terms of Service
              </Link>
            </li>
            <li className="p-2">
              <Link
                className="font-medium text-gray-600 hover:text-gray-700"
                to="#"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-4 flex flex-col md:flex-row">
          <Link
            to="/"
            className="flex items-center justify-center hover:border-gray-400 "
          >
            <LogoImage /> <LogoHeader className />
          </Link>
          {/* <Link
            to="#"
            className="flex items-center justify-center hover:border-gray-400 p-2"
          >
            <CiFacebook size={30} />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-center hover:border-gray-400 p-2"
          >
            <CiFacebook size={30} />
          </Link> */}
        </div>
        <p className="text-sm font-normal text-gray-500 text-center md:text-left">
          All content copyright © 2023 VersionVaultHub.
        </p>
      </div>
    </footer>
  );
}
