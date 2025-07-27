import React from "react";
import { FiBookOpen } from "react-icons/fi";
import SectionTitle from "./ui/SectionTitle";
import parse from "html-react-parser";

type Props = { text: string };

const CourseDescription = ({ text }: Props) => {
    return (
        <div className="card-base">
            <SectionTitle
                icon={<FiBookOpen className="text-primary text-xl" />}
                text="Course Description"
            />

            <div className="py-2">{parse(text)}</div>
        </div>
    );
};

export default CourseDescription;
