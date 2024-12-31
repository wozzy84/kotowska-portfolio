import React from "react";
import classNames from "classnames";
import FooterStyle from "./FooterStyle.module.css";
import ExternalLinkIcon from "/public/svgs/external-link-sm.svg";

const { sectionStyle, footerTextStyle, footerLinkStyle, iconStyle } =
  FooterStyle;

const Footer: React.FC = () => {
  return (
    <footer
      className={classNames(
        "flex flex-col justify-center items-center py-6 px-4",
        sectionStyle
      )}
    >
      <p className={footerTextStyle}>Designed with &#x1f90d; by me</p>
      <p className={footerTextStyle}>
        Developed by amazing{" "}
        <a
          className={footerLinkStyle}
          href="https://www.linkedin.com/in/piotr-wozniak-fefo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Piotr Woźniak{" "}
          <span className={iconStyle}>
            <ExternalLinkIcon />
          </span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
