"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowLeft, HelpCircle } from "lucide-react";
import Navbar from '@/app/navbar';
import Footer from "@/app/footer"; 
import Float from "@/app/float";

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

interface Module {
  title: string;
  content: string;
}

interface CareerPath {
  title: string;
  image: string;
}

interface CASSCoursePageProps {
  onBack?: () => void;
}

// --- SECTION COMPONENT ---
const Section: React.FC<SectionProps> = ({ children, id, className = "" }) => (
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
const FaqCard: React.FC<FaqCardProps> = ({ question, answer, delay }) => {
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
};

// --- MAIN COURSE PAGE ---
const CASSCoursePage: React.FC<CASSCoursePageProps> = ({ onBack }) => {
  const curriculumModules: Module[] = [
    {
      title: "Module 01: Foundations of AI & ML Security",
      content:
        "Understanding the AI threat landscape, attack surfaces, and secure AI principles.",
    },
    {
      title: "Module 02: Adversarial Machine Learning",
      content:
        "Hands-on labs on evasion attacks, data poisoning, and model inversion.",
    },
    {
      title: "Module 03: Securing ML Pipelines (MLSecOps)",
      content:
        "Integrating security into the end-to-end machine learning lifecycle.",
    },
    {
      title: "Module 04: Data Privacy & Protection in AI",
      content:
        "Techniques like differential privacy, federated learning, and homomorphic encryption.",
    },
    {
      title: "Module 05: Large Language Model (LLM) Security",
      content:
        "Analyzing and defending against prompt injection, model theft, and other LLM-specific threats.",
    },
    {
      title: "Module 06: AI Security Governance & Red Teaming",
      content:
        "Building AI security policies and conducting red team exercises against AI systems.",
    },
  ];

  const faqs = [
    {
      title: "Is programming experience required for this course?",
      content:
        "Yes, a solid understanding of Python is a mandatory prerequisite for this advanced program.",
    },
    {
      title: "What kind of AI models will we work with?",
      content:
        "You will work with a variety of models, including computer vision classifiers and large language models (LLMs) in our dedicated lab environment.",
    },
    {
      title: "Is this a theoretical or practical course?",
      content:
        "This is a deeply practical course. Over 80% of the course time is dedicated to hands-on labs where you will perform and defend against real AI attacks.",
    },
  ];

  const [activeModule, setActiveModule] = useState<Module>(curriculumModules[0]);

  const careerOpportunities: CareerPath[] = [
    {
      title: "AI Security Specialist",
      image: "https://placehold.co/300x200/0a192f/FFFFFF?text=AI+Sec",
    },
    {
      title: "MLSecOps Engineer",
      image: "https://placehold.co/300x200/0a192f/FFFFFF?text=MLSecOps",
    },
    {
      title: "AI Red Teamer",
      image: "https://placehold.co/300x200/0a192f/FFFFFF?text=AI+Red+Team",
    },
    {
      title: "AI Security Researcher",
      image: "https://placehold.co/300x200/0a192f/FFFFFF?text=Researcher",
    },
    {
      title: "Prompt Engineer (Security)",
      image: "https://placehold.co/300x200/0a192f/FFFFFF?text=Prompt",
    },
  ];

  const tools = [
    { name: "Burp Suite", image: "https://placehold.co/200x120/0a192f/FFFFFF?text=Burp" },
    { name: "Kali Linux", image: "https://placehold.co/200x120/0a192f/FFFFFF?text=Kali" },
    { name: "Wireshark", image: "https://placehold.co/200x120/0a192f/FFFFFF?text=Wireshark" },
    { name: "Metasploit", image: "https://placehold.co/200x120/0a192f/FFFFFF?text=Metasploit" },
    { name: "Nmap", image: "https://placehold.co/200x120/0a192f/FFFFFF?text=Nmap" },
    { name: "OWASP ZAP", image: "https://placehold.co/200x120/0a192f/FFFFFF?text=ZAP" },
  ];

 
  return (
    <div className="relative text-white font-sans bg-[#0a192f]">
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
        <header className="py-24 text-center relative">
          <div className="max-w-screen-xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="text-lg font-semibold text-red-500">
                Cyzium Specialist Course
              </p>
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-white mt-4">
                Certified AI Security Specialist
              </h1>
              <p className="text-4xl md:text-5xl font-bold text-red-500 tracking-wider mt-2">
                (CASS)
              </p>
              <p className="mt-8 max-w-4xl mx-auto text-2xl text-gray-300">
                Defend the future of intelligence. Master the art of securing
                machine learning systems and protecting AI from emerging
                threats.
              </p>
            </motion.div>
          </div>
        </header>

        <div className="max-w-screen-xl mx-auto p-8">
          {/* --- Course Info --- */}
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
                  <p className="text-4xl font-bold">10 Weeks</p>
                  <p className="text-gray-400">Duration</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">Expert</p>
                  <p className="text-gray-400">Skill Level</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">150+</p>
                  <p className="text-gray-400">Lab Hours</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">CASS</p>
                  <p className="text-gray-400">Certification</p>
                </div>
              </div>
            </section>
          </motion.div>

          {/* --- About --- */}
          <Section id="about">
            <h2 className="text-5xl font-bold text-center mb-12">
              About The Course
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  The Certified AI Security Specialist (CASS) program is a
                  cutting-edge course designed for the next frontier of
                  cybersecurity. As AI and Machine Learning become integral to
                  business, they also become prime targets for new, sophisticated
                  attacks. This course equips you with the specialized skills to
                  secure AI models, protect training data, and defend against
                  adversarial attacks, making you an invaluable expert in a
                  rapidly growing field.
                </p>
              </div>
              <div>
                <img
                  src="https://placehold.co/600x400/0a192f/FFFFFF?text=AI+Neural+Network"
                  alt="AI Security Concept"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </Section>

          {/* --- Achievements --- */}
          <Section id="what-youll-achieve">
            <h2 className="text-5xl font-bold text-center mb-8">
              What You'll Achieve
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 text-lg">
              <div className="flex items-center gap-4 p-4">
                <CheckCircle
                  size={24}
                  className="text-red-500 flex-shrink-0"
                />
                <span>Secure machine learning models against adversarial attacks.</span>
              </div>
              <div className="flex items-center gap-4 p-4">
                <CheckCircle
                  size={24}
                  className="text-red-500 flex-shrink-0"
                />
                <span>
                  Implement privacy-preserving techniques for sensitive data.
                </span>
              </div>
              <div className="flex items-center gap-4 p-4">
                <CheckCircle
                  size={24}
                  className="text-red-500 flex-shrink-0"
                />
                <span>Conduct red team exercises against AI and LLM systems.</span>
              </div>
              <div className="flex items-center gap-4 p-4">
                <CheckCircle
                  size={24}
                  className="text-red-500 flex-shrink-0"
                />
                <span>
                  Integrate security into the end-to-end ML lifecycle (MLSecOps).
                </span>
              </div>
            </div>
          </Section>

          {/* --- Career Opportunities --- */}
          <Section id="career-opportunities">
            <h2 className="text-5xl font-bold text-center mb-8">
              Career Opportunities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {careerOpportunities.map((path) => (
                <div
                  key={path.title}
                  className="bg-black/30 border border-white/10 rounded-2xl text-center overflow-hidden group"
                >
                  <img
                    src={path.image}
                    alt={path.title}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <p className="py-4 font-semibold text-gray-300">
                    {path.title}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* --- Tools --- */}
          <Section id="tools">
            <h2 className="text-5xl font-bold text-center mb-8">
              Tools You'll Learn
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-black/30 border border-white/10 rounded-2xl text-center overflow-hidden group"
                >
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <p className="py-3 font-semibold text-gray-300">{tool.name}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* --- Curriculum --- */}
          <Section id="curriculum">
            <motion.div
              className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-[40px] p-8 md:p-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-center mb-8">
                Curriculum
              </h2>
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

          {/* --- Instructor --- */}
          <Section id="instructor">
            <h2 className="text-5xl font-bold text-center mb-8">
              Meet Your Instructor
            </h2>
            <div className="p-8 rounded-lg flex flex-col sm:flex-row items-center gap-8 max-w-4xl mx-auto">
              <img
                src="https://placehold.co/150x150/0a192f/FFFFFF?text=EC"
                alt="Instructor Dr. Evelyn Carter"
                className="w-32 h-32 rounded-full object-cover flex-shrink-0 border-4 border-red-500"
              />
              <div>
                <h3 className="text-3xl font-bold">Dr. Evelyn Carter</h3>
                <p className="text-lg text-red-500 font-semibold">
                  Lead AI Security Researcher
                </p>
                <p className="mt-4 text-gray-300">
                  Dr. Carter holds a PhD in Adversarial Machine Learning and has
                  published numerous papers on the topic. She leads a research
                  team dedicated to developing defenses against next-generation
                  AI attacks.
                </p>
              </div>
            </div>
          </Section>

          {/* --- FAQs --- */}
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

        {/* --- CTA --- */}
        <section className="bg-red-600 text-white py-20">
          <div className="max-w-screen-xl mx-auto px-8 text-center">
            <h2 className="text-5xl font-extrabold">
              Ready to Secure the Future of AI?
            </h2>
            <p className="text-xl mt-4 max-w-3xl mx-auto">
              Enroll in the Certified AI Security Specialist program and become a
              leader in the most critical field of the next decade.
            </p>
            <div className="mt-8">
              <div className="flex items-baseline justify-center gap-4">
                <p className="text-5xl font-extrabold">₹80,000</p>
                <p className="text-2xl line-through opacity-80">₹90,000</p>
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
};

export default CASSCoursePage;
