import Link from "next/link";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  return (
    <>
      <div
        className={`fixed flex flex-col justify-center items-center z-10 top-0 left-0 h-full bg-white text-black transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${isOpen ? "min-w-[300px] md:min-w-[360px]" : ""}`}
      >
        <button className="absolute right-7 top-4 p-3" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="flex flex-col justify-center items-center space-y-4">
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
            <Link href="#" tabIndex={isOpen ? 0 : -1}>
              About
            </Link>
          </li>
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
            <Link href="#" tabIndex={isOpen ? 0 : -1}>
              Portfolio
            </Link>
          </li>
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
            <Link href="#" tabIndex={isOpen ? 0 : -1}>
              Services
            </Link>
          </li>
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
            <Link href="#" tabIndex={isOpen ? 0 : -1}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>
    </>
  );
}

export default MobileDrawer;
