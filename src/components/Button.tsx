import React from "react";
import ButtonStyle from "./ButtonStyle.module.css";
import classNames from "classnames";

interface ButtonProps {
  onClick: () => void;
  label: string;
  solid?: boolean;
  block?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  solid,
  block,
  className,
}) => {
  return (
    <button
      className={classNames(ButtonStyle.button, {
        [ButtonStyle.solid]: solid,
        [ButtonStyle.block]: block,
        button: true,
        [className as string]: className,
      })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
