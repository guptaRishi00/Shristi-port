'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const NewspaceProject: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black">
      
      {/*  Navbar Section  */}
      <div className="w-full bg-black/90 backdrop-blur-sm sticky top-0 z-50 py-6 border-b border-neutral-800">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <Navbar />
        </div>
      </div>

      {/*  Main Page Content*/}
      <div className="max-w-[1000px] mx-auto px-5 py-10 md:px-8 md:py-16">
        
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-neutral-800">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white flex items-center gap-4">
            <Link 
              href="/" 
              className="inline-block text-sm text-white px-4 py-2 border border-neutral-700 rounded hover:bg-neutral-900 hover:border-neutral-500 transition-all"
            >
              ←
            </Link>
            Newspace Research & Technologies
          </h1>
          <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
            Duo-To-Hexa Restrictions | Correct Point-Distorted Vision Of This Work; Here's An Overview Of My Role And Contributions!!!
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[280px] md:h-[550px] bg-neutral-900 border border-neutral-800 mb-12 overflow-hidden flex items-center justify-center rounded-2xl">
          <Image 
            src="/Frame4.png" 
            alt="Newspace Drone Project"
            width={1000}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          <div className="p-5 border border-neutral-800 rounded">
            <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Role</div>
            <div className="text-base md:text-lg text-white font-medium">UI/UX Developer - Django Engineer</div>
          </div>
          <div className="p-5 border border-neutral-800 rounded">
            <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Duration</div>
            <div className="text-base md:text-lg text-white font-medium">Long-term Project</div>
          </div>
          <div className="p-5 border border-neutral-800 rounded">
            <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Industry</div>
            <div className="text-base md:text-lg text-white font-medium">Aerospace & Defense</div>
          </div>
        </div>

        {/* Project Overview */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-white pb-4 border-b border-neutral-800">
            Project Overview
          </h2>
          <div className="py-8">
            <p className="mb-5 text-neutral-300">
              At Newspace Research & Technologies, I designed Mission-Critical Interfaces for Aerospace and Defense Solutions. 
              My role extended across multiple domains, encompassing UI/UX design, frontend and backend development, and 
              mission-critical dashboard creation. I played an integral role in creating a user-centric interface that balanced 
              aesthetic appeal with operational efficiency to support complex defense and aerospace workflows.
            </p>
          </div>
        </div>

        {/* My Contributions */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-white pb-4 border-b border-neutral-800">
            My Contributions
          </h2>
          <div className="py-8">
            <ul className="list-none">
              <li className="py-5 border-b border-neutral-900 text-neutral-300">
                <strong>Designed Mission-Critical Comprehensive Remote Interfaces That Increased Usability And Boosted Engagement By 30%.</strong> 
                Moved From Over-Cluttered Interfaces To A Streamlined Dashboard, Prioritizing Readability And Quick Access To Critical Information.
              </li>
              <li className="py-5 border-b border-neutral-900 text-neutral-300">
                <strong>Developed Interactive Map Visualizations (Using Leaflet or Mapbox) Enabling Teams Visualize Complex Geospatial Data Efficiently.</strong> 
                This Elevated the User Experience, Allowing Seamless Navigation And Data Interaction.
              </li>
              <li className="py-5 border-b border-neutral-900 text-neutral-300">
                <strong>Reduced User Errors Through Enhanced User Workflows, Resulting In Faster Response Times.</strong> 
                Worked On Crafting Accessible Client-Server Features Optimized For Long-Operational Hours And Medium To High-Stress Situations.
              </li>
              <li className="py-5 text-neutral-300">
                <strong>Seamlessly Integrated APIs Between Client And Server To Support Real-Time, High-Stakes Decision-Making.</strong> 
                Helped Bridge Front-End Elegance With Back-End Robustness.
              </li>
            </ul>
          </div>
        </div>

        {/* Challenge */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-white pb-4 border-b border-neutral-800">
            Challenge
          </h2>
          <div className="py-8">
            <p className="mb-5 text-neutral-300">
              Designing for Aerospace And Defense Meant Working in Mission-Critical Environments Where Both User-Friendliness 
              And High-Tech Precision Are Crucial. The Challenge Was To Simplify Complex Data Systems While Ensuring Accuracy, 
              Security, And Usability Under Diverse Network Conditions, Screen Sizes, And User Capabilities.
            </p>
            
            <div className="bg-neutral-950 border-l-4 border-white p-6 my-8 rounded">
              <p className="m-0 italic text-neutral-200">
                The primary challenge was balancing sophisticated functionality with intuitive design in high-stakes, 
                mission-critical environments where every second counts.
              </p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-white pb-4 border-b border-neutral-800">
            Process
          </h2>
          <div className="py-8">
            <ul className="list-none">
              <li className="py-5 border-b border-neutral-900 text-neutral-300">
                Conducted stakeholder interviews and user research to understand workflows
              </li>
              <li className="py-5 border-b border-neutral-900 text-neutral-300">
                Created wireframes and prototypes to test usability before implementation
              </li>
              <li className="py-5 border-b border-neutral-900 text-neutral-300">
                Designed data-driven dashboards that emphasized speed and clarity
              </li>
              <li className="py-5 text-neutral-300">
                Developed scalable design systems to support multiple platforms and use cases
              </li>
              <li className="py-5 text-neutral-300">
                Collaborated closely with engineers and domain experts to ensure feasibility and alignment with real-world operations
              </li>
            </ul>
          </div>
        </div>

        {/* Solutions */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-white pb-4 border-b border-neutral-800">
            Solutions
          </h2>
          <div className="py-8">
            <ul className="list-none">
              <li className="py-5 border-b border-neutral-900 text-neutral-300">
                Website Redesign: Improved usability, leading to a 30% increase in user engagement
              </li>
              <li className="py-5 border-b border-neutral-900 text-neutral-300">
                Mission Dashboards: Designed interactive visualizations for real-time decision-making
              </li>
              <li className="py-5 border-b border-neutral-900 text-neutral-300">
                Dark-Mode UI: Crafted accessible dark-mode layouts optimized for long operational shifts
              </li>
              <li className="py-5 border-b border-neutral-900 text-neutral-300">
                Design Systems: Introduced component libraries that reduced design-to-development time by 15%
              </li>
            </ul>
          </div>
        </div>

        {/* Impact */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-white pb-4 border-b border-neutral-800">
            Impact
          </h2>
          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 mb-8">
              <div className="bg-neutral-950 p-8 border border-neutral-800 rounded text-center">
                <span className="text-4xl md:text-5xl font-bold text-white block mb-3">30%</span>
                <span className="text-sm text-neutral-500 uppercase tracking-wider">Increased Engagement</span>
              </div>
              <div className="bg-neutral-950 p-8 border border-neutral-800 rounded text-center">
                <span className="text-4xl md:text-5xl font-bold text-white block mb-3">34%</span>
                <span className="text-sm text-neutral-500 uppercase tracking-wider">Time Saved</span>
              </div>
              <div className="bg-neutral-950 p-8 border border-neutral-800 rounded text-center">
                <span className="text-4xl md:text-5xl font-bold text-white block mb-3">15%</span>
                <span className="text-sm text-neutral-500 uppercase tracking-wider">Improved Efficiency</span>
              </div>
            </div>

            <ul className="list-none">
              <li className="py-5 border-b border-neutral-900 text-neutral-300">
                Increased operational efficiency by 20% through streamlined workflows and intuitive layouts.
              </li>
              <li className="py-5 border-b border-neutral-900 text-neutral-300">
                Delivered user-centered design solutions that balanced precision with usability.
              </li>
              <li className="py-5 border-b border-neutral-900 text-neutral-300">
                Strengthened design culture by introducing scalable systems and usability testing practices.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
};

export default NewspaceProject;
