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
    <main className="relative bg-black flex flex-col items-center overflow-hidden mx-auto px-5 sm:px-10">
      
      {/* Navbar */}
      <div className="max-w-7xl w-full">
        <Navbar />
      </div>

      {/* Hero Section - Full Width */}
      <div className="-mx-5 sm:-mx-10 w-screen">
        <Hero />
      </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl w-full">
        <About />
        <WhatIDo />
        <FeaturedProjects />
        <Philosophy />
        <Education />
        <DesignProcess />
      </div>

      {/* Footer - Full Width */}
      <div className="-mx-5 sm:-mx-10 w-screen">
        <Footer />
      </div>
      
    </main>
  );
}
