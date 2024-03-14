import React from "react";
import { CiFacebook } from "react-icons/ci";

export function Footer() {
  return (
    <section className="overflow-hidden bg-white pt-4 pb-1 bottom-0 left-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="p-4">{/* Your logo component goes here */}</div>
          <div className="p-4 md:mt-0">
            <ul className="flex flex-col md:flex-row md:flex-wrap items-center">
              <li className="p-2">
                <a
                  className="font-medium text-gray-600 hover:text-gray-700"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="p-2">
                <a
                  className="font-medium text-gray-600 hover:text-gray-700"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li className="p-2">
                <a
                  className="font-medium text-gray-600 hover:text-gray-700"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="p-4 flex flex-col md:flex-row">
            <a
              href="#"
              className="flex items-center justify-center hover:border-gray-400 p-2"
            >
              <CiFacebook size={30} />
            </a>
            <a
              href="#"
              className="flex items-center justify-center hover:border-gray-400 p-2"
            >
              <CiFacebook size={30} />
            </a>
            <a
              href="#"
              className="flex items-center justify-center hover:border-gray-400 p-2"
            >
              <CiFacebook size={30} />
            </a>
          </div>
        </div>
        <div className="mt-4 md:mt-0 ">
          <p className="text-sm font-normal text-gray-500 text-center">
            All content copyright © 2023 VersionVaultHub.
          </p>
        </div>
      </div>
    </section>
  );
}
