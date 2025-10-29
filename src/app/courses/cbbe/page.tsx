"use client";
import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bug, GlobeLock, Smartphone, Cpu, ShieldCheck, Code, Monitor, Cloud } from "lucide-react";


import {
  CheckCircle,
  Award,
  HelpCircle,
} from "lucide-react";
import Navbar from '@/app/navbar';
import Footer from "@/app/footer"; 
import Float from "@/app/float";
import ContactCard from "@/app/contact";
import Link from "next/link";

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
          <HelpCircle size={28} className="text-purple-500 mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-bold text-white">{question}</h3>
        </div>
        {/* Back of the card */}
        <div
          className="absolute w-full h-full bg-red-600/10 backdrop-blur-xl border border-red-500/50 rounded-2xl p-4 sm:p-6 flex items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-sm sm:text-base text-white leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const CBBECoursePage: React.FC = () => {
    const [showContact, setShowContact] = useState(false);

   const curriculumModules = [
  {
    title: "Advanced Asset Intelligence & Discovery Automation",
    content:
      "Learn advanced automation techniques to discover hidden assets, enumerate subdomains, identify misconfigured endpoints, and map enterprise-scale infrastructures using intelligent reconnaissance methods.",
  },
  {
    title: "Deep Web & Enterprise Reconnaissance",
    content:
      "Explore the deep and dark web to gather intelligence, perform organization-wide reconnaissance, and uncover assets, credentials, and vulnerabilities across enterprise environments.",
  },
  {
    title: "Cloud Security & Cloud-Native Testing",
    content:
      "Master the fundamentals of cloud hacking by identifying misconfigurations, exploiting cloud services, and testing cloud-native applications across AWS, Azure, and GCP platforms.",
  },
  {
    title: "AI & LLM Vulnerabilities",
    content:
      "Dive deep into the emerging field of AI security by learning how to identify and exploit vulnerabilities in AI models, prompt injections, and large language model (LLM)-based systems.",
  },
  {
    title: "Advanced Exploitation & Chaining (Real Targets)",
    content:
      "Perform real-world exploitation and chaining of vulnerabilities to achieve high-impact findings. Work on actual targets and learn to combine multiple bugs for maximum impact.",
  },
  {
    title: "Automation, Bots & Custom Frameworks",
    content:
      "Build your own automation tools, bots, and frameworks to speed up reconnaissance, exploitation, and reporting. Learn Python and AI-based automation for efficient hunting.",
  },
  {
    title: "Responsible AI-Powered Bug Reporting & Research",
    content:
      "Master the art of professional, AI-assisted bug reporting. Use AI to write, analyze, and organize findings while maintaining ethical standards and responsible disclosure practices.",
  },
  {
    title: "Expert-Level Live Hunting & Portfolio Building",
    content:
      "Put your skills to the test through live hunting sessions and advanced projects. Build your public portfolio and prepare to stand out as a professional bug bounty hunter.",
  },
];
const faqs = [
  {
    title: "What prior knowledge is expected for CBBE?",
    content:
      "CBBE is designed for learners with foundational bug bounty or cybersecurity experience. Familiarity with web security, APIs, and basic cloud concepts is recommended before diving into advanced AI and Cloud vulnerability testing.",
  },
  {
    title: "Which advanced platforms and technologies will I test?",
    content:
      "You will work on real-world AI-driven applications, cloud infrastructures (AWS, Azure, GCP), complex APIs, and enterprise-grade web and mobile platforms, gaining hands-on experience with sophisticated attack scenarios.",
  },
  {
    title: "Does this course cover AI-specific vulnerabilities?",
    content:
      "Yes, CBBE includes modules on testing machine learning models, adversarial inputs, data poisoning, model misconfigurations, and other AI-specific security risks, preparing you for cutting-edge bug bounty programs.",
  },
];

  const [activeModule, setActiveModule] = useState(curriculumModules[0]);

const careerOpportunities = [
  { title: "Advanced Bug Bounty Hunter (AI & Cloud)", icon: Bug }, // Bug icon for bounty hunting
  { title: "Web & Cloud Application Security Tester", icon: GlobeLock }, // GlobeLock for web/cloud apps
  { title: "API & Mobile Security Specialist", icon: Smartphone }, // Smartphone for mobile testing
  { title: "AI & ML Security Researcher", icon: Cpu }, // Cpu icon for AI/ML testing
  { title: "Cloud Vulnerability Researcher", icon: Cloud }, // Cloud icon for cloud systems
  { title: "Security Consultant / Penetration Tester", icon: ShieldCheck }, // ShieldCheck for consulting
  { title: "Secure Code & DevSecOps Auditor", icon: Code }, // Code icon for auditing
  { title: "Red Team / Offensive Security Expert", icon: Monitor }, // Monitor icon for red team ops
];

const tools = [
  { name: "Kali Linux", logo: "/kali.png", size: "80px" },
  { name: "Burp Suite", logo: "/burp.png", size: "180px" },
  { name: "Wireshark", logo: "/wire.png", size: "60px" },
  { name: "Nmap", logo: "/nmap.png", size: "145px" },
  { name: "Textattack", logo: "/text.png", size: "85px" },
  { name: "Metasploit", logo: "/metasploit.png", size: "110px" },
  { name: "Prowler", logo: "/prowler.png", size: "100px" },
  { name: "Guardrails Ai", logo: "/Guardrails.png", size: "99px" },
  { name: "Promptfoo", logo: "/promptfoo.png", size: "205px" },
  { name: "Owasp zap", logo: "/owasp.png", size: "150px" },
  { name: "Trivy", logo: "/Trivy.png", size: "160px" },
  { name: "Scout", logo: "/scout.png", size: "160px" },
  
];
return (
  <div className="relative text-white font-sans overflow-x-hidden">
    {/* --- Cyber Gradient Background --- */}
    <div className="fixed top-0 left-0 w-full h-full z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4B0082] via-[#0A0A2A] to-[#450000]" />

      {/* Overlay red-blue glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/40 via-transparent to-red-800/40 mix-blend-overlay" />

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
    
<img
  src="/logo2.PNG"
  alt="Logo"
  className="fixed z-10 pointer-events-none"
  style={{
    top: "70%",           // vertical center
    left: "50%",          // horizontal center
    width: "2000px",      // base width
    height: "auto",
    opacity: 0.25,        // adjust visibility
    mixBlendMode: "overlay",
    transform: "translate(-50%, -50%)", // center the image
  }}
/>



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
  Certified Bug Bounty <span className="text-purple-600">Expert</span>
</h1>
<p className="mt-6 sm:mt-8 max-w-6xl mx-auto text-lg sm:text-2xl text-gray-300">
Enhance your bug bounty skills with AI and Cloud security testing. Learn to spot and test vulnerabilities in AI systems, APIs, 
and cloud platforms, gaining hands-on expertise to secure modern technologies.
</p>




<div className="mt-15 flex flex-col sm:flex-row items-center justify-center gap-4">
  {/* Enroll Now Button */}
  <motion.button
  onClick={() => setShowContact(true)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center gap-2 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-[23px] text-base sm:text-lg font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/30 cursor-pointer relative group"
  >
    Enroll Now
    {/* Hover pop-up */}
  </motion.button>

  {/* Download Syllabus Button */}
  <Link href="/contact">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-[23px] text-base sm:text-lg font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/30 cursor-pointer relative group"
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
  <p className="text-2xl sm:text-4xl font-bold text-red-500">Advanced</p>
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
  The Certified Bug Bounty Expert (CBBE) is an advanced program crafted for learners ready to move beyond the basics and specialize in AI and Cloud security testing. This course teaches you how to identify, analyze, and report complex vulnerabilities in AI-powered applications, cloud infrastructures, and APIs. You’ll explore real-world attack scenarios involving machine learning models, cloud misconfigurations, and automation flaws, while gaining hands-on experience with professional tools used by industry experts. By the end of the program, you&rsquo;ll have the skills and confidence to perform advanced bug bounty testing across modern AI and Cloud environments like AWS, Azure, and Google Cloud.
</p>


    <img
  src="/cbbe.png"
  alt="Bug Bounty Course Illustration"
  className="rounded-[35px] sm:rounded-[45px] w-full max-w-[280px] sm:max-w-[320px] mx-auto md:mx-0 
  shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-500 ease-out 
  hover:scale-105 hover:shadow-[0_30px_80px_rgba(128,0,255,0.8)]"
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
  The CBBE is recognized by leading cybersecurity and cloud security platforms worldwide. 
  Gain the <strong>expertise and credibility</strong> needed to stand out in advanced 
  <strong> AI and Cloud vulnerability research</strong> within the modern bug bounty landscape.
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
          ? "bg-purple-600 text-white"
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
    "Perform advanced reconnaissance and asset discovery to prioritize high-value AI and cloud targets.",
    "Deeply understand web, cloud, and machine-learning architectures to identify complex attack surfaces.",
    "Exploit and chain vulnerabilities across apps, cloud services, and model pipelines for realistic attack simulations.",
    "Discover and attack API, mobile, and cloud-specific weaknesses across AWS, Azure, and GCP.",
    "Automate recon and scanning workflows and leverage AI-assisted techniques to speed up vulnerability discovery.",
    "Master professional tools and techniques for cloud testing, model evaluation, fuzzing, and post-exploitation workflows.",
    "Write high-quality reports tailored to cloud and AI program owners, and follow responsible disclosure practices.",
    "Complete live hunting sprints and a final project that demonstrates real-world AI and Cloud bug bounty expertise.",

    ].map((item, i) => (
      <div key={i} className="flex items-start sm:items-center gap-3 sm:gap-4 p-2 sm:p-4">
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
        transition={{ duration: 0.5, delay: i * 0.1 }}
        viewport={{ once: true }}
      >
        <img
          src={tool.logo}
          alt={tool.name}
          style={{ height: tool.size, width: "auto" }}
          className="object-contain"
        />
      </motion.div>
    ))}
  </div>
</Section>

          {/* --- Achievements --- */}
<Section id="what-youll-achieve">
  <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8">What You&rsquo;ll Achieve</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 sm:gap-y-6 text-base sm:text-lg">
  {[
    "Gain advanced skills in AI, Cloud, web, API, and mobile bug hunting.",
    "Master reconnaissance, cloud asset discovery, model assessment, and chaining of complex vulnerabilities.",
    "Leverage automation and AI-assisted tools to speed up discovery and validation of issues.",
    "Learn professional reporting, stakeholder communication, and responsible disclosure for AI and Cloud programs.",
              ].map((item, i) => (
                <div key={i} className="flex items-start sm:items-center gap-3 sm:gap-4 p-2 sm:p-4">
                  <CheckCircle size={20} className="text-purple-500 flex-shrink-0" />
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
        <div className="flex justify-center items-center h-28 sm:h-36 bg-blue-900/30 group-hover:bg-red-900/40 transition-all duration-300">
          <Icon size={60} className="text-purple-600 group-hover:scale-110 transition-transform duration-300" />
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
    You Don&rsquo;t Need Experience — We&rsquo;ll Build You from Scratch
  </h2>
  <div className="p-6 sm:p-8 rounded-lg flex flex-col sm:flex-row items-center gap-6 sm:gap-8 max-w-4xl mx-auto text-center sm:text-left">
    <img
      src="https://placehold.co/150x150/0a192f/FFFFFF?text=CBBE"
      alt="CBBE Motivation"
      className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-purple-500"
    />
    <div>
     <h3 className="text-2xl sm:text-3xl font-bold">
   From Intermediate Hacker to Advanced Bug Bounty Specialist
</h3>
      <p className="text-base sm:text-lg text-red-500 font-semibold">
        Foundational Skills Recommended
      </p>
<p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base">
  In CBBE, you&rsquo;ll build on foundational security skills and advance into professional AI and Cloud bug hunting. 
  Through guided, hands&nbsp;on modules you&rsquo;ll learn to assess machine&nbsp;learning models, cloud configurations, APIs, and complex applications—moving from structured labs to real-world hunting. 
  This isn&rsquo;t just a course; it&rsquo;s your launchpad into expert AI &amp; Cloud bug bounty research.
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
      Enroll in the Certified Bug Bounty Expert program and establish
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

export default CBBECoursePage;
