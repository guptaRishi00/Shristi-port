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
    
      <main className="relative  bg-black justify-center items-center flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <About />
        <WhatIDo />
        <Education />
        <Philosophy />
        <DesignProcess />
        <FeaturedProjects />
        <Footer />
        </div>
        
      </main>
      
    
  );
}
