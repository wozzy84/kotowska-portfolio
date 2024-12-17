import React from "react";
import ButtonStyle from "./ButtonStyle.module.css";
import classNames from "classnames";

interface ButtonProps {
  onClick: () => void;
  label: string;
  solid?: boolean;
  block?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, solid, block }) => {
  return (
    <button
      className={classNames(ButtonStyle.button, {
        [ButtonStyle.solid]: solid,
        [ButtonStyle.block]: block,
        button: true,
      })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
