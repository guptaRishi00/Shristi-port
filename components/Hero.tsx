"use client";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function Hero() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    // Changed min-h to 100dvh for mobile browser support
    // Changed items-start to items-center for vertical centering across all devices
    <div className="relative min-h-[100dvh] bg-black overflow-hidden flex items-center justify-center w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: "url(/Background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center", // Ensures the image stays centered on mobile
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content Container */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // Adjusted padding: smaller on mobile (px-4), larger on desktop
        className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-12 lg:px-16"
      >
        <div className="w-full text-left flex flex-col items-start justify-center gap-4 sm:gap-6">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            // Responsive Text Sizes: text-4xl (mobile) -> text-5xl (tablet) -> text-7xl (desktop)
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight flex flex-col"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              Hi,
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-x-2 sm:gap-x-3"
            >
              <span>I'm</span>
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
            </motion.div>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            // Scaled down for mobile (text-xl) up to desktop (text-4xl)
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mt-2"
          >
            A UI/UX DESIGNER
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            // Improved readability on mobile with tighter leading, relaxed on desktop
            className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-300 leading-relaxed max-w-lg lg:max-w-3xl"
          >
            I craft beautiful, user-centered digital experiences that solve real
            problems and delight users. Specializing in mobile apps, web
            platforms, and design systems.
          </motion.p>

          {/* CTA Button */}
          <Link
            href="https://drive.google.com/file/d/1N99r75jPUFEjtJ7kKtiCh29eOkjZydJx/view?usp=drivesdk"
            // Full width button on very small screens, auto width on larger
            className="mt-4 px-8 py-3 w-full sm:w-auto bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors duration-300 text-sm sm:text-base"
          >
            Resume
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
