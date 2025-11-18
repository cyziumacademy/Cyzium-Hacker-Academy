"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, Send, X, Book } from "lucide-react";

interface ContactCardProps {
  onClose: () => void;
  isOpen: boolean;
}

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
      className={`relative ${fullWidth ? "col-span-2" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
        {icon}
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full h-12 bg-gray-800/70 border border-white/20 rounded-lg 
                   pl-10 pr-3 text-white placeholder-gray-400 text-sm
                   focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
        required
      />
    </motion.div>
  );
}

export default function ContactCard({ onClose, isOpen }: ContactCardProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              relative bg-gradient-to-b from-gray-900/80 to-black/50 backdrop-blur-lg
              p-5 sm:p-8 rounded-[25px] sm:rounded-[50px] shadow-xl
              w-[90%] sm:w-full max-w-sm sm:max-w-2xl
              min-h-[450px] sm:min-h-[600px]
              max-h-[90vh] overflow-y-auto md:overflow-y-hidden
              text-white flex flex-col gap-6
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              Start Your <span className="text-cyan-400">Journey</span>
            </h2>

            <p className="text-gray-300 text-center text-sm sm:text-base mb-4 sm:mb-6">
              Have questions or ready to enroll? Fill out the form below, and our admissions team will get back to you shortly.
            </p>

            {/* Updated Form */}
            <form
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full flex-grow"
              onSubmit={async (e) => {
                e.preventDefault();

                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());

                const res = await fetch("/api/contact", {
                  method: "POST",
                  body: JSON.stringify(data),
                });

                const result = await res.json();

                if (result.success) {
                  alert("Your enquiry has been sent successfully!");
                  e.currentTarget.reset();
                  onClose();
                } else {
                  alert(result.error || "Failed to send message. Please try again.");
                }
              }}
            >

              <FormInput
                icon={<User size={18} />}
                type="text"
                placeholder="Full Name"
                name="name"
                delay={0.2}
              />

              <FormInput
                icon={<Phone size={18} />}
                type="tel"
                placeholder="Phone Number"
                name="email_phone"
                delay={0.3}
              />

              <FormInput
                icon={<Book size={18} />}
                type="text"
                placeholder="Qualification"
                name="qualification"
                delay={0.4}
                fullWidth
              />

              {/* Course Select */}
              <motion.div
                className="relative col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <select
                  name="course"
                  className="w-full h-12 bg-gray-800/70 border border-white/20 rounded-lg 
                             px-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 appearance-none"
                >
                  <option value="">Select a Course of Interest</option>
                  <option>JBBH (Certified Junior Bug Bounty Hunter)</option>
                  <option>CBBT (Certified Bug Bounty Hunter)</option>
                  <option>CBBE (Certified Bug Bounty Expert)</option>
                  <option>CPBH (Certified Professional Bug Hunter)</option>
                  <option>CNA (Certified Network Associate)</option>
                  <option>CCSA (Certified Cloud Security Analyst)</option>
                  <option>CASS (Certified Ai Security Specialist)</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.textarea
                rows={4}
                name="message"
                placeholder="Your message or question..."
                className="col-span-2 w-full rounded-lg px-4 py-3 text-sm bg-gray-800/70 
                           focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              />

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="col-span-2 w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold 
                           text-white flex items-center justify-center gap-2 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <Send size={18} /> Enquire Now
              </motion.button>
            </form>

            <p className="text-gray-400 text-xs text-center -mt-2">
              Note: Our team will review your submission and contact you within 24 hours.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
