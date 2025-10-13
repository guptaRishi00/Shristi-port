import React from "react";

export default function Philosophy() {
  const backgroundImagePath = "/bg2.png";

  return (
    <section
      className="w-full relative bg-center bg-cover py-12 sm:py-16 lg:py-20 flex items-center justify-center px-5 sm:px-10 lg:px-16"
      style={{ backgroundImage: `url(${backgroundImagePath})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14">
        
        {/* Left Side - Heading */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span className="block lg:hidden">My Design Philosophy</span>
            <span className="hidden lg:block">
              <span className="block">My</span>
              <span className="block">Design</span>
              <span className="block">Philosophy</span>
            </span>
          </h2>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 space-y-4 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left max-w-xl lg:max-w-none">
          <p>
            To me, design is about creating clarity out of complexity. It's not just about making things look good, but about making them work seamlessly so users feel confident and engaged without even realizing it.
          </p>

          <p>
            I believe design is a bridge between people and technology — the simpler the bridge, the stronger the connection. A great design is often the one that goes unnoticed because it lets users achieve their goals effortlessly.
          </p>
        </div>

      </div>
    </section>
  );
}
