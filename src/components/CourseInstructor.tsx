import React from "react";
import { FiUsers } from "react-icons/fi";
import SectionTitle from "./ui/SectionTitle";
import Image from "next/image";
import parse from "html-react-parser";

type Props = {
    ins: {
        description: string;
        has_instructor_page: boolean;
        image: string;
        name: string;
        short_description: string;
        slug: string;
    }[];
};

const CourseInstructor = ({ ins }: Props) => {
    console.log(ins);
    return (
        <div className="card-base">
            <SectionTitle
                icon={<FiUsers className="text-primary text-xl" />}
                text="Meet Your Instructor"
            />

            {ins?.map((i, index) => (
                <div key={index} className="py-4 flex space-x-3">
                    <div className="w-[20%]">
                        <Image
                            src={i?.image}
                            alt="Instructor"
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">{i.name}</h3>
                        {/* <h4 className="text-lg">
                            IELTS Expert & Language Coach
                        </h4> */}
                        <p className="py-2 text-muted-foreground">
                            {i.short_description}
                        </p>
                        {parse(i.description)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CourseInstructor;
