"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  ArrowLeft,
  HelpCircle,
  Network,
  Router,
  Server,
  Code,
  Shield,
} from "lucide-react";
import Navbar from '@/app/navbar';
import Footer from "@/app/footer"; 

// --- TYPES ---
interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

interface FaqCardProps {
  question: string;
  answer: string;
  delay?: number;
}

interface CNACoursePageProps {
  onBack?: () => void;
}

interface Tool {
  name: string;
  description: string;
  icon: React.ReactNode;
}

// --- SECTION ---
const Section = ({ children, id, className = "" }: SectionProps) => (
  <motion.section
    id={id}
    className={`py-16 px-8 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="max-w-screen-xl mx-auto">{children}</div>
  </motion.section>
);

// --- FAQ CARD ---
function FaqCard({ question, answer, delay = 0 }: FaqCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="w-full h-72 rounded-2xl cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      style={{ perspective: 1000 }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col justify-center items-center text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <HelpCircle size={32} className="text-red-500 mb-4" />
          <h3 className="text-xl font-bold text-white">{question}</h3>
        </div>
        {/* Back */}
        <div
          className="absolute w-full h-full bg-red-600/10 backdrop-blur-xl border border-red-500/50 rounded-2xl p-6 flex items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-white leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- CNA COURSE PAGE ---
function CNACoursePage({ onBack }: CNACoursePageProps) {
  const curriculumModules = [
    {
      title: "Module 01: Networking Fundamentals",
      content:
        "Understanding the OSI and TCP/IP models, network topologies, and protocols.",
    },
    {
      title: "Module 02: IP Addressing & Subnetting",
      content: "Mastering IPv4/IPv6 addressing, subnetting, and VLSM.",
    },
    {
      title: "Module 03: Switching Technologies",
      content:
        "Hands-on labs with VLANs, Spanning Tree Protocol (STP), and EtherChannel.",
    },
    {
      title: "Module 04: Routing Technologies",
      content:
        "Configuring static and dynamic routing protocols like OSPF and EIGRP.",
    },
    {
      title: "Module 05: Network Security Fundamentals",
      content: "Implementing ACLs, port security, and basic firewall concepts.",
    },
    {
      title: "Module 06: WAN Technologies",
      content: "Exploring WAN concepts, VPNs, and modern network architectures.",
    },
  ];

  const faqs = [
    {
      title: "Is this course aligned with Cisco's CCNA?",
      content:
        "Yes, this program covers the core topics found in the Cisco CCNA certification, providing a strong foundation for taking the exam.",
    },
    {
      title: "Do I need to buy physical hardware?",
      content:
        "No. All labs are conducted in our virtual environment using industry-standard simulators like Packet Tracer and GNS3.",
    },
    {
      title: "Is this course good for complete beginners?",
      content:
        "Absolutely. This course is designed from the ground up for individuals with no prior networking experience.",
    },
  ];

  const careerOpportunities = [
    {
      title: "Network Administrator",
      image:
        "https://placehold.co/300x200/0a192f/FFFFFF?text=Admin",
    },
    {
      title: "Junior Network Engineer",
      image:
        "https://placehold.co/300x200/0a192f/FFFFFF?text=Engineer",
    },
    {
      title: "IT Support Specialist",
      image:
        "https://placehold.co/300x200/0a192f/FFFFFF?text=Support",
    },
    {
      title: "Network Technician",
      image:
        "https://placehold.co/300x200/0a192f/FFFFFF?text=Technician",
    },
    {
      title: "Help Desk Analyst",
      image:
        "https://placehold.co/300x200/0a192f/FFFFFF?text=Help+Desk",
    },
  ];

  const tools: Tool[] = [
    {
      name: "Cisco Packet Tracer",
      description: "Industry-standard tool for simulating and testing networks.",
      icon: <Network className="text-red-500" size={28} />,
    },
    {
      name: "GNS3",
      description: "Advanced network simulation with real IOS images.",
      icon: <Router className="text-red-500" size={28} />,
    },
    {
      name: "Wireshark",
      description: "Powerful packet analyzer for network troubleshooting.",
      icon: <Server className="text-red-500" size={28} />,
    },
    {
      name: "SolarWinds TFTP",
      description: "Lightweight tool for transferring IOS and config files.",
      icon: <Code className="text-red-500" size={28} />,
    },
    {
      name: "nmap",
      description: "Essential network scanner for mapping and auditing.",
      icon: <Shield className="text-red-500" size={28} />,
    },
  ];

  const [activeModule, setActiveModule] = useState(curriculumModules[0]);

  return (
    <div className="relative text-white font-sans bg-[#0a192f]">
      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/subtle-prism.png')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <main className="relative z-10">
        {/* --- HEADER --- */}
        <header className="py-24 text-center relative">
          <div className="max-w-screen-xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="text-lg font-semibold text-red-500">
                Cyzium Foundation Course
              </p>
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-white mt-4">
                Certified Network Associate
              </h1>
              <p className="text-4xl md:text-5xl font-bold text-red-500 tracking-wider mt-2">
                (CNA)
              </p>
              <p className="mt-8 max-w-4xl mx-auto text-2xl text-gray-300">
                Build and manage the networks that power the digital world.
                Master the fundamentals of routing, switching, and network
                security.
              </p>
            </motion.div>
          </div>
        </header>

        {/* --- COURSE CONTENT --- */}
        <div className="max-w-screen-xl mx-auto p-8">
          {/* Stats */}
          <motion.div
            className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-[40px] p-8 md:p-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <section className="py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold">8 Weeks</p>
                  <p className="text-gray-400">Duration</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">Beginner</p>
                  <p className="text-gray-400">Skill Level</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">80+</p>
                  <p className="text-gray-400">Lab Hours</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">CNA</p>
                  <p className="text-gray-400">Certification</p>
                </div>
              </div>
            </section>
          </motion.div>

          {/* About */}
          <Section id="about">
            <h2 className="text-5xl font-bold text-center mb-12">
              About The Course
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  The Certified Network Associate (CNA) program is your gateway
                  to a successful career in IT infrastructure. In a world driven
                  by connectivity, network professionals are the architects of
                  our digital foundation. This course provides comprehensive,
                  hands-on training in designing, building, and maintaining
                  networks, giving you the essential skills to keep businesses
                  running smoothly and securely.
                </p>
              </div>
              <div>
                <img
                  src="https://placehold.co/600x400/0a192f/FFFFFF?text=Network+Diagram"
                  alt="Network Diagram"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </Section>

          {/* Tools */}
          <Section id="tools">
            <h2 className="text-5xl font-bold text-center mb-12">
              Tools You Will Use
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, i) => (
                <motion.div
                  key={i}
                  className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* Curriculum */}
          <Section id="curriculum">
            <motion.div
              className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-[40px] p-8 md:p-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-center mb-8">Curriculum</h2>
              <div className="flex flex-col">
                <div className="flex justify-center flex-wrap gap-2 mb-8">
                  {curriculumModules.map((module, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveModule(module)}
                      className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                        activeModule.title === module.title
                          ? "bg-red-600 text-white"
                          : "bg-black/20 text-gray-300 hover:bg-white/10"
                      }`}
                    >
                      Module {String(i + 1).padStart(2, "0")}
                    </button>
                  ))}
                </div>
                <div className="relative h-48 bg-black/20 p-8 rounded-lg border border-white/10 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeModule.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <h3 className="text-2xl font-bold text-white">
                        {activeModule.title}
                      </h3>
                      <p className="mt-2 text-gray-300">
                        {activeModule.content}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </Section>

          {/* Instructor */}
          <Section id="instructor">
            <h2 className="text-5xl font-bold text-center mb-8">
              Meet Your Instructor
            </h2>
            <div className="p-8 rounded-lg flex flex-col sm:flex-row items-center gap-8 max-w-4xl mx-auto">
              <img
                src="https://placehold.co/150x150/0a192f/FFFFFF?text=MB"
                alt="Instructor Michael Bell"
                className="w-32 h-32 rounded-full object-cover flex-shrink-0 border-4 border-red-500"
              />
              <div>
                <h3 className="text-3xl font-bold">Michael Bell</h3>
                <p className="text-lg text-red-500 font-semibold">
                  Senior Network Architect (CCIE #12345)
                </p>
                <p className="mt-4 text-gray-300">
                  With over 20 years of experience and a prestigious CCIE
                  certification, Michael has designed and managed complex
                  enterprise networks for major corporations. He is dedicated to
                  mentoring the next generation of network engineers.
                </p>
              </div>
            </div>
          </Section>

          {/* FAQs */}
          <Section id="faqs">
            <h2 className="text-5xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {faqs.map((faq, i) => (
                <FaqCard
                  key={i}
                  question={faq.title}
                  answer={faq.content}
                  delay={0.2 + i * 0.1}
                />
              ))}
            </div>
          </Section>
        </div>

        {/* CTA */}
        <section className="bg-red-600 text-white py-20">
          <div className="max-w-screen-xl mx-auto px-8 text-center">
            <h2 className="text-5xl font-extrabold">
              Ready to Build the Future of Networks?
            </h2>
            <p className="text-xl mt-4 max-w-3xl mx-auto">
              Enroll in the Certified Network Associate program and launch your
              career in IT infrastructure.
            </p>
            <div className="mt-8">
              <div className="flex items-baseline justify-center gap-4">
                <p className="text-5xl font-extrabold">₹40,000</p>
                <p className="text-2xl line-through opacity-80">₹45,000</p>
              </div>
              <button className="mt-6 w-full max-w-sm px-8 py-4 bg-white text-red-600 text-lg font-bold rounded-lg hover:bg-gray-200 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        </section>
      </main>
      <Navbar />
      <Footer />
    </div>
  );
}

export default CNACoursePage;
