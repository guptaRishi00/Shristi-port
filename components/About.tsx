"use client";
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    // Added id="about" for smooth scrolling
    <section
      id="about"
      className="min-h-screen bg-black flex items-center justify-center py-20 px-6 sm:px-12"
    >
      <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - Image with decorative rectangular box */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Decorative rectangle behind image */}
          <div
            className="absolute w-56 h-75 sm:w-64 sm:h-90 lg:w-72 lg:h-[24rem]
                        rounded-xl bg-neutral-700/70
                        top-10 -left-10
                        shadow-[0_0_30px_rgba(0,0,0,0.4)]
                        z-0"
          ></div>

          {/* Circular Image */}
          <Image
            src="/Profilephoto.jpg"
            alt="Profile"
            width={320}
            height={320}
            className="relative z-10 rounded-full object-cover w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
            priority
          />
        </div>

        {/* Right - Text Content */}
        <div className="text-white space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold">About Me</h2>
          <div className="text-gray-300 text-base sm:text-lg leading-relaxed space-y-4">
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
