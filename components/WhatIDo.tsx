import React from "react";

export default function WhatIDo() {
  const skills = [
    ["UI/UX Design", "User Research", "UI/UX Design", "Design Thinking", "Prototyping"],
    ["Design Systems", "User-Centric Design", "UX Strategy", "Product Design"],
    ["Usability Testing", "Collaboration"],
  ];

  return (
    <section className="w-full bg-black flex flex-col items-center px-5 sm:px-10 lg:px-16 py-12">
      <div className="w-full max-w-6xl flex flex-col items-center">
        
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-8">
          What I Do
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center max-w-4xl mb-12">
          From understanding user needs to crafting pixel-perfect interfaces, I
          design products that are not just visually appealing but also intuitive
          and impactful. I combine user research, design thinking, and
          system-driven design to create digital experiences that feel effortless
          and meaningful. Here are some of the things I do:
        </p>

        {/* Skills Tags */}
        <div className="flex flex-col space-y-4 w-full">
          {skills.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-3 sm:gap-4"
            >
              {row.map((skill, index) => (
                <div
                  key={index}
                  className="w-full sm:w-auto text-center px-6 py-3 border border-white/30 rounded-lg text-white 
                             text-sm sm:text-base font-medium hover:bg-white/10 transition-colors duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
