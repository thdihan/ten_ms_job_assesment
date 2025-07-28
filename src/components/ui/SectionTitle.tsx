import React, { ReactNode } from "react";
import _ from "lodash";

type Props = {
    icon: ReactNode;
    text: string;
};

const SectionTitle = ({ icon, text }: Props) => {
    return (
        <div className="flex items-center space-x-2 flex-col md:flex-row space-y-2 md:space-y-0 text-center md:text-right">
            {icon}
            <p className="text-xl font-semibold">{_.upperCase(text)}</p>
        </div>
    );
};

export default SectionTitle;
