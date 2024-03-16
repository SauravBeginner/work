import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { JSON_URL } from "../utils/util";

const DocumentDetails = () => {
  let { id } = useParams();

  const [fileName, setFileName] = useState("");
  const [document, setDocument] = useState();
  const [file, setFile] = useState(null);

  const getDocumentDetails = async (e) => {
    try {
      if (id) {
        const response = await axios.get(`${JSON_URL}/documents/${id}`);
        console.log("Document Details:", response.data);

        setDocument(response.data);
      }
      setErrorMsg("No documents Found!");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };
  useEffect(() => {
    getDocumentDetails();
  }, []);

  const handleUpload = () => {
    console.log("File Name:", fileName);
    console.log("File:", file);
  };

  return (
    <div className="container mx-auto my-10">
      <div className="mx-auto max-w-7xl pt-12">
        <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="px-2 md:px-12">
              <p className="text-2xl font-bold text-gray-900 md:text-4xl font-heading">
                {document?.name}
              </p>
              <p className=" font-semibold  text-gray-900  text-xl font-body">
                Upload Content
              </p>
              <form className="mt-8 space-y-4">
                <div className="grid w-full items-center gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none text-gray-700 font-body"
                  >
                    File Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    placeholder="Enter File Name"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <label
                    htmlFor="fileInput"
                    className="text-sm font-medium leading-none text-gray-700 font-body"
                  >
                    Choose File
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor="fileInput"
                      className="cursor-pointer flex items-center justify-center w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <svg
                        className="w-6 h-6 mr-2 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 5a2 2 0 012-2h5a2 2 0 012 2v1h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h2V5zm5 5V6h2v4h4v2h-4v4H8v-4H4v-2h4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Browse
                    </label>
                    <span className="text-gray-500">{fileName}</span>
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={handleUpload}
                  className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black text-center"
                >
                  Upload
                </Button>
              </form>
            </div>
          </div>
          <img
            alt="Contact us"
            className="hidden max-h-[80%] w-[80%] rounded-lg object-cover lg:block"
            src="https://illustrations.popsy.co/lime/podcast-listening.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentDetails;
