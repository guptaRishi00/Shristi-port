"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills: string[][] = [
  [
    "UI/UX Design",
    "User Research",
    "UI/UX Design",
    "Design Thinking",
    "Prototyping",
  ],
  ["Design Systems", "User-Centric Design", "UX Strategy", "Product Design"],
  ["Usability Testing", "Collaboration"],
];

const WhatIDo: FC = () => {
  const [whatIDoRef, whatIDoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full h-screen mt-50 lg:mt-10 bg-black flex flex-col items-center px-6 sm:px-12 lg:px-0 max-w-7xl sm:pb-16 lg:pb-16">
      {/* Top padding: smaller on mobile, original for larger screens */}
      <motion.div
        ref={whatIDoRef}
        initial={{ opacity: 0, y: 50 }}
        animate={whatIDoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-col items-center gap-10"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={whatIDoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-8xl font-bold text-white text-center"
        >
          What I Do
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={whatIDoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-gray-300 text-base sm:text-lg leading-relaxed text-center w-full max-w-5xl"
        >
          From understanding user needs to crafting pixel-perfect interfaces, I
          design products that are not just visually appealing but also
          intuitive and impactful. I combine user research, design thinking, and
          system-driven design to create digital experiences that feel
          effortless and meaningful. Here are some of the things I do:
        </motion.p>

        {/* Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={whatIDoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col space-y-4 w-full max-w-7xl"
        >
          {skills.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={
                whatIDoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.5,
                delay: 0.8 + rowIndex * 0.1,
                ease: "easeOut",
              }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4"
            >
              {row.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    whatIDoInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 1.0 + rowIndex * 0.1 + index * 0.05,
                    ease: "easeOut",
                  }}
                  className="px-6 py-3 border border-white rounded-2xl text-white 
                             text-sm sm:text-lg font-medium bg-[#1E1E1EDE] hover:bg-black cursor-pointer transition-colors duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatIDo;
