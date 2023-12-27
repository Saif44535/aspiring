import Link from "next/link";

const FooterUniversitiesNav = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium tracking-widest text-md mb-3 text-white">
        TOP Universities
      </h2>
      <nav className="list-none mb-10">
        <li>
          <Link
            href="https://www.monash.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600"
          >
            Monash University
          </Link>
        </li>
        <li>
          <Link
            href="https://www.qmul.ac.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600"
          >
            Queen Mary University
          </Link>
        </li>
        <li>
          <Link
            href="https://www.ncl.ac.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600"
          >
            Newcastle University
          </Link>
        </li>
        <li>
          <Link
            href="https://www.uow.edu.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600"
          >
            University of Wollongong
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default FooterUniversitiesNav;
