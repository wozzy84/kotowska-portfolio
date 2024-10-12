import React from "react";
import Logo from "/public/Logo.svg";

function NavLogo() {
  return (
    <div
      className={
        "flex justify-center items-center w-full h-full lg:justify-start"
      }
    >
      <Logo style={{ color: "var(--text-primary)" }} />
    </div>
  );
}
export default NavLogo;
