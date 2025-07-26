import React from "react";
import { FiBookOpen } from "react-icons/fi";
import SectionTitle from "./ui/SectionTitle";

type Props = {};

const CourseDescription = (props: Props) => {
    return (
        <div className="card-base">
            <SectionTitle
                icon={<FiBookOpen className="text-primary text-xl" />}
                text="Course Description"
            />

            <div className="py-2">
                <p>
                    Master the IELTS exam with comprehensive preparation
                    designed by expert instructor Munzereen Shahid. This course
                    provides everything you need to achieve your target band
                    score. Whether you're aiming for academic excellence or
                    immigration purposes, this structured program will guide you
                    through all four modules: Listening, Reading, Writing, and
                    Speaking. Join thousands of successful students who have
                    achieved their IELTS goals with our proven methodology and
                    personalized feedback system.
                </p>
            </div>
        </div>
    );
};

export default CourseDescription;
