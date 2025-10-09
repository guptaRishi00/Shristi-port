import React from 'react';

export default function Philosophy() {
  // Paste your custom image from the public folder here
  const backgroundImagePath = "/bg2.png"; 

  return (
    <section
      className="min-h-screen py-20 px-8 sm:px-12 lg:px-16 relative"
      style={{
        background: `url(${backgroundImagePath}) center/cover no-repeat`,
      }}
    >
      {/* Dark overlay ON TOP of the image */}
      <div className="absolute inset-0 bg-black/70 z-10"></div> {/* 70% black overlay */}

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Heading */}
          <div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              My
              <br />
              Design
              <br />
              Philosophy
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
