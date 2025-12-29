import React from "react";

export default function Philosophy() {
  const backgroundImagePath = "/bg2.png";

  return (
    <section
      // Standardized spacing
      className="w-full relative bg-center bg-cover py-16 sm:py-20 px-6 sm:px-10 lg:px-16 flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImagePath})` }}
    >
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col lg:p-12 lg:flex-row items-center justify-between gap-8 lg:gap-14">
        {/* Left Side - Heading */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block lg:hidden">My Design Philosophy</span>
            <span className="hidden lg:block">
              <span className="block">My</span>
              <span className="block">Design</span>
              <span className="block">Philosophy</span>
            </span>
          </h2>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 space-y-4 text-gray-300 text-sm sm:text-base lg:text-xl leading-relaxed text-center lg:text-left max-w-xl lg:max-w-none">
          <p>
            To me, design is about creating clarity out of complexity. It&apos;s
            not just about making things look good, but about making them work
            seamlessly so users feel confident and engaged without even
            realizing it.
          </p>

          <p>
            I believe design is a bridge between people and technology — the
            simpler the bridge, the stronger the connection. A great design is
            often the one that goes unnoticed because it lets users achieve
            their goals effortlessly.
          </p>
        </div>
      </div>
    </section>
  );
}
