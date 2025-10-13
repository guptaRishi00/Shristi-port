"use client";
import React, { useEffect, useState } from "react";
import { lenisInstance } from "../app/LenisProvider";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element && lenisInstance) {
      lenisInstance.scrollTo(element, { offset: -80, duration: 1.2 });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-screen z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-10 py-10 flex justify-between  items-center w-full">
        {/* Left side empty */}
        <div className="w-1/3"></div>

        {/* Right side buttons */}
        <div className="flex items-center gap-5 space-x-6">
          <button
            onClick={() => handleScrollTo("about")}
            className="text-white hover:text-gray-300 transition font-semibold text-lg cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleScrollTo("projects")}
            className="text-white hover:text-gray-300 transition font-semibold text-lg cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => handleScrollTo("contact")}
            className="px-5 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition text-lg cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
