import React from "react";
import SectionTitle from "./ui/SectionTitle";
import { FiPlay } from "react-icons/fi";
import Image from "next/image";

type Props = {
    preview: {
        name: string;
        resource_type: string;
        resource_value: string;
        thumbnail_url: string;
    };
};

const CoursePreview = ({ preview }: Props) => {
    console.log(preview);
    return (
        <div className="card-base">
            <SectionTitle
                icon={<FiPlay className="text-primary text-xl" />}
                text="Course Preview"
            />

            <div className="py-6">
                <div className="relative group cursor-pointer rounded-lg overflow-hidden">
                    <Image
                        src={preview.thumbnail_url}
                        alt="preview"
                        width={450}
                        height={250}
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center p-4">
                        {/* Play button that appears on hover */}
                        <div className="bg-white size-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex justify-center items-center">
                            <FiPlay className="text-black text-2xl opacity-0 group-hover:opacity-100  transition-opacity duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePreview;
