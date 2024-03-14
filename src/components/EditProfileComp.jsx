import React, { useState } from "react";
import { Avatar } from "../components/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/authSlice";
import { useEffect } from "react";

export const EditProfileComp = () => {
  const token = localStorage.getItem("token");

  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const [name, setName] = useState(userData?.user?.name || "");
  // Add more states for other editable fields

  useEffect(() => {
    if (token) {
      dispatch(fetchUserData(token));
    }
  }, []);

  const handleSave = () => {
    // Dispatch an action to save the updated profile information
    // You can dispatch an action to update the user's name and other fields
  };

  return (
    <div className="max-w-4xl mx-auto p-2">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 pb-2">
          <h2 className="text-base font-bold mb-4">A BIT ABOUT ME</h2>
          <h1 className="text-2xl font-bold mb-6">Who Am I?</h1>
          <p className="mb-4">
            Hi I'm Jane Doe. Click here to add your own text and edit me.
          </p>
          <p className="text-sm mb-6">Image by Freepik</p>
          <div className="bg-[#0f3b19] text-white p-6 rounded-lg flex flex-col items-center ">
            <span className="relative flex h-40 w-40 shrink-0 overflow-hidden rounded-full border-gray-100 border-2">
              <Avatar className={"h-full w-full"} />
            </span>

            <input
              type="text"
              className="text-2xl font-bold my-4 bg-transparent text-white border-b border-gray-100 px-2 py-1"
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
