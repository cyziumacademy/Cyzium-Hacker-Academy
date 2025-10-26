"use client";
import React from "react";
import { motion } from "framer-motion";
import { User, Send, Phone, Book } from "lucide-react";

type FormInputProps = {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  name: string;
  fullWidth?: boolean;
};

function FormInput({
  icon,
  type,
  placeholder,
  name,
  fullWidth = false,
}: FormInputProps) {
  return (
    <motion.div
      className={`relative ${fullWidth ? "md:col-span-2" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
        {icon}
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full h-12 bg-black/20 md:bg-black/30 border border-white/20 rounded-lg 
                   pl-10 pr-3 text-white placeholder-gray-400 text-base
                   focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
        required
      />
    </motion.div>
  );
}

function ContactCard() {
  const courses = [
    "CCSA (Certified Cloud Security Analyst)",
    "CNA (Certified Network Associate)",
    "CASS (Certified Ai Security Specialist)",
    "JBBH (Certified Junior Bug Bounty Hunter )",
    "CBBH (Certified Bug Bounty Hunter )",
    "CBBE (Certified Bug Bounty Expert )",
    "CPBH (Certified Professional Bug Hunter)"
  ];

  return (
    <section
      id="contact"
      className="relative w-full text-white font-sans"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/subtle-prism.png')",
      }}
    >
      <main className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen p-4 md:p-8 gap-10 md:gap-12">
        {/* Form Card */}
        <motion.div
          className="relative w-full max-w-4xl bg-black/30 backdrop-blur-xl 
                     border border-white/20 shadow-2xl rounded-[40px] md:rounded-[75px] p-6 md:p-8 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Start Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-red-500">
                Journey
              </span>
            </h1>
            <p className="mt-2 max-w-xl mx-auto text-sm sm:text-base text-gray-300">
              Have questions or ready to enroll? Fill out the form below, and
              our admissions team will get back to you shortly.
            </p>
          </motion.div>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput icon={<User />} type="text" placeholder="Full Name" name="name" />
            <FormInput icon={<Phone />} type="text" placeholder="Phone Number" name="email_phone" />
            <FormInput
              icon={<Book />}
              type="text"
              placeholder="Qualification"
              name="qualification"
              fullWidth
            />

            {/* Dropdown */}
            <motion.div
              className="relative md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <select
                name="course"
                defaultValue=""
                className="w-full h-12 bg-black/90 border border-white/20 rounded-lg 
                           px-3 text-white text-base sm:text-sm
                           focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all appearance-none"
              >
                <option value="" disabled>
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
              transition={{ duration: 0.3 }}
            >
              <textarea
                name="message"
                placeholder="Your message or question..."
                rows={3}
                className="w-full min-h-[100px] sm:min-h-[120px] bg-black/20 border border-white/20 
                           rounded-lg px-3 py-2 text-white placeholder-gray-400 text-base sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="md:col-span-2 w-full flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-3 rounded-[15px] hover:bg-red-700 transition-all duration-300 text-base active:scale-95 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Send size={18} />
              Contact Admissions
            </motion.button>
          </form>

          <motion.p
            className="text-center text-xs text-gray-400 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Note: Our team will review your submission and contact you within 24 hours.
          </motion.p>
        </motion.div>

        {/* Right side paragraph */}
        <motion.div
          className="max-w-md text-gray-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-6xl mt-6 md:mt-12 font-extrabold mb-3 text-gray-100 leading-snug max-w-xl">
            Ready to Hack Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-red-500">
              Future
            </span>
            ?
          </h2>

          <p className="text-base sm:text-lg md:text-xl mt-4 leading-relaxed">
            🔐 Learn practical hacking skills with real-world labs and live projects.  
            Get guidance from experts who’ve been in the trenches of cybersecurity.  
            Don’t just study — build, break, defend, and level up your career.
          </p>
          <p className="text-base sm:text-lg md:text-xl mt-6 font-semibold text-white">
            Fill the form and let us help you get started today!
          </p>
        </motion.div>
      </main>
    </section>
  );
}

export default ContactCard;
