import { CiFacebook } from "react-icons/ci";
import { useSelector } from "react-redux";

export function Footer() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  return (
    <footer
      className={`bg-[#f2f4ea] shadow-lg mr-8 border rounded-lg ${
        isSidebarOpen ? "ml-52 lg:ml-72" : "lg:ml-32"
      } `}
    >
      <div className="container flex flex-col md:flex-row justify-around items-center">
        <div className="p-4 md:mt-0">
          <ul className="flex flex-col md:flex-row md:flex-wrap items-center">
            <li className="p-2">
              <a
                className="font-medium text-gray-600 hover:text-gray-700"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li className="p-2">
              <a
                className="font-medium text-gray-600 hover:text-gray-700"
                href="#"
              >
                Terms of Service
              </a>
            </li>
            <li className="p-2">
              <a
                className="font-medium text-gray-600 hover:text-gray-700"
                href="#"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="p-4 flex flex-col md:flex-row">
          <a
            href="#"
            className="flex items-center justify-center hover:border-gray-400 p-2"
          >
            <CiFacebook size={30} />
          </a>
          <a
            href="#"
            className="flex items-center justify-center hover:border-gray-400 p-2"
          >
            <CiFacebook size={30} />
          </a>
          <a
            href="#"
            className="flex items-center justify-center hover:border-gray-400 p-2"
          >
            <CiFacebook size={30} />
          </a>
        </div>
        <p className="text-sm font-normal text-gray-500 text-center md:text-left">
          All content copyright © 2023 VersionVaultHub.
        </p>
      </div>
    </footer>
  );
}
