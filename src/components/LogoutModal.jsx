import { useNavigate } from "react-router-dom";
import React from "react";
import Modal from "react-modal";

export const LogoutModal = ({ onClose, onSave }) => {
  const navigate = useNavigate();
  return (
    <Modal
      isOpen={true} // Set to the state controlling modal visibility
      onRequestClose={() => {}} // Function to handle closing the modal
      className="modal-content" // Class name for modal content
      overlayClassName="modal-overlay" // Class name for modal overlay
    >
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-end">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM3 10a7 7 0 1114 0 7 7 0 01-14 0zm5-2a1 1 0 112 0v4a1 1 0 11-2 0V8zm0-4a1 1 0 112 0 3 3 0 003 3 1 1 0 11-2 0 1 1 0 00-1-1H8a1 1 0 110-2zm1 7a1 1 0 112 0 1 1 0 11-2 0z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center">
              <button
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                onClick={() => navigate("/login")}
              >
                Yes, I'm sure
              </button>
              <button
                className="ml-3 text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                onClick={onClose}
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutModal;
