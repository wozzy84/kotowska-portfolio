import React from "react";

interface MobileMenuButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <button onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 12H20M4 6H20M4 18H20"
          stroke="#1C1C1C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
}

export default MobileMenuButton;
