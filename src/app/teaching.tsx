"use client";
import { motion } from "framer-motion";
import { Laptop, Users, Briefcase, MessageSquare, FileText, Shield } from "lucide-react";

const TeachingSection = () => {
  const features = [
    {
      icon: <Laptop className="w-10 h-10 text-red-500" />,
      title: "Hands-on Labs",
      desc: "Learn by doing with real-world cybersecurity labs and projects. Every concept is reinforced with practical tasks that mirror real industry challenges.",
    },
    {
      icon: <Users className="w-10 h-10 text-red-500" />,
      title: "Mentor Guidance",
      desc: "Get trained by professionals with years of industry experience. Our mentors provide personalized feedback to help you master even the toughest topics.",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-red-500" />,
      title: "Career Prep",
      desc: "Mock interviews, resume building, and career-focused mentorship. We shape you into a confident candidate who stands out in competitive job markets.",
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-red-500" />,
      title: "Community Support",
      desc: "24/7 access to peers and mentors via Discord for doubt clearance. Collaborate, share resources, and grow together in a thriving learning community.",
    },
    {
      icon: <FileText className="w-10 h-10 text-red-500" />,
      title: "Lab Materials",
      desc: "Get exclusive access to curated lab manuals, notes, and resources. These structured materials ensure you never miss a step in your learning journey.",
    },
    {
      icon: <Shield className="w-10 h-10 text-red-500" />,
      title: "Industry-Level Projects",
      desc: "Work on real-time industry projects that prepare you for the job market. Gain hands-on exposure to tools and scenarios used by cybersecurity experts.",
    },
  ];
  
  return (
    <section className="py-20 bg-transparent text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Way of Teaching
        </motion.h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          At Cyzium Academy, we don’t just teach theory — we prepare you to face
          real-world cybersecurity challenges with confidence.
        </p>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
  {features.map((f, i) => (
    <motion.div
      key={i}
      className="p-10 h-[350px] w-full backdrop-blur-md rounded-[70px] shadow-[inset_-3px_-1px_9px_rgba(255,255,255,0.5),_inset_10px_10px_20px_rgba(0,0,0,0.2),_0_8px_40px_rgba(0,0,0,0.2)] 
                 hover:shadow-red-600/50 hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ rotate: 1 }}
      transition={{ duration: 0.6, delay: i * 0.15, type: "spring" }}
    >
      <div className="mb-6 flex justify-center text-5xl">{f.icon}</div>
      <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
      <p className="text-gray-300 leading-relaxed">{f.desc}</p>
    </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
