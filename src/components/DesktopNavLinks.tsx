import Link from "next/link";
function DesktopNavLinks(): JSX.Element {
  return (
    <ul className="h-9 justify-end items-center gap-1 inline-flex">
      <li className="px-4 py-2 rounded justify-center items-center flex">
        <Link
          className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight"
          href="#"
        >
          About
        </Link>
      </li>
      <li className="px-4 py-2 rounded justify-center items-center flex">
        <Link
          className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight"
          href="#"
        >
          Portfolio
        </Link>
      </li>
      <li className="px-4 py-2 rounded justify-center items-center flex">
        <Link
          className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight"
          href="#"
        >
          Services
        </Link>
      </li>
      <li className="px-4 py-2 rounded justify-center items-center flex">
        <Link
          className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight"
          href="#"
        >
          Testimonials
        </Link>
      </li>
      <li className="px-4 py-2 rounded justify-center items-center flex">
        <Link
          className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight"
          href="#"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default DesktopNavLinks;
