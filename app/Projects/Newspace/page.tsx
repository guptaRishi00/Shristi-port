"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // <-- added
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Shield, Globe, Zap, Users, ArrowRight, PenTool, Layout, Moon, Layers } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => (
  <div>
    <div className={`w-8 h-8 ${color} mb-3`}>{icon}</div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

export default function NewspacePortfolio() {
  const heroBackgroundImage: string = "/Project4.png"; 
  const router = useRouter(); // <-- initialize router

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content with top padding for fixed Navbar */}
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-screen">
          {/* Background Image */}
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

          {/* Hero Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-6 pt-8">
            {/* Back to Projects Button */}
            <Link href="/#projects" scroll={true}>
  <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12">
    <ArrowLeft className="w-4 h-4" />
    <span>Back To Projects</span>
  </button>
</Link>

            {/* Hero Text */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Newspace Research & Technologies
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-yellow-500" />
              <span className="text-yellow-500 font-medium">NDA Protected</span>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl">
              (Due to NDA restrictions, I cannot share detailed visuals of this work.<br />
              Here&apos;s an overview of my role and contributions.)
            </p>
          </div>
        </section>

        {/* Project Overview, Challenge, Contributions, etc. */}
        {/* ... all other sections remain unchanged ... */}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
