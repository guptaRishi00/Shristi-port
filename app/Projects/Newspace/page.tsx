"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowLeft, Shield, Globe, Zap, Users, ArrowRight, PenTool, Layout, Moon, Layers 
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => (
  <div className="p-0 m-0">
    <div className={`w-8 h-8 ${color} mb-3`}>{icon}</div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

export default function NewspacePortfolio() {
  const heroBackgroundImage = "/Project4.png"; // from public folder

  return (
    <motion.div
      className="bg-black text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh]">
        {heroBackgroundImage && (
          <>
            <Image
              src={heroBackgroundImage}
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </>
        )}

        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-24 sm:pt-32 flex flex-col">
          <Link href="/#projects" scroll={true}>
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              <span>Back To Projects</span>
            </button>
          </Link>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Newspace Research & Technologies
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-500" />
            <span className="text-yellow-500 font-medium text-sm sm:text-base">
              NDA Protected
            </span>
          </div>

          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl leading-relaxed">
            (Due to NDA restrictions, I cannot share detailed visuals of this work.<br />
            Here&apos;s an overview of my role and contributions.)
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-12">Project Overview</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Text */}
          <div className="flex flex-col justify-start">
            <p className="text-gray-300 leading-relaxed mb-6">
              At Newspace Research & Technologies, I designed mission-critical interfaces for aerospace and defence applications. In these high-stakes environments, design had to be more than aesthetic — it had to deliver clarity, speed, and reliability.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My focus was on creating systems that empowered users to make confident decisions in complex operational contexts.
            </p>
          </div>

          {/* Right Feature Cards */}
          <div className="grid grid-cols-2 gap-6">
            <FeatureCard
              icon={<Globe className="w-8 h-8" />}
              title="Global Impact"
              description="Mission-Critical Systems Used Worldwide"
              color="text-blue-400"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Security First"
              description="Defense-Grade Security Standards"
              color="text-green-400"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="High Performance"
              description="Real-Time Data Processing"
              color="text-yellow-400"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="User-Centric"
              description="Designed For Operators And Engineers"
              color="text-purple-400"
            />
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Heading */}
          <div className="flex items-center justify-center">
            <h2 className="text-4xl font-bold text-center">The Challenge</h2>
          </div>

          {/* Right Gray Box */}
          <div className="bg-white/10 border border-gray-500 rounded-lg p-10 max-w-lg mx-auto h-full">
            <p className="text-gray-200 leading-relaxed">
              Designing for aerospace and defence meant working in mission-critical environments where interfaces needed to be clear, reliable, and efficient. The challenge was to simplify complex data systems while ensuring accuracy, usability, and trust for operators and engineers.
            </p>
          </div>
        </div>
      </section>

      {/* My Contributions */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">My Contributions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contribution cards */}
          <div className="p-8">
            <div className="flex items-start gap-4">
              <ArrowRight className="w-6 h-6 text-white flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3">End-To-End Redesign</h3>
                <p className="text-white">
                  Led a comprehensive website redesign that improved usability and boosted engagement by 30%.
                </p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-start gap-4">
              <Layout className="w-6 h-6 text-white flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Mission Dashboards</h3>
                <p className="text-white">
                  Designed interactive data visualization dashboards, helping teams interpret complex information quickly and accurately.
                </p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-start gap-4">
              <PenTool className="w-6 h-6 text-white flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Scalable Design Systems</h3>
                <p className="text-white">
                  Built component-based design systems, ensuring consistency and reducing design-to-development time by 15%.
                </p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-start gap-4">
              <Moon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Dark-Mode UI</h3>
                <p className="text-white">
                  Created accessible dark-mode patterns optimized for long operational hours and mission environments.
                </p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-start gap-4">
              <Layers className="w-6 h-6 text-white flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Cross-Functional Collaboration</h3>
                <p className="text-white">
                  Partnered with engineers, product managers, and domain experts to align designs with real-world requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Solutions */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Process */}
          <div>
            <h2 className="text-4xl font-bold mb-8">Process</h2>
            <div className="space-y-6">
              {[
                "Conducted stakeholder interviews and user research to understand workflows",
                "Created wireframes and prototypes to test usability before implementation",
                "Designed data-driven dashboards that emphasized speed and clarity",
                "Developed scalable design systems to support multiple platforms and use cases",
                "Collaborated closely with engineers and domain experts to ensure feasibility and alignment with real-world operations"
              ].map((text, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/10 text-white rounded-full flex items-center justify-center font-semibold">
                    {i + 1}
                  </div>
                  <p className="text-white pt-1">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-4xl font-bold mb-8">Solutions</h2>
            <div className="space-y-4">
              {[
                { title: "UI Redesign", text: "Improved usability, leading to a 30% increase in user engagement" },
                { title: "Mission Dashboards", text: "Designed interactive visualizations for real-time decision-making" },
                { title: "Dark-Mode UI", text: "Crafted accessible dark-mode layouts optimized for long operational shifts" },
                { title: "Design Systems", text: "Introduced component libraries that reduced design-to-development time by 15%" },
              ].map((item, i) => (
                <div key={i} className="border border-white bg-white/10 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-white text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="max-w-7xl mx-auto px-6 py-16 mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Impact & Results</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { num: "20%", title: "Operational Efficiency Increase", text: "Through Streamlined Workflows And Intuitive Layouts" },
            { num: "30%", title: "User Engagement Boost", text: "Delivered User-Centered Design Solutions That Balanced Precision With Usability" },
            { num: "15%", title: "Faster Development", text: "Strengthened Design Culture By Introducing Scalable Systems And Establishing Design Principles" },
          ].map((item, i) => (
            <div key={i} className="border border-white rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-white mb-4">{item.num}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-white text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}
