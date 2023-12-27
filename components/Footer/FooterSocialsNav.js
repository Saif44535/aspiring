import Link from "next/link";

const FooterSocialsNav = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-white tracking-widest text-md mb-3">
        About Us
      </h2>
      <nav className="list-none mb-10">
        <li>
          <Link
            href="https://www.instagram.com/accounts/onetap/?next=%2F&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600"
          >
            Instagram
          </Link>
        </li>
        <li>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600"
          >
            Facebook
          </Link>
        </li>
        <li>
          <Link
            href="https://wa.me/+447724290089"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600"
          >
            WhatsApp
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default FooterSocialsNav;
