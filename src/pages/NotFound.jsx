import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Button } from "../components/Button";

const NotFound = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="mx-auto w-full max-w-7xl px-2 md:px-4">
        <div className="my-12 flex items-center justify-center px-2 md:my-24 md:px-0 ">
          <div className="lg:flex lg:items-center lg:space-x-10">
            <img
              src="https://illustrations.popsy.co/lime/calling-help.svg"
              alt="question-mark"
              className="h-[300px] w-auto"
            />
            <div>
              <p className="mt-6 text-sm font-semibold text-black">404 error</p>
              <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
                We can&apos;t find that page
              </h1>
              <p className="mt-4 text-gray-500">
                Sorry, the page you are looking for doesn&apos;t exist or has
                been moved.
              </p>
              <div className="mt-6 flex items-center space-x-3">
                <Button
                  type="button"
                  className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  // onClick={() => navigate(-1)}
                  onClick={() => {
                    isAuthenticated ? navigate("/") : navigate("/login");
                  }}
                >
                  {/* <ArrowLeft size={16} className="mr-2" /> */}
                  Go back
                </Button>
                {isAuthenticated && (
                  <Button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={() => navigate("/contact")}
                  >
                    Contact us
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
