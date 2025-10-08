import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm  z-50">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex items-center justify-end h-16 sm:h-20">
          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <a 
              href="#about" 
              className="text-white text-sm sm:text-base font-medium hover:text-gray-300 transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-white text-sm sm:text-base font-medium hover:text-gray-300 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-2 bg-white text-black text-sm sm:text-base font-medium rounded-full hover:bg-gray-200 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}