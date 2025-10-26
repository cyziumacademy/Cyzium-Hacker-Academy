"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // 🧭 added icons
import ContactCard from "./contact";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // 📱 mobile menu
  const pathname = usePathname();
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const [showContact, setShowContact] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseClasses =
    "transition transform hover:scale-110 active:scale-95 duration-200 px-2 hover:text-red-400";
  const activeClasses = "text-red-500 font-bold";

  return (
    <header
      style={{
        borderBottomLeftRadius: "3rem",
        borderBottomRightRadius: "3rem",
        overflow: "visible",
      }}
      className={`fixed top-0 left-0 w-full z-50 h-27 transition-shadow duration-500 ease-in-out`}
    >
      {/* Background blur layer */}
      <div
        className={`absolute inset-0 transition-all duration-400 ease-in-out rounded-b-[50px]
          ${
            scrolled
              ? "backdrop-blur-md  shadow-[inset_-3px_-1px_9px_rgba(255,255,255,0.5),_inset_10px_10px_20px_rgba(0,0,0,0.2),_0_4px_30px_rgba(0,0,0,0.1)]"
              : "bg-transparent"
          }
        `}
      />

      <div className="relative top-0 -mt-10 ml-12 max-w-6xl mx-auto px-4 sm:px-6 py-3 text-white flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.09 }}
          className="cursor-pointer"
        >
          <Link href="/" className={baseClasses}>
            <Image
              src="/logo.png"
              alt="Cyzium Logo"
              width={250}
              height={40}
              className="object-contain"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.nav
          className="hidden left-30 md:flex gap-23 text-lg font-semibold relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Link
            href="/"
            className={`${baseClasses} ${pathname === "/" ? activeClasses : ""}`}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className={`${baseClasses} ${
              pathname === "/courses" ? activeClasses : ""
            }`}
          >
            Courses
          </Link>
          <Link
            href="/hackathon"
            className={`${baseClasses} ${
              pathname === "/hackathon" ? activeClasses : ""
            }`}
          >
            Hackathon
          </Link>

          {/* Explore Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              setExploreOpen(true);
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
            onMouseLeave={() => {
              timeoutRef.current = setTimeout(() => setExploreOpen(false), 200);
            }}
          >
            <button
              className={`${baseClasses} flex items-center gap-2 cursor-pointer`}
            >
              Company<span className="text-[12px]">▼</span>
            </button>

            {exploreOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 mt-2 w-48 bg-black/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg z-50 flex flex-col items-center"
              >
                <Link
                  href="/about"
                  className={`px-4 py-2 hover:bg-white/20 rounded-[13px] text-center w-full transition ${
                    pathname === "/about" ? activeClasses : "text-white"
                  }`}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={`px-4 py-2 hover:bg-white/20 rounded-[13px] text-center w-full transition ${
                    pathname === "/contact" ? activeClasses : "text-white"
                  }`}
                >
                  Contact
                </Link>
                <Link
                  href="/blogs"
                  className={`px-4 py-2 hover:bg-white/20 rounded-[13px] text-center w-full transition ${
                    pathname === "/blogs" ? activeClasses : "text-white"
                  }`}
                >
                  Blogs
                </Link>
              </motion.div>
            )}
          </div>
        </motion.nav>

        {/* Join Now Button (Desktop Only) */}
        <motion.button
          className="hidden md:block relative rounded-[15px] left-[250px] bg-red-600 px-8 py-3 text-md font-bold text-white 
             hover:bg-blue-600 transition-colors duration-300 
             transform hover:scale-105 active:scale-95 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          onClick={() => setShowContact(true)}
        >
          Join now
        </motion.button>

      </div>

   {/* 📱 Mobile Menu Button */}
<div className="md:hidden flex items-center justify-start fixed right-4 top-4 z-[60]">
  <button
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="text-white focus:outline-none transition-all duration-300"
  >
    {mobileMenuOpen ? (
      <X size={40} className="transition-transform duration-300 rotate-90" />
    ) : (
      <Menu size={34} className="transition-transform duration-300 rotate-0" />
    )}
  </button>
</div>

{/* 📱 Mobile Menu Content */}
<AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-md text-white flex flex-col items-center gap-4 py-10 rounded-b-[40px] border-t border-white/10 z-50"
    >
      <Link
        href="/"
        onClick={() => setMobileMenuOpen(false)}
        className={`${baseClasses} ${pathname === "/" ? activeClasses : ""}`}
      >
        Home
      </Link>
      <Link
        href="/courses"
        onClick={() => setMobileMenuOpen(false)}
        className={`${baseClasses} ${pathname === "/courses" ? activeClasses : ""}`}
      >
        Courses
      </Link>
      <Link
        href="/events"
        onClick={() => setMobileMenuOpen(false)}
        className={`${baseClasses} ${pathname === "/events" ? activeClasses : ""}`}
      >
        Events
      </Link>
      <Link
        href="/about"
        onClick={() => setMobileMenuOpen(false)}
        className={`${baseClasses} ${pathname === "/about" ? activeClasses : ""}`}
      >
        About
      </Link>
      <Link
        href="/blogs"
        onClick={() => setMobileMenuOpen(false)}
        className={`${baseClasses} ${pathname === "/blogs" ? activeClasses : ""}`}
      >
        Blogs
      </Link>

      <motion.button
        className="bg-red-600 px-6 py-2 rounded-[12px] font-semibold text-white hover:bg-blue-600 transition-all"
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setMobileMenuOpen(false);
          setShowContact(true);
        }}
      >
        Join now
      </motion.button>
    </motion.div>
  )}
</AnimatePresence>

      {/* Contact Modal */}
      <ContactCard isOpen={showContact} onClose={() => setShowContact(false)} />
    </header>
  );
}

