import React, { ReactNode } from "react";

type Props = {
    text: string;
    className: string;
    icon?: ReactNode;
};

const Badge = ({ text, className, icon }: Props) => {
    return (
        <div
            className={`${className} text-xs px-2 py-0.5 shadow-lg border rounded-xl inline-flex items-center space-x-1`}
        >
            <span>{icon}</span> <span>{text}</span>
        </div>
    );
};

export default Badge;
