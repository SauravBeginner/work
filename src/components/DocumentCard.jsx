import React, { useState } from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { MyModal } from "./MyModal";

export const DocumentCard = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {isModalOpen && <MyModal onClose={closeModal} />}
      <div
        className="group bg-[#f0f4e8] w-[full] max-w-sm  whitespace-nowrap rounded-md text-sm font-heading ring-offset-background transition-colors px-4 py-2 justify-start gap-2 hover:shadow-xl hover:text-gray-200
    border border-gray-200 shadow-md cursor-pointer "
      >
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-28 h-28 mb-3 rounded-full shadow-lg mt-10"
            src="https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium  hover:text-white">
            {data.name}{" "}
          </h5>
          {/* <span className="text-sm text-gray-500 :text-gray-400">
          Visual Designer
        </span> */}
          <div className="flex mt-4 md:mt-6">
            <span
              className="group py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-[#a3e635] rounded-lg border border-gray-200  hover:text-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:text-white :hover:bg-gray-700"
              onClick={() => setIsModalOpen(true)}
            >
              <IconEdit />
            </span>

            <a
              href="#"
              className="group py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-[#56f575] rounded-lg border border-gray-200  hover:text-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:text-white :hover:bg-gray-700"
            >
              <IconTrash />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
