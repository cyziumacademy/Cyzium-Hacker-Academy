"use client";
import { motion } from "framer-motion";

export default function EndSection() {
  return (
    <section className="py-15 text-white">
      <div className="max-w-7xl mx-auto px-2 grid md:grid-cols-2 gap-25 items-center">
        
        {/* Left Side: Heading + Button */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h2 className="text-8xl font-extrabold mb-4">
            We Never Let You Fail
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Your success is our mission. With career-focused training, hands-on
            labs, and mentorship from industry experts, Cyzium Academy ensures
            you gain the skills and confidence to thrive in Ethical Hacking &
            Cybersecurity.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl text-lg font-semibold transition"
          >
            Enquire Now
          </a>
        </motion.div>

        {/* Right Side: Mission Statement */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-300 leading-relaxed">
            At Cyzium Academy, we are committed to shaping the next generation of
            cybersecurity professionals. Our vision is simple — to create
            confident, skilled, and job-ready ethical hackers who never stop
            learning and never stop growing. With us, failure is never an option.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
