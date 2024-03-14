// MyModal.jsx
import React, { useState } from "react";
import Modal from "react-modal";
import { Input } from "./Input";
import { Button } from "./Button";
import { IconX } from "@tabler/icons-react";

export const MyModal = ({ onClose, onSave }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(username);
    onClose();
  };
  return (
    <Modal
      isOpen={true} // Set to the state controlling modal visibility
      onRequestClose={onClose}
      contentLabel="Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="fixed inset-0 flex justify-center items-center h-screen bg-black bg-opacity-50 z-40">
        <div className="w-full h-[50%] max-w-md bg-white rounded-lg overflow-hidden shadow-lg relative bg-gradient-2 hover:bg-gradient-1 hover:text-gray-700 flex justify-center items-center">
          {/* <div className="relative inset-0 bg-gradient-to-r from-[#22c55d] to-[#a3e635] transform scale-[0.80] rounded-full blur-3xl h-32" /> */}
          <button className="absolute top-4 right-4 z-10" onClick={onClose}>
            <IconX stroke={1.25} />
            <span className="sr-only">Close modal</span>
          </button>

          <div className="text-center">
            <h3 className="text-2xl font-semibold  mb-4  ">
              Enter Document Name
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                label="Document name"
                type="text"
                id="createDocument"
                value={username}
                placeholder="name@company.com"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {/* <Input
                label="Your password"
                type="password"
                id="password"
                placeholder="••••••••"
                required
              /> */}

              {/* <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login to your account
              </button> */}
              <Button className="px-5 py-2 h-12 border border-primary-500 shadow-lg text-gray-black ">
                Save
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};
