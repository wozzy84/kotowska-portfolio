import React, { useState, useEffect } from "react";
import NavLogo from "./NavLogo";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileDrawer from "./MobileDrawer";
import classNames from "classnames";
import NavbarStyle from "./NavbarStyle.module.css";0

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const syncHeight = () => {
    document.documentElement.style.setProperty(
      "--window-inner-height",
      `${window.innerHeight}px`
    );
  };

  const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);

      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  useEffect(() => {
    const handleResize = debounce(() => {
      syncHeight();
      if (window.innerWidth >= 1024) {
        setIsDrawerOpen(false);
      }
    }, 100);

    // Initial sync
    syncHeight();

    // Add event listeners
    window.addEventListener("resize", handleResize);

    // Lock body scroll when drawer is open
    if (isDrawerOpen) {
      document.documentElement.classList.add("is-locked");
    } else {
      document.documentElement.classList.remove("is-locked");
    }

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      document.documentElement.classList.remove("is-locked");
    };
  }, [isDrawerOpen]);

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
