"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Education from "@/components/Education";
import Philosophy from "@/components/Philosophy";
import DesignProcess from "@/components/DesignProcess";
import Footer from "@/components/Footer";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <motion.main
      className="relative bg-black flex flex-col items-center overflow-hidden"
      initial={{ opacity: 0, y: 20 }} // Start invisible & slightly lower
      animate={{ opacity: 1, y: 0 }} // Animate to fully visible
      exit={{ opacity: 0, y: -20 }} // Optional exit animation
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
    >
      {/* Navbar */}
      <div className="w-full max-w-7xl px-5 sm:px-10">
        <Navbar />
      </div>

      {/* Hero Section - Full Width */}
      <div className="w-full">
        <Hero />
      </div>

      {/* Main Content Sections - Centered with Equal Padding */}
      <div className="flex flex-col items-center ">
        <div className="w-full max-w-7xl px-5 sm:px-10 flex flex-col items-center">
          <About />
          <WhatIDo />
          <FeaturedProjects />
        </div>
        <Philosophy />

        <div className="w-full max-w-8xl px-5 sm:px-10 py-12 flex flex-col items-center space-y-12">
          <Education />
          <DesignProcess />
        </div>
      </div>

      {/* Footer - Full Width */}
      <div className="w-full">
        <Footer />
      </div>
    </motion.main>
  );
}
