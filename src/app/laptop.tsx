"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Mail } from "lucide-react";
import ContactCard from "./contact";

const LaptopSection: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl -ml-[102px] md:text-6xl font-bold mb-6">
            Don't have a Laptop to study?
          </h2>

          <p className="text-gray-100 -ml-[100px] max-w-md mb-8">
            Don’t let the lack of a laptop stop your progress. We provide
            high-performance laptops on rent for our students at affordable rates.
          </p>

          <motion.div
            className="bg-white/7 -mt-5 -ml-25 rounded-[45px] shadow-[inset_-3px_-1px_9px_rgba(255,255,255,0.5),_inset_10px_10px_20px_rgba(0,0,0,0.2),_0_4px_30px_rgba(0,0,0,0.1)] p-8 w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center space-y-4">
              <Laptop className="w-40 h-14 text-blue-600" />
              <h3 className="text-xl font-semibold">Student Laptop Rentals</h3>
              <p className="text-gray-100 text-center">
                Get a reliable laptop for your classes, projects, and assignments
                without the upfront cost.
              </p>
              <button
                onClick={() => setOpen(true)}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                Enquire Now
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src="/laptop.png"
            alt="Rented Laptop"
            className="w-full rounded-[50px] shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </div>
{/* Contact Card Modal (uses external component now) */} <ContactCard isOpen={open} onClose={() => setOpen(false)} />

    </section>
  );
};

export default LaptopSection;
