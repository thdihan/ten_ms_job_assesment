import React from "react";
import SectionTitle from "./ui/SectionTitle";
import { FiTarget } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

type Props = {};
const CourseContent = (props: Props) => {
    return (
        <div className="card-base">
            <SectionTitle
                icon={<FiTarget className="text-primary text-xl" />}
                text="What You Will Learn"
            />

            <div className="py-4 space-y-3">
                <div className="flex space-x-4">
                    <div className="mt-2">
                        <FiCheckCircle className="text-success text-xl" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold">
                            Achieve your target IELTS band score (6.5-8.0+)
                        </h3>
                        <p>
                            Comprehensive preparation for all band score levels
                        </p>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="mt-2">
                        <FiCheckCircle className="text-success text-xl" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold">
                            Master all four IELTS modules
                        </h3>
                        <p>
                            Listening, Reading, Writing, and Speaking with
                            proven strategies
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseContent;
