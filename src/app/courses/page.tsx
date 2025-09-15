"use client";
import React, { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import Navbar from '../navbar';

// ================== TypeScript Interfaces ==================
interface Certification {
    name: string;
    image: string;
}

interface Course {
    title: string;
    slug: string;
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

interface StarterProgram {
    title: string;
    description: string;
    certifications: Certification[];
}
// ==========================================================

// Course data
const courses: Course[] = [
    { title: "Ethical Hacking Essentials", slug: "ethical-hacking-essentials", category: "Cybersecurity", description: "Learn the fundamentals of ethical hacking and penetration testing.", image: "https://placehold.co/600x400/ef4444/ffffff?text=EHE" },
    { title: "Secure Coding Practices", slug: "secure-coding-practices", category: "Coding", description: "Master the art of writing secure code and preventing vulnerabilities.", image: "https://placehold.co/600x400/3b82f6/ffffff?text=Secure+Code" },
    { title: "Malware Analysis", slug: "malware-analysis", category: "Cybersecurity", description: "Dive deep into malware analysis and reverse engineering techniques.", image: "https://placehold.co/600x400/22c55e/ffffff?text=Malware" },
    { title: "Network Security", slug: "network-security", category: "Networking", description: "Understand and implement robust network security protocols.", image: "https://placehold.co/600x400/eab308/ffffff?text=Network" },
    { title: "Penetration Testing", slug: "penetration-testing", category: "Cybersecurity", description: "Advanced techniques for finding and exploiting vulnerabilities.", image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Pen+Test" },
    { title: "Cloud Security", slug: "cloud-security", category: "Cloud", description: "Secure cloud environments and infrastructure.", image: "https://placehold.co/600x400/06b6d4/ffffff?text=Cloud" },
];

// Career Path Data with certification images
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
            { name: "Burp Suite Certified Practitioner", image: "https://placehold.co/100x60/f1f5f9/1e293b?text=BSCP" },
            { name: "Offensive Security OSWE", image: "https://placehold.co/100x60/f1f5f9/1e293b?text=OSWE" },
            { name: "eLearnSecurity eWPTXv2", image: "https://placehold.co/100x60/f1f5f9/1e293b?text=eWPTXv2" },
            { name: "HackerOne H1-702", image: "https://placehold.co/100x60/f1f5f9/1e293b?text=H1-702" }
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

// Data for the Starter Program
const starterProgramData: StarterProgram = {
    title: "1-Month Cybersecurity Starter Program",
    description: "A foundational program designed to give you a taste of both defensive (SOC Analyst) and offensive (Penetration Testing) security. Build core skills and discover which career path excites you most.",
    certifications: [
        { name: "CompTIA A+", image: "https://placehold.co/100x60/f1f5f9/1e293b?text=A%2B" },
        { name: "CompTIA Network+", image: "https://placehold.co/100x60/f1f5f9/1e293b?text=Net%2B" },
        { name: "Google Cybersecurity", image: "https://placehold.co/100x60/f1f5f9/1e293b?text=Google" },
        { name: "ISC2 Certified in Cybersecurity", image: "https://placehold.co/100x60/f1f5f9/1e293b?text=ISC2%20CC" }
    ]
};

export default function CoursesPage(): React.JSX.Element {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filter, setFilter] = useState<string>('All');
    const [isCareerModalOpen, setIsCareerModalOpen] = useState<boolean>(false);
    const [selectedPath, setSelectedPath] = useState<CareerPath | null>(null);
    const [isStarterModalOpen, setIsStarterModalOpen] = useState<boolean>(false);

    const openCareerModal = (path: CareerPath) => {
        setSelectedPath(path);
        setIsCareerModalOpen(true);
    };

    const closeCareerModal = () => {
        setIsCareerModalOpen(false);
        setSelectedPath(null);
    };

    const openStarterModal = () => setIsStarterModalOpen(true);
    const closeStarterModal = () => setIsStarterModalOpen(false);

    const filteredCourses = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        (filter === 'All' || course.category === filter)
    );

    const categories: string[] = ['All', ...new Set(courses.map(course => course.category))];
    
    const handleViewDetails = (slug: string) => {
        localStorage.setItem('selectedCourseSlug', slug);
        window.location.href = `/courses/${slug}`;
    };

    const glassEffect = "bg-black/20 backdrop-blur-xl border border-white/10 shadow-lg rounded-[40px]";

    return (
        <div className="bg-slate-950 min-h-screen font-sans text-gray-200">
            {/* SECTION 1: CAREER PATHS with FIRST BACKGROUND */}
            <div
  className="relative bg-cover bg-center bg-fixed"
  style={{ backgroundImage: "url('/bg.jpg')" }}
>

                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="relative">
                    <section className="text-white py-20 px-6">
                        <div className="max-w-7xl mx-auto text-center mt-30">
                            <h2 className="text-4xl font-extrabold mb-10">Choose Your <span className="text-blue-400">Cybersecurity Career</span> — Not Just a Certificate</h2>
                            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">Unlike other institutes that only sell certifications, we focus on <span className="text-green-400">building cybersecurity professionals</span>. Select your career track, train with real tools, and then earn certifications that align with your goals.</p>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center">
                                {careerPaths.map((path) => (
                                    <div key={path.title} className={`${glassEffect} p-8 hover:scale-105 transition-transform duration-300 ${
                                        path.themeColor === 'blue' ? 'hover:shadow-blue-500/40' :
                                        path.themeColor === 'red' ? 'hover:shadow-red-500/40' :
                                        'hover:shadow-purple-500/40'
                                    }`}>
                                        <h3 className="text-2xl font-bold mb-4 text-gray-100">{path.title}</h3>
                                        <p className="text-gray-300 mb-6">{path.description}</p>
                                        <button onClick={() => openCareerModal(path)} className={`px-6 py-3 rounded-xl transition cursor-pointer ${
                                            path.themeColor === 'blue' ? 'bg-blue-500 hover:bg-blue-600' :
                                            path.themeColor === 'red' ? 'bg-red-500 hover:bg-red-600' :
                                            'bg-purple-500 hover:bg-purple-600'
                                        }`}>{`Explore ${path.title} Path`}</button>
                                    </div>
                                ))}
                            </div>

                             <div className={`mt-16 max-w-3xl mx-auto p-8 ${glassEffect} transition-all duration-300 hover:shadow-yellow-500/40 hover:scale-105`}>
                                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Not Sure Where to Begin?</h3>
                                <p className="text-gray-300 mb-6">
                                    Try our <span className="text-white font-bold">1-Month Cybersecurity Starter Program</span>
                                    to experience the fundamentals of all career paths.
                                    After this, you’ll confidently choose your specialty.
                                </p>
                                <button onClick={openStarterModal} className="px-6 py-3 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold transition">
                                    Explore Starter Program
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* SECTION 2: INDIVIDUAL COURSES with SECOND BACKGROUND */}
            <div className="relative bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop)' }}>
                 <div className="absolute inset-0 bg-slate-950/90"></div>
                 <div className="relative">
                    <main className="container mx-auto px-6 py-24">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">Our Individual Courses</h1>
                            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">These courses form the building blocks of our career paths. Enroll individually or as part of a track.</p>
                        </div>
                        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-center">
                            <div className="relative w-full md:w-1/2 lg:w-1/3">
                                {/* UPDATED Search Box Style */}
                                <input type="text" placeholder="Search for a course..." className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                            <div className="relative">
                                {/* UPDATED Filter Dropdown Style */}
                                <select className="appearance-none w-full md:w-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" value={filter} onChange={(e) => setFilter(e.target.value)}>
                                    {categories.map(category => (<option key={category} value={category}>{category}</option>))}
                                </select>
                                <SlidersHorizontal className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                        {/* UPDATED Grid for Courses */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {filteredCourses.map((course) => (
                                <div key={course.slug} className={`${glassEffect} overflow-hidden hover:shadow-red-500/40 transition-all duration-300 transform hover:-translate-y-2 flex flex-col`}>
                                    <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold mb-2 text-gray-100 flex-grow">{course.title}</h3>
                                        <p className="text-gray-400 mb-6">{course.description}</p>
                                        <button onClick={() => handleViewDetails(course.slug)} className="w-full mt-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg shadow-red-500/30 text-center">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <Navbar/>
                        </div>
                    </main>

                    <footer className="mt-16"><div className="container mx-auto px-6 py-8 text-center text-gray-500"><p>&copy; {new Date().getFullYear()} CYZIUM Hacker Academy. All Rights Reserved.</p></div></footer>
                 </div>
            </div>

            {/* Career Path Modal */}
            {isCareerModalOpen && selectedPath && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={closeCareerModal}>
                    <div className={`${glassEffect} p-8 max-w-4xl w-11/12 m-4 transform transition-all duration-300 scale-95 opacity-0 animate-scale-in`} onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-start mb-4">
                            <h2 className={`text-3xl font-bold ${
                                selectedPath.themeColor === 'blue' ? 'text-blue-400' : 
                                selectedPath.themeColor === 'red' ? 'text-red-400' :
                                'text-purple-400'
                            }`}>{selectedPath.title} Career Path</h2>
                            <button onClick={closeCareerModal} className="text-gray-400 hover:text-white"><X size={28} /></button>
                        </div>
                        <p className="text-gray-300 mb-6">{selectedPath.description}</p>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-green-400 mb-3">Key Certifications</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {selectedPath.certifications.map(cert => (
                                        <div key={cert.name} className="bg-slate-800/70 p-3 rounded-lg flex flex-col items-center text-center">
                                            <img src={cert.image} alt={`${cert.name} logo`} className="w-24 h-16 object-contain mb-2 bg-slate-900/50 rounded-md p-1"/>
                                            <span className="text-gray-200 text-sm font-medium">{cert.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Potential Job Roles</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedPath.roles.map(role => (
                                        <span key={role} className="bg-slate-700 text-gray-200 text-sm font-medium px-3 py-1 rounded-full">{role}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <button onClick={closeCareerModal} className={`w-full mt-8 py-3 rounded-lg font-semibold transition ${
                            selectedPath.themeColor === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 
                            selectedPath.themeColor === 'red' ? 'bg-red-600 hover:bg-red-700' :
                            'bg-purple-600 hover:bg-purple-700'
                        }`}>Start Learning</button>
                    </div>
                </div>
            )}

            {/* Starter Program Modal */}
            {isStarterModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={closeStarterModal}>
                    <div className={`${glassEffect} p-8 max-w-4xl w-11/12 m-4 transform transition-all duration-300 scale-95 opacity-0 animate-scale-in`} onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-3xl font-bold text-yellow-400">{starterProgramData.title}</h2>
                            <button onClick={closeStarterModal} className="text-gray-400 hover:text-white"><X size={28} /></button>
                        </div>
                        <p className="text-gray-300 mb-6">{starterProgramData.description}</p>
                        <div>
                            <h3 className="text-xl font-semibold text-green-400 mb-3">Fundamental Certifications</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {starterProgramData.certifications.map(cert => (
                                    <div key={cert.name} className="bg-slate-800/70 p-3 rounded-lg flex flex-col items-center text-center">
                                        <img src={cert.image} alt={`${cert.name} logo`} className="w-24 h-16 object-contain mb-2 bg-slate-900/50 rounded-md p-1"/>
                                        <span className="text-gray-200 text-sm font-medium">{cert.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button onClick={closeStarterModal} className="w-full mt-8 py-3 rounded-lg font-semibold transition bg-yellow-500 hover:bg-yellow-600 text-slate-900">Get Started</button>
                    </div>
                </div>
            )}

            <style jsx global>{`@keyframes scale-in { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } } .animate-scale-in { animation: scale-in 0.2s ease-out forwards; }`}</style>
        </div>
    );
}



