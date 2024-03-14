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
      <div className="hover:bg-[#d5fcd0] bg-[#f5f7ef] w-[10rem] max-w-sm whitespace-nowrap rounded-md text-sm font-heading ring-offset-background transition-colors p-4 py-2 justify-start gap-2 hover:shadow-xl hover:text-gray-200 border border-gray-200 shadow-md cursor-pointer hover:font-bold">
        <div className="flex flex-col items-center pb-4">
          <img
            className="w-20 h-20 mb-2 rounded-full shadow-lg mt-4"
            src="https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-lg font-medium text-gray-700 hover:text-gray-900 ">
            {data?.name}{" "}
          </h5>
          <div className="flex mt-2">
            <button
              className="group py-1 px-2 ms-1 text-xs font-medium text-gray-900 focus:outline-none bg-[#a3e635] rounded-lg border border-gray-200 hover:text-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100"
              onClick={() => setIsModalOpen(true)}
            >
              <IconEdit size={16} />
            </button>
            <button
              href="#"
              className="group py-1 px-2 ms-1 text-xs font-medium text-gray-900 focus:outline-none bg-[#56f575] rounded-lg border border-gray-200 hover:text-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              <IconTrash size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
