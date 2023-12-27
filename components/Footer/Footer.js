"use client";

import Link from "next/link";

import FooterCoursesNav from "./FooterCoursesNav";
import FooterUniversitiesNav from "./FooterUniversitiesNav";
import FooterSocialsNav from "./FooterSocialsNav";
import FooterSocialsIcon from "./FooterSocialsIcon";

const Footer = () => {
  return (
    <footer className="text-gray-500 body-font bg-gray-900">
      <div className="container px-5 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left ">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-white">
              STUDY ABROAD WITH ASPIRING FUTURE CONSULTANTS
            </span>
          </Link>
          <p className="mt-2 text-sm text-gray-400">
            Get the facility of mock interview, and get all other important tips
            and techniques to successfully complete the process of visa
          </p>
          <FooterSocialsIcon />
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <FooterUniversitiesNav />

          <FooterCoursesNav />
          <FooterSocialsNav />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
