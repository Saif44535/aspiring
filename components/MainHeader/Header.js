"use client";

import { Fragment } from "react";
import Navbar from "./Navbar";
import Link from "next/link";

import HeaderWhatsappButton from "./HeaderWhatsappButton";

const Header = () => {
  return (
    <Fragment>
      <nav className="sticky top-0 z-10 bg-gray-800 border-gray-200 dark:bg-gray-900 bg-gray-900 text-white">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between ">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="logo.jpg"
              className="h-20 w-30"
              alt="Aspiring Future Consltancy Logo"
            />
          </Link>

          <Navbar />

          <div className="mt-3 mr-1 xl:mr-3">
            <Link
              href="https://wa.me/+447724290089"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeaderWhatsappButton />
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
