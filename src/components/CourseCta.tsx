import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

type Props = {
    checklist: {
        color: string;
        icon: string;
        id: string;
        list_page_visibility: boolean;
        text: string;
    }[];
};

const CourseCta = ({ checklist }: Props) => {
    return (
        <div className="card-base space-y-4">
            <div className="">
                <h1 className="text-center space-x-2">
                    <span className="font-bold text-primary text-3xl">
                        3850 Tk
                    </span>{" "}
                    <del className="text-xl">5000 Tk</del>
                </h1>
            </div>

            <Button
                text="Enroll Now"
                className="text-white w-full py-4 text-lg"
            />

            <div className="py-2 space-y-3">
                {checklist?.length > 0 &&
                    checklist?.map((ch, index) => (
                        <h3 key={index} className="flex space-x-4 items-center">
                            <Image
                                src={ch.icon}
                                alt="icon"
                                width={20}
                                height={20}
                            />
                            <span>{ch.text}</span>
                        </h3>
                    ))}
            </div>
        </div>
    );
};

export default CourseCta;
