"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, BarChart2, CheckCircle, ChevronDown, Award, Users, Code, Shield, Briefcase, GraduationCap, Code2, Target, Zap, ChevronsRight, ArrowLeft, HelpCircle, Cloud, Key, FileLock } from "lucide-react";
import Navbar from '@/app/navbar';
import Footer from "@/app/footer"; 
import Float from "@/app/float";

// --- COURSE DETAIL PAGE COMPONENTS ---

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

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

// FAQ Card Component
type FaqCardProps = {
  question: string;
  answer: string;
  delay?: number;
};

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
                {/* Front of the card */}
                <div className="absolute w-full h-full bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col justify-center items-center text-center" style={{ backfaceVisibility: "hidden" }}>
                    <HelpCircle size={32} className="text-red-500 mb-4" />
                    <h3 className="text-xl font-bold text-white">{question}</h3>
                </div>
                {/* Back of the card */}
                <div className="absolute w-full h-full bg-red-600/10 backdrop-blur-xl border border-red-500/50 rounded-2xl p-6 flex items-center justify-center text-center" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                    <p className="text-white leading-relaxed">{answer}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

type CCSAProps = {
  onBack?: () => void;
};

function CCSACoursePage({ onBack }: CCSAProps) {
  const curriculumModules = [
      { title: "Module 01: Cloud Security Fundamentals", content: "Introduction to AWS, Azure, & GCP security models."},
      { title: "Module 02: Identity & Access Management (IAM)", content: "Mastering IAM roles, policies, and best practices."},
      { title: "Module 03: Securing Cloud Networks", content: "Configuring VPCs, Security Groups, and network ACLs."},
      { title: "Module 04: Data Protection & Encryption", content: "Implementing encryption at rest and in transit for cloud data."},
      { title: "Module 05: Logging, Monitoring & Incident Response", content: "Using cloud-native tools for threat detection and response."},
      { title: "Module 06: DevSecOps & Automation", content: "Integrating security into the CI/CD pipeline for cloud applications."},
  ];
  const faqs = [
      { title: "Do I need experience with all three clouds?", content: "No, this course covers the core principles applicable to all major platforms, with specific labs for AWS, Azure, and GCP."},
      { title: "Is this course hands-on?", content: "Absolutely. The majority of your time will be spent in our live cloud lab environments, working on real-world security challenges."},
      { title: "Does this prepare for official certifications?", content: "Yes, this course provides the foundational knowledge and practical skills needed to confidently pursue certifications like AWS Security Specialty and Azure Security Engineer."},
  ];
  
  const [activeModule, setActiveModule] = useState(curriculumModules[0]);
  
  const careerOpportunities = [
      { title: "Cloud Security Analyst", image: "https://placehold.co/300x200/0a192f/FFFFFF?text=Analyst" },
      { title: "Cloud Security Engineer", image: "https://placehold.co/300x200/0a192f/FFFFFF?text=Engineer" },
      { title: "DevSecOps Engineer", image: "https://placehold.co/300x200/0a192f/FFFFFF?text=DevSecOps" },
      { title: "Cloud Compliance Specialist", image: "https://placehold.co/300x200/0a192f/FFFFFF?text=Compliance" },
      { title: "Security Architect", image: "https://placehold.co/300x200/0a192f/FFFFFF?text=Architect" }
  ];

  // Tools for bug bounty (new section)
  const tools = [
    { title: "Burp Suite", desc: "Web application proxy for testing and manipulating HTTP(S) traffic.", icon: Code2 },
    { title: "Kali Linux", desc: "Penetration testing distribution with many preinstalled tools.", icon: Cloud },
    { title: "Nmap", desc: "Network discovery and port scanning tool.", icon: Target },
    { title: "OWASP ZAP", desc: "Open source web application scanner and proxy.", icon: Zap },
    { title: "Metasploit", desc: "Exploit development and execution framework.", icon: Shield },
    { title: "Wireshark", desc: "Network packet capture and analysis tool.", icon: BarChart2 },
  ];

  return (
    <div className="relative text-white font-sans bg-[#0a192f]">
       <div className="fixed top-0 left-0 w-full h-full z-0">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/subtle-prism.png')" }}></div>
            <div className="absolute inset-0 bg-black/50"></div>
        </div>

      <main className="relative z-10">
        <header className="py-24 text-center relative">
            <div className="max-w-screen-xl mx-auto px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                    <p className="text-lg font-semibold text-red-500">Cyzium Professional Course</p>
                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-white mt-4">Certified Cloud Security Analyst</h1>
                    <p className="text-4xl md:text-5xl font-bold text-red-500 tracking-wider mt-2">(CCSA)</p>
                    <p className="mt-8 max-w-4xl mx-auto text-2xl text-gray-300">Master the skills to design, implement, and manage secure cloud environments on AWS, Azure, and GCP. Become an indispensable asset in the cloud-first era.</p>
                </motion.div>
            </div>
        </header>

        <div className="max-w-screen-xl mx-auto p-8">
            <motion.div className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-[40px] p-8 md:p-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>
                <section className="py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center"><p className="text-4xl font-bold">8 Weeks</p><p className="text-gray-400">Duration</p></div>
                        <div className="text-center"><p className="text-4xl font-bold">Intermediate</p><p className="text-gray-400">Skill Level</p></div>
                        <div className="text-center"><p className="text-4xl font-bold">120+</p><p className="text-gray-400">Lab Hours</p></div>
                        <div className="text-center"><p className="text-4xl font-bold">CCSA</p><p className="text-gray-400">Certification</p></div>
                    </div>
                </section>
            </motion.div>
            
            <Section id="about">
                <h2 className="text-5xl font-bold text-center mb-12">About The Course</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-xl text-gray-300 leading-relaxed">The Certified Cloud Security Analyst (CCSA) program is your comprehensive guide to mastering security in the cloud. As organizations migrate critical infrastructure to platforms like AWS, Azure, and GCP, the demand for skilled cloud security professionals has skyrocketed. This course provides deep, hands-on training in securing cloud networks, managing identities, protecting data, and responding to cloud-based threats.</p>
                    </div>
                    <div>
                        <img src="https://placehold.co/600x400/0a192f/FFFFFF?text=Cloud+Architecture" alt="Cloud Security Architecture" className="rounded-2xl shadow-lg"/>
                    </div>
                </div>
            </Section>

            <Section id="what-youll-achieve">
                <h2 className="text-5xl font-bold text-center mb-8">What You'll Achieve</h2>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 text-lg">
                    <div className="flex items-center gap-4 p-4"><CheckCircle size={24} className="text-red-500 flex-shrink-0"/><span>Architect and deploy secure cloud infrastructure from scratch.</span></div>
                    <div className="flex items-center gap-4 p-4"><CheckCircle size={24} className="text-red-500 flex-shrink-0"/><span>Implement robust Identity and Access Management (IAM) policies.</span></div>
                    <div className="flex items-center gap-4 p-4"><CheckCircle size={24} className="text-red-500 flex-shrink-0"/><span>Conduct cloud security audits and ensure compliance.</span></div>
                    <div className="flex items-center gap-4 p-4"><CheckCircle size={24} className="text-red-500 flex-shrink-0"/><span>Automate security tasks using cloud-native tools and DevSecOps principles.</span></div>
                </div>
            </Section>

            <Section id="career-opportunities">
                <h2 className="text-5xl font-bold text-center mb-8">Career Opportunities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {careerOpportunities.map(path => (
                       <div key={path.title} className="bg-black/30 border border-white/10 rounded-2xl text-center overflow-hidden group">
                           <img src={path.image} alt={path.title} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
                           <p className="py-4 font-semibold text-gray-300">{path.title}</p>
                       </div>
                    ))}
                </div>
            </Section>

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
                                            ? 'bg-red-600 text-white'
                                            : 'bg-black/20 text-gray-300 hover:bg-white/10'
                                    }`}
                                >
                                    Module {String(i + 1).padStart(2, '0')}
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
                                    <h3 className="text-2xl font-bold text-white">{activeModule.title}</h3>
                                    <p className="mt-2 text-gray-300">{activeModule.content}</p>
                                </motion.div>
                           </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </Section>

            {/* Tools Section - added as requested */}
            <Section id="tools">
                <h2 className="text-5xl font-bold text-center mb-8">Tools You'll Learn (Bug Bounty)</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {tools.map((t) => {
                        const Icon = t.icon as any;
                        return (
                            <div key={t.title} className="bg-black/30 border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <Icon size={28} className="text-red-500 flex-shrink-0" />
                                    <h3 className="text-xl font-semibold">{t.title}</h3>
                                </div>
                                <p className="text-gray-300">{t.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </Section>

            <Section id="instructor">
                <h2 className="text-5xl font-bold text-center mb-8">Meet Your Instructor</h2>
                <div className="p-8 rounded-lg flex flex-col sm:flex-row items-center gap-8 max-w-4xl mx-auto">
                    <img src="https://placehold.co/150x150/0a192f/FFFFFF?text=DC" alt="Instructor David Chen" className="w-32 h-32 rounded-full object-cover flex-shrink-0 border-4 border-red-500" />
                    <div>
                        <h3 className="text-3xl font-bold">David Chen</h3>
                        <p className="text-lg text-red-500 font-semibold">Principal Cloud Security Architect</p>
                        <p className="mt-4 text-gray-300">David has over 15 years of experience designing and securing large-scale cloud infrastructures for global enterprises. He holds multiple expert-level certifications in AWS and Azure.</p>
                    </div>
                </div>
            </Section>
            
            <Section id="faqs">
                <h2 className="text-5xl font-bold text-center mb-12">Frequently Asked Questions</h2>
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
        <section className="bg-red-600 text-white py-20">
            <div className="max-w-screen-xl mx-auto px-8 text-center">
                <h2 className="text-5xl font-extrabold">Ready to Secure the Cloud?</h2>
                <p className="text-xl mt-4 max-w-3xl mx-auto">Enroll in the Certified Cloud Security Analyst program and become an indispensable asset in the cloud-first era.</p>
                <div className="mt-8">
                     <div className="flex items-baseline justify-center gap-4">
                        <p className="text-5xl font-extrabold">₹60,000</p>
                        <p className="text-2xl line-through opacity-80">₹70,000</p>
                     </div>
                     <button className="mt-6 w-full max-w-sm px-8 py-4 bg-white text-red-600 text-lg font-bold rounded-lg hover:bg-gray-200 transition-colors">Enroll Now</button>
                </div>
            </div>
        </section>
      </main>
      <Navbar />
      <Footer />
    </div>
  );
}

export default CCSACoursePage;
