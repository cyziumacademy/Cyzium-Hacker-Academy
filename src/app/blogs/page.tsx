"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/navbar";
import Footer from "../footer";
import Float from "@/app/float";

const blogs = [
  {
    title:
      "Implementing Website Log Monitoring Using Splunk on WordPress (Ubuntu 23.10)",
    description:
      "Learn how to set up Splunk on Ubuntu 23.10 to monitor WordPress logs effectively — a step-by-step guide for security and analytics enthusiasts.",
    image: "/splunk.jpg",
    link: "https://medium.com/@cyziumacademy/implementing-website-log-monitoring-using-splunk-on-wordpress-created-in-ubuntu-23-10-6165308b00c6",
    date: "Oct 5, 2025",
  },
  {
    title: "AI Prompting for Spyware",
    description:
      "Exploring how prompt engineering can uncover and analyze spyware behaviors — combining AI insights with cybersecurity analysis.",
    image: "/spyware.png",
    link: "https://medium.com/@cyziumacademy/ai-prompting-for-spyware-c6ab12fdfa7d",
    date: "Oct 7, 2025",
  },
];

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/bg3.jpg"
          alt="Background"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-gray-950 backdrop-blur-[2px]" />
      </div>

      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto pt-28 pb-20 px-4 mt-15">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold text-center mb-12"
        >
          Read it more!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-300 max-w-3xl mx-auto mb-14"
        >
          Stay updated with our latest cybersecurity insights, research,
          tutorials, and in-depth guides from the Cyzium Academy team.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1], // smoother cubic-bezier
              }}
              className="bg-gray-900/70 border border-gray-800 rounded-[60px] overflow-hidden shadow-lg hover:shadow-2xl transition-all backdrop-blur-md will-change-transform"
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 will-change-transform"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
                <h2 className="text-2xl font-semibold mb-3 leading-snug">
                  {blog.title}
                </h2>
                <p className="text-gray-300 mb-6">{blog.description}</p>
                <Link
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white px-5 py-2 rounded-lg transition-all font-medium shadow-md"
                >
                  Read on Medium →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
