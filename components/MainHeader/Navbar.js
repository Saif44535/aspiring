import { Fragment, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <Fragment>
      <button
        onClick={toggleHandler}
        type="button"
        className="nline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <span
        className={`${
          toggle ? "" : "hidden"
        } + md:flex justify-center md:w-auto`}
      >
        <ul className="font-medium flex flex-col p-5 md:p-0 mr-28 border border-gray-100 rounded-xl bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li className="p-1 pl-4">
            <Link
              onClick={toggleHandler}
              href="/"
              // className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              className={`block py-2 px-3 ${
                pathname === "/"
                  ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  : "text-gray-900 rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              } `}
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li className="p-1">
            <Link
              onClick={toggleHandler}
              href="/#services"
              className={`block py-2 px-3 ${
                pathname === "/#services"
                  ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  : "text-gray-900 rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              } `}
            >
              Services
            </Link>
          </li>

          <li className="p-1">
            <Link
              onClick={toggleHandler}
              href="/#destinations"
              className={`block py-2 px-3 ${
                pathname === "/#destinations"
                  ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  : "text-gray-900 rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              } `}
            >
              Study Destinations
            </Link>
          </li>
          <li className="p-1 pr-4">
            <Link
              onClick={toggleHandler}
              href="/sign-up"
              className={`block py-2 px-3 ${
                pathname === "/sign-up"
                  ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              } `}
            >
              Register
            </Link>
          </li>
        </ul>
      </span>
    </Fragment>
  );
};

export default Navbar;
