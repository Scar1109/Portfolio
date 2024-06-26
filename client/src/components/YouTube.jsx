import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github, live } from "../assets";
import SectionWrapper from "../components/hoc/SectionWrapper";
import { youtube } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    live_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 15,
                    scale: 1,
                    speed: 250,
                }}
                className="shadow-lg border border-[#2A0E61] bg-[#0300145e] p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[180px]">
                    <img
                        src={image}
                        alt="project_image"
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(live_link, "_blank")}
                            className="w-10 bg-gradient-to-r from-stone-950 to-stone-900 h-10 rounded-full flex justify-center items-center cursor-pointer ml-3"
                        >
                            <img
                                src={live}
                                alt="source code"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p
                        className="mt-2 text-secondary text-[14px] h-[100px]"
                    >
                        {description}
                    </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

function YouTube() {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p
                    className={
                        "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"
                    }
                >
                    A Passionate{" "}
                </p>
                <h2
                    className={
                        "text-white font-black md:text-[45px] sm:text-[50px] xs:text-[40px] text-[30px] font-sans"
                    }
                >
                    Content Creator
                </h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Following videos showcases to see how I passionately create
                    educational contents, blending technology with effective
                    teaching methods to make complex concepts accessible and
                    engaging for all learners.
                </motion.p>
            </div>

            <div className="mt-10 flex flex-wrap gap-7">
                {youtube.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
}

export default SectionWrapper(YouTube, "");
