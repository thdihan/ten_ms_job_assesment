import React from "react";
import { FiUsers } from "react-icons/fi";
import SectionTitle from "./ui/SectionTitle";
import Image from "next/image";
import insImage from "@/images/ins.jpg";

type Props = {};

const CourseInstructor = (props: Props) => {
    return (
        <div className="card-base">
            <SectionTitle
                icon={<FiUsers className="text-primary text-xl" />}
                text="Meet Your Instructor"
            />

            <div className="py-4 flex space-x-3">
                <div className="w-[20%]">
                    <Image
                        src={insImage}
                        alt="Instructor"
                        width={100}
                        height={100}
                        className="rounded-full"
                    />
                </div>
                <div>
                    <h3 className="text-xl font-bold">Munzereen Shahid</h3>
                    <h4 className="text-lg">IELTS Expert & Language Coach</h4>
                    <p className="py-2 text-muted-foreground">
                        10+ Years Teaching Experience
                    </p>
                    <p>
                        With over 10 years of experience in IELTS preparation,
                        Munzereen has helped thousands of students achieve their
                        desired band scores. She holds a Master's degree in
                        Applied Linguistics and is a certified IELTS trainer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseInstructor;
