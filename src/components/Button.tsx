import React from 'react';
import ButtonStyle from './ButtonStyle.module.css'

interface ButtonProps {
    onClick: () => void;
    label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
    return (
        <button className={ButtonStyle.button} onClick={onClick}>
            {label}
        </button>
    );
};



export default Button;