"use client";
import React, { useEffect, useState } from "react";
import { lenisInstance } from "../app/LenisProvider";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    // Small delay to ensure menu closes before scrolling starts
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element && lenisInstance) {
        lenisInstance.scrollTo(element, { offset: -80, duration: 1.2 });
      }
    }, 300);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-screen z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-10 flex justify-between items-center w-full">
        {/* Left Spacer */}
        <div className="hidden md:block w-1/3"></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5 space-x-6">
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
            onClick={() => handleScrollTo("experience")}
            className="text-white hover:text-gray-300 transition font-semibold text-lg cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => handleScrollTo("contact")}
            className="px-5 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition text-lg cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex w-full justify-end">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white p-2 focus:outline-none"
            aria-label="Open menu"
          >
            <Menu size={32} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            // Added h-[100dvh] to ensure it covers full mobile screen including address bar area
            className="fixed inset-0 w-screen h-[100dvh] z-[60] bg-black flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <div className="absolute top-0 right-0 p-6 sm:p-10 pr-6 sm:pr-10 lg:pr-16 pt-8 sm:pt-10 w-full flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2 focus:outline-none"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col items-center gap-8">
              <button
                onClick={() => handleScrollTo("about")}
                className="text-white hover:text-gray-300 transition font-bold text-3xl cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => handleScrollTo("projects")}
                className="text-white hover:text-gray-300 transition font-bold text-3xl cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => handleScrollTo("experience")}
                className="text-white hover:text-gray-300 transition font-bold text-3xl cursor-pointer"
              >
                Experience
              </button>
              <button
                onClick={() => handleScrollTo("contact")}
                className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition text-2xl cursor-pointer"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
