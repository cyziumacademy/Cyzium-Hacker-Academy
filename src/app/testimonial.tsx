"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Props type for TestimonialOrb
type TestimonialOrbProps = {
  name: string;
  image: string;
  quote: string;
  delay?: number;
  zIndex?: string;
  gradientClass?: string;
};

// Testimonial Orb Component
function TestimonialOrb({
  name,
  image,
  quote,
  delay = 0.3,
  zIndex = "z-10",
  gradientClass = "from-cyan-500/20 to-transparent",
}: TestimonialOrbProps) {
  return (
    <motion.div
      className={`relative w-80 h-80 md:w-96 md:h-96 rounded-full flex flex-col items-center justify-center text-center p-8 bg-black/30 border-2 border-white/30 backdrop-blur-xl shadow-2xl ${zIndex}`}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: delay, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 30px rgba(214, 20, 49, 0.4)",
        zIndex: 50,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
    >
      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradientClass} opacity-50`}></div>
      <div className="relative z-10 flex flex-col items-center px-4">
        <Quote size={20} className="text-white/70 mb-2" />
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full border-4 border-white/20 object-cover mb-4"
        />
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-sm text-gray-300 leading-relaxed italic mt-2">"{quote}"</p>
      </div>
    </motion.div>
  );
}

// Main Testimonials Page Component
function TestimonialsPage() {
  const testimonials: TestimonialOrbProps[] = [
    {
      name: "Priya Singh",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto-format&fit=crop",
      quote:
        "The hands-on labs on XSS and SQLi were incredible. I use these skills daily.",
      delay: 0.3,
      zIndex: "z-10",
      gradientClass: "from-cyan-500/20 to-transparent",
    },
    {
      name: "Aarav Sharma",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto-format&fit=crop",
      quote:
        "The practical labs and interview prep helped me land my first SOC role in 3 months.",
      delay: 0.5,
      zIndex: "z-20",
      gradientClass: "from-red-500/20 to-transparent",
    },
    {
      name: "Rohan Verma",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto-format&fit=crop",
      quote: "The mentors are actual industry pros. Their insights are invaluable.",
      delay: 0.7,
      zIndex: "z-10",
      gradientClass: "from-purple-500/20 to-transparent",
    },
  ];

  return (
    <div
      className="relative min-h-screen w-full text-white font-sans"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/subtle-prism.png')",
      }}
    >

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 overflow-hidden">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-red-400">
              Graduates
            </span>{" "}
            Say
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Real stories from students who transformed their careers with Cyzium.
          </p>
        </motion.div>

        {/* Curvy Orb Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:-space-x-40">
          {testimonials.map((testimonial, index) => (
            <TestimonialOrb key={index} {...testimonial} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default TestimonialsPage;
