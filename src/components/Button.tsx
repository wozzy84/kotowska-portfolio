import React from "react";
import ButtonStyle from "./ButtonStyle.module.css";
import classNames from "classnames";

interface ButtonProps {
  onClick: () => void;
  label: string;
  solid?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, solid }) => {
  return (
    <button
      className={classNames(ButtonStyle.button, {
        [ButtonStyle.solid]: solid,
        button: true,
      })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
