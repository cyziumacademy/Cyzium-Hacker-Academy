"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, ArrowUp } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Float() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Detect scroll position to show arrow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScrollTop(true);
      else setShowScrollTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top smooth behavior
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3">
      {/* Social icons when open */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.a
              href="https://www.linkedin.com/company/cyzium-hacker-academy/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.8 }}
              whileHover={{ scale: 1.15 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 0.25,
              }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 shadow-lg backdrop-blur-sm cursor-pointer"
            >
              <FaLinkedinIn size={22} color="white" />
            </motion.a>

            <motion.a
              href="mailto:cyziumacademy@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.8 }}
              whileHover={{ scale: 1.15 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 0.2,
              }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 shadow-lg backdrop-blur-sm cursor-pointer"
            >
              <MdEmail size={22} color="white" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/cyziumacademy"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.8 }}
              whileHover={{ scale: 1.15 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 0.15,
              }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 shadow-lg backdrop-blur-sm cursor-pointer"
            >
              <FaInstagram size={22} color="white" />
            </motion.a>

            <motion.a
              href="tel:+919567190676"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.8 }}
              whileHover={{ scale: 1.15 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 0.1,
              }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg backdrop-blur-sm cursor-pointer"
            >
              <Phone size={22} color="white" />
            </motion.a>

            <motion.a
              href="https://wa.me/919567190676"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.8 }}
              whileHover={{ scale: 1.15 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 0.05,
              }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 shadow-lg backdrop-blur-sm cursor-pointer"
            >
              <FaWhatsapp size={22} color="white" />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Scroll-to-top arrow (hidden if chat open) */}
      <AnimatePresence>
        {!isOpen && showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.8 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 hover:opacity-90 shadow-lg backdrop-blur-sm cursor-pointer mb-2"
          >
            <ArrowUp size={24} color="white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Floating Button with Label */}
      <div className="relative flex items-center">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute right-full mr-4 px-3 py-1 rounded-lg bg-white text-black text-sm font-medium shadow-lg whitespace-nowrap flex items-center"
            >
              <span>Book a Free Session</span>
              <span
                className="ml-1 w-2 h-2 bg-white rotate-45 absolute right-[-4px] top-1/2 -translate-y-1/2 shadow-sm"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          initial={false}
          animate={{
            rotate: isOpen ? 360 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          whileTap={{ scale: 0.9 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(41, 154, 220, 0.7)",
          }}
          style={{
            background: "linear-gradient(155deg, #0c22c4, #299adc, #740606)",
          }}
          className="relative w-16 h-16 flex items-center justify-center rounded-full shadow-2xl border border-transparent transition-all duration-300 cursor-pointer"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isOpen ? "x" : "chat"}
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="absolute flex items-center justify-center"
            >
              {isOpen ? (
                <X size={26} color="white" />
              ) : (
                <BsChatDotsFill size={28} color="white" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
