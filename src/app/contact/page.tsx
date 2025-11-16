"use client";
import React from "react";
import { motion } from "framer-motion";
import { User, Send, Phone, Book } from "lucide-react";
import Navbar from "../navbar";
import Footer from "../footer";
import Float from "@/app/float";

type FormInputProps = {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  name: string;
  delay: number;
  fullWidth?: boolean;
};

function FormInput({
  icon,
  type,
  placeholder,
  name,
  delay,
  fullWidth = false,
}: FormInputProps) {
  return (
    <motion.div
      className={`relative ${fullWidth ? "md:col-span-2" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
        {icon}
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full h-12 bg-black/30 border border-white/20 rounded-lg 
                   pl-10 pr-3 text-white placeholder-gray-500 text-base
                   focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
        required
      />
    </motion.div>
  );
}

export default function Contact() {
  const courses = [
    "JBBH (Certified Junior Bug Bounty Hunter)",
    "CBBT (Certified Bug Bounty Hunter)",
    "CBBE (Certified Bug Bounty Expert)",
    "CPBH (Certified Professional Bug Hunter)",
    "CNA (Certified Network Associate)",
    "CCSA (Certified Cloud Security Analyst)",
    "CASS (Certified Ai Security Specialist)",
  ];

  // -----------------------------
  //  FORM SUBMIT HANDLER ADDED
  // -----------------------------
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = new FormData(e.currentTarget);

  const data = {
    name: form.get("name"),
    email_phone: form.get("email_phone"),
    qualification: form.get("qualification"),
    course: form.get("course"),
    message: form.get("message"),
  };

  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    alert("Message sent! Our team will contact you soon.");
    e.currentTarget.reset();
  } else {
    alert("Failed to send. Please try again.");
  }
};


  return (
    <section
      id="contact"
      className="relative min-h-screen w-full text-white font-sans overflow-hidden"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter blur-xs"
          poster="/bg1-poster.jpg"
        >
          <source src="/bg1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-screen p-8 pt-28 md:pt-36">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Form Section */}
          <motion.div
            className="relative w-full max-w-4xl bg-black/40 backdrop-blur-2xl 
                       border border-white/20 shadow-2xl rounded-[75px] p-8 
                       overflow-hidden z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Start Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-red-500">
                  Journey
                </span>
              </h1>
              <p className="mt-2 max-w-2xl mx-auto text-base text-gray-300">
                Have questions or ready to enroll? Fill out the form below and
                our admissions team will get back to you shortly.
              </p>
            </motion.div>

            {/* Form */}
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              onSubmit={handleSubmit}
            >
              <FormInput
                icon={<User />}
                type="text"
                placeholder="Full Name"
                name="name"
                delay={0.3}
              />
              <FormInput
                icon={<Phone />}
                type="text"
                placeholder="Phone Number"
                name="email_phone"
                delay={0.4}
              />
              <FormInput
                icon={<Book />}
                type="text"
                placeholder="Qualification"
                name="qualification"
                delay={0.5}
                fullWidth
              />

              <motion.div
                className="relative md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <select
                  name="course"
                  defaultValue=""
                  className="w-full h-12 bg-black/30 border border-white/20 rounded-lg 
                             px-3 text-white text-base
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <textarea
                  name="message"
                  placeholder="Your message or question..."
                  rows={3}
                  className="w-full min-h-[120px] bg-black/30 border border-white/20 
                             rounded-lg px-3 py-2 text-white placeholder-gray-500 text-base
                             focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="md:col-span-2 w-full flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-3 rounded-[15px] hover:scale-105 transition-all duration-300 text-base active:scale-95 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Send size={18} />
                Contact Admissions
              </motion.button>
            </form>

            <motion.p
              className="text-center text-xs text-gray-400 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              Note: Our team will review your submission and contact you within
              24 hours.
            </motion.p>
          </motion.div>

          {/* Right Text Section */}
          <motion.div
            className="max-w-md text-gray-300 z-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-4xl mt-10 md:text-7xl font-extrabold mb-3 text-gray-100 leading-snug max-w-1xl">
              Build your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-red-500">
                Future
              </span>{" "}
              Now
            </h2>

            <p className="text-lg md:text-xl leading-relaxed">
              Learn hands-on hacking with real labs and live projects —
              practical skills you can use on day one. Get mentorship from
              experienced security pros, practice on realistic targets, and
              move from learning to doing.
            </p>
            <p className="text-lg mt-8 font-semibold text-white">
              Fill the form and let us help you get started today!
            </p>
          </motion.div>
        </div>
      </main>

      <Float />

      {/* Footer */}
      <div className="relative z-30 mt-12">
        <Footer />
      </div>
    </section>
  );
}
