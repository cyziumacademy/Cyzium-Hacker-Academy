"use client";
import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Send } from "lucide-react";

type FormInputProps = {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  name: string;
  delay: number;
};

function FormInput({ icon, type, placeholder, name, delay }: FormInputProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
        {icon}
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full bg-black/20 border border-white/20 rounded-lg py-2 pl-10 pr-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
        required
      />
    </motion.div>
  );
}

function ContactCard() {
  const courses = [
    "Intro to Ethical Hacking",
    "Web App Security (XSS & SQLi)",
    "SOC Analyst Essentials",
    "Advanced Penetration Testing",
  ];

  return (
    <div
      className="relative min-h-screen w-full text-white font-sans"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/subtle-prism.png')",
      }}
    >
      <main className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* Landscape Contact Card */}
          <motion.div
            className="relative w-full max-w-4xl bg-black/30 backdrop-blur-xl 
                       border border-white/20 shadow-2xl rounded-[20px] p-8 
                       overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Start Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-red-500">
                  Journey
                </span>
              </h1>
              <p className="mt-2 max-w-2xl mx-auto text-base text-gray-300">
                Have questions or ready to enroll? Fill out the form below, and
                our admissions team will get back to you shortly.
              </p>
            </div>

            {/* ✅ Properly aligned grid form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                icon={<User />}
                type="text"
                placeholder="Full Name"
                name="name"
                delay={0.3}
              />
              <FormInput
                icon={<Mail />}
                type="email"
                placeholder="Email Address (Optional)"
                name="email"
                delay={0.4}
              />
              <FormInput
                icon={<Phone />}
                type="tel"
                placeholder="Phone Number"
                name="phone"
                delay={0.5}
              />

              <motion.div
                className="relative md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <select
                  name="course"
                  className="w-full bg-black/20 border border-white/20 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all appearance-none"
                >
                  <option disabled selected>
                    Select a Course of Interest
                  </option>
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </motion.div>

              <motion.div
                className="relative md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <textarea
                  name="message"
                  placeholder="Your message or question..."
                  rows={3}
                  className="w-full bg-black/20 border border-white/20 rounded-lg py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="md:col-span-2 w-full flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-all duration-300 text-base active:scale-95"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <Send size={18} />
                Contact Admissions
              </motion.button>
            </form>

            <motion.p
              className="text-center text-xs text-gray-400 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              Note: Our team will review your submission and contact you
              within 24 hours.
            </motion.p>
          </motion.div>

          {/* Right side paragraph */}
          <div className="max-w-md text-gray-300">
            <h2 className="text-2xl font-bold mb-3 text-cyan-400">
              Why Choose Us?
            </h2>
            <p className="text-base leading-relaxed">
              We don’t just teach theory — we provide hands-on labs, real-world
              projects, and mentorship to help you build a strong foundation in
              cybersecurity. Join our community of learners who are passionate
              about breaking into the industry and making an impact.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactCard;
