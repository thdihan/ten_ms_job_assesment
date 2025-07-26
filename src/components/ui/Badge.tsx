import React from "react";

type Props = {
    text: string;
    className: string;
};

const Badge = ({ text, className }: Props) => {
    return (
        <div>
            <span
                className={`${className} text-xs px-3 py-1 shadow-lg border rounded-xl`}
            >
                {text}
            </span>
        </div>
    );
};

export default Badge;
