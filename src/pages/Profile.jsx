import React from "react";
import { MyProfile } from "../components/MyProfile";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 mt-20 pt-10 ml-56">
        <MyProfile />
      </main>
    </div>
  );
};

export default Profile;
