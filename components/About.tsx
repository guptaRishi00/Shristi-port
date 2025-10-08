"use client";
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen bg-black py-20 px-8 sm:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <Image
              src="/ProfilePhoto.jpg"
              alt="Profile"
              width={384}  // sm:w-80 = 320px, lg:w-96 = 384px
              height={384}
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover"
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              About Me
            </h2>

            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                A UI/UX Designer who finds meaning in creating thoughtful, user-focused digital experiences. I enjoy simplifying complex systems through clean design, user research, and intuitive interaction. My work at Newspace Research & Technologies has helped shape interfaces in high-impact domains like aerospace and defence, where clarity and function matter most.
              </p>

              <p>
                I believe good design is equal parts empathy and structure — and I'm always looking to build things that are not only usable, but genuinely helpful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
