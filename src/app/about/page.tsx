"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Users,
  BrainCircuit,
  Swords,
  Award,
  Atom,
  Box,
  ChevronsRight,
} from "lucide-react";
import Navbar from "../navbar";
import Footer from "../footer";

// Section Component
type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ children, className = "" }) => (
  <section className={`relative py-12 px-4 sm:py-16 sm:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

// MissionSection
function MissionSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-32 sm:pt-50 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative mb-10 sm:mb-16">
          <h1 className="text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none relative z-10">
            Minds Behind <br className="hidden sm:block" /> The Mission
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-1 items-start">
          <div className="flex flex-col gap-6 sm:gap-1">
            <motion.img
              src="/logo.png"
              alt="Cyzium Hacker Academy Logo"
              className="w-full max-w-xs sm:max-w-md h-auto object-contain self-start mx-auto md:mx-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false, amount: 0.2 }}
            />
            <motion.p
              className="text-base sm:text-lg text-gray-400 leading-relaxed text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              "We aren't just instructors; we're practitioners from the front lines of cyber warfare. Our mission is to forge the next generation of elite security professionals through real-world, hands-on experience."
            </motion.p>
          </div>
          <motion.div
            className="prose prose-sm sm:prose-lg mt-8 sm:mt-10 max-w-none text-gray-300 prose-p:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <p>
              Welcome to Cyzium. You're here because you're curious, driven, and
              ready to move beyond theoretical knowledge. You're in the right
              place.
            </p>
            <p>
              We built this academy to be the resource we wish we had when we
              started. Our curriculum is forged from years of industry
              experience in penetration testing, incident response, and threat
              intelligence. We skip the fluff and focus entirely on the
              practical, job-ready skills that employers are desperately
              seeking.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// TheCyziumEdgeSection
function TheCyziumEdgeSection() {
  const features = [
    { icon: <Target size={32} />, title: "Cyber Ranges" },
    { icon: <Users size={32} />, title: "Elite Mentors" },
    { icon: <Swords size={32} />, title: "Red vs Blue Teams" },
    { icon: <BrainCircuit size={32} />, title: "Intelligence Labs" },
    { icon: <Award size={32} />, title: "Certifications" },
  ];
  return (
    <Section>
      <div className="bg-black/10 border border-white/40 rounded-[40px] sm:rounded-[70px] shadow-[inset_-3px_-1px_9px_rgba(255,255,255,0.5),_inset_10px_10px_20px_rgba(0,0,0,0.2),_0_4px_30px_rgba(0,0,0,0.1)] p-8 sm:p-12 md:p-20">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-10 sm:mb-16 text-white">
          The Cyzium Edge
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="mx-auto mb-3 sm:mb-4 w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center rounded-full bg-red-600/10 border-2 border-red-500 text-red-500">
                {feature.icon}
              </div>
              <h3 className="text-base sm:text-xl font-bold">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// OurApproachSection
function OurApproachSection() {
  const steps = ["Learn", "Simulate", "Defend", "Lead"];
  return (
    <Section>
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-10 sm:mb-16">
        Our Approach
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <motion.div
              className="flex items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center rounded-full bg-black/30 border border-white/20">
                <span className="text-xl sm:text-2xl font-bold text-red-500">{i + 1}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">{step}</h3>
            </motion.div>
            {i < steps.length - 1 && (
              <ChevronsRight
                className="hidden md:block text-gray-600"
                size={40}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </Section>
  );
}

// CommunityNetworkSection
function CommunityNetworkSection() {
  return (
    <Section>
      <div className="bg-black/30 border border-white/20 rounded-[40px] sm:rounded-[95px] shadow-[inset_-3px_-1px_9px_rgba(255,255,255,0.5),_inset_10px_10px_20px_rgba(0,0,0,0.2),_0_4px_30px_rgba(0,0,0,0.1)] p-8 sm:p-12 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
            Community & Network
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Join our global academy — connect with learners, 
            alumni, and professionals from around the world.
            Collaborate on projects, attend live sessions, and grow together in a truly digital community.
          </p>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full h-[250px] sm:h-[400px] rounded-[30px] sm:rounded-[40px] overflow-hidden opacity-70"
          >
<iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15544639.293287896!2d78.9629!3d20.5937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM1JzM3LjMiTiA3OMKwNTcnNDYuNCJF!5e0!3m2!1sen!2sin!4v1733860000000!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

          </motion.div>
        </div>
      </div>
    </Section>
  );
}

// OurCommitmentSection
function OurCommitmentSection() {
  return (
    <Section>
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-12">
        Our Commitment
      </h2>
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="text-2xl sm:text-4xl font-bold leading-tight">
            "We guarantee a curriculum that's always ahead of the curve,
            integrating the latest advancements in{" "}
            <span className="text-red-500">AI-driven defense</span> and{" "}
            <span className="text-red-500">cloud security</span> to ensure
            you're not just ready for a job, but for a career."
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

// FutureVisionSection
function FutureVisionSection() {
  const futureTech = [
    { icon: <BrainCircuit size={32} />, title: "AI-Driven Labs" },
    { icon: <Atom size={32} />, title: "Quantum Encryption" },
    { icon: <ShieldCheck size={32} />, title: "Cyber Shields" },
    { icon: <Box size={32} />, title: "Immersive VR Labs" },
  ];
  return (
    <Section>
      <div className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-[30px] sm:rounded-[40px] p-8 sm:p-12 md:p-20 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
          Our Vision for the Future
        </h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 mb-8 sm:mb-12">
          We are pioneering next-generation training solutions to prepare you
          for the threats of tomorrow.
        </p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {futureTech.map((tech, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 sm:gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="text-red-500">{tech.icon}</div>
              <span className="font-semibold text-sm sm:text-base">{tech.title}</span>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="max-w-3xl mx-auto text-sm sm:text-lg text-gray-400 mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          These advancements will empower our students to not only respond to
          current threats but to anticipate and neutralize future attack
          vectors. Our goal is to cultivate a proactive mindset, preparing you
          to become a leader in the ever-evolving landscape of cybersecurity.
        </motion.p>
      </div>
    </Section>
  );
}

// CallToActionFooter
function CallToActionFooter() {
  return (
    <footer className="py-12 sm:py-16 text-center px-4">
      <motion.button
        className="px-8 sm:px-10 py-3 sm:py-4 bg-red-600 text-white text-lg sm:text-xl font-bold rounded-lg hover:bg-red-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Join Now. Defend the Future.
      </motion.button>
    </footer>
  );
}

// Main Page
function CyziumAboutPage() {
  return (
    <div className="relative text-white font-sans overflow-x-hidden">
      {/* Background video & overlay */}
      <div className="fixed inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover brightness-70"
        >
          <source src="/bg4.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/subtle-prism.png')",
            opacity: 0.2,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap");
        body {
          font-family: "Montserrat", sans-serif;
        }
      `}</style>

      <main className="relative z-10">
        <Navbar />
        <MissionSection />
        <TheCyziumEdgeSection />
        <OurApproachSection />
        <CommunityNetworkSection />
        <OurCommitmentSection />
        <FutureVisionSection />
        <CallToActionFooter />
        <Footer />
      </main>
    </div>
  );
}

export default CyziumAboutPage;
