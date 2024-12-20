import React from "react";
import ButtonStyle from "./ButtonStyle.module.css";
import classNames from "classnames";

interface ButtonProps {
  onClick: () => void;
  label: string;
  solid?: boolean;
  block?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  name?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  solid,
  block,
  className,
  type,
  name,
}) => {
  return (
    <button
      className={classNames(ButtonStyle.button, {
        [ButtonStyle.solid]: solid,
        [ButtonStyle.block]: block,
        button: true,
        [className as string]: className,
        type: type || "button",
        name: name || "button",
      })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
