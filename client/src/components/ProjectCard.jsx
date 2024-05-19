import React from "react";
import { github } from "../assets";

const ProjectCard = ({ src, title, description, live_link }) => {
    return (
        <a href={live_link} target="_blank">
            <div className="relative min-h-[360px] overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer">
                <img
                    src={src}
                    alt={title}
                    width={1000}
                    height={1000}
                    className="w-full object-contain"
                />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            className="w-8 bg-gradient-to-r from-stone-950 to-stone-900 h-8 rounded-full flex justify-center items-center cursor-pointer ml-3"
                        >
                            <img
                                src={github}
                                alt="source code"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                <div className="relative p-4">
                    <h1 className="text-2xl font-semibold text-white">
                        {title}
                    </h1>
                    <p className="mt-2 text-gray-300">{description}</p>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
