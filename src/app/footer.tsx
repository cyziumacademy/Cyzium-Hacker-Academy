"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Youtube, Instagram, Send, Linkedin } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from "next/image";


export default function Footer() {
  return (
    <motion.footer
  className="bg-transparent backdrop-blur-sm border-t border-red-500/50"
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
<div className="container mx-auto px-6 py-12">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-400">

{/* Column 1: About & Socials */}
<motion.div
  className="md:col-span-1"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  <Image
    src="/logo.png"            // path inside your public folder
    alt="Cyzium Academy Logo"
    width={320}                // required
    height={100}               // required
    className="w-80 mb-4 -mt-15"
    priority                   // optional (improves LCP)
  />

 
            <p className="pr-4 mb-6">
              Cyzium&apos;s career-focused, implementation-based learning programs pave the road to a success-assured career in Ethical Hacking & Cybersecurity.
            </p>
            <div className="flex space-x-4">
              <a href="https://youtube.com/@cyzium-academy?si=syXtrXTppg-5Fjhl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="w-8 h-10 -mt-2" />
              </a>
              <a href="https://www.instagram.com/cyziumacademy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/cyziumacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="https://discord.gg/Z5MfgNuD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-500 transition-colors"
              >
                <FaDiscord className="w-6 h-6" />
              </a>

              <a
                href="https://t.me/+FieV7BaIhUhkYTBl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-500 transition-colors"
              >
                <Send className="w-6 h-6" /> {/* Send icon works well for Telegram */}
              </a>
            </div>
          </motion.div>

          {/* Column 2: Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-gray-200 mb-4 ml-25">Links</h4>
            <ul className="space-y-2 ml-25">
              <li><Link href="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link href="/courses" className="hover:text-teal-400 transition-colors">Courses</Link></li>
              <li><Link href="/about" className="hover:text-teal-400 transition-colors">About</Link></li>
              <li><Link href="/events" className="hover:text-teal-400 transition-colors">Events</Link></li>
              <li><Link href="/contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Column 3: Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Location</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-red-500" />
                <span>Cyzium Hacker Academy<br />Trivandrum, Kerala, India</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-1 text-red-500" />
                <span>+91 9567190676</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-1 text-red-500" />
                <span>cyziumacademy@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-red-500" />
                <span>Trivandrum, Kerala</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-slate-800 mt-8 pt-6 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>&copy; {new Date().getFullYear()} Cyzium Hacker Academy. All Rights Reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
