import { useEffect, useState } from "react";
import { HeroSection } from "../components/HeroSection";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { BASE_URL } from "../utils/util";
import useToken from "../hooks/useToken";
import { MyModal } from "../components/MyModal";

const Home = () => {
  const [username, setUsername] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { token } = useToken();
  console.log(token);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        const authToken = JSON.parse(token);
        console.log(authToken);
        if (!token) {
          // Handle case where token is not found in localStorage
          return null;
        }

        const response = await axios.get(`${BASE_URL}/user/getUserData`, {
          headers: {
            Authorization: "Bearer " + authToken,
          },
        });
        console.log(response);
        const userData = response.data;
        console.log(userData);
        setUsername(userData.username);
        if (!userData.username) {
          setIsModalOpen(true);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleSaveDocument = (documentName) => {
    // Handle saving document data here
    console.log("Saving document with name:", documentName);
  };
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 mt-4 ml-72">
          <HeroSection />
        </main>
      </div>{" "}
      {isModalOpen && (
        <MyModal onClose={handleCloseModal} onSave={handleSaveDocument} />
      )}
    </>
  );
};

export default Home;
