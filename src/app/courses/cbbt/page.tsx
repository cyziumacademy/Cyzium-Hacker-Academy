"use client";
import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bug, GlobeLock, Smartphone, FlaskConical, ShieldCheck, Monitor, Cpu } from "lucide-react";

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

/* interface ContactProps {
  onClose: () => void;
} */


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

  const toggleFlip = () => setIsFlipped((prev) => !prev);
  
   return (
    <motion.div
      className="w-full h-64 sm:h-72 rounded-2xl cursor-pointer select-none relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      onPointerDown={toggleFlip}   // ✅ instant flip on tap
      style={{ perspective: "1000px" }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute w-full h-full bg-black/30 backdrop-blur-xl 
                     border border-white/20 rounded-[50px] flex flex-col 
                     justify-center items-center p-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <HelpCircle size={28} className="text-blue-500 mb-4" />
          <h3 className="text-xl font-bold text-white">{question}</h3>
        </div>

        {/* BACK */}
        <div
          className="absolute w-full h-full bg-red-600/10 backdrop-blur-xl 
                     border border-red-500/50 rounded-[50px] flex 
                     items-center justify-center p-6 text-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-base text-white leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const CBBTCoursePage: React.FC<CBBTCoursePageProps> = ({ }) => {
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
    ];

   const faqs = [
 {
  title: "What are the prerequisites for this course?",
  content:
    "You should have basic knowledge of how websites work, common internet concepts, and general networking fundamentals. You don’t need deep cybersecurity experience — the course starts from beginner-friendly concepts and builds your skills step by step.",
},
    {
      title: "Can a younger student do real bug hunting?",
      content:
        "Yes, absolutely — with parent approval! If you are under 14, you can legally test websites through Vulnerability Disclosure Programs (VDPs) under parental supervision.",
    },
    {
      title: "Is this course focused on a specific platform?",
      content:
        "No, CBBT covers a variety of real-world platforms including web applications, mobile apps, and APIs, so you can practice bug hunting across different environments.",
    },
  ];


  const [activeModule, setActiveModule] = useState(curriculumModules[0]);

const careerOpportunities = [
  { title: "Bug Bounty Hunter", icon: Bug },
  { title: "Web Application Security Tester", icon: GlobeLock },
  { title: "API & Mobile Security Tester", icon: Smartphone },
  { title: "AI-assisted Security Researcher", icon: Cpu }, // reflects AI automation in bug hunting
  { title: "Vulnerability Researcher", icon: FlaskConical },
  { title: "Security Consultant / Penetration Tester", icon: ShieldCheck },
  { title: "Secure Code Auditor", icon: Code },
  { title: "Red Team / Offensive Security Specialist", icon: Monitor },
];

const tools = [
  { name: "Kali Linux", logo: "/kali.png", size: "80px" },
  { name: "Burp Suite", logo: "/burp.png", size: "230px" },
  { name: "Wireshark", logo: "/wire.png", size: "60px" },
  { name: "Nmap", logo: "/nmap.png", size: "145px" },
  { name: "Censys", logo: "/censys.webp", size: "70px" },
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
    {/* --- Cyber Gradient Background --- */}
    <div className="fixed top-0 left-0 w-full h-full z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] via-[#0A0A2A] to-[#450000]" />

      {/* Overlay red-blue glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-800/90 via-transparent to-red-800/40 mix-blend-overlay" />

      {/* 💠 Tech grid lines (visible now) */}
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
    
<div
  aria-hidden
  className="fixed left-1/2 top-[98%] -translate-x-1/2 -translate-y-1/2 opacity-18 mix-blend-overlay z-10 pointer-events-none"
  style={{ width: "2200px" }} // ✅ explicit physical width
>
  <Image
    src="/logo2.PNG"
    alt="Logo"
    width={2500}
    height={1300}
    className="object-contain w-full h-auto max-w-none"
    priority
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
  Certified Bug Bounty <span className="text-red-600">Hunter</span>
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
  <p className="text-2xl sm:text-4xl font-bold text-orange-400">Intermediate</p>
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
  src="/cbbt.png"
  alt="Bug Bounty Course Illustration"
  width={320}
  height={320}
  className="rounded-[35px] sm:rounded-[45px] w-full max-w-[280px] sm:max-w-[320px] mx-auto md:mx-0 
  shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-500 ease-out 
  hover:scale-105 hover:shadow-[0_30px_80px_rgba(255,0,0,0.4)]"
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
              <h2 className="text-4xl sm:text-6xl font-bold text-center mb-6 sm:mb-8">Curriculum</h2>
              <div className="flex flex-col">
<div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
  {curriculumModules.map((module, i) => (
    <button
      key={i}
      onClick={() => setActiveModule(module)}
      className={`px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-bold rounded-2xl transition-colors ${
        activeModule.title === module.title
          ? "bg-red-600 text-white"
          : "text-gray-200 hover:bg-white/10 cursor-pointer"
      }`}
    >
                      Module {String(i + 1).padStart(2, "0")}
                    </button>
                  ))}
                </div>
                <div className="relative min-h-[160px] bg-black/10 p-6 sm:p-8 rounded-[30px] sm:rounded-[40px] border border-white/15 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeModule.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <h3 className="text-lg sm:text-2xl font-bold text-white">
                        {activeModule.title}
                      </h3>
                      <p className="mt-2 text-gray-300 text-sm sm:text-base">
                        {activeModule.content}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </Section>


        {/* --- What You Will Learn --- */}
<Section id="what-you-will-learn">
  <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8">
    Key Proficiencies Gained
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 sm:gap-y-6 text-base sm:text-lg">
    {[
      "Perform advanced reconnaissance and asset discovery to prioritise high-value targets.",
      "Deeply understand web application architecture to identify and exploit complex vulnerabilities.",
      "Exploit and chain vulnerabilities for higher impact and realistic attack simulation.",
      "Discover and attack API and mobile-specific weaknesses on both iOS and Android.",
      "Automate recon and scanning workflows and leverage AI to speed up vulnerability discovery.",
      "Master professional tools for fuzzing, scanning, exploitation and post-exploitation workflows.",
      "Write high-quality reports, communicate with program owners, and follow responsible disclosure.",
      "Complete live hunting sprints and a final project that demonstrates real-world bug bounty skills.",

    ].map((item, i) => (
      <div key={i} className="flex items-start sm:items-center gap-3 sm:gap-4 p-2 sm:p-4">
        <CheckCircle size={20} className="text-red-500 flex-shrink-0" />
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
  width={200} // fallback/default width
  height={200} // fallback/default height
  style={{ height: tool.size, width: "auto" }}
  className="object-contain"
  unoptimized
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
      "Gain advanced skills in web, API, and mobile bug hunting.",
      "Master reconnaissance, exploitation, and chaining of complex vulnerabilities.",
      "Leverage automation and AI tools to optimize bug discovery.",
      "Learn professional reporting, communication, and responsible disclosure practices.",
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
        <div className="flex justify-center items-center h-28 sm:h-36 bg-blue-900/30 group-hover:bg-blue-800/40 transition-all duration-300">
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
  <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8">
    You Dont&apos;t Need Experience — Wet&apos;ll Build You from Scratch
  </h2>
  <div className="p-6 sm:p-8 rounded-lg flex flex-col sm:flex-row items-center gap-6 sm:gap-8 max-w-4xl mx-auto text-center sm:text-left">
              <Image
                src="/cbbt.png"
                alt="JBBH Motivation"
                width={150}
                height={150}
                className="object-cover rounded-md"
              />
    <div>
      <h3 className="text-2xl sm:text-3xl font-bold">Start from Zero, Grow to a Bug Hunter</h3>
      <p className="text-base sm:text-lg text-red-500 font-semibold">
        No Prior Knowledge Needed
      </p>
      <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base">
        In CBBT, you dont&apos;t need to know a single thing about hacking or coding. Wet&apos;ll take you step by step — from beginner level to finding your first real-world bug. 
        This isnt&apos;t just a course; itt&apos;s your launchpad into ethical hacking.
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
