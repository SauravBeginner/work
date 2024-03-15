import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { DocumentCard } from "../components/DocumentCard";
import { HeaderImage } from "../components/HeaderImage";
import { HeroSection } from "../components/HeroSection";
import { SearchBar } from "../components/SearchBar";
import Sidebar from "../components/Sidebar";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/util";
import { SvgCreateDocument } from "../components/Svgcomp";

const dummyData = [
  {
    id: 1,
    name: "Bonnie Green",
    image:
      "https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg",
  },
  {
    id: 2,
    name: "Bonnie Green",
    image:
      "https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg",
  },
  {
    id: 3,
    name: "Bonnie Green",
    image:
      "https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg",
  },
  {
    id: 4,
    name: "Bonnie Green",
    image:
      "https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg",
  },
  {
    id: 5,
    name: "Bonnie Green",
    image:
      "https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg",
  },
  {
    id: 6,
    name: "Bonnie Green",
    image:
      "https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg",
  },
  {
    id: 7,
    name: "Bonnie Green",
    image:
      "https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg",
  },
  {
    id: 8,
    name: "Bonnie Green",
    image:
      "https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg",
  },
];
const MyDocuments = () => {
  const [data, setData] = useState([]);
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

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

        const response = await axios.get(`${BASE_URL}/document/mydocuments`, {
          headers: {
            Authorization: "Bearer " + authToken,
          },
        });
        console.log(response);
        const documentData = response.data;
        console.log(documentData);
        setData(documentData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <>
      <div className={`flex-1 mt-10 pt-10 pl-10`}>
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* SearchBar */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-8 my-2">
            <SearchBar />
          </div>
          {/* SvgCreateDocument */}
          <div className="col-span-6 lg:col-span-2 xl:col-span-1 my-2">
            <SvgCreateDocument />
          </div>
          {/* Total Documents Button */}
          <div className="col-span-6 lg:col-span-4 xl:col-span-3 my-2">
            <Button className="">Total Documents: {dummyData?.length}</Button>
          </div>
        </div>

        <main className="my-10 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 xl:grid-cols-6  2xl:grid-cols-7 gap-2 justify-items-center md:justify-items-stretch">
          {/* <main className="my-10 flex flex-auto flex-wrap gap-6 justify-center md:justify-between"> */}
          {dummyData?.map((item) => (
            <DocumentCard key={item._id} data={item} />
          ))}
        </main>
      </div>
    </>
  );
};

export default MyDocuments;
