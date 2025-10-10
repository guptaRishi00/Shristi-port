import React from "react";

export default function Philosophy() {
  const backgroundImagePath = "/bg2.png";

  return (
    <section
      className="min-h-screen py-20 px-8 sm:px-12 lg:px-16 relative bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImagePath})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Heading */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
              {/* Large screens: 3 lines using inline block + hidden on smaller */}
              <span className="block lg:hidden">My Design Philosophy</span>
              <span className="hidden lg:block">
                <span className="block">My</span>
                <span className="block">Design</span>
                <span className="block">Philosophy</span>
              </span>
            </h2>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
            <p>
              To me, design is about creating clarity out of complexity. It's not just about making things look good, but about making them work seamlessly so users feel confident and engaged without even realizing it.
            </p>

            <p>
              I believe design is a bridge between people and technology — the simpler the bridge, the stronger the connection. A great design is often the one that goes unnoticed because it lets users achieve their goals effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
