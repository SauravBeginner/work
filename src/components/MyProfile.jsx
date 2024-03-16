import { Avatar } from "./Avatar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { LeftProfile } from "./LeftProfile";
import { IconFiles } from "@tabler/icons-react";
import { ProfileRightBar } from "./ProfileRightBar";

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
        <ProfileRightBar />
      </div>
    </div>
  );
};
