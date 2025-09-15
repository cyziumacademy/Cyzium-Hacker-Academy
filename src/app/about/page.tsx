"use client";
import React from "react";
import { motion } from "framer-motion";

// Main About Page Component
function AboutPage() {
  return (
    <div 
      className="relative min-h-screen w-full text-white font-sans"
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/subtle-prism.png')" }}
    >

      
      <main className="relative z-10 -ml-[360px] flex items-center justify-center min-h-screen p-8">
        {/* Main Content Card with dark theme styling */}
        <motion.div 
          className="relative w-full max-w-6xl p-12 md:p-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Header Section with updated text and style */}
          <div className="relative mb-12">
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none relative z-10">
              Minds <br/> Behind <br/> The Mission
            </h1>
            <h1 
              className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none absolute top-1 left-1 text-transparent z-0"
              style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}
              aria-hidden="true"
            >
              Minds <br/> Behind <br/> The Mission
            </h1>
          </div>


          {/* Main Content Grid - Adjusted for wider text columns */}
          <div className="grid md:grid-cols-5 gap-16 items-center">
            
            {/* Left Column: Image/Logo Only (Takes up 2/5 of the width) */}
            <div className="md:col-span-2">
                <motion.img 
                    src="/logo.png" 
                    alt="Cyzium Hacker Academy Logo"
                    className="w-full max-w-md h-auto object-contain"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                />
            </div>

            {/* Right Column: All Text Content (Takes up 3/5 of the width) */}
             <div className="flex flex-col md:flex-row gap-8 md:col-span-3">
                <motion.p 
                    className="flex-1 text-lg text-gray-300 leading-relaxed italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                 >
                    "We aren't just instructors; we're practitioners from the front lines of cyber warfare. Our mission is to forge the next generation of elite security professionals through real-world, hands-on experience."
                </motion.p>
                

  <motion.div 
    className="w-2/3 prose prose-lg max-w-none text-gray-300 prose-p:text-gray-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.3 }}
  >
    <p>
      Welcome to Cyzium. You're here because you're curious, driven, and ready to move 
      beyond theoretical knowledge. You're in the right place.
    </p>
  </motion.div>
</div>


          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default AboutPage;

