"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}

const processSteps: ProcessStep[] = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    title: "Research & Discovery",
    description:
      "Deep dive into user needs, business goals, and market research to understand the problem space.",
    items: [
      "User interviews",
      "Competitive analysis",
      "Stakeholder workshops",
      "Requirements gathering",
    ],
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Ideation & Strategy",
    description:
      "Generate creative solutions and define the design strategy based on research insights.",
    items: [
      "Design thinking workshops",
      "User journey mapping",
      "Information architecture",
      "Solution prioritization",
    ],
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
    title: "Design & Prototype",
    description:
      "Create high-fidelity designs and interactive prototypes to visualize the final product.",
    items: [
      "Wireframing",
      "Visual design",
      "Interactive prototyping",
      "Design system creation",
    ],
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: "Test & Iterate",
    description:
      "Validate designs through user testing and iterate based on feedback and data.",
    items: [
      "Usability testing",
      "A/B testing",
      "Feedback analysis",
      "Design refinement",
    ],
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Launch & Monitor",
    description:
      "Support development during implementation and monitor post-launch performance.",
    items: [
      "Development handoff",
      "Quality assurance",
      "Performance monitoring",
      "Post-launch optimization",
    ],
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Collaborate & Scale",
    description:
      "Work with teams to ensure design consistency and plan for future iterations.",
    items: [
      "Team training",
      "Design system maintenance",
      "Knowledge sharing",
      "Continuous improvement",
    ],
  },
];

const DesignProcess: FC = () => {
  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    // Standardized spacing
    <section className="w-full bg-black py-16 sm:py-20 px-6 sm:px-10 lg:px-16 flex justify-center">
      <motion.div
        ref={processRef}
        initial={{ opacity: 0, y: 50 }}
        animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl flex flex-col items-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-16"
        >
          My Design Process
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={
                processInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 30, scale: 0.95 }
              }
              transition={{
                duration: 0.6,
                delay: 0.6 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-transparent border rounded-4xl p-6 border-[#FFFFFF66] transition-colors duration-300 cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={
                  processInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                  ease: "easeOut",
                }}
                className="flex items-center gap-3 mb-4"
              >
                <motion.div
                  initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                  animate={
                    processInView
                      ? { opacity: 1, rotate: 0, scale: 1 }
                      : { opacity: 0, rotate: -180, scale: 0.5 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.9 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.4, ease: "easeInOut" },
                  }}
                  className="text-white"
                >
                  {step.icon}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    processInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 1.0 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="text-xl font-bold text-white min-w-0"
                >
                  {step.title}
                </motion.h3>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.5,
                  delay: 1.1 + index * 0.1,
                  ease: "easeOut",
                }}
                className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed"
              >
                {step.description}
              </motion.p>

              <motion.ul
                initial={{ opacity: 0 }}
                animate={processInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 1.2 + index * 0.1,
                  ease: "easeOut",
                }}
                className="space-y-2"
              >
                {step.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      processInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -10 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: 1.3 + index * 0.1 + itemIndex * 0.05,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                    className="text-gray-300 text-sm sm:text-base flex items-start"
                  >
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        processInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: 1.4 + index * 0.1 + itemIndex * 0.05,
                        ease: "easeOut",
                      }}
                      className="text-white mr-2"
                    >
                      •
                    </motion.span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DesignProcess;
