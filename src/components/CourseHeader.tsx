import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import Button from "./ui/Button";
import Badge from "./ui/Badge";

type Props = { name: string; enrolled: string };

const CourseHeader = ({ name, enrolled }: Props) => {
    return (
        <header className="bg-hero text-white px-6 py-8">
            <div className="container mx-auto flex items-center md:text-left space-y-4 text-center md:justify-between flex-col md:flex-row">
                <div className="space-y-2">
                    <Badge
                        className="bg-primary-glow/20 text-primary-foreground border-primary-glow/3 "
                        text="Best Seller"
                    />

                    <h1 className="text-4xl font-bold">{name}</h1>

                    <div className="text-sm flex space-x-3 items-center justify-center md:justify-start">
                        <div className="flex space-x-2 text-sm  flex-col md:flex-row justify-center items-center">
                            <div className="flex items-center text-sm space-x-1">
                                <TiStarFullOutline className="text-yellow-400" />
                                <span>4.8</span>
                            </div>
                            <p>({enrolled})</p>
                        </div>
                        {/* <p>Last updated: December 2024</p> */}
                    </div>
                </div>
                <div className="text-center md:text-right space-y-2">
                    <div>
                        <h3 className="text-2xl font-bold">3850 Tk</h3>
                        <p className="text-sm">One-time payment</p>
                    </div>
                    <Button text="Enroll Now" className="text-sm" />
                </div>
            </div>
        </header>
    );
};

export default CourseHeader;
