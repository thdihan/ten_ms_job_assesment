import React from "react";
import SectionTitle from "./ui/SectionTitle";
import { FiGrid } from "react-icons/fi";
import Badge from "./ui/Badge";
import { GiStarFormation } from "react-icons/gi";
import { FaCaretRight } from "react-icons/fa6";
import Image from "next/image";

type Props = {
    feature_explanations: {
        type: string;
        name: string;
        desription: string;
        bg_color: string;
        order_idx: number;
        values: {
            checklist: string[];
            file_type: string;
            file_url: string;
            id: string;
            title: string;
            video_thumbnail: string;
        }[];
    };
};
const CourseFeatures = ({ feature_explanations }: Props) => {
    return (
        <div className="card-advance">
            <SectionTitle
                icon={<FiGrid className="text-white text-xl" />}
                text="Course Exclusive Features"
            />

            <div className="py-8 space-y-3">
                {feature_explanations?.values?.length > 0 &&
                    feature_explanations?.values?.map((v, index) => (
                        <div
                            key={index}
                            className="bg-primary/40 border border-primary-glow/40 p-4  rounded-xl relative"
                        >
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold">{v.title}</h3>
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center">
                                    <div className="space-y-2">
                                        {v.checklist.length > 0 &&
                                            v?.checklist?.map((c, index) => (
                                                <p
                                                    key={index}
                                                    className="flex items-center space-x-4"
                                                >
                                                    <FaCaretRight />
                                                    <span>{c}</span>
                                                </p>
                                            ))}
                                    </div>
                                    <div className="rounded-xl">
                                        <Image
                                            src={v?.file_url}
                                            alt="image"
                                            width={150}
                                            height={150}
                                            className="rounded-xl border-2 border-gray-200 shadow-lg shadow-primary-glow"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* <Badge
                                className="bg-gray-200 text-primary font-extrabold border-primary-glow/3 absolute -top-2 right-2"
                                icon={<GiStarFormation />}
                                text="New"
                            /> */}
                        </div>
                    ))}

                {/* <div className="bg-primary/40 border border-primary-glow/40 p-4  rounded-xl relative">
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
                </div> */}
            </div>
        </div>
    );
};

export default CourseFeatures;
