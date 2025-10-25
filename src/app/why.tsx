"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, Briefcase, Users, BrainCircuit, ShieldCheck } from "lucide-react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  className?: string;
};

function FeatureCard({ icon, title, description, delay, className = "" }: FeatureCardProps) {
  return (
    <motion.div
      className={`relative p-8 rounded-[40px] bg-black/10 border border-white/20 shadow-[inset_-3px_-1px_9px_rgba(255,255,255,0.5),_inset_10px_10px_20px_rgba(0,0,0,0.2),_0_4px_30px_rgba(0,0,0,0.1)] overflow-hidden group ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="inline-block p-3 bg-cyan-500/20 rounded-xl border border-cyan-400/30">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function WhyChooseUsPage() {
  const features = [
    { icon: <Target size={32} className="text-red-500" />, title: "Hands-On Labs", description: "Work on Splunk, Wireshark, ELK & real attack simulations.", delay: 0.1, className: "md:col-span-1" },
    { icon: <Users size={32} className="text-red-500" />, title: "Ai & Cloud Specialized", description: "Learn from elite practitioners with years of real-world SOC and pentesting experience.", delay: 0.1, className: "md:col-span-2" },
    { icon: <Briefcase size={32} className="text-red-500" />, title: "Placement Assistance", description: "We provide resume prep, interview coaching, and placement support.", delay: 0.1, className: "md:col-span-3" },
    { icon: <BrainCircuit size={32} className="text-red-500" />, title: "Practical Learning", description: "We focus on job-ready skills employers are looking for.", delay: 0.1, className: "md:col-span-1" },
    { icon: <ShieldCheck size={32} className="text-red-500" />, title: "Community & Support", description: "Gain access to our private Discord and Telegram channels.", delay: 0.1, className: "md:col-span-1" },
    { icon: <Zap size={32} className="text-red-500" />, title: "Cutting-Edge Curriculum", description: "Our syllabus is constantly updated with latest threats, tools, and techniques.", delay: 0.1, className: "md:col-span-1" },
  ];

  return (
    <div 
      className="relative min-h-screen w-full text-white font-sans"
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/subtle-prism.png')" }}
    >
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
            Why Choose  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-red-500">
              Cyzium
            </span>{" "}?
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            We're not just another training center. We are your launchpad into the elite world of cybersecurity.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
              className={feature.className}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default WhyChooseUsPage;
