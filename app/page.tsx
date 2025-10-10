import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Education from "@/components/Education";
import Philosophy from "@/components/Philosophy";
import DesignProcess from "@/components/DesignProcess";
import Footer from "@/components/Footer";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <main className="relative bg-black flex flex-col items-center overflow-hidden">

      {/* Navbar */}
      <div className="w-full max-w-7xl px-5 sm:px-10">
        <Navbar />
      </div>

      {/* Hero Section - Full Width */}
      <div className="w-full">
        <Hero />
      </div>

      {/* Main Content Sections - Centered with Equal Padding */}
      <div className="w-full max-w-7xl px-5 sm:px-10 py-12 flex flex-col items-center space-y-12">
        <About />
        <WhatIDo />
        <FeaturedProjects />
        <Philosophy />
        <Education />
        <DesignProcess />
      </div>

      {/* Footer - Full Width */}
      <div className="w-full">
        <Footer />
      </div>

    </main>
  );
}
