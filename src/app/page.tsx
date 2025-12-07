"use client";
import Head from "next/head";
import React from "react";
import Navbar from "@/app/navbar";
import { motion } from "framer-motion";
import UpcomingBatchCard from "@/app/upcomingbatch"; 
import WhyChooseUsPage from "@/app/why";
import Testimonials from "@/app/testimonial";
import ContactCard from "@/app/contactcard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import EndSection from "@/app/end";
import TeachingSection from "@/app/teaching";
import Footer from "../app/footer"; 
import Float from "@/app/float";
import AgeSection from "@/app/age";


function Hero() {
  return (
    <section className="relative text-white">
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            className="text-[36px] sm:text-[48px] md:text-[94px] font-extrabold leading-tight 
                       -mt-4 md:-mt-8 md:-ml-25"
            initial={{ opacity: 0.5, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div>Build</div>
            <div>Ai-Powered</div>
            <div>Hacking Skills</div>
          </motion.h2>

          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-[21px] font-semibold 
                       md:ml-[-100px] max-w-1xl mx-auto md:mx-0 px-2"
            initial={{ opacity: 0.5, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          >
            Career-driven learning paths designed to inspire growth and success for aspiring studens and working professionals
          </motion.p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <motion.a
              href="/courses"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-[15px] border px-6 py-4 font-semibold transition-all duration-200
                         md:relative md:-left-24"
            >
              Find Courses
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-[15px] border px-6 py-3 transition-all duration-200
                         md:relative md:-left-24"
            >
              Contact Admissions
            </motion.a>
          </div>
        </div>

        {/* Right Side Card */}
        <div className="w-full md:w-auto flex justify-center md:justify-end mt-10 mr-15 md:mt-0">
          <UpcomingBatchCard />
        </div>
      </div>
    </section>
  );
}

type Course = {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Professional";
  duration: string;
  seatsLeft?: number;
  shortDescription: string;
  image: string;
  path: string; // added path for routing
};

const sampleCourses: Course[] = [
  {
    id: "c1",
    title: "Certified Professional Bug Hunter",
    level: "Professional",
    duration: "5 months",
    seatsLeft: 12,
    shortDescription: "Fundamentals of pentesting, recon, and common vulnerabilities.",
    image: "/cpbh.png",
    path: "cpbh"
  },
  {
    id: "c2",
    title: "Certified Bug Bounty Hunter",
    level: "Intermediate",
    duration: "4 weeks",
    seatsLeft: 6,
    shortDescription: "Hands-on labs on XSS, SQLi and real-world exploitation patterns.",
    image: "/cbbt.png",
    path: "cbbt"
  },
  {
    id: "c3",
    title: "Certified Bug Bounty Expert",
    level: "Advanced",
    duration: "6 weeks",
    seatsLeft: 8,
    shortDescription: "Logs, alerts, SIEM basics and incident triage using free tools.",
    image: "/cbbe.png",
    path: "cbbe"
  },
];

function CourseCard({ course, index }: { course: Course; index: number }) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.05, duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      whileTap={{ scale: 0.97 }}
      style={{ willChange: "transform" }}
      className="flex flex-col overflow-hidden rounded-[40px] backdrop-blur-lg bg-white/10 shadow-lg hover:shadow-red-500/50"
    >
      {/* Top image */}
      <div
        className="h-32 w-full"
        style={{
          backgroundImage: `url(${course.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Bottom info */}
      <div className="flex flex-col flex-1 justify-between p-6">
        <div>
          <h4 className="text-lg font-semibold text-white">{course.title}</h4>
          <p className="mt-2 text-sm text-gray-300">{course.shortDescription}</p>
        </div>

        <div className="mt-4 flex items-center justify-between text-gray-300 text-sm">
          <span>{course.level} • {course.duration}</span>
          <span className="font-semibold text-white">{course.seatsLeft ? `Seats: ${course.seatsLeft}` : "—"}</span>
        </div>

        <motion.button
          onClick={() => router.push(`/courses/${course.path}`)} // ✅ navigate to specific page
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="mt-6 w-full rounded-md bg-red-600 py-2 font-semibold hover:bg-red-700 active:bg-red-800 transition-colors duration-300 cursor-pointer"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}

export function CoursesSection() {
  return (
    <motion.section
      id="courses"
      className="max-w-7xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h3 className="text-6xl -mt-5 font-bold">
        Choose your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-red-500">
          Career
        </span>
      </h3>
      <p className="mt-2">Start with one track and progress to advanced topics.</p>

      <div className="mt-15 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {sampleCourses.map((c, i) => (
          <CourseCard key={c.id} course={c} index={i} />
        ))}

        {/* View More Courses card */}
        <Link href="/courses">
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col justify-center items-center rounded-[55px] backdrop-blur-md bg-white/10 text-white shadow-md p-6 cursor-pointer border border-white/20 hover:border-white/40 h-full"
          >
            <span className="text-xl font-semibold">+ View More Courses</span>
          </motion.div>
        </Link>
      </div>
    </motion.section>
  );
}

// ✅ Main LandingPage
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

<Float />

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
      <Navbar /> {/* ✅ Navbar already uses usePathname for red active links */}

      {/* Content */}
      <main className="pt-20">
        <Hero />
        <WhyChooseUsPage />
        <ContactCard />
        <CoursesSection />
        <TeachingSection />
        <AgeSection />
        <Testimonials />
        <EndSection />
        <Footer />
      </main>
    </div>
  );
}
