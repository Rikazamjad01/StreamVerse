'use client';

import React from 'react';

interface ButtonProps {
    text: string;
    bgColor?: string;
    textColor?: string;
    padding?: string;
    fontWeight?: string;
    width?: string;
    className?: string;
    onClick?: () => void;
    display?: string;
}

const Button: React.FC<ButtonProps> = ({
    text,
    bgColor = 'bg-[var(--Primary)]',
    textColor = 'text-black',
    padding = 'p-2 md:py-3 lg:p-4',
    fontWeight = 'font-[var(--P1-weight)]',
    width = 'w-[144px] md:w-[134px] lg:w-[214px]',
    className = '',
    display = '',
    onClick
}) => {
    return (
        <button
            type="button"
            className={`rounded-2xl cursor-pointer ${padding} ${width} ${textColor} ${bgColor} ${fontWeight} ${className} ${display} justify-center`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
