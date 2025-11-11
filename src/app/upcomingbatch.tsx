"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Calendar, Clock, Laptop, AlertTriangle } from "lucide-react";
import ContactCard from "./contact";
import Image from "next/image";
import { batches } from "./batchesdata";


function UpcomingBatchCard() {
  const [[currentIndex, direction], setCurrentIndex] = useState<[number, number]>([0, 0]);
  const currentBatch = batches[currentIndex];

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [showContact, setShowContact] = useState(false);

  // ⏳ Countdown calculation
  const calculateTimeLeft = useCallback(() => {
    const targetDate = new Date(currentBatch.targetDate);
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }, [currentBatch]);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const padZero = (num: number) => num.toString().padStart(2, "0");

  // 🌊 Ripple effect + open modal
  const onReserveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    const rect = button.getBoundingClientRect();
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add("ripple");

    const existingRipple = button.getElementsByClassName("ripple")[0];
    if (existingRipple) existingRipple.remove();

    button.appendChild(circle);

    setShowContact(true);
  };

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -150 : 150,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: "easeIn" },
    }),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(([prev]) => [(prev + 1) % batches.length, 1]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
  className="relative -mt-9 md:-mr-40 w-[700px] h-[550px] rounded-[80px] p-8 border-2 border-white/20 bg-black/0 shadow-[inset_-3px_-1px_9px_rgba(255,255,255,0.5),_inset_10px_10px_20px_rgba(0,0,0,0.2),_0_4px_30px_rgba(0,0,0,0.1)] 
  flex text-white overflow-hidden md:flex-row flex-col 
  md:w-[700px] md:h-[550px] w-full h-auto md:rounded-[80px] rounded-[30px] md:p-8 p-4 mx-auto"

        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Aurora */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-50"></div>

        {/* Layout */}
        <div className="relative w-full h-full flex md:flex-row flex-col gap-8">
          {/* Left Side */}
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center gap-6 relative">
            {/* ✅ 3 Dots Pagination */}
            <div className="absolute md:top-[211px] md:-bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10 cursor-pointer mt-2 md:mt-0">
              {batches.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex([index, 1])}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full text-center"
              >
               <Image
  src={currentBatch.image}
  alt="Batch Image"
  width={800} // approximate width
  height={240} // approximate height
  className="w-full h-60 object-cover rounded-[40px] border-2 border-white/20 shadow-lg md:h-60 sm:h-48"
/>
                <p className="text-md text-gray-300 mt-2">{currentBatch.title}</p>
              </motion.div>
            </AnimatePresence>

            {/* ✅ Offer Box */}
            <div className="w-full text-center p-4 rounded-3xl mt-4">
              <h4 className="text-xl font-bold text-cyan-300 tracking-wider">
                SPECIAL OFFER
              </h4>

              <div className="flex flex-col items-center justify-center mt-2 space-y-2">
                <motion.span
                  key={currentIndex}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-5xl font-extrabold text-gray-100 md:text-5xl text-4xl"
                >
                  {currentBatch.price}
                </motion.span>
              </div>

              <motion.div
                key={`cashback-${currentIndex}`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-2 inline-block"
              >
                <div className="bg-green-500/20 border border-green-400 text-green-300 text-sm font-semibold rounded-full px-4 py-1 shadow-lg">
                  {currentBatch.cashback}
                </div>
              </motion.div>
            </div>
          </div>

{/* Right Side */}
<div className="md:w-1/2 w-full flex flex-col text-center md:text-left 
  items-center md:items-start justify-center">
<h3 className="text-[28px] md:text-[35px] font-bold">
  Upcoming{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-red-500">
    Batch
  </span>
</h3>




  <div className="flex-grow flex flex-col justify-center space-y-4 text-base text-gray-200 border-t border-b border-white/10 my-6 py-2">
    <p className="flex items-center justify-center md:justify-start gap-2">
      <Calendar size={18} className="text-white" />
      <strong>Start Date:</strong> {currentBatch.startDate}
    </p>
    <p className="flex items-center justify-center md:justify-start gap-2">
      <Clock size={18} className="text-white" />
      <strong>Duration:</strong> {currentBatch.duration}
    </p>
    <p className="flex items-center justify-center md:justify-start gap-2">
      <Laptop size={18} className="text-white" />
      <strong>Includes:</strong> {currentBatch.includes}
    </p>
    <p className="flex items-center justify-center md:justify-start gap-2 text-red-500">
      <AlertTriangle size={18} className="text-white" />
      <strong> Limited Seats Only!</strong>
    </p>
  </div>

  <div className="text-center mb-4">
    <h5 className="text-sm font-semibold mb-2 text-cyan-300 uppercase">
      Offer Ends In
    </h5>
    <div className="flex justify-center space-x-2 text-white font-mono">
      {["DAYS", "HRS", "MIN", "SEC"].map((label, i) => (
        <div key={label} className="bg-black/30 p-2 rounded-md text-center w-16">
          <div className="text-3xl font-bold">
            {padZero([timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][i])}
          </div>
          <div className="text-xs">{label}</div>
        </div>
      ))}
    </div>
  </div>

<div className="flex justify-center md:justify-start">
  <button
    className="relative w-[180px] bg-red-600 text-white font-bold py-3 rounded-3xl 
    hover:bg-blue-600 transition-all duration-300 text-lg active:scale-95 
    overflow-hidden cursor-pointer 
    md:ml-10 md:mt-4"
    onClick={onReserveClick}
  >
    Enroll now
  </button>
</div>

</div>

        </div>
      </motion.div>

      {/* 🚀 Show Contact Modal */}
      <ContactCard isOpen={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}

export default UpcomingBatchCard;
