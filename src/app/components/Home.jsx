"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import profilePic from "../../../public/profile.png";
import { HiArrowRight } from "react-icons/hi";


export default function HomeSection() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-purple-50 px-6 md:px-16 lg:px-24 overflow-hidden"
        >
            <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-12">

                {/* Left Side - Text */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-snug text-center md:text-left">
                        Hello, I’m <span className="text-purple-600">Brooklyn Gilbert</span>
                    </h1>
                    <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-relaxed md:leading-loose text-center md:text-left">
                        I'm a Freelance <span className="font-semibold text-purple-600">UI/UX Designer</span> and <span className="font-semibold text-purple-600">Developer</span> based in London, England. I craft immersive web experiences through <span className="underline decoration-purple-300 decoration-2">beautiful code</span> and <span className="underline decoration-purple-300 decoration-2">user-centric design</span>.
                    </p>
                    <div className="flex justify-center md:justify-start mb-6">
                        <a
                            href="#contact"
                            className="relative inline-flex items-center px-6 py-2.5 rounded-full font-medium text-blue-600 border-2 border-blue-600 overflow-hidden group"
                        >
                            {/* Background fill */}
                            <span className="absolute inset-0 bg-blue-600 w-0 group-hover:w-full transition-all duration-500 ease-out z-0"></span>

                            {/* Text + Icon */}
                            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                                Say Hello! <HiArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </a>
                    </div>




                    {/* Stats */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
                        <motion.div
                            className="bg-purple-100 text-purple-800 px-4 py-3 sm:px-6 sm:py-4 rounded-lg text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <div className="text-xl sm:text-2xl font-bold">15 Y.</div>
                            <div className="text-sm mt-1">Experience</div>
                        </motion.div>
                        <motion.div
                            className="bg-purple-100 text-purple-800 px-4 py-3 sm:px-6 sm:py-4 rounded-lg text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <div className="text-xl sm:text-2xl font-bold">250+</div>
                            <div className="text-sm mt-1">Projects Completed</div>
                        </motion.div>
                        <motion.div
                            className="bg-purple-100 text-purple-800 px-4 py-3 sm:px-6 sm:py-4 rounded-lg text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <div className="text-xl sm:text-2xl font-bold">58</div>
                            <div className="text-sm mt-1">Happy Clients</div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Side - Image */}
                <motion.div
                    className="flex-1 flex justify-center md:justify-end max-w-[300px] sm:max-w-[350px] md:max-w-[400px] mb-6 md:mb-0"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="rounded-xl overflow-hidden  border-2 border-purple-100 w-full">
                        <Image
                            src={profilePic}
                            alt="Brooklyn Gilbert"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
