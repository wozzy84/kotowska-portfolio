import HomeIcon from "/public/svgs/home.svg";
import CloseIcon from "/public/svgs/close.svg";
import PortfolioIcon from "/public/svgs/portfolio.svg";
import AboutIcon from "/public/svgs/about.svg";
import ServicesIcon from "/public/svgs/services.svg";
import TestimonialsIcon from "/public/svgs/testimonials.svg";
import ContactIcon from "/public/svgs/contact.svg";
import Link from "next/link";
import classNames from "classnames";
import MobileDrawerStyle from "./MobileDrawerStyle.module.css";
import React from "react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenuItems = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "#home",
  },
  {
    title: "About",
    icon: <AboutIcon />,
    link: "#about",
  },
  {
    title: "Portfolio",
    icon: <PortfolioIcon />,
    link: "#portfolio",
  },
  {
    title: "Services",
    icon: <ServicesIcon />,
    link: "#services",
  },
  {
    title: "Testimonials",
    icon: <TestimonialsIcon />,
    link: "#testimonials",
  },
  {
    title: "Contact",
    icon: <ContactIcon />,
    link: "#contact",
  },
];

const iconStyle = { color: "var(--text-secondary)" };

MobileMenuItems.forEach((item) => {
  item.icon = React.cloneElement(item.icon, { style: iconStyle });
});

function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  return (
    <>
      <div
        className={classNames(
          `fixed pt-[24px] pl-[16px] z-10 top-0 left-0 h-full transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } ${isOpen ? "min-w-[300px] md:min-w-[360px]" : ""}`,
          MobileDrawerStyle.MobileDrawer
        )}
      >
        <button className="block" onClick={onClose} tabIndex={isOpen ? 0 : -1}>
          <CloseIcon
            style={{ color: "var(--text-primary)" }}
            className="w-6 h-6"
          />
        </button>
        <ul className="mt-6 ml-[6px] flex-col justify-start items-start gap-4 inline-flex">
          {MobileMenuItems.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="self-stretch p-2 justify-start items-center gap-2 inline-flex"
              tabIndex={isOpen ? 0 : -1}
              onClick={onClose}
            >
              {item.icon}
              <span
                className={classNames(MobileDrawerStyle.MobileDrawerMenuItem)}
              >
                {item.title}
              </span>
            </Link>
          ))}
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
