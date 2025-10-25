"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AgeSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a192f] via-[#101f3b] to-[#0a192f] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* LEFT SIDE - TEXT */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[53px] font-bold mb-6"
          >
            Age is Just a Number
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 70, damping: 15 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            We are starting our programs from <span className="text-blue-400 font-semibold">7th grade students</span>.
            But learning has no age limit — if you’re in <span className="text-blue-400 font-semibold">6th, 5th, or even younger</span> 
            and have the curiosity to explore technology, you’re more than welcome at 
            <span className="text-blue-400 font-semibold"> Cyzium Hacker Academy</span>.  
            Passion and curiosity matter more than age — we believe in empowering young minds early to 
            build the next generation of cybersecurity leaders.
          </motion.p>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <Image
            src="/age1.png"
            alt="Young student learning cybersecurity"
            width={450}
            height={450}
            className="rounded-2xl shadow-2xl border border-blue-500/30 hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* Floating glow animation */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
