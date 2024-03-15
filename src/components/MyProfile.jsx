import { Avatar } from "./Avatar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { LeftProfile } from "./LeftProfile";
const webDeveloperServices = [
  {
    id: 1,
    title: "Username",
    description: "Create ",
    slug: "responsive-web-design",
    isFeatured: true,
    image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  },
  {
    id: 2,
    title: "Total Document",
    description: "Build",
    slug: "full-stack-development",
    isFeatured: true,
  },
  {
    id: 3,
    title: "Account Create at",
    description: "Craft ",
    slug: "ux-ui-design",
    isFeatured: true,
  },
  {
    id: 4,
    title: "Total Document Visits",
    description: "Develop",
    slug: "e-commerce-solutions",
    isFeatured: true,
  },
];
export const MyProfile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const userData = useSelector((state) => state.auth.userData);
  console.log(userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchUserData(token));
      console.log(userData);
    }
  }, [userData?.user?._id]);
  return (
    <div className="max-w-4xl mx-auto p-2">
      <div className="flex flex-col lg:flex-row gap-8">
        <LeftProfile userData={userData} />
        <div className="flex-1 grid grid-cols-2 gap-4 text-center">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full flex flex-col justify-center items-center">
            <div className=" p-6">
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
                className="text-[#ef4444] text-4xl"
              >
                <polyline points="4 7 4 4 20 4 20 7" />
                <line x1={9} x2={15} y1={20} y2={20} />
                <line x1={12} x2={12} y1={4} y2={20} />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            </div>
            <div className="flex items-center p-6 border-t pt-2">
              <a className="text-[#ef4444]" href="#">
                MORE
              </a>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full flex flex-col justify-center items-center">
            <div className=" p-6">
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
                className="text-[#ef4444] text-4xl"
              >
                <polyline points="4 7 4 4 20 4 20 7" />
                <line x1={9} x2={15} y1={20} y2={20} />
                <line x1={12} x2={12} y1={4} y2={20} />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            </div>
            <div className="flex items-center p-6 border-t pt-2">
              <a className="text-[#ef4444]" href="#">
                MORE
              </a>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full flex flex-col justify-center items-center">
            <div className=" p-6">
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
                className="text-[#ef4444] text-4xl"
              >
                <polyline points="4 7 4 4 20 4 20 7" />
                <line x1={9} x2={15} y1={20} y2={20} />
                <line x1={12} x2={12} y1={4} y2={20} />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            </div>
            <div className="flex items-center p-6 border-t pt-2">
              <a className="text-[#ef4444]" href="#">
                MORE
              </a>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full flex flex-col justify-center items-center">
            <div className=" p-6">
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
                className="text-[#ef4444] text-4xl"
              >
                <polyline points="4 7 4 4 20 4 20 7" />
                <line x1={9} x2={15} y1={20} y2={20} />
                <line x1={12} x2={12} y1={4} y2={20} />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            </div>
            <div className="flex items-center p-6 border-t pt-2">
              <a className="text-[#ef4444]" href="#">
                MORE
              </a>
            </div>
          </div>
          {/* Repeat the same structure for other card items */}
        </div>
      </div>
    </div>
  );
};
