import React from "react";
import { Avatar } from "./Avatar";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export const LeftProfile = ({ userData }) => {
  const navigate = useNavigate();
  return (
    <div className="flex-1">
      <h2 className="text-base font-bold mb-4">A BIT ABOUT ME</h2>
      <h1 className="text-2xl font-bold mb-6">Who Am I?</h1>
      <p className="mb-4">
        Hi I'm Jane Doe. Click here to add your own text and edit me.
      </p>
      <div className="bg-[#e0f7e5] text-white p-6 rounded-lg flex flex-col items-center ">
        <span className="relative flex h-40 w-40 shrink-0 overflow-hidden  rounded-full ring-2  ring-[#22c55d]">
          {/* <img
          className="aspect-square h-full w-full"
          alt="Jane Doe"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        /> */}
          <Avatar className={"h-full w-full"} />
        </span>

        <h2 className="text-2xl font-bold my-4 text-gray-900">
          {userData?.user?.name || "Title"}
        </h2>
        <Button
          className="bg-black px-6 py-3 h-14"
          onClick={() => navigate("/editprofile")}
        >
          Edit Profile
        </Button>
      </div>
    </div>
  );
};
