import React from "react";
import SectionTitle from "./ui/SectionTitle";
import { FiLayout } from "react-icons/fi";
import Image from "next/image";

type Props = {
    features: {
        type: string;
        name: string;
        desription: string;
        bg_color: string;
        order_idx: number;
        values: {
            icon: string;
            id: string;
            subtitle: string;
            title: string;
        }[];
    };
};
const CourseModules = ({ features }: Props) => {
    return (
        <div className="card-base">
            <SectionTitle
                icon={<FiLayout className="text-primary text-xl" />}
                text="How the Course is Laid Out"
            />

            <div className="py-8 space-y-3">
                {features?.values?.length > 0 &&
                    features?.values.map((f, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-4 bg-[#FAF9FB] p-4 border border-gray-200 rounded-xl"
                        >
                            <div className="">
                                <div className="bg-primary size-8 flex items-center justify-center rounded-full text-white font-bold">
                                    {/* {index + 1} */}
                                    <Image
                                        src={f.icon}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold">{f.title}</h3>
                                <p>{f.subtitle}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CourseModules;
