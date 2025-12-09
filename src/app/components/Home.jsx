"use client";

import Image from "next/image";
import profilePic from "../../../public/profile.png"; // replace with your image path

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-purple-50 px-6 md:px-20">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Left Side - Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hello, I’m Brooklyn Gilbert
          </h1>
          <p className="text-gray-600 mb-6 text-lg md:text-xl leading-relaxed">
            I'm a Freelance <span className="font-semibold text-purple-600">UI/UX Designer</span> and <span className="font-semibold text-purple-600">Developer</span> based in London, England. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.
          </p>
          <a
            href="#contact"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-all duration-300"
          >
            Say Hello!
          </a>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-6">
            <div className="bg-purple-100 text-purple-800 px-5 py-3 rounded-lg text-center">
              <div className="text-xl font-bold">15 Y.</div>
              <div className="text-sm mt-1">Experience</div>
            </div>
            <div className="bg-purple-100 text-purple-800 px-5 py-3 rounded-lg text-center">
              <div className="text-xl font-bold">250+</div>
              <div className="text-sm mt-1">Project Completed</div>
            </div>
            <div className="bg-purple-100 text-purple-800 px-5 py-3 rounded-lg text-center">
              <div className="text-xl font-bold">58</div>
              <div className="text-sm mt-1">Happy Client</div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="rounded-xl">
            <Image
              src={profilePic}
              alt="Brooklyn Gilbert"
              className=" w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
