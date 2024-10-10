import Link from "next/link";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  return (
    <div
      className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
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
          <Link href="#">About</Link>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Link href="#">Portfolio</Link>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Link href="#">Services</Link>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Link href="#">Testimonials</Link>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileDrawer;
