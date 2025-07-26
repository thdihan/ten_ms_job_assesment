import React, { ReactNode } from "react";

type Props = {
    icon: ReactNode;
    text: string;
};

const SectionTitle = ({ icon, text }: Props) => {
    return (
        <div className="flex items-center space-x-2">
            {icon}
            <p className="text-xl font-semibold">{text}</p>
        </div>
    );
};

export default SectionTitle;
