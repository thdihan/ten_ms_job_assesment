"use client";
import React, { useState } from "react";
import SectionTitle from "./ui/SectionTitle";
import { FiBookOpen, FiChevronDown, FiChevronUp } from "react-icons/fi";
import parse from "html-react-parser";

type Props = {
    about: {
        type: string;
        name: string;
        desription: string;
        bg_color: string;
        order_idx: number;
        values: {
            icon: string;
            id: string;
            description: string;
            title: string;
        }[];
    };
};

const CourseDetails = ({ about }: Props) => {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());

    const toggleItem = (index: number) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(index)) {
            newOpenItems.delete(index);
        } else {
            newOpenItems.add(index);
        }
        setOpenItems(newOpenItems);
    };
    return (
        <div className="card-base">
            <SectionTitle
                icon={<FiBookOpen className="text-primary text-xl" />}
                text={about.name}
            />

            <div className="py-6 space-y-4">
                {about?.values?.length > 0 &&
                    about?.values?.map((a, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                            {/* Accordion Header */}
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                            >
                                <div className="font-medium text-gray-900">
                                    {parse(a.title)}
                                </div>
                                {openItems.has(index) ? (
                                    <FiChevronUp className="text-primary text-lg flex-shrink-0 ml-2" />
                                ) : (
                                    <FiChevronDown className="text-primary text-lg flex-shrink-0 ml-2" />
                                )}
                            </button>

                            {/* Accordion Content */}
                            <div
                                className={`transition-all duration-300 ease-in-out ${
                                    openItems.has(index)
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                } overflow-hidden`}
                            >
                                <div className="px-4 py-3 bg-white">
                                    <div className="text-gray-700">
                                        {parse(a.description)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CourseDetails;
