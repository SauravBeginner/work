import React from "react";

export const Input = ({ placeholder = "Enter Document Name" }) => {
  return (
    <form className="flex items-center max-w-sm mx-auto">
      <label htmlFor="simple-search" className="sr-only">
        Create Document
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required
        />
      </div>
    </form>
  );
};
