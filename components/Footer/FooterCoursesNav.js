import Link from "next/link";

const FooterCourseNav = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-white tracking-widest text-md mb-3">
        Top Courses
      </h2>
      <nav className="list-none mb-10">
        <li>
          <Link
            href="https://en.wikipedia.org/wiki/Business_analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600"
          >
            Business Analytics
          </Link>
        </li>
        <li>
          <Link
            href="https://en.wikipedia.org/wiki/Data_science"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600"
          >
            Data Science & Analytics
          </Link>
        </li>
        <li>
          <Link
            href="https://en.wikipedia.org/wiki/Mining"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600"
          >
            Mineral & Mining
          </Link>
        </li>
        <li>
          <Link
            href="https://en.wikipedia.org/wiki/Engineering"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600"
          >
            Engineering
          </Link>
        </li>
      </nav>
    </div>
  );
};
export default FooterCourseNav;
