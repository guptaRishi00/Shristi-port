import React from 'react';

export default function WhatIDo() {
  const skills = [
    ['UI/UX Design', 'User Research', 'UI/UX Design', 'Design Thinking', 'Prototyping'],
    ['Design Systems', 'User-Centric Design', 'UX Strategy', 'Product Design'],
    ['Usability Testing', 'Collaboration']
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-8 sm:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-8">
          What I Do
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center max-w-4xl mx-auto mb-12">
          From understanding user needs to crafting pixel-perfect interfaces, I design products that are not just visually appealing but also intuitive and impactful. I combine user research, design thinking, and system-driven design to create digital experiences that feel effortless and meaningful. Here are some of the things I do:
        </p>

        {/* Skills Tags */}
        <div className="space-y-4">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {skills[0].map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 border border-white/30 rounded-full text-white text-sm sm:text-base font-medium hover:bg-white/10 transition-colors duration-300"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {skills[1].map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 border border-white/30 rounded-full text-white text-sm sm:text-base font-medium hover:bg-white/10 transition-colors duration-300"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Third Row */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {skills[2].map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 border border-white/30 rounded-full text-white text-sm sm:text-base font-medium hover:bg-white/10 transition-colors duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}