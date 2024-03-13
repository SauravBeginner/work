import React from "react";

export const Button = ({ className = "" }) => {
  return (
    <button
      className={`${
        className ? className : "px-6 py-3 h-14"
      } bg-[#22c55e] text-white  group inline-flex items-center whitespace-nowrap rounded-md  font-bold ring-offset-background transition-colors   justify-start gap-2 hover:shadow-lg  hover:text-white`}
    >
      Get Started
    </button>
  );
};
