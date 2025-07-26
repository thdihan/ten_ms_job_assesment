import React from "react";
import SectionTitle from "./ui/SectionTitle";
import { FiLayout } from "react-icons/fi";

type Props = {};
const CourseModules = (props: Props) => {
    return (
        <div className="card-base">
            <SectionTitle
                icon={<FiLayout className="text-primary text-xl" />}
                text="How the Course is Laid Out"
            />

            <div className="py-8 space-y-3">
                <div className="flex space-x-4 bg-[#FAF9FB] p-4 border border-gray-200 rounded-xl">
                    <div className="">
                        <div className="bg-primary size-8 flex items-center justify-center rounded-full text-white font-bold">
                            1
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-lg font-bold">
                            Module 1: IELTS Overview & Strategy
                        </h3>
                        <p>
                            Understanding the IELTS format, scoring system, and
                            developing effective test-taking strategies for all
                            four modules.
                        </p>
                    </div>
                </div>
                <div className="flex space-x-4 bg-[#FAF9FB] p-4 border border-gray-200 rounded-xl">
                    <div className="">
                        <div className="bg-primary size-8 flex items-center justify-center rounded-full text-white font-bold">
                            1
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-lg font-bold">
                            Module 1: IELTS Overview & Strategy
                        </h3>
                        <p>
                            Understanding the IELTS format, scoring system, and
                            developing effective test-taking strategies for all
                            four modules.
                        </p>
                    </div>
                </div>
                <div className="flex space-x-4 bg-[#FAF9FB] p-4 border border-gray-200 rounded-xl">
                    <div className="">
                        <div className="bg-primary size-8 flex items-center justify-center rounded-full text-white font-bold">
                            1
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-lg font-bold">
                            Module 1: IELTS Overview & Strategy
                        </h3>
                        <p>
                            Understanding the IELTS format, scoring system, and
                            developing effective test-taking strategies for all
                            four modules.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseModules;
