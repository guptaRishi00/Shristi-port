"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Education() {
  const [educationRef, educationInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    // Standardized spacing
    <section className="w-full bg-black py-16 sm:py-20 px-6 sm:px-10 lg:px-16 flex justify-center">
      <motion.div
        ref={educationRef}
        initial={{ opacity: 0, y: 50 }}
        animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-around gap-16 lg:gap-0"
      >
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={
            educationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
          }
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 space-y-12 text-center lg:text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={
              educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
          >
            Education
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="space-y-2"
          >
            <p className="text-gray-400">2019 - 2023</p>
            <p className="text-white text-lg">Bangalore Central University</p>
            <p className="text-white text-2xl font-bold">
              Bachelor Of Visual Arts, Product Design
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="space-y-2"
          >
            <p className="text-gray-400">2016 - 2018</p>
            <p className="text-white text-xl">
              The Jain International School, Bilaspur C.G
            </p>
            <p className="text-white text-2xl font-bold">
              Higher Secondary School
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={
            educationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
          }
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center lg:justify-start"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              educationInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="relative w-[280px] h-[420px] sm:w-[320px] sm:h-[480px]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                educationInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="/Education1.png"
                alt="A photo of the graduate in cap and gown"
                fill
                priority
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                educationInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
              className="hidden lg:inline-block lg:absolute top-[-1.5rem] right-[-1.5rem] lg:top-[-3rem] lg:right-[-4rem] w-[320px] bg-[#1C1C1C] h-[450px] rounded-lg z-0"
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
