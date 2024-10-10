import React from "react";
import Logo from "/public/Logo.svg";

function NavLogo() {
  return (
    <div className="flex justify-center items-center w-full h-full md:justify-start">
      <div className="w-[199.20px] h-9 relative">
        <Logo></Logo>
      </div>
    </div>
  );
}
export default NavLogo;
