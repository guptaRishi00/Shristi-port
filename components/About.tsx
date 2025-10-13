"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="w-full  bg-black flex h-screen flex-col items-center px-5 sm:px-10 py-12 sm:py-12 lg:py-12 pb-8 sm:pb-12"
      // pb-8 applied for mobile, sm:pb-12 keeps original for larger screens
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start justify-center">
        {/* Left - Image with decorative rectangle and arrow */}
        <motion.div 
          ref={imageRef}
          initial={{ opacity: 0, x: -50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center items-center mb-10 lg:mb-0 lg:pr-8 "
        >
          {/* Decorative Rectangle - Behind Image */}
          <div
            className="absolute bg-[#1E1E1EDE] rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.4)] z-0
                       w-48 h-64 xs:w-56 xs:h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-72 lg:h-[30rem]
                       top-6 sm:top-8 md:top-10 lg:top-16 left-0 xs:left-0 sm:left-0 md:left-0 lg:left-0"
          ></div>

          {/* Profile Image */}
          <Image
            src="/Profilephoto.jpg"
            alt="Profile"
            width={384}
            height={384}
            className="relative z-10 rounded-full object-cover object-center
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
                       w-20 h-20 sm:w-24 sm:h-24 lg:w-46 lg:h-46
                       bottom-2 sm:bottom-4 lg:-bottom-16 left-0 sm:left-2 lg:-left-8"
          />

          {/* Connecting Line - Arrow (SVG) */}
          <Image
            src="/arrow.svg"
            alt="Connecting Line"
            width={200}
            height={100}
            className="absolute hidden lg:block"
            style={{
              right: "-80px",
              top: "45%",
            }}
          />
        </motion.div>

        {/* Right - Text Content */}
        <motion.div 
          ref={textRef}
          initial={{ opacity: 0, x: 50 }}
          animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left text-white space-y-6 lg:pl-8 "
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold flex flex-col justify-between"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-gray-300 space-y-4 mx-auto lg:mx-0 lg:mt-20"
          >
            <p className="text-sm sm:text-base md:text-xl text-light leading-relaxed">
              A UI/UX Designer who finds meaning in creating thoughtful,
              user-focused digital experiences. I enjoy simplifying complex
              systems through clean design, user research, and intuitive
              interaction. My work at Newspace Research & Technologies has
              helped shape interfaces in high-impact domains like aerospace and
              defence, where clarity and function matter most.
            </p>
            <p className="text-sm sm:text-base md:text-xl text-light leading-relaxed">
              I believe good design is equal parts empathy and structure — and
              I'm always looking to build things that are not only usable, but
              genuinely helpful.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
