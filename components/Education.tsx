import React from "react";
import Image from "next/image";

export default function Education() {
  return (
    <section className="min-h-screen bg-black py-20 px-8 sm:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="space-y-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Education
            </h2>

            {/* First Education Entry */}
            <div className="space-y-3">
              <p className="text-gray-400 text-base sm:text-lg">2019 - 2023</p>
              <p className="text-white text-base sm:text-lg">
                Bangalore Central University
              </p>
              <p className="text-white text-lg sm:text-xl font-semibold">
                Bachelor Of Visual Arts, Product Design
              </p>
            </div>

            {/* Second Education Entry */}
            <div className="space-y-3">
              <p className="text-gray-400 text-base sm:text-lg">2016 - 2018</p>
              <p className="text-white text-base sm:text-lg">
                The Jain International School, Bilaspur C.G
              </p>
              <p className="text-white text-lg sm:text-xl font-semibold">
                Higher Secondary School
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <Image
              src="/Education.png"
              alt="Education"
              width={400}   
              height={400}  
              className="w-full max-w-xs sm:max-w-sm h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
