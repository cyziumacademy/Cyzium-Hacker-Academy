"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);


useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50); // adjust threshold
  };

  handleScroll(); // initialize on mount
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // Common link styles
  const linkClasses =
    "transition transform hover:scale-110 active:scale-95 duration-200";

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 
    transition-[background,backdrop-filter,box-shadow] duration-500 ease-in-out
    ${scrolled
      ? "backdrop-blur-lg bg-slate-800/60 h-30 shadow-md"
      : "bg-transparent shadow-none"
    }`}
>
      <div className="relative -top-5 right-40 max-w-6xl mx-auto px-6 py-4 text-white flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={linkClasses}>
          <Image
            src="/logo.png"
            alt="Cyzium Logo"
            width={250}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden left-30 md:flex gap-23 text-lg font-semibold relative">
          <Link className={linkClasses} href="/">
            Home
          </Link>
          <Link className={linkClasses} href="/courses">
            Courses
          </Link>
          <a className={linkClasses} href="#labs">
            Events
          </a>

          {/* Explore Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setExploreOpen(true)}
            onMouseLeave={() => setExploreOpen(false)}
          >
            <button className={`${linkClasses} flex items-center gap-2 cursor-pointer`}>
              Company<span className="text-[12px]">▼</span>
            </button>

            {exploreOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg z-50 flex flex-col">
                <Link
                  href="/about"
                  className="px-4 py-2 text-white hover:bg-white/20 transition"
                >
                  About
                </Link>
                <Link
                  href="/Contact"
                  className="px-4 py-2 text-white hover:bg-white/20 transition"
                >
                  Contact Us
                </Link>
                <Link
                  href="/blogs"
                  className="px-4 py-2 text-white hover:bg-white/20 transition"
                >
                  Blogs
                </Link>
                <Link
                  href="/news"
                  className="px-4 py-2 text-white hover:bg-white/20 transition"
                >
                  News
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Button (right side) */}
        <button className="relative rounded-[15px] left-[250px] bg-red-600 px-8 py-3 text-md font-bold hover:brightness-90 transition transform hover:scale-105 active:scale-95 cursor-pointer">
          Join now
        </button>
      </div>
    </header>
  );
}
