"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Globe, Code, BrainCircuit, Activity, Quote, Swords, Award, Atom, Box, ChevronsRight } from "lucide-react";
import Navbar from "../navbar";

// Section Component
type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ children, className = "" }) => (
  <section className={`relative py-16 px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

// MissionSection
function MissionSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-50">
      <div className="max-w-7xl mx-auto w-full px-8">
        <div className="relative mb-16">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none relative z-10">
            Minds Behind <br /> The Mission
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-10">
            <motion.img
              src="https://placehold.co/400x150/0a192f/FFFFFF?text=CYZIUM\nHACKER+ACADEMY"
              alt="Cyzium Hacker Academy Logo"
              className="w-full max-w-md h-auto object-contain self-start"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-lg text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              "We aren't just instructors; we're practitioners from the front lines of cyber warfare. Our mission is to forge the next generation of elite security professionals through real-world, hands-on experience."
            </motion.p>
          </div>
          <motion.div
            className="prose prose-lg max-w-none text-gray-300 prose-p:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p>
              Welcome to Cyzium. You're here because you're curious, driven, and ready to move beyond theoretical knowledge. You're in the right place.
            </p>
            <p>
              We built this academy to be the resource we wish we had when we started. Our curriculum is forged from years of industry experience in penetration testing, incident response, and threat intelligence. We skip the fluff and focus entirely on the practical, job-ready skills that employers are desperately seeking.
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
      <div className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-[40px] p-12 md:p-20">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">The Cyzium Edge</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto mb-4 w-20 h-20 flex items-center justify-center rounded-full bg-red-600/10 border-2 border-red-500 text-red-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
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
      <h2 className="text-5xl font-bold text-center mb-16">Our Approach</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black/30 border border-white/20">
                <span className="text-2xl font-bold text-red-500">{i + 1}</span>
              </div>
              <h3 className="text-3xl font-bold">{step}</h3>
            </motion.div>
            {i < steps.length - 1 && <ChevronsRight className="hidden md:block text-gray-600" size={40} />}
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
      <div className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-[40px] p-12 md:p-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-4 text-white">Community & Network</h2>
          <p className="text-lg text-gray-300">
            Join a global network of learners, alumni, and industry professionals. Collaborate on projects, participate in exclusive events, and build connections that will last a lifetime.
          </p>
        </div>
        <div>
          <motion.img
            src="https://placehold.co/600x400/0a192f/FF0000?text=Global+Map"
            alt="Global Community Map"
            className="w-full h-auto rounded-2xl opacity-70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </Section>
  );
}

// OurCommitmentSection
function OurCommitmentSection() {
  return (
    <Section>
      <h2 className="text-5xl font-bold text-center mb-12">Our Commitment</h2>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-4xl font-bold leading-tight">
            "We guarantee a curriculum that's always ahead of the curve, integrating the latest advancements in <span className="text-red-500">AI-driven defense</span> and <span className="text-red-500">cloud security</span> to ensure you're not just ready for a job, but for a career."
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
      <div className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-[40px] p-12 md:p-20 text-center">
        <h2 className="text-5xl font-bold mb-4 text-white">Our Vision for the Future</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-12">
          We are pioneering next-generation training solutions to prepare you for the threats of tomorrow.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {futureTech.map((tech, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-red-500">{tech.icon}</div>
              <span className="font-semibold">{tech.title}</span>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-400 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          These advancements will empower our students to not only respond to current threats but to anticipate and neutralize future attack vectors. Our goal is to cultivate a proactive mindset, preparing you to become a leader in the ever-evolving landscape of cybersecurity.
        </motion.p>
      </div>
    </Section>
  );
}

// CallToActionFooter
function CallToActionFooter() {
  return (
    <footer className="py-16 text-center">
      <motion.button
        className="px-10 py-4 bg-red-600 text-white text-xl font-bold rounded-lg hover:bg-red-700 transition-colors"
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
    <div className="relative text-white font-sans">
      {/* Background video & overlay */}
      <div className="fixed inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover brightness-70"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/subtle-prism.png')",
            opacity: 0.2,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');
        body {
          font-family: 'Montserrat', sans-serif;
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
      </main>
    </div>
  );
}

export default CyziumAboutPage;
