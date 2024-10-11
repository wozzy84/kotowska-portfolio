import classNames from "classnames";
import Link from "next/link";
import NavbarStyle from "./NavbarStyle.module.css";

function DesktopNavLinks(): JSX.Element {
  return (
    <ul className="justify-end items-center gap-1 inline-flex">
      {["About", "Portfolio", "Services", "Testimonials", "Contact"].map(
        (text) => (
          <li
            className={classNames(
              "px-4 py-2 rounded justify-center items-center flex",
              NavbarStyle.desktopNavLinks
            )}
            key={text}
          >
            <Link href="#">{text}</Link>
          </li>
        )
      )}
    </ul>
  );
}

export default DesktopNavLinks;
