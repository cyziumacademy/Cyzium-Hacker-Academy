"use client";
import React, { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import Navbar from '../navbar';
import Footer from "../footer"; 
import { useRouter } from "next/navigation";
import Image from "next/image";
import Float from "@/app/float";
import { motion} from "framer-motion";
import ContactCard from "@/app/contact";


// ================== TypeScript Interfaces ==================
interface Certification {
    name: string;
    image: string;
}

interface Course {
    title: string;
    path: string; // changed from slug to path
    category: string;
    description: string;
    image: string;
}

interface CareerPath {
    title: string;
    description: string;
    certifications: Certification[];
    roles: string[];
    themeColor: 'blue' | 'red' | 'purple';
}

// ================== DATA ==================
const courses: Course[] = [
  { 
    title: "Junior Bug Bounty Hunter", 
    path: "jbbh", 
    category: "Bug Bounty Hunter", 
    description: "Begin your ethical hacking journey and learn real-world bug bounty fundamentals.", 
    image: "/jbbh.png" 
  },
  { 
    title: "Certified Bug Bounty Hunter", 
    path: "cbbt", 
    category: "Bug Bounty Hunter", 
    description: "Advance your bug hunting skills with in-depth web, API, and mobile testing techniques.", 
    image: "/cbbt.png" 
  },
  { 
    title: "Certified Bug Bounty Expert", 
    path: "cbbe", 
    category: "Bug Bounty Hunter", 
    description: "Master advanced exploitation in web, AI, and cloud environments for expert-level hunting.", 
    image: "/cbbe.png" 
  },
  { 
    title: "Certified Professional Bug Hunter", 
    path: "cpbh", 
    category: "Bug Bounty Hunter", 
    description: "Achieve professional mastery in bug bounty hunting with advanced real-world simulations.", 
    image: "/cpbh.png" 
  },
  { 
    title: "Certified Cloud Security Analyst", 
    path: "ccsa", 
    category: "Cloud Security", 
    description: "Learn to secure and assess vulnerabilities in modern cloud platforms and services.", 
    image: "/ccsa.png" 
  },
  { 
    title: "Certified AI Security Specialist", 
    path: "cass", 
    category: "AI Security", 
    description: "Understand and defend AI systems against modern security threats and adversarial attacks.", 
    image: "/cass.png" 
  },
    { 
    title: "Certified Network Associate", 
    path: "cna", 
    category: "Networking", 
    description: "Build a strong foundation in networking, protocols, and secure infrastructure design.", 
    image: "/cna.png" 
  },
];

const careerPaths: CareerPath[] = [
    { 
        title: "SOC Analyst", 
        description: "Learn to defend systems, monitor for threats, and respond to security incidents as a frontline defender in a Security Operations Center.", 
        certifications: [
            { name: "EC-Council CSA", image: "https://placehold.co/100x60/f1f5f9/1e293b?text=CSA" },
            { name: "Cisco CyberOps", image: "https://placehold.co/100x60/f1f5f9/1e293b?text=CyberOps" },
            { name: "CompTIA Security+", image: "https://placehold.co/100x60/f1f5f9/1e293b?text=Sec%2B" },
            { name: "GIAC GCIA", image: "https://placehold.co/100x60/f1f5f9/1e293b?text=GCIA" }
        ], 
        roles: ["SOC Analyst Tier 1/2", "Cybersecurity Analyst", "Incident Responder", "Threat Hunter"], 
        themeColor: "blue" 
    },
    { 
        title: "Bug Bounty Hunter", 
        description: "Hunt for vulnerabilities in real-world applications and get rewarded for your findings. Master web and mobile security testing.", 
        certifications: [
            { name: "Junior Bug Bounty Hunter", image: "/jbbh.png" },
            { name: "Certified Bug Bounty Hunter", image: "/cbbt.png" },
            { name: "Certified Bug Bounty Expert", image: "/cbbe.png" },
            { name: "Certified Professional Bug Hunter", image: "/cpbh.png" }
        ], 
        roles: ["Bug Bounty Hunter", "Application Security Engineer", "Security Researcher", "Vulnerability Analyst"], 
        themeColor: "purple" 
    },
    { 
        title: "Penetration Tester", 
        description: "Master the art of ethical hacking. Learn to find, exploit, and report security vulnerabilities in systems and applications just like a real-world attacker.", 
        certifications: [
            { name: "Offensive Security OSCP", image: "https://placehold.co/100x60/f1f5f9/1e293b?text=OSCP" },
            { name: "EC-Council CEH", image: "https://placehold.co/100x60/f1f5f9/1e293b?text=CEH" },
            { name: "CompTIA PenTest+", image: "https://placehold.co/100x60/f1f5f9/1e293b?text=PenTest%2B" },
            { name: "GIAC GPEN", image: "https://placehold.co/100x60/f1f5f9/1e293b?text=GPEN" }
        ], 
        roles: ["Penetration Tester", "Ethical Hacker", "Red Team Operator", "Security Consultant"], 
        themeColor: "red" 
    }
];

// ================== COMPONENT ==================
export default function CoursesPage(): React.JSX.Element {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filter, setFilter] = useState<string>('All');
    const [isCareerModalOpen, setIsCareerModalOpen] = useState<boolean>(false);
    const [selectedPath, setSelectedPath] = useState<CareerPath | null>(null);

    const openCareerModal = (path: CareerPath) => { setSelectedPath(path); setIsCareerModalOpen(true); };
    const closeCareerModal = () => { setSelectedPath(null); setIsCareerModalOpen(false); };

    const filteredCourses = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filter === 'All' || course.category === filter)
    );
    
    const categories: string[] = ['All', ...Array.from(new Set(courses.map(course => course.category)))];


    const router = useRouter();

    const handleViewDetails = (path: string) => {
        router.push(`/courses/${path}`);
    };

    const glassEffect = "bg-black/20 backdrop-blur-xl border border-white/10 shadow-lg rounded-[60px]";

    const [showContact, setShowContact] = useState(false);


     return (
        <div className="bg-slate-950 min-h-screen font-sans text-gray-200">
            
            {/* SECTION 1: Career Paths */}
            <div className="relative bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/bg16.jpg')" }}>
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="relative">
                    <section className="text-white py-20 px-6">
                        <div className="max-w-7xl mx-auto text-center mt-30">
                            <h2 className="text-4xl font-extrabold mb-10 animate-fade-down">Upskill Your <span className="text-blue-400">Cybersecurity Career</span></h2>
                            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 animate-fade-up">Unlike other institutes that only sell certifications, we focus on <span className="text-green-400">building cybersecurity professionals</span>.</p>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center">
                               {careerPaths.map((path: CareerPath) => {
    const isComingSoon = path.title === 'SOC Analyst' || path.title === 'Penetration Tester';
    return (
        <div key={path.title} className={`${glassEffect} p-8 hover:scale-105 transition-transform duration-500 animate-slide-up ${
            path.themeColor === 'blue' ? 'hover:shadow-blue-500/40' :
            path.themeColor === 'red' ? 'hover:shadow-red-500/40' :
            'hover:shadow-purple-500/40'
        }`}>
            {/* Title & Description remain visible */}
            <h3 className="text-2xl font-bold mb-4 text-gray-100">{path.title}</h3>
            <p className="text-gray-300 mb-6">{path.description}</p>

            {/* Content below heading: blurred if coming soon */}
            <div className={`${isComingSoon ? 'opacity-50 pointer-events-none' : ''}`}>
                {!isComingSoon ? (
                    <button onClick={() => openCareerModal(path)} className={`px-6 py-3 rounded-xl transition cursor-pointer ${
                        path.themeColor === 'blue' ? 'bg-blue-500 hover:bg-blue-600' :
                        path.themeColor === 'red' ? 'bg-red-500 hover:bg-red-600' :
                        'bg-purple-500 hover:bg-purple-600'
                    }`}>{`Explore ${path.title} Path`}</button>
                ) : (
                    <div className="px-6 py-3 rounded-xl bg-gray-700 text-gray-200 text-center font-bold">
                        Coming Soon
                    </div>
                )}
            </div>
        </div>
    );
})}
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* SECTION 2: Individual Courses */}
<div className="relative w-full h-full">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="/bg3.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-slate-900/80"></div>


                <div className="relative">
                    <main className="container mx-auto px-6 py-24">
                        <div className="text-center mb-12 animate-fade-down">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">Our Individual Courses</h1>
                            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">These courses form the building blocks of our career paths.</p>
                        </div>

                        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-center animate-fade-up">
                            <div className="relative w-full md:w-1/2 lg:w-1/3">
                                <input type="text" placeholder="Search for a course..." className="w-full backdrop-blur-sm border border-slate-700 rounded-full py-4 pl-12 pr-4 shadow-[inset_-3px_-1px_9px_rgba(255,255,255,0.5),_inset_10px_10px_20px_rgba(0,0,0,0.2),_0_4px_30px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                            <div className="relative">
                                  <select
    className="appearance-none w-full md:w-auto bg-transparent backdrop-blur-sm border border-slate-700 rounded-full py-4 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all shadow-[inset_-3px_-1px_9px_rgba(255,255,255,0.5),_inset_10px_10px_20px_rgba(0,0,0,0.2),_0_4px_30px_rgba(0,0,0,0.1)] text-gray-200"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  >
    {categories.map((category: string) => (
      <option
        key={category}
        value={category}
        className="bg-slate-900 text-gray-200"
      >
        {category}
      </option>
    ))}
  </select>
                                <SlidersHorizontal className="absolute right-4 top-1/2 -translate-y-1/2  pointer-events-none" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {filteredCourses.map((course: Course) => (
                                <div key={course.path} className={`${glassEffect} overflow-hidden hover:shadow-red-500/40 transition-all duration-500 transform hover:-translate-y-2 animate-slide-up`}>
 <Image
  src={course.image}
  alt={course.title}
  width={500}
  height={300}
  className="w-full h-72 object-cover"
/>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold mb-2 text-gray-100 flex-grow">{course.title}</h3>
                                        <p className="text-gray-400 mb-6">{course.description}</p>
                                       <div className="flex justify-center">
  {["ccsa", "cna", "cass"].includes(course.path) ? (
    <div className="w-60 mt-auto bg-gray-700 text-gray-300 font-semibold py-3 px-4 rounded-[20px] text-center cursor-not-allowed">
      Coming Soon
    </div>
  ) : (
    <button 
      onClick={() => handleViewDetails(course.path)} 
      className="w-60 mt-auto bg-red-600 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-[20px] transition-colors shadow-md hover:shadow-lg shadow-red-500/30 text-center cursor-pointer"
    >
      View Details
    </button>
  )}
</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>

            <style jsx global>{`
                @keyframes scale-in { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                .animate-scale-in { animation: scale-in 0.2s ease-out forwards; }

                @keyframes fade-down { from { opacity:0; transform: translateY(-20px); } to { opacity:1; transform:translateY(0); } }
                .animate-fade-down { animation: fade-down 0.6s ease-out forwards; }

                @keyframes fade-up { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform:translateY(0); } }
                .animate-fade-up { animation: fade-up 0.6s ease-out forwards; }

                @keyframes slide-up { from { opacity:0; transform: translateY(40px); } to { opacity:1; transform:translateY(0); } }
                .animate-slide-up { animation: slide-up 0.5s ease-out forwards; }
            `}</style>


{/* Career Path Modal */}
{isCareerModalOpen && selectedPath && (
  <div
    className="fixed inset-0 flex items-start justify-center bg-black/30 z-50 px-3 sm:px-0"
    style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }} // blur entire background
    onClick={closeCareerModal}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        transform: "scale(0.8)",
        opacity: 0,
        animation: "scaleIn 0.3s ease-out forwards",
      }}
      className="rounded-[30px] sm:rounded-[50px] w-full max-w-2xl mx-0 sm:mx-4 mt-24 sm:mt-35 p-4 sm:p-6 relative shadow-[inset_-3px_-1px_9px_rgba(255,255,255,0.5),_inset_10px_10px_20px_rgba(0,0,0,0.2),_0_4px_30px_rgba(0,0,0,0.1)] bg-black/70 overflow-y-auto max-h-[90vh] sm:max-h-none"
    >
      {/* Close Button */}
      <button
        onClick={closeCareerModal}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white cursor-pointer"
      >
        <X size={24} />
      </button>

      {/* Title + Description */}
      <h2 className="text-xl sm:text-3xl font-bold mb-3 text-white text-center sm:text-left">
        {selectedPath.title}
      </h2>
      <p className="text-gray-300 mb-5 text-sm sm:text-base text-center sm:text-left leading-relaxed">
        {selectedPath.description}
      </p>

      {/* Certifications */}
      <h3 className="text-base sm:text-xl font-semibold text-teal-400 mb-2 text-center sm:text-left">
        Relevant Certifications
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-5 items-center justify-items-center">
        {selectedPath.certifications.map((cert, idx) => (
          <React.Fragment key={idx}>
            <div className="relative rounded-lg overflow-hidden h-24 sm:h-28 w-full max-w-[130px]">
    <Image
    src={cert.image}
    alt={cert.name}
    fill
    className="object-cover rounded-lg"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    priority
  />
            </div>

            {idx === 2 && (
              <div className="rounded-lg h-20 sm:h-28 flex items-center justify-center text-white font-bold text-4xl sm:text-5xl">
                =
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Roles */}
      <h3 className="text-base sm:text-xl font-semibold text-teal-400 mb-2 text-center sm:text-left">
        Career Roles
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-1 mb-5 text-sm sm:text-base text-left">
        {selectedPath.roles.map((role, idx) => (
          <li key={idx}>{role}</li>
        ))}
      </ul>

      {/* Start Learning Button */}
      <button
        onClick={() => {
          closeCareerModal(); // close the modal
          router.push(`/contact`); // navigate to your contact page
        }}
        className="w-full py-3 mt-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition text-sm sm:text-base cursor-pointer"
      >
        Start Learning
      </button>
    </div>


    {/* Inline <style> with JS object for keyframes */}
    <style>
      {`
        @keyframes scaleIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}
    </style>
  </div>
)}
        {/* --- CTA --- */}
        <section className="relative z-20 bg-gradient-to-r from-blue-900 to-red-800 text-white py-16 sm:py-20 px-6 sm:px-8 text-center overflow-hidden">
          <div className="max-w-screen-xl mx-auto relative z-20">
            <h2 className="text-4xl sm:text-5xl font-extrabold">Ready to Join the Elite?</h2>
           <p className="text-lg sm:text-xl mt-4 max-w-2xl mx-auto">
            Advance your cybersecurity career with industry-focused training in Bug Bounty, Cloud Security, AI Security, and Networking, designed to shape you into a world-class ethical hacker.
           </p>
            <motion.button
              onClick={() => setShowContact(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 w-full sm:w-auto px-8 py-3 sm:py-4 bg-white text-red-600 text-base sm:text-lg font-bold rounded-[23px] hover:bg-gray-200 transition-colors cursor-pointer relative z-30"
            >
              Enroll Now
            </motion.button>
          </div>

          {/* Optional background overlay (ensure no click block) */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
        </section>

<Float />
<Navbar />
<ContactCard isOpen={showContact} onClose={() => setShowContact(false)} />
<Footer />
        </div>
        
    );
}
