import React from "react";

type Props = { text: string };

const Button = ({ text }: Props) => {
    return (
        <button className="bg-primary px-6 py-2 rounded-lg font-bold text-sm hover:bg-accent cursor-pointer">
            {text}
        </button>
    );
};

export default Button;
