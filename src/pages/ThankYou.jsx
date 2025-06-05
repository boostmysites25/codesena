import React from "react";
import { Link } from "react-router-dom";
import { logoImg } from "../constant";
import LandingFooter from "../components/landingPages/LandingFooter";

const ThankYou = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-18rem)] flex flex-col items-center justify-between px-4">
        <div className="py-4 sticky top-0 w-full bg-secondary/60 backdrop-blur-md z-50 text-white">
          <div className="wrapper flex justify-between items-center gap-10">
            <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
              <Link smooth={true} to="/" className="cursor-pointer">
                <img
                  width="150"
                  height="100"
                  src={logoImg}
                  className="h-[3rem] md:h-[4.5rem] scale-110 object-contain transition-transform duration-300 hover:scale-[1.35]"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="wrapper flex flex-col items-center justify-center h-full min-h-[50vh] text-center">
          <h1 className="heading-1 mb-4 sm:mb-6">Thank You</h1>
          <p className="text-center text-gray-200 text-sm sm:text-base md:text-base text-balance max-w-md mx-auto">
            Thanks for contacting us, one of our associates will get in touch
            with you soon!
          </p>
          <Link
            to={"/"}
            className="mt-6 sm:mt-7 text-sm sm:text-base cursor-pointer primary-btn w-fit px-6 sm:px-8 py-3"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default ThankYou;
