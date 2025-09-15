"use client";

import React from 'react';
import { Phone, Mail, MapPin, Youtube, Instagram } from 'lucide-react';

// Footer Component
export default function Footer() {
    return (
        <footer className="bg-slate-1000/80 backdrop-blur-sm border-t border-red-500/50">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400">
                    {/* Column 1: About & Socials */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold text-red-500 mb-4">CYZIUM <span className="text-gray-100">ACADEMY</span></h3>
                        <p className="pr-4 mb-6">
                            Cyzium's career-focused, implementation-based learning programs pave the road to a success-assured career in Ethical Hacking & Cybersecurity.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://youtube.com/@cyzium-academy?si=syXtrXTppg-5Fjhl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                                <Youtube className="w-8 h-10 -mt-2" />
                            </a>
                            <a href="https://www.instagram.com/cyziumacademy?igsh=MWxjczJjZnFxa2dhcA==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-200 mb-4">Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-teal-400 transition-colors">Home</a></li>
                            <li><a href="/courses" className="hover:text-teal-400 transition-colors">Courses</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Labs</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-200 mb-4">Contact Info</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <Phone className="w-5 h-5 mr-3 mt-1 text-red-500"/>
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-start">
                                <Mail className="w-5 h-5 mr-3 mt-1 text-red-500"/>
                                <span>cyziumacademy@gmail.com</span>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 mt-1 text-red-500"/>
                                <span>Trivandrum, Kerala</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-800 mt-8 pt-6 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Cyzium Hacker Academy. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
