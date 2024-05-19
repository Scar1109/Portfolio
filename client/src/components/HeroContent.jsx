import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "../utils/motion";
import { TypeAnimation } from "react-type-animation";

function HeroContent() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-5 md:px-20 md:mt-20 mt-24 w-full z-[20]"
            id="about-me"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center mx-auto text-start grow ">
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col mt-30 gap-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto whitespace-nowrap"
                >
                    <span>
                        Hi,{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            I'm
                        </span>{" "}
                    </span>
                    <TypeAnimation
                        sequence={[
                            "Kaveen Dinethma",
                            1500,
                            "Content Creator",
                            1000,
                            "Full Stack Developer",
                            1000,
                            "Mobile Developer",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    I'm a undergraduate software engineer with experience in
                    JavaScript,TypeScript and Java and expertise in frameworks
                    like React and Node.js. I'm a quick learner and I am always
                    looking for opportunities to learn and grow as a developer,
                    and I am excited to use my skills to make a positive impact
                    and continue my career in the field of Information
                    Technology.
                </motion.p>

                <motion.a
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    Download CV
                </motion.a>
            </div>

            <motion.div
                variants={slideInFromLeft(0.8)}
                className="w-full h-full  justify-center hidden md:flex items-center grow mt-10"
            >
                <img
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    className="w-10/12 h-auto"
                />
            </motion.div>
        </motion.div>
    );
}

export default HeroContent;
