import React, { Children } from "react";

export const Button = ({ className = "", children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        className ? className : "px-6 py-3 h-14"
      } bg-[#ABF10E]  inline-flex items-center whitespace-nowrap rounded-md  text-base ring-offset-background transition-colors   justify-start gap-2 hover:shadow-lg  shadow-f`}
    >
      {children}
    </button>
  );
};
