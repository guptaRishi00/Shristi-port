"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FeaturedProjects() {
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      image: "/betting.png",
      title: "BettinGator",
      description:
        "A clean, operable UI for esport and AI-hosted fights using card layouts, fluid indicators, and clear visual hierarchy to enhance readability and user engagement.",
      link: "#",
    },
    {
      image: "/frame2.png",
      title: "Jia Organic Eco Resort",
      description:
        "Elegant sustainable aesthetics with clean layouts to reflect the resort's eco ethos, blending a nature environment on storytelling to highlight wellness and relaxation.",
      link: "https://www.jiaorganicecoresort.com/",
    },
    {
      image: "/Frame3.png",
      title: "Bloomvest",
      description:
        "Simplified complex financial services into an intuitive, credibility-focused experience. Used data visualization techniques for CA to improve user understanding and trust.",
      link: "https://www.bloomvest.io/",
    },
    {
      image: "/Frame4.png",
      title: "Newspace Research & Technologies",
      description:
        "Designed mission-critical control interfaces for UAV operations with a focus on real-time data accuracy and system reliability to enhance performance.",
      link: "/Projects/Newspace",
    },
    {
      image: "/socleh.png",
      title: "Socle RH",
      description:
        "Designed mission-critical control interfaces for UAV operations with a focus on real-time data accuracy and system reliability to enhance performance.",
      link: "https://www.soclerh.fr/fr",
    },
    {
      image: "/neurolinq.png",
      title: "NeuroLinq",
      description:
        "Designed mission-critical control interfaces for UAV operations with a focus on real-time data accuracy and system reliability to enhance performance.",
      link: "https://neurolinq-2.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-black flex flex-col items-center px-5 sm:px-10 lg:px-0 mt-100 lg:-mt-10 pb-20"
    >
      <motion.div
        ref={projectsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-col items-center"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={
            projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-8 w-full"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={
                projectsInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 30, scale: 0.95 }
              }
              transition={{
                duration: 0.6,
                delay: 0.6 + index * 0.1,
                ease: "easeOut",
              }}
              className="bg-transparent border border-white/20 rounded-3xl overflow-hidden hover:border-white/40 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-black rounded-t-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover  group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-6">
                <div className="flex items-start justify-between mb-8">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    className="text-white hover:text-gray-300 transition-colors flex-shrink-0"
                    aria-label="View project"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 text-sm sm:text-xl leading-relaxed break-words">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
