"use client";
import Image from "next/image";
import React from "react";

interface ExperienceItem {
  id: number;
  tag: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  imageSrc: string;
  hasLink?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    tag: "Aerospace & Defence",
    company: "Newspace Research & Technologies",
    role: "Design Engineer",
    duration: "October 2023 - Present",
    description:
      "Designed mission-critical control interfaces for UAV operations, with a focus on real-time data visualization and reduced cognitive load for defense personnel.",
    imageSrc: "/wall.png",
    hasLink: true,
  },
  {
    id: 2,
    tag: "Digital Marketing",
    company: "Beanpole LLP",
    role: "UI/UX Designer",
    duration: "May 2023 - July 2023",
    description:
      "Led a website redesign that increased engagement by 30%, driven by user insights from stakeholder interviews and surveys. Built a scalable design system to ensure consistency across platforms.",
    imageSrc: "/tree.png",
    hasLink: false,
  },
];

const ExperienceSection: React.FC = () => {
  return (
    // Standardized spacing
    <section
      id="experience"
      className="w-full bg-[#0a0a0a] py-16 sm:py-20 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Experience
        </h2>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`
                  relative flex flex-col md:flex-row 
                  w-full bg-[#111111] rounded-3xl border border-white/10 overflow-hidden
                  ${!isEven ? "md:flex-row-reverse" : ""}
                `}
              >
                <div
                  className={`
                  flex-1 p-8 md:p-12 flex flex-col justify-center
                  ${!isEven ? "items-end text-right" : "items-start text-left"}
                `}
                >
                  <div className="mb-6">
                    <span className="px-4 py-1.5 rounded-full border border-white/20 text-xs md:text-sm text-gray-300">
                      {exp.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {exp.company}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base mb-6 font-medium italic">
                    {exp.role} <span className="mx-1">|</span> {exp.duration}
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                    {exp.description}
                  </p>

                  {exp.hasLink && (
                    <a
                      href="#"
                      className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors text-sm font-semibold"
                    >
                      See more
                    </a>
                  )}
                </div>

                <div className="flex-1 relative bg-gray-800 min-h-[300px]">
                  <Image
                    fill
                    src={exp.imageSrc}
                    alt={`${exp.company} project`}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
