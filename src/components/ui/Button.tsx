import React from "react";

type Props = { text: string; className: string };

const Button = ({ text, className = "" }: Props) => {
    return (
        <button
            className={
                className +
                " bg-primary px-6 py-2 rounded-lg font-bold hover:bg-accent cursor-pointer"
            }
        >
            {text}
        </button>
    );
};

export default Button;
