import React from "react";
import HamburgerMenu from "/public/svgs/hamburger-menu.svg";

interface MobileMenuButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <button onClick={onClick}>
      <HamburgerMenu className="w-6 h-6 relative" />
    </button>
  );
}

export default MobileMenuButton;
