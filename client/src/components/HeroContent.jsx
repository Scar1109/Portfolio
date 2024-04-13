import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "../utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";

function HeroContent() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-20 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center mx-auto text-start">
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col mt-30 gap-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Hi,{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            I'm
                        </span>{" "}
                        Kaveen Dinethma
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    I'm, a full-stack developer passionate about creating
                    dynamic and user-friendly web applications. With expertise
                    in both frontend and backend technologies, I bring ideas to
                    life by combining creativity with solid technical skills.
                    Let's build something incredible together!
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
                className="w-full h-full flex justify-center items-center"
            >
                <img
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={600}
                    width={600}
                />
            </motion.div>
        </motion.div>
    );
}

export default HeroContent;
