import React, { useState } from "react";
import { Avatar } from "./Avatar";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { IconCopy } from "@tabler/icons-react";

export const LeftProfile = ({ userData }) => {
  const [title, setTitle] = useState("Jane Doe");
  const navigate = useNavigate();

  const handleCopyUsername = () => {
    navigator.clipboard.writeText(userData?.user?.name || "");
    // Optionally, you can show a message indicating that the username has been copied
  };

  return (
    <div className="flex-1">
      <h2 className="text-lg font-semibold font-subheading mb-4">
        A BIT ABOUT ME
      </h2>
      <h1 className="text-2xl font-bold mb-6 ont-semibold font-heading">
        Who Am I?
      </h1>
      <p className="text-base mb-4">
        Hi, I'm {title}. Click here to add your own text.
      </p>
      <div className="bg-[#daf0d8] relative p-6 rounded-lg flex flex-col items-center">
        <div className="absolute top-0 right-0 flex items-center m-5">
          <span className="text-sm text-gray-600">
            {userData?.user?.name || "#username"}
          </span>
          <button
            className="ml-2 hover:bg-white rounded-md"
            onClick={handleCopyUsername}
          >
            <IconCopy stroke={1} size={20} />
          </button>
        </div>
        <span className="relative flex h-40 w-40 shrink-0 overflow-hidden rounded-full ring-2 ring-black">
          <Avatar className={"h-full w-full"} />
        </span>
        <h2 className="text-2xl font-bold my-4 text-gray-900">
          {userData?.user?.name || "Title"}
        </h2>
        <span className="flex-1">
          <Button
            className="bg-black px-6 py-3 h-14 text-white"
            onClick={() => navigate("/editprofile")}
          >
            Edit Profile
          </Button>{" "}
          <Button
            className="bg-red-500 h-14 ml-2 text-white"
            onClick={() => navigate("/editprofile")}
          >
            Delete Profile
          </Button>
        </span>
      </div>
    </div>
  );
};
