"use client";
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-black flex flex-col items-center px-5 sm:px-10 py-12"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left - Image with decorative rectangle and arrow */}
        <div className="relative flex justify-center lg:justify-end mb-10 lg:mb-0 lg:pr-8">
          
          {/* Decorative Rectangle - Behind Image */}
          <div
            className="absolute bg-neutral-700/70 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.4)] z-0
                       w-48 h-64 xs:w-56 xs:h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-72 lg:h-[28rem]
                       top-6 sm:top-8 md:top-10 lg:top-16 left-0 xs:left-0 sm:left-0 md:left-0 lg:left-0"
          ></div>

          {/* Profile Image */}
          <Image
            src="/Profilephoto.jpg"
            alt="Profile"
            width={384}
            height={384}
            className="relative z-10 rounded-full object-cover
                       w-60 h-60 xs:w-68 xs:h-68 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            priority
          />

          {/* Decorative Lines - Bottom Left of Image */}
          <Image
            src="/decorativelines.svg"
            alt="Decorative Lines"
            width={100}
            height={100}
            className="absolute z-20
                       w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28
                       bottom-2 sm:bottom-4 lg:bottom-6 left-0 sm:left-2 lg:left-4"
          />

          {/* Connecting Line - Arrow (SVG) */}
          <Image
            src="/connectingline.svg"
            alt="Connecting Line"
            width={130}
            height={100}
            className="absolute z-20 hidden lg:block" // hidden on mobile, visible on lg+
            style={{ 
              right: "-90px",
              top: "32%",
            }}
          />
        </div>

        {/* Right - Text Content */}
        <div className="text-center lg:text-left text-white space-y-6 lg:pl-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">About Me</h2>
          <div className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed space-y-4 max-w-xl mx-auto lg:mx-0">
            <p>
              A UI/UX Designer who finds meaning in creating thoughtful,
              user-focused digital experiences. I enjoy simplifying complex
              systems through clean design, user research, and intuitive
              interaction. My work at Newspace Research & Technologies has
              helped shape interfaces in high-impact domains like aerospace and
              defence, where clarity and function matter most.
            </p>
            <p>
              I believe good design is equal parts empathy and structure — and
              I'm always looking to build things that are not only usable, but
              genuinely helpful.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
