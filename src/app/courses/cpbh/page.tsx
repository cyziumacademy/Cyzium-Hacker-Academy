"use client";
import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bug, GlobeLock, Smartphone, FlaskConical, ShieldCheck, Monitor, Cpu, Cloud, Server, Cog, Radar } from "lucide-react";
import { ChevronRight } from "lucide-react";

import {
  CheckCircle,
  Award,
  Code,
  HelpCircle,
} from "lucide-react";
import Navbar from '@/app/navbar';
import Footer from "@/app/footer"; 
import Float from "@/app/float";
import ContactCard from "@/app/contact";
import Link from "next/link";
import Image from "next/image";

// --- TYPES ---
interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

interface FaqCardProps {
  question: string;
  answer: string;
  delay?: number;
}

interface CBBTCoursePageProps {
  onBack?: () => void;
}


// --- SECTION COMPONENT ---
const Section: React.FC<SectionProps> = ({ children, id, className = "" }) => (
  <motion.section
    id={id}
    className={`py-16 px-6 sm:px-8 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="max-w-screen-xl mx-auto">{children}</div>
  </motion.section>
);



// --- FAQ CARD COMPONENT ---
const FaqCard: React.FC<FaqCardProps> = ({ question, answer, delay = 0 }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="w-full h-64 sm:h-72 rounded-2xl cursor-pointer"
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
        {/* Front of the card */}
        <div
          className="absolute w-full h-full bg-black/30 backdrop-blur-xl border border-white/20 rounded-[50px] p-4 sm:p-6 flex flex-col justify-center items-center text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <HelpCircle size={28} className="text-red-500 mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-bold text-white">{question}</h3>
        </div>
        {/* Back of the card */}
        <div
          className="absolute w-full h-full bg--600/10 backdrop-blur-xl border border-red-500/50 rounded-2xl p-4 sm:p-6 flex items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-sm sm:text-base text-white leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const CBBTCoursePage: React.FC<CBBTCoursePageProps> = ({}) => {
    const [showContact, setShowContact] = useState(false);

const curriculumModules = [
  {
    title: "Advanced Reconnaissance & Asset Discovery",
    content:
      "Master advanced techniques for recon, footprinting, and asset discovery to identify potential targets and attack surfaces effectively.",
  },
  {
    title: "Web Application Deep Dive",
    content:
      "Gain in-depth understanding of web applications, their components, and architecture to spot weak points and potential vulnerabilities.",
  },
  {
    title: "Vulnerability Exploitation & Chaining",
    content:
      "Learn how to exploit vulnerabilities individually and chain them together for more impactful results in real bug bounty scenarios.",
  },
  {
    title: "API & Mobile Bug Hunting",
    content:
      "Explore testing methodologies for APIs and mobile applications, including common vulnerabilities, tools, and hands-on exploitation.",
  },
  {
    title: "Automation & AI in Bug Hunting",
    content:
      "Discover how to leverage automation and AI tools to enhance reconnaissance, scanning, and vulnerability discovery efficiently.",
  },
  {
    title: "Advanced Tools Mastery",
    content:
      "Become proficient with advanced bug bounty tools for scanning, exploitation, fuzzing, and other essential phases of ethical hacking.",
  },
  {
    title: "Reporting, Communication & Responsible Disclosure",
    content:
      "Learn how to write professional bug reports, communicate with program owners, and follow responsible disclosure practices.",
  },
  {
    title: "Live Hunting Sprint & Final Project",
    content:
      "Apply everything in a live bug hunting sprint and final project, simulating real-world scenarios to solidify your bug bounty skills.",
  },

  // --- New Modules Below ---
  {
    title: "Bypassing WAFs & Security Filters",
    content:
      "Understand how Web Application Firewalls operate and master evasion techniques to uncover vulnerabilities hidden behind filtering systems.",
  },
  {
    title: "Privilege Escalation & Post Exploitation",
    content:
      "Explore methods to escalate privileges, pivot access, and maintain control post-exploitation in legal, educational environments.",
  },
  {
    title: "Advanced Authentication & Session Attacks",
    content:
      "Dive into session management flaws, token manipulation, and authentication bypass techniques used in advanced bug bounty hunting.",
  },
  {
    title: "Source Code Analysis & Hidden Vulnerabilities",
    content:
      "Learn how to review source code for logic flaws, hardcoded secrets, and overlooked vulnerabilities in open or leaked repositories.",
  },
  {
    title: "Subdomain Takeover & DNS Exploitation",
    content:
      "Discover how to identify and exploit misconfigured DNS and abandoned subdomains to claim ownership or execute controlled attacks.",
  },
  {
    title: "Real-World Vulnerability Case Studies",
    content:
      "Analyze real bug reports and disclosures from top hackers to understand real-world exploitation chains and advanced reporting styles.",
  },
  {
    title: "Operational Security (OpSec) for Hunters",
    content:
      "Learn how to protect your identity, maintain privacy, and stay compliant while performing ethical hacking and bug bounty testing.",
  },
  {
    title: "Career Growth & Industry Insights",
    content:
      "Get guidance on building your hacker brand, joining private programs, and turning bug bounty hunting into a long-term cybersecurity career.",
  },
];

const faqs = [
  {
    title: "Who is this course designed for?",
    content:
      "CPBH is built for anyone who wants to take bug bounty hunting seriously — from motivated beginners to intermediate learners aiming to go pro. If you want to master real-world vulnerabilities and build a career in cybersecurity, this is for you.",
  },
  {
    title: "Do I need hacking or programming knowledge before joining?",
    content:
      "Not at all. CPBH starts from the foundations and gradually builds you up to professional-level bug hunting. We’ll teach you everything — from understanding web and API behavior to exploiting and reporting complex vulnerabilities with confidence.",
  },
  {
    title: "What makes CPBH different from other bug bounty courses?",
    content:
      "Unlike typical courses, CPBH focuses on practical learning, live hunting challenges, AI-assisted recon, and real-world bug chaining. You’ll gain the mindset, tools, and reporting skills used by top security researchers in the industry.",
  },
  {
    title: "Will I get hands-on experience during the course?",
    content:
      "Yes! You’ll work on simulated labs, real-world targets, and guided live hunting tasks. By the end of CPBH, you’ll have a solid portfolio that showcases your professional bug bounty skills.",
  },
  {
    title: "Can this course help me start a cybersecurity career?",
    content:
      "Absolutely. CPBH is structured to help you transition from learner to professional. You’ll gain skills relevant for roles like Bug Bounty Hunter, Application Security Tester, or Penetration Tester — and learn how to build credibility in the security community.",
  },
  {
    title: "Does CPBH include mentorship and post-course support?",
    content:
      "Yes — every learner receives continuous mentor guidance throughout and even after course completion. You’ll get feedback on reports, insights into new bug trends, and support to keep progressing in your bug bounty journey.",
  },
];



  const [activeModule, setActiveModule] = useState(curriculumModules[0]);

const careerOpportunities = [
  { title: "Professional Bug Bounty Hunter", icon: Bug }, // Core path for bounty professionals
  { title: "Advanced Bug Bounty Specialist", icon: Cpu }, // AI-driven bug hunting expertise
  { title: "Web Application Security Tester", icon: GlobeLock }, // Web security testing
  { title: "Cloud Security Tester", icon: Cloud }, // Focused on cloud platform security
  { title: "API & Mobile Security Specialist", icon: Smartphone }, // API/mobile app security
  { title: "AI & ML Security Researcher", icon: Cpu }, // AI/ML exploitation & safety
  { title: "Vulnerability Researcher", icon: FlaskConical }, // Deep dive into vulnerabilities
  { title: "Security Consultant / Penetration Tester", icon: ShieldCheck }, // Professional consulting
  { title: "Secure Code & DevSecOps Auditor", icon: Code }, // Application & CI/CD auditing
  { title: "Red Team / Offensive Security Expert", icon: Monitor }, // Advanced attack simulation
  { title: "Threat Intelligence Analyst", icon: Radar }, // Threat profiling & analysis
  { title: "Application Security Tester", icon: ShieldCheck }, // Specialized in app-level security testing
  { title: "Cloud Infrastructure Security Engineer", icon: Server }, // Cloud (AWS, Azure, GCP) security
  { title: "Security Automation Engineer", icon: Cog }, // Automation in testing & defense
  { title: "Cybersecurity Research & Innovation Specialist", icon: Award }, // Advanced R&D role
];



const tools = [
  { name: "Kali Linux", logo: "/kali.png", size: "80px" },
  { name: "Burp Suite", logo: "/burp.png", size: "70px" },
  { name: "Wireshark", logo: "/wire.png", size: "60px" },
  { name: "Nmap", logo: "/nmap.png", size: "145px" },
  { name: "Shodan", logo: "/shodan.png", size: "85px" },
  { name: "Metasploit", logo: "/metasploit.png", size: "110px" },
  { name: "Sqlmap", logo: "/sqlmap.png", size: "100px" },
  { name: "Exploit Database", logo: "/exploit.png", size: "70px" },
  { name: "Nessus", logo: "/nessus.png", size: "205px" },
  { name: "Owasp zap", logo: "/owasp.png", size: "150px" },
  { name: "Postman", logo: "/postman.png", size: "160px" },
  { name: "Frida", logo: "/frida.png", size: "160px" },
  
];
return (
  <div className="relative text-white font-sans overflow-x-hidden">
  {/* --- Cyber Video Background --- */}
  <div className="fixed filter blur-sm top-0 left-0 w-full h-full z-0 overflow-hidden">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay red-blue glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-red-800/100 via-transparent to-purple-800/90 mix-blend-overlay" />

    {/* 💠 Tech grid lines */}
    <div
      className="absolute inset-0 opacity-40"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 255, 255, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 0, 0, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
        mixBlendMode: "screen",
      }}
    ></div>

    {/* Diagonal glowing pattern */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(0, 150, 255, 0.25) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        mixBlendMode: "overlay",
      }}
    ></div>
  </div>

<div className="fixed z-10 pointer-events-none" style={{
  top: "70%",
  left: "50%",
  width: "2000px",
  height: "auto",
  transform: "translate(-50%, -50%)",
}}>
  <Image
    src="/logo2.PNG"
    alt="Logo"
    fill
    className="object-contain opacity-35 mix-blend-overlay"
  />
</div>




    {/* --- Page Content --- */}
    <main className="relative z-10">
      <header className="pt-32 pb-20 mt-10 sm:py-24 text-center relative">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
<h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white mt-12">
  Certified Professional Bug <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
  Hunter
</span>
</h1>
<p className="mt-6 sm:mt-8 max-w-6xl mx-auto text-lg sm:text-2xl text-gray-300">
  Start your journey in ethical hacking with practical, hands-on learning. 
  Understand how websites and applications work, spot vulnerabilities safely, 
  and gain confidence using essential cybersecurity tools. 
  Build the skills needed to responsibly uncover security issues in real environments.
</p>




<div className="mt-15 flex flex-col sm:flex-row items-center justify-center gap-4">
  {/* Enroll Now Button */}
  <motion.button
  onClick={() => setShowContact(true)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center gap-2 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-[23px] text-base sm:text-lg font-semibold hover:bg-red-700 transition-all shadow-lg shadow-red-600/30 cursor-pointer relative group"
  >
    Enroll Now
    {/* Hover pop-up */}
  </motion.button>

  {/* Download Syllabus Button */}
  <Link href="/contact">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-[23px] text-base sm:text-lg font-semibold hover:bg-red-700 transition-all shadow-lg shadow-red-600/30 cursor-pointer relative group"
    >
      Download syllabus
      {/* Hover pop-up */}
    </motion.button>
  </Link>
</div>
 </motion.div>
 </div>
</header>

<div className="max-w-[95rem] mx-auto px-2 sm:px-6">
  {/* --- Course Stats --- */}
  <motion.div
    className="bg-black/10 backdrop-blur-xl border border-white/20 rounded-[30px] sm:rounded-[50px] px-4 sm:px-16 py-8 sm:py-16 shadow-[inset_-3px_-1px_9px_rgba(255,255,255,0.5),_inset_10px_10px_20px_rgba(0,0,0,0.2)] w-full"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <section className="py-4 sm:py-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
        <div className="text-center">
          <p className="text-2xl sm:text-4xl text-yellow-400 font-bold">2 Months</p>
          <p className="text-gray-400 text-sm sm:text-base">Duration</p>
        </div>
<div className="text-center">
  <p className="text-2xl sm:text-4xl font-bold text-purple-500">Professional</p>
  <p className="text-gray-400 text-sm sm:text-base">Skill Level</p>
</div>
        <div className="text-center">
          <p className="text-2xl sm:text-4xl text-blue-500 font-bold">50+</p>
          <p className="text-gray-400 text-sm sm:text-base">Lab Hours</p>
        </div>
        <div className="text-center">
          <p className="text-2xl sm:text-4xl  font-bold">Online</p>
          <p className="text-gray-400 text-sm sm:text-base">Mode</p>
        </div>
      </div>
    </section>
  </motion.div>
  
<section id="pathway" className="py-16 px-4 sm:py-20 sm:px-8 text-white relative">
  <div className="max-w-screen-xl mx-auto text-center">
    <h2 className="font-bold mb-8 sm:mb-12">
      <span className="block text-2xl sm:text-4xl md:text-5xl text-gray-300">
        Your Journey to
      </span>
      <span className="block text-5xl sm:text-7xl md:text-8xl text-white">
        Professional Hunter
      </span>
    </h2>

    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8">
      {[
        { name: "Beginner", img: "/jbbh.png", link: "/courses/jbbh" },
        { name: "Intermediate", img: "/cbbt.png", link: "/courses/cbbt" },
        { name: "Advanced", img: "/cbbe.png", link: "/courses/cbbe" },
        { name: "Pro", img: "/cpbh.png" }, // no link
      ].map((step, i, arr) => (
        <motion.div
          key={step.name}
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
        >
          {step.link ? (
            // Clickable for Beginner, Intermediate, Advanced
            <Link href={step.link}>
              <div
                className={`group relative text-center rounded-[40px] overflow-hidden cursor-pointer ${
                  step.name === "Pro"
                    ? "w-60 h-60 sm:w-72 sm:h-72 border-4 border-red-500 animate-pulse shadow-[0_0_30px_#f87171]"
                    : "w-48 h-48 sm:w-56 sm:h-56 border border-white/20"
                }`}
              >
                <Image
    src={step.img}
    alt={step.name}
    fill
    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
    sizes="100vw"
  />
                <h3 className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm sm:text-xl font-bold bg-black/60 px-2 sm:px-4 py-1 rounded-lg">
                  {step.name}
                </h3>
              </div>
            </Link>
          ) : (
            // Not clickable for Pro
            <div
              className={`group relative text-center rounded-[40px] overflow-hidden ${
                step.name === "Pro"
                  ? "w-60 h-60 sm:w-72 sm:h-72 border-4 border-red-500 animate-pulse shadow-[0_0_30px_#f87171] cursor-default"
                  : "w-48 h-48 sm:w-56 sm:h-56 border border-white/20 cursor-pointer"
              }`}
            >
               <Image
    src={step.img}
    alt={step.name}
    fill
    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
    sizes="100vw"
  />
              <h3 className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm sm:text-xl font-bold bg-black/60 px-2 sm:px-4 py-1 rounded-lg">
                {step.name}
              </h3>
            </div>
          )}

          {i < arr.length - 1 && (
            <ChevronRight className="hidden sm:block absolute -right-8 sm:-right-10 top-1/2 -translate-y-1/2 text-red-500" />
          )}
        </motion.div>
      ))}
    </div>
  </div>
</section>

  {/* --- About --- */}
<Section id="about" className="relative">
  <h2 className="text-4xl mt-10 sm:text-5xl font-bold text-center mb-10 sm:mb-12">
    About The Course
  </h2>

  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
<p className="text-base sm:text-xl text-gray-300 leading-relaxed md:w-[70%]">
  The Certified Bug Bounty Hunter (CBBT) is a comprehensive program designed for anyone starting their journey in cybersecurity, even with no prior experience. 
  In this course, you will learn how to identify and report security vulnerabilities in websites, applications, and APIs safely and legally. 
  We focus on building your foundational skills step by step — from understanding how web applications work, to using essential tools like Kali Linux, Burp Suite, and Nmap, to discovering common vulnerabilities like XSS and SQL Injection. 
  As you progress, you will gain practical experience in real-world bug hunting scenarios, preparing you to report valid security issues confidently and professionally. 
  By the end of the course, you will have the skills, knowledge, and mindset to begin your journey as an ethical hacker and bug bounty hunter.
</p>

<Image
  src="/cpbh.png"
  alt="Bug Bounty Course Illustration"
  width={320}
  height={320}
  priority
  className="rounded-[35px] sm:rounded-[45px] w-full max-w-[280px] sm:max-w-[320px] mx-auto md:mx-0 
  shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-500 ease-out 
  hover:scale-105 hover:shadow-[20px_0_40px_rgba(0,0,255,0.7),-20px_0_40px_rgba(255,0,0,0.6)]"
/>

  </div>
</Section>

{/* --- Callout Section (Smooth Instant Hover) --- */}
<Section id="callout" className="py-10">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{
      scale: 1.03,
      backgroundColor: "rgba(30, 58, 138, 0.5)",
      transition: { duration: 0.15, ease: "easeOut" }, // 🔥 instant hover
    }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="p-6 sm:p-10 rounded-[40px] flex flex-col md:flex-row items-center gap-6 sm:gap-8 max-w-5xl mx-auto text-center md:text-left bg-blue-900/40 border border-blue-500/50 backdrop-blur-md"
  >
    <motion.div
      whileHover={{ rotate: 15, scale: 1.1 }}
      transition={{ type: "spring", stiffness: 250, damping: 12 }}
    >
      <Award size={60} className="text-yellow-400 flex-shrink-0" />
    </motion.div>

    <div>
      <h3 className="text-2xl sm:text-3xl font-bold text-white">
        The Certified Edge
      </h3>
      <p className="mt-3 text-gray-200 text-sm sm:text-base">
        The CBBT is recognized by leading bug bounty platforms and security firms worldwide. Gain the{" "}
        <strong>credibility and deep technical skills</strong> required to stand out in the competitive field of offensive security.
      </p>
    </div>
  </motion.div>
</Section>






{/* --- Curriculum --- */}
<Section id="curriculum">
  <motion.div
    className="backdrop-blur-xl border border-white/20 rounded-[30px] sm:rounded-[60px] p-6 sm:p-20"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl sm:text-6xl font-bold text-center mb-8 sm:mb-12">
      Curriculum
    </h2>

    {/* --- Module Buttons --- */}
    <div className="w-full flex flex-col items-center mb-10">
      <div className="grid grid-cols-8 gap-3 sm:gap-4 w-full max-w-6xl">
        {curriculumModules.map((module, i) => (
          <button
            key={i}
            onClick={() => setActiveModule(module)}
            className={`py-2 sm:py-3 text-xs sm:text-sm font-bold rounded-2xl transition-colors text-center ${
              activeModule.title === module.title
                ? "bg-red-600 text-white"
                : "text-gray-200 hover:bg-white/10 cursor-pointer"
            }`}
          >
            Module {String(i + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
    </div>

    {/* --- Active Module Content --- */}
    <div className="relative min-h-[260px] sm:min-h-[300px] bg-black/20 p-8 sm:p-12 rounded-[30px] sm:rounded-[40px] border border-white/15 flex items-center justify-center w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeModule.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h3 className="text-xl sm:text-3xl font-bold text-white mb-3">
            {activeModule.title}
          </h3>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {activeModule.content}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  </motion.div>
</Section>



{/* --- What You Will Learn --- */}
<Section id="what-you-will-learn">
  <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8">
    Professional Skills You’ll Master
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 sm:gap-y-6 text-base sm:text-lg">
    {[
      "Perform in-depth reconnaissance and smart asset discovery to identify high-value targets efficiently.",
      "Understand modern web, cloud, and API architectures to pinpoint complex security flaws.",
      "Exploit and chain multi-step vulnerabilities for real-world, high-impact scenarios.",
      "Hunt and exploit API, mobile (Android & iOS), and cloud-based vulnerabilities with precision.",
      "Use AI and automation tools to enhance recon, vulnerability analysis, and report generation.",
      "Master advanced bug bounty tools for reconnaissance, scanning, exploitation, and automation.",
      "Identify logic flaws, business logic abuse, and access control misconfigurations effectively.",
      "Apply DevSecOps and secure coding principles to analyze and strengthen application security.",
      "Communicate findings professionally and write impactful, industry-grade vulnerability reports.",
      "Participate in live hunting challenges and build a professional bug bounty portfolio project.",
    ].map((item, i) => (
      <div
        key={i}
        className="flex items-start sm:items-center gap-3 sm:gap-4 p-2 sm:p-4"
      >
        <CheckCircle size={20} className="text-purple-500 flex-shrink-0" />
        <span>{item}</span>
      </div>
    ))}
  </div>
</Section>



{/* --- Tools Section with Logos --- */}
<Section id="tools">
  <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 sm:mb-12">
    Tools You Will Master
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 sm:gap-8">
    {tools.map((tool, i) => (
      <motion.div
        key={i}
        className="bg-white/30 rounded-[25px] p-4 sm:p-6 flex items-center justify-center hover:bg-white/5 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
        viewport={{ once: true }}
      >
<Image
  src={tool.logo}
  alt={tool.name}
  width={100}
  height={100}
  style={{ height: tool.size, width: "auto" }}
  className="object-contain"
  priority
/>
      </motion.div>
    ))}
  </div>
</Section>

          {/* --- Achievements --- */}
<Section id="what-youll-achieve">
  <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8">What You&apos;ll Achieve</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 sm:gap-y-6 text-base sm:text-lg">
{[
  "Gain expert-level skills in Web, Cloud, API, Mobile, and AI-driven bug hunting.",
  "Master reconnaissance, exploitation, and vulnerability chaining across real-world targets.",
  "Use automation and AI-powered tools to accelerate recon, testing, and reporting workflows.",
  "Understand cloud-specific attack surfaces and advanced web application exploitation techniques.",
  "Learn industry-grade reporting, communication, and responsible disclosure methods used by top researchers.",
  "Build a professional bug bounty portfolio through live hunting challenges and guided real-world projects.",

              ].map((item, i) => (
                <div key={i} className="flex items-start sm:items-center gap-3 sm:gap-4 p-2 sm:p-4">
                  <CheckCircle size={20} className="text-red-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Section>
{/* --- Career Opportunities (Updated & Combined) --- */}
<Section id="career-opportunities" className="relative py-16">
  {/* Heading (centered & floating) */}
  <div className="relative mb-12">
    <h2 
      className="text-4xl sm:text-5xl font-bold absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-25 text-center"
    >
      Career Opportunities
    </h2>
  </div>

{/* Grid of Career Cards */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-20">
  {careerOpportunities.map((path, i) => {
    const Icon = path.icon;
    return (
      <motion.div
        key={path.title}
        className="bg-black/30 border border-white/10 rounded-2xl sm:rounded-3xl text-center overflow-hidden group hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center items-center h-28 sm:h-36 bg-blue-900/30 group-hover:bg-purple-800/40 transition-all duration-300">
          <Icon size={60} className="text-red-600 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <p className="py-3 sm:py-4 font-semibold text-gray-300 text-sm sm:text-base">
          {path.title}
        </p>
      </motion.div>
    );
  })}
</div>
</Section>


{/* --- Motivation Section --- */}
<Section id="motivation">
  <div className="text-center mb-8">
   <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
  From Beginner to Professional
</h2>

    <p className="text-4xl sm:text-5xl font-bold">
      We’ll Build Your Bug Bounty Career
    </p>
  </div>
  <div className="p-6 sm:p-8 rounded-lg flex flex-col sm:flex-row items-center gap-6 sm:gap-8 max-w-4xl mx-auto text-center sm:text-left">
  <Image
                 src="/cpbh.png"
                 alt="JBBH Motivation"
                 width={150}
                 height={150}
                 className="object-cover rounded-md"
               />
<div>
  <h3 className="text-2xl sm:text-3xl font-bold">
    Transform Your Curiosity into a Professional Bug Hunting Career
  </h3>
  <p className="text-base sm:text-lg text-purple-500 font-semibold">
    No Prior Experience Required
  </p>
  <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base">
    In CPBH, we’ll guide you to master real-world bug bounty hunting across 
    <span className="text-white font-medium"> Web, AI, Cloud, Mobile,</span> and 
    <span className="text-white font-medium"> API</span> environments. 
    You’ll uncover complex vulnerabilities, automate your recon with AI, and learn to think like a professional security researcher. 
    This program isn’t just training — it’s your pathway to becoming an elite ethical hacker.
  </p>
</div>

  </div>
</Section>


          {/* --- FAQs --- */}
          <Section id="faqs">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 sm:mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {faqs.map((faq, i) => (
                <FaqCard key={i} question={faq.title} answer={faq.content} delay={0.2 + i * 0.1} />
              ))}
            </div>
          </Section>
        </div>

     {/* --- CTA --- */}
<section className="bg-gradient-to-r from-blue-900 to-red-800 text-white py-16 sm:py-20 px-6 sm:px-8 text-center">
  <div className="max-w-screen-xl mx-auto">
    <h2 className="text-4xl sm:text-5xl font-extrabold">
      Ready to Join the Elite?
    </h2>
    <p className="text-lg sm:text-xl mt-4 max-w-2xl mx-auto">
      Enroll in the Certified Bug Bounty Hunter program and establish
      yourself as a leader in offensive security.
    </p>
    <div className="mt-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
      </div>
<motion.button
  onClick={() => setShowContact(true)}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="mt-6 w-full sm:w-auto px-8 py-3 sm:py-4 bg-white text-red-600 text-base sm:text-lg font-bold rounded-[23px] hover:bg-gray-200 transition-colors cursor-pointer"
>
  Enroll Now
</motion.button>

    </div>
  </div>
</section>

      </main>
      <Float />
      <Navbar />
      <ContactCard isOpen={showContact} onClose={() => setShowContact(false)} />
      <Footer />
    </div>
  );
};

export default CBBTCoursePage;
