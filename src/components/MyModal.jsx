import React, { useState } from "react";
import Modal from "react-modal";
import { Input } from "./Input";
import { Button } from "./Button";
import { IconX } from "@tabler/icons-react";
import { Img } from "./Img";
import { useDispatch } from "react-redux";
import axios from "axios";
import { JSON_URL } from "../utils/util";
import { createDocument } from "../redux/documentSlice"; // Import the createDocument action

export const MyModal = ({
  onClose,
  title = "Enter Document Name",
  placeholder = "Enter Document Name",
  documentId,
}) => {
  const [documentName, setDocumentName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post(`${JSON_URL}/documents`, {
      //   name: documentName,
      //   //   // Add other fields as needed
      // });
      // console.log("Document created:", response.data);
      dispatch(createDocument({ name: documentName })); // Dispatch the createDocument action
      onClose(); // Close the modal after creating the document
    } catch (error) {
      console.error("Error creating document:", error);
    }
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="fixed inset-0 flex justify-center items-center h-screen bg-black bg-opacity-50 z-40">
        <div className="w-full h-[50%] max-w-md bg-green-100 rounded-lg overflow-hidden shadow-lg relative flex flex-col justify-center items-center">
          <button className="absolute top-4 right-4 z-10" onClick={onClose}>
            <IconX stroke={1.25} />
            <span className="sr-only">Close modal</span>
          </button>

          <div className="flex justify-center items-center mb-4">
            <Img
              src="https://i.pinimg.com/originals/d1/54/66/d154660a6ae3104de2b0a314667a5ab6.png"
              alt="Modal Image"
              className="w-32 h-32"
            />
          </div>

          <div className="text-center mb-4">
            <h3 className="text-2xl font-semibold font-heading">{title}</h3>
          </div>

          <div className="text-center mb-4">
            <form onSubmit={handleSubmit}>
              <Input
                label="Document name"
                type="text"
                id="createDocument"
                value={documentName}
                placeholder={placeholder}
                onChange={(e) => {
                  setDocumentName(e.target.value);
                }}
                required
                className="input-style"
              />
            </form>
          </div>

          <div className="text-center">
            <Button
              className="px-5 py-2 h-12 border shadow-lg text-gray-black font-semibold bg-accent-300 hover:transform hover:scale-110 transition-transform duration-300"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
