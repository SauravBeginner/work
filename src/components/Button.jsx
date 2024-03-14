import React, { Children } from "react";

export const Button = ({ className = "", children }) => {
  return (
    <button
      className={`${
        className ? className : "px-6 py-3 h-14"
      } bg-[#22c55e]   group inline-flex items-center whitespace-nowrap rounded-md  font-bold ring-offset-background transition-colors   justify-start gap-2 hover:shadow-lg  hover:text-white font-heading`}
    >
      {children}
    </button>
  );
};
