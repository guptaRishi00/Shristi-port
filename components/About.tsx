"use client";
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-black flex flex-col items-center px-5 sm:px-10 py-12"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left - Image with decorative rectangle */}
        <div className="relative flex justify-center lg:justify-start mb-10 lg:mb-0">
          <div
            className="absolute bg-neutral-700/70 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.4)] z-0
                       w-40 h-56 xs:w-48 xs:h-64 sm:w-60 sm:h-80 md:w-64 md:h-[22rem] lg:w-72 lg:h-[24rem]
                       top-6 sm:top-8 md:top-10 -left-4 xs:-left-6 sm:-left-8 md:-left-10"
          ></div>

          <Image
            src="/Profilephoto.jpg"
            alt="Profile"
            width={320}
            height={320}
            className="relative z-10 rounded-full object-cover
                       w-52 h-52 xs:w-60 xs:h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
            priority
          />
        </div>

        {/* Right - Text Content */}
        <div className="text-center lg:text-left text-white space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold">About Me</h2>
          <div className="text-gray-300 text-sm sm:text-lg leading-relaxed space-y-4 max-w-xl mx-auto lg:mx-0">
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
              I’m always looking to build things that are not only usable, but
              genuinely helpful.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
