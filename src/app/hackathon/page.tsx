import React from "react";
import Navbar from "@/app/navbar";
import Footer from "../footer";
import Float from "@/app/float";

const events = [
  {
    title: "Step into the World of Ethical Hacking",
    date: "05 - 04 - 2023 | 7:00 PM",
    type: "Online Workshop",
  },
  {
    title: "Introduction to RedTeaming Redteam ≠ Pentest",
    date: "22 - 02 - 2023 | 7:00 PM",
    type: "Online Workshop",
  },
  {
    title: "Unveiling OSINT & Hacking Phases",
    date: "11 - 03 - 2023 | 7:00 PM",
    type: "Online Workshop",
  },
  {
    title: "Unlocking The World Of Ethical Hacking",
    date: "27 - 05 - 2023 | 10:00 AM",
    type: "Offline Workshop",
  },
  {
    title: "WEB APPLICATION SECURITY & BUG BOUNTY",
    date: "24 - 06 - 2023 | 10:00 AM",
    type: "Offline Workshop",
  },
  {
    title: "Deep Dive: Penetration Testing Techniques",
    date: "19 - 07 - 2024 | Online Webinar",
    type: "Online",
  },
];

export default function EventPage() {
  return (
    <>
      {/* Navbar on top of everything */}
      <Navbar />

      <div className="relative min-h-screen text-white bg-blue-900/60 bg-[url('/b4.jpg')] bg-cover bg-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        {/* Content */}
        <div className="relative z-10 px-6 py-24 flex flex-col items-center justify-center min-h-[80vh]">
          {/* Blurred background event cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto opacity-40 blur-[5px] pointer-events-none">
            {events.map((ev, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden shadow-lg bg-black/50 border border-white/10"
              >
                <div className="h-40 flex items-center justify-center bg-red-900/50">
                  <span className="text-gray-400 italic">Image</span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{ev.title}</h3>
                  <p className="text-sm mb-1">{ev.date}</p>
                  <p className="text-sm">{ev.type}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Coming Soon */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-extrabold text-white drop-shadow-3xl text-center">
              Coming Soon...
            </h1>
          </div>
        </div>
      </div>
<Float />
      {/* Footer below */}
      <Footer />
    </>
  );
}
