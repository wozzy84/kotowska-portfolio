import React, { useState } from "react";
import NavLogo from "./NavLogo";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileDrawer from "./MobileDrawer";
import classNames from "classnames";
import NavbarStyle from "./NavbarStyle.module.css";

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div
      className={classNames(
        "w-full h-[72px] py-[18px] px-4 flex-col justify-center items-center gap-2.5 inline-flex sm:px-9",
        NavbarStyle.navBar
      )}
    >
      <div className="container max-w-screen-xl mx-auto hidden relative lg:flex self-stretch justify-between items-center">
        <NavLogo />
        <DesktopNavLinks />
      </div>
      <div className="w-full lg:hidden relative flex flex-row my-4">
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
        <NavLogo />
      </div>
    </div>
  );
};

export default Navbar;
