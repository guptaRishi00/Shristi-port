"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-screen z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* Use px-8 instead of full padding to shift content a bit left */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 py-6 flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl">
          
        </Link>

        {/* Menu */}
        <div className="flex items-center space-x-6">
          <Link href="#about" className="text-white hover:text-gray-300 transition">
            About
          </Link>
          <Link href="#projects" className="text-white hover:text-gray-300 transition">
            Projects
          </Link>

          {/* Contact as a button */}
          <Link
            href="#contact"
            className="px-5 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
