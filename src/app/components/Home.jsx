"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import profilePic from "../../../public/profile.png";
import { HiArrowRight } from "react-icons/hi";
import CountUp from "react-countup";

export default function HomeSection() {
    const primaryColor = "#293c96"; // your custom color

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 overflow-hidden"
            style={{ background: `linear-gradient(to right, #ffffff, #e6e9f8)` }}
        >
            <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-12">

                {/* Left Side - Text */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-snug text-center md:text-left"
                        style={{ color: primaryColor }}
                    >
                        <span className="text-black" >Hello, I’m</span> <span style={{ color: primaryColor }}>Brooklyn Gilbert</span>
                    </h1>
                    <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-relaxed md:leading-loose text-center md:text-left" style={{ color: "#4a4a4a" }}>
                        I'm a Freelance <span style={{ fontWeight: 600, color: primaryColor }}>UI/UX Designer</span> and <span style={{ fontWeight: 600, color: primaryColor }}>Developer</span> based in London, England. I craft immersive web experiences through <span style={{ textDecoration: "underline", textDecorationColor: "#a3b0f2" }}>beautiful code</span> and <span style={{ textDecoration: "underline", textDecorationColor: "#a3b0f2" }}>user-centric design</span>.
                    </p>

                    <div className="flex justify-center md:justify-start mb-6">
                        <a
                            href="#contact"
                            className="relative inline-flex items-center px-6 py-2.5 rounded-full font-medium text-[#293c96] border-2 border-[#293c96] overflow-hidden group"
                        >
                            {/* Background fill */}
                            <span className="absolute inset-0 bg-[#293c96] w-0 group-hover:w-full transition-all duration-500 ease-out z-0"></span>

                            {/* Text + Icon */}
                            <span className="relative z-10 flex items-center gap-2 text-[#293c96] group-hover:text-white transition-colors duration-500">
                                Say Hello! <HiArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </a>
                    </div>


                    {/* Stats */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
                        <motion.div
                            className="px-4 py-3 sm:px-6 sm:py-4 rounded-lg text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            style={{ backgroundColor: "#d3d6f5", color: primaryColor }}
                        >
                            <div className="text-xl sm:text-2xl font-bold">
                                <CountUp start={0} end={15} duration={5} suffix=" Y." />
                            </div>
                            <div className="text-sm mt-1">Experience</div>
                        </motion.div>

                        <motion.div
                            className="px-4 py-3 sm:px-6 sm:py-4 rounded-lg text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            style={{ backgroundColor: "#d3d6f5", color: primaryColor }}
                        >
                            <div className="text-xl sm:text-2xl font-bold">
                                <CountUp start={0} end={250} duration={5} suffix="+" />
                            </div>
                            <div className="text-sm mt-1">Projects Completed</div>
                        </motion.div>

                        <motion.div
                            className="px-4 py-3 sm:px-6 sm:py-4 rounded-lg text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            style={{ backgroundColor: "#d3d6f5", color: primaryColor }}
                        >
                            <div className="text-xl sm:text-2xl font-bold">
                                <CountUp start={0} end={58} duration={5} />
                            </div>
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
                    <div className="rounded-xl overflow-hidden border-2 w-full" style={{ borderColor: "#d3d6f5" }}>
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
