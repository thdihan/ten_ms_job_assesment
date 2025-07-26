import React from "react";
import SectionTitle from "./ui/SectionTitle";
import { FiGrid } from "react-icons/fi";
import Badge from "./ui/Badge";
import { GiStarFormation } from "react-icons/gi";

type Props = {};
const CourseFeatures = (props: Props) => {
    return (
        <div className="card-advance">
            <SectionTitle
                icon={<FiGrid className="text-white text-xl" />}
                text="Course Exclusive Features"
            />

            <div className="py-8 space-y-3">
                <div className="bg-primary/40 border border-primary-glow/40 p-4  rounded-xl relative">
                    <div className="space-y-1">
                        <h3 className="text-lg font-bold">
                            Personalized Writing Feedback
                        </h3>
                        <p>
                            Get detailed feedback on your writing tasks from
                            expert instructors with specific improvement
                            suggestions.
                        </p>
                    </div>
                    <Badge
                        className="bg-gray-200 text-primary font-extrabold border-primary-glow/3 absolute -top-2 right-2"
                        icon={<GiStarFormation />}
                        text="New"
                    />
                </div>
                <div className="bg-primary/40 border border-primary-glow/40 p-4  rounded-xl relative">
                    <div className="space-y-1">
                        <h3 className="text-lg font-bold">
                            Personalized Writing Feedback
                        </h3>
                        <p>
                            Get detailed feedback on your writing tasks from
                            expert instructors with specific improvement
                            suggestions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseFeatures;
