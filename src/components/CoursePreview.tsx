import React from "react";
import SectionTitle from "./ui/SectionTitle";
import { FiPlay } from "react-icons/fi";

type Props = {};

const CoursePreview = (props: Props) => {
    return (
        <div className="card-base">
            <SectionTitle
                icon={<FiPlay className="text-primary text-xl" />}
                text="Course Preview"
            />
        </div>
    );
};

export default CoursePreview;
