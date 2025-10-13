"use client";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative min-h-[110vh] bg-black overflow-hidden flex items-start justify-center w-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 w-full h-screen bg-cover"
        style={{
          backgroundImage: "url(/Background.jpg)",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <motion.div 
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-12 lg:px-16 pt-24 sm:pt-32 lg:pt-36"
      >
        <div className="w-full text-left flex flex-col items-start justify-center gap-3">
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-5 flex flex-col"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              Hi,
            </motion.span>

            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="flex flex-wrap"
            >
              <span>I'm&nbsp;</span>
              <TextGenerateEffect
                words="Shristi"
                className="text-white"
                filter={true}
                duration={0.3}
                colors={[
                  "#f5f5d7",
                  "#f7e9b0",
                  "#fcd07b",
                  "#f7d26c",
                  "#e8c86a",
                  "#e5b86c",
                  "#f5f5d7",
                ]}
              />
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="text-xl sm:text-4xl font-semibold text-white mb-5"
          >
            A UI/UX DESIGNER
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            className="text-base sm:text-lg text-gray-300 leading-relaxed lg:font-base lg:text-2xl mb-6 max-w-3xl"
          >
            I craft beautiful, user-centered digital experiences that solve real
            problems and delight users. Specializing in mobile apps, web
            platforms, and design systems.
          </motion.p>

          {/* CTA Button */}
          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
            className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            Resume
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
