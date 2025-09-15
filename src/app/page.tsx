"use client";
import Head from "next/head";
import React from "react";
import Navbar from "@/app/navbar";
import { motion } from "framer-motion";
import { Calendar, Laptop, FlaskConical, Headset } from "lucide-react";
import UpcomingBatchCard from "@/app/upcomingbatch"; 
import WhyChooseUsPage from "@/app/why";
import Testimonials from "@/app/testimonial";
import ContactCard from "@/app/contactcard";



// ✅ Hero (regular component, NOT default export)
function Hero() {
  return (
    <section className="relative text-white">
      <div className="relative max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          {/* 🔥 Animated Heading */}
         <motion.h2
  className="text-[52px] md:text-[85px] font-extrabold leading-tight -mt-7 -ml-40"
  initial={{ opacity: 0, scale: 0.6 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  Build Advanced Hacking skills
</motion.h2>

<motion.p
  className="mt-6 text-2xl font-semibold ml-[-155px] max-w-xl"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  viewport={{ once: true }}
>
  hands-on labs, and career guidance tailored
  for aspiring students & security professionals.
</motion.p>

{/* Buttons */}
<div className="mt-8 flex flex-col sm:flex-row gap-5">
<motion.a
  href="/courses"
  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,255,255,0.4)" }}
  whileTap={{ scale: 0.95 }}
  className="relative -left-36 inline-flex items-center justify-center rounded-[15px] border px-6 py-4 font-semibold transition-all duration-200"
>
  Explore Courses
</motion.a>

<motion.a
  href="#contact"
  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,255,255,0.4)" }}
  whileTap={{ scale: 0.95 }}
  className="relative -left-35 inline-flex items-center justify-center rounded-[15px] border px-6 py-3 transition-all duration-200"
>
  Contact Admissions
</motion.a>

</div>
        </div>
        <UpcomingBatchCard />
      </div>
    </section>
  );
}

// ✅ CoursesSection
function CoursesSection() {
  return (
    <motion.section
      id="courses"
      className="max-w-7xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h3 className="text-4xl font-bold">
        Choose your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-red-500">
          Career
        </span>
      </h3>
      <p className="mt-2">Start with one track and progress to advanced topics.</p>

      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {sampleCourses.map((c, i) => (
          <CourseCard key={c.id} course={c} index={i} />
        ))}

        {/* ✅ View More Courses card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex flex-col items-center justify-center rounded-3xl backdrop-blur-lg bg-white/10 text-white shadow-lg p-6 text-center cursor-pointer hover:bg-white/20 transition-all duration-300"
        >
          <span className="text-2xl font-bold">+ View More Courses</span>
        </motion.div>
      </div>
    </motion.section>
  );
}

type Course = {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  seatsLeft?: number;
  shortDescription: string;
  image: string;
};

const sampleCourses: Course[] = [
  {
    id: "c1",
    title: "Intro to Ethical Hacking",
    level: "Beginner",
    duration: "6 weeks",
    seatsLeft: 12,
    shortDescription:
      "Fundamentals of pentesting, recon, and common vulnerabilities.",
    image: "/course.jpg",
  },
  {
    id: "c2",
    title: "Web App Security (XSS & SQLi)",
    level: "Intermediate",
    duration: "4 weeks",
    seatsLeft: 6,
    shortDescription:
      "Hands-on labs on XSS, SQLi and real-world exploitation patterns.",
    image: "/course2.jpg",
  },
  {
    id: "c3",
    title: "SOC Analyst Essentials",
    level: "Beginner",
    duration: "5 weeks",
    seatsLeft: 20,
    shortDescription:
      "Logs, alerts, SIEM basics and incident triage using free tools.",
    image: "/images/soc.jpg",
  },
];

// ✅ CourseCard
function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="flex flex-col overflow-hidden rounded-3xl backdrop-blur-lg bg-white/10 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Top image section (no text inside) */}
      <div
        className="h-32 w-full"
        style={{
          backgroundImage: `url(${course.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Bottom info section */}
      <div className="flex flex-col flex-1 justify-between p-6">
        <div>
          <h4 className="text-lg font-semibold text-white">{course.title}</h4>
          <p className="mt-2 text-sm text-gray-300">{course.shortDescription}</p>
        </div>

        <div className="mt-4 flex items-center justify-between text-gray-300 text-sm">
          <span>
            {course.level} • {course.duration}
          </span>
          <span className="font-semibold text-white">
            {course.seatsLeft ? `Seats: ${course.seatsLeft}` : "—"}
          </span>
        </div>

        {/* ✅ Animated Button */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="mt-6 w-full rounded-md bg-red-600 py-2 font-semibold hover:bg-red-700 active:bg-red-800 transition-colors duration-300"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}


// ✅ Main LandingPage (ONLY default export)
export default function LandingPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Head>
        <title>Cyzium Hacker Academy — Learn. Hack. Secure.</title>
        <meta
          name="description"
          content="Practical academy for ethical hacking, SOC and cyber security courses."
        />
      </Head>

<video
  autoPlay
  loop
  muted
  playsInline
  className="fixed top-0 left-0 w-full h-full object-cover -z-10 brightness-70"
>
  <source src="/bg2.mp4" type="video/mp4" />
</video>

{/* Overlay */}
<div className="fixed inset-0 bg-black/40 backdrop-blur-[4px] -z-5"></div>


      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="pt-20">
        <Hero />
        <WhyChooseUsPage />
         <ContactCard />
        <CoursesSection />
        <Testimonials />    {/* ✅ Added */}
      </main>
    </div>
  );
}