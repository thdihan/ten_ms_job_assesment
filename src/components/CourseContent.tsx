import React from "react";
import SectionTitle from "./ui/SectionTitle";
import { FiTarget } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

type Props = {
    pointers: {
        type: string;
        name: string;
        desription: string;
        bg_color: string;
        order_idx: number;
        values: {
            icon: string;
            id: string;
            color: string;
            text: string;
        }[];
    };
};
const CourseContent = ({ pointers }: Props) => {
    return (
        <div className="card-base">
            <SectionTitle
                icon={<FiTarget className="text-primary text-xl" />}
                text={pointers.name}
            />

            <div className="py-4 space-y-4">
                {pointers?.values?.length > 0 &&
                    pointers?.values?.map((p, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4"
                        >
                            <div className="">
                                <FiCheckCircle className="text-success text-xl" />
                            </div>
                            <div className="">
                                {/* <h3 className="text-lg font-semibold">
                                    Achieve your target IELTS band score
                                    (6.5-8.0+)
                                </h3> */}
                                <p>{p.text}</p>
                            </div>
                        </div>
                    ))}

                {/* <div className="flex space-x-4">
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
                </div> */}
            </div>
        </div>
    );
};

export default CourseContent;
