import Link from "next/link";
import React, { useState } from "react";
import NavLogo from "./NavLogo";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileDrawer from "./MobileDrawer";

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="w-full h-[72px] py-[18px] bg-neutral-50 border-b border-[#dee4e9] flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="container mx-auto hidden relative md:flex self-stretch justify-between items-center inline-flex">
        <NavLogo />
        <DesktopNavLinks />
      </div>
      <div className="w-full md:hidden relative flex flex-row my-4">
        <NavLogo />
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
    </div>
  );
};

export default Navbar;
