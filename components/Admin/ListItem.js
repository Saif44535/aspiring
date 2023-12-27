import Link from "next/link";

const ListItem = (props) => {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
            alt="user-male-circle"
          />
        </div>
        <div className="flex-1 min-w-0 ms-4">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {props.name}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {props.mail}
          </p>
        </div>
        <Link
          type="button"
          href={`/admin/${props.id}`}
          className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          View details
        </Link>
      </div>
    </li>
  );
};

export default ListItem;
