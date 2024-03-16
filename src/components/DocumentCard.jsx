import React, { useState } from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { MyModal } from "./MyModal";
import LogoutModal from "./LogoutModal";
import { IconShare } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { EditModal } from "./EditModal";
import { DeleteModal } from "./DeleteModal";

export const DocumentCard = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const navigate = useNavigate();

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const handleSaveDocument = (documentName) => {
    console.log("Saving document with name:", documentName);
  };
  const handleCopyUsername = () => {
    navigator.clipboard.writeText(userData?.user?.name || "");
    // Optionally, you can show a message indicating that the username has been copied
  };
  const handleEditDocument = (documentId) => {
    console.log("Editing document with ID:", documentId);
    setIsEditModalOpen(true); // Open the edit modal
  };
  const handleDeleteDocument = (documentId) => {
    console.log("Deleting document with ID:", documentId);
    setIsDeleteModalOpen(true); // Open the edit modal
  };
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      {isEditModalOpen && (
        <EditModal
          title="Rename Document"
          placeholder="Rename Document"
          onClose={closeEditModal}
          documentId={data?.id} // Pass the document ID to the edit modal
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          title="Delete Document"
          placeholder="Delete Document"
          onClose={closeDeleteModal}
          documentId={data?.id} // Pass the document ID to the edit modal
        />
      )}
      {isModalOpen && (
        <MyModal
          title="Rename Document"
          placeholder="Rename Document"
          onClose={closeModal}
        />
      )}
      {isLogoutModalOpen && (
        <LogoutModal
          title="Are you sure you want to delete this Document?"
          onClose={handleCloseLogoutModal}
          onSave={handleSaveDocument}
        />
      )}
      <div className="transition-transform transform-gpu hover:scale-105 lg:hover:scale-110 bg-[#f5f7ef] w-[10rem] max-w-sm whitespace-nowrap rounded-md text-sm font-heading ring-offset-background my-3 py-2 justify-start hover:shadow-xl hover:text-gray-200 border border-gray-200 shadow-md cursor-pointer hover:font-bold">
        <div className="flex flex-col items-center pb-4">
          <img
            className="w-20 h-20 mb-2 rounded-full shadow-lg mt-4"
            //  src="https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg"
            src="https://atlas-content-cdn.pixelsquid.com/stock-images/file-folder-64mEGwE-600.jpg"
            alt="Bonnie image"
          />
          <h5
            className="mb-1 text-base font-sem  text-gray-700 hover:text-gray-900"
            onClick={() => {
              console.log(data?.id);
              navigate(`/myDocuments/${data?.id}`);
            }}
          >
            {data?.name}
          </h5>
          <div className="flex mt-2">
            <button
              className=" py-1 px-2 ms-1 text-xs font-medium text-gray-100 focus:outline-none bg-[#22c55d] rounded-lg border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-100"
              onClick={() => handleEditDocument(data?.id)}
            >
              <IconEdit size={16} />
            </button>
            <button
              className=" py-1 px-2 ms-1 text-xs font-medium text-gray-100 focus:outline-none bg-[#ff0000] rounded-lg border border-gray-200 hover:text-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100"
              onClick={() => handleDeleteDocument(data?.id)}
            >
              <IconTrash size={16} />
            </button>{" "}
            <button
              className=" py-1 px-2 ms-1 text-xs font-medium text-gray-100 focus:outline-none bg-[#3c82f6] rounded-lg border border-gray-200 hover:text-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100"
              onClick={handleCopyUsername}
            >
              <IconShare size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
