"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react"; // <-- ADDED THIS

// Type for individual testimonial
interface Testimonial {
  name: string;
  image: string;
  quote: string;
  gradientClass: string;
}

// Type for TestimonialOrb props
interface TestimonialOrbProps extends Testimonial {
  animate: {
    x?: string | number;
    scale?: number;
    zIndex?: number;
    opacity?: number;
  };
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

// TestimonialOrb Component
function TestimonialOrb({
  name,
  image,
  quote,
  gradientClass,
  animate,
  onHoverStart,
  onHoverEnd,
}: TestimonialOrbProps) {
  return (
    <motion.div
      className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full flex flex-col items-center justify-center text-center p-6 bg-black/30 border-2 border-white/20 backdrop-blur-xl cursor-pointer"
      style={{ zIndex: animate.zIndex || 1 }}
      animate={{ ...animate }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{ boxShadow: "0 0 40px rgba(255, 0, 0, 0.6)" }}
      transition={{ type: "spring", stiffness: 80, damping: 35 }}
    >
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradientClass} opacity-50`}
      ></div>
      <div className="relative z-10 flex flex-col items-center px-4">

        {/* 🔥 REPLACED IMAGE WITH USER ICON — ONLY CHANGE */}
        <User className="w-20 h-20 text-white/80 mb-3" />

        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-xs text-gray-300 leading-relaxed italic mt-2">
          &quot;{quote}&quot;
        </p>
      </div>
    </motion.div>
  );
}

// Main Testimonials Page Component
const TestimonialsPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const testimonials: Testimonial[] = [
    {
      name: "Keerthana Chandran",
      image: "",
      quote:
        "JBBH completely changed the way I look at bug bounty. The step-by-step workflow and real examples made everything finally click for me.",
      gradientClass: "from-purple-500/20 to-transparent",
    },
    {
      name: "Adithyan A S",
      image: "",
      quote:
        "CBBT was intense but worth every minute. The real-time guidance helped me understand exactly how professionals approach live targets.",
      gradientClass: "from-purple-500/20 to-transparent",
    },
    {
      name: "Rohan s nair",
      image: "",
      quote:
        "CBBE pushed me beyond basics. The hands-on advanced exploitation sessions gave me confidence to work on high-reward programs.",
      gradientClass: "from-purple-500/20 to-transparent",
    },
    {
      name: "Rahul A",
      image: "",
      quote:
        "CPBH was the best decision I made. Everything—from structured modules to practical labs—felt designed to make us industry ready.",
      gradientClass: "from-purple-500/20 to-transparent",
    },
    {
      name: "Vishnu S",
      image: "",
      quote:
        "I joined CPBH after struggling alone for months. The clarity, mentorship and weekly tasks helped me consistently improve and stay motivated.",
      gradientClass: "from-purple-500/20 to-transparent",
    },
  ];

  // Automatic sliding logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  // Orb positioning
  const getOrbStyle = (orbIndex: number) => {
    const offset =
      (orbIndex - activeIndex + testimonials.length) % testimonials.length;
    if (offset === 0) return { x: "0%", scale: 1.1, zIndex: 3, opacity: 1 };
    if (offset === 1) return { x: "75%", scale: 0.8, zIndex: 2, opacity: 1 };
    if (offset === testimonials.length - 1)
      return { x: "-75%", scale: 0.8, zIndex: 2, opacity: 1 };
    return {
      scale: 0.5,
      zIndex: 1,
      opacity: 0,
      x: offset > testimonials.length / 2 ? "-150%" : "150%",
    };
  };

  return (
    <div
      className="relative min-h-screen w-full text-white font-sans"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/subtle-prism.png')",
      }}
    >
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen py-16 overflow-hidden">
        {/* Header Section */}
        <motion.div
          className="text-center mb-24 px-8"
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
            Real stories from students who transformed their careers with
            Cyzium.
          </p>
        </motion.div>

        {/* Dynamic Testimonial Carousel */}
        <div className="relative h-96 w-full max-w-5xl flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialOrb
              key={testimonial.name}
              {...testimonial}
              animate={getOrbStyle(index)}
              onHoverStart={() => {
                setIsHovered(true);
                setActiveIndex(index);
              }}
              onHoverEnd={() => setIsHovered(false)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default TestimonialsPage;
