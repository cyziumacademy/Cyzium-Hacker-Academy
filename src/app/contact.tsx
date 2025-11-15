"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, Send, Mail, X } from "lucide-react";

interface ContactCardProps {
  onClose: () => void;
  isOpen: boolean;
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
            {/* Close (X) Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              Start Your <span className="text-cyan-400">Journey</span>
            </h2>

            <p className="text-gray-300 text-center text-sm sm:text-base mb-4 sm:mb-6">
              Have questions or ready to enroll? Fill out the form below, and our admissions team will get back to you shortly.
            </p>

            {/* Form */}
            <form className="space-y-4 w-full flex flex-col gap-4 flex-grow">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="relative w-full">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-lg px-10 py-3 text-sm bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div className="relative w-full">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-lg px-10 py-3 text-sm bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative w-full">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Email (Optional)"
                  className="w-full rounded-lg px-10 py-3 text-sm bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              {/* Course Select */}
              <select className="w-full rounded-lg px-4 py-3 text-sm bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option>Select a Course of Interest</option>
                <option>JBBH (Certified Junior Bug Bounty Hunter)</option>
                <option>CBBH (Certified Bug Bounty Hunter)</option>
                <option>CBBE (Certified Bug Bounty Expert)</option>
                <option>CPBH (Certified Professional Bug Hunter)</option>
                <option>CNA (Certified Network Associate)</option>
                <option>CCSA (Certified Cloud Security Analyst)</option>
                <option>CASS (Certified Ai Security Specialist)</option>
              </select>

              {/* Message */}
              <textarea
                rows={4}
                placeholder="Your message or question..."
                className="w-full rounded-lg px-4 py-3 text-sm bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={18} /> Enquire Now
              </button>
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
