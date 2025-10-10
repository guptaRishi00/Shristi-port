import React from "react";
import Image from "next/image";

export default function FeaturedProjects() {
  const projects = [
    {
      image: "/Frame1.png",
      title: "BattleGator",
      description:
        "A clean, operable UI for esport and AI-hosted fights using card layouts, fluid indicators, and clear visual hierarchy to enhance readability and user engagement.",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
      title: "Jia Organic Eco Resort",
      description:
        "Elegant sustainable aesthetics with clean layouts to reflect the resort's eco ethos, blending a nature environment on storytelling to highlight wellness and relaxation.",
      link: "#",
    },
    {
      image: "/Frame3.png",
      title: "Bloomvest",
      description:
        "Simplified complex financial services into an intuitive, credibility-focused experience. Used data visualization techniques for CA to improve user understanding and trust.",
      link: "#",
    },
    {
      image: "/Frame4.png",
      title: "Newspace Research & Technologies",
      description:
        "Designed mission-critical control interfaces for UAV operations with a focus on real-time data accuracy and system reliability to enhance performance.",
      link: "/Projects/Newspace",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black py-20 px-8 sm:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-16">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-transparent border border-white/20 rounded-2xl overflow-hidden hover:border-white/40 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-gray-900 rounded-t-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized={project.image.startsWith("http")} // only for external images
                />
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
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
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed break-words">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
