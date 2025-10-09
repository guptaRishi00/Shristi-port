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
  </div>

  
  <div className="-mx-5 sm:-mx-10 ">
  <Hero />
</div>

  <div className="max-w-7xl w-full">
    <About />
    <WhatIDo />
    <FeaturedProjects />
    <Philosophy />
    <Education />
    <DesignProcess />
   
    
  </div>
   <div className="-mx-5 sm:-mx-10">
  <Footer />
</div>
        
      </main>
      
    
  );
}
