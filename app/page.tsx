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
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
  return (
    <>
      {/* Navbar moved OUTSIDE motion.main to prevent fixed positioning issues */}
      <Navbar />

      <motion.main
        className="relative bg-black flex flex-col items-center overflow-x-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Navbar wrapper removed here */}

        <Hero />
        <About />
        <WhatIDo />
        <FeaturedProjects />
        <ExperienceSection />
        <Philosophy />
        <Education />
        <DesignProcess />
        <Footer />
      </motion.main>
    </>
  );
}
