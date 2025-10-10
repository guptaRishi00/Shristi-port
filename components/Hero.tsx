"use client";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

export default function Hero() {
  return (
    <div className="relative min-h-[110vh] bg-black overflow-hidden flex items-start justify-center w-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url(/Background.jpg)",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-8 sm:px-12 lg:px-16 pt-32 sm:pt-40 lg:pt-48">
        <div className="max-w-2xl text-left">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 flex flex-col">
            <span>Hi,</span>

            <span className="flex flex-wrap">
              <span>I'm&nbsp;</span>
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
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">
            A UI/UX DESIGNER
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
            I craft beautiful, user-centered digital experiences that solve real
            problems and delight users. Specializing in mobile apps, web
            platforms, and design systems.
          </p>

          {/* CTA Button */}
          <button className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors duration-300">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}
