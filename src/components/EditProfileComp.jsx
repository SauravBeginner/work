import React, { useState } from "react";
import { Avatar } from "../components/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/authSlice";
import { useEffect } from "react";
import { IconCamera } from "@tabler/icons-react";

export const EditProfileComp = () => {
  const token = localStorage.getItem("token");

  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const [name, setName] = useState(userData?.user?.name || "");

  const [profilePic, setProfilePic] = useState(
    userData?.user?.profilePic || ""
  );
  // Add more states for other editable fields

  const handleCopyUsername = () => {
    navigator.clipboard.writeText(userData?.user?.name || "");
    // Optionally, you can show a message indicating that the username has been copied
  };
  useEffect(() => {
    if (token) {
      dispatch(fetchUserData(token));
    }
  }, []);

  const handleSave = () => {
    // Dispatch an action to save the updated profile information
    // You can dispatch an action to update the user's name, profile pic, and other fields
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    // Handle file upload and update the profilePic state
  };

  return (
    <div className="max-w-4xl mx-auto p-2">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 pb-2">
          <h2 className="text-base font-bold mb-4">A BIT ABOUT ME</h2>
          <h1 className="text-2xl font-bold mb-6">Who Am I?</h1>
          <p className="mb-4">
            Hi, I'm Jane Doe. Click here to add your own text and edit me.
          </p>
          <p className="text-sm mb-6">Image by Freepik</p>
          <div className="bg-[#0f3b19] text-white p-6 rounded-lg flex flex-col items-center relative">
            <div className="absolute top-0 right-0 flex items-center">
              <span className="text-sm text-gray-400">
                Hello, {userData?.user?.name || "username"}
              </span>
              <button className="ml-2" onClick={handleCopyUsername}>
                <IconCamera size={20} />
              </button>
            </div>
            <label
              htmlFor="profilePicInput"
              className="relative flex h-40 w-40 overflow-hidden rounded-full border-gray-100 border-2"
            >
              <Avatar className={"h-full w-full"} />
              {/* Camera icon */}
              <div className="absolute py-2  bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 text-white cursor-pointer">
                <IconCamera stroke={1} />
              </div>
              {/* Input for file upload */}
              <input
                id="profilePicInput"
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleProfilePicChange}
              />
            </label>
            <input
              type="text"
              className="text-2xl text-center font-bold my-4 bg-transparent text-white border-b border-gray-100 px-2 py-1  focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-white text-[#1e40af]"
              onClick={handleSave}
            >
              SAVE
            </button>
          </div>
        </div>
        {/* Add editable fields for other profile information */}
      </div>
    </div>
  );
};
