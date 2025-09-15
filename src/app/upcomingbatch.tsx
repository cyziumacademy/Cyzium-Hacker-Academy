"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Calendar,
  Clock,
  Laptop,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


// 🎓 Upcoming batches data
const batches = [
  {
    image: "/course.jpg",
    title: "Certified Ethical Hacker (CEH) Master",
    startDate: "Sep 15, 2025",
    duration: "2 Months (Weekend)",
    includes: "Live Sessions + Labs",
    price: "₹49,999",
    oldPrice: "₹55,000",
    cashback: "₹5,000 Cashback!",
    targetDate: "2025-09-15T23:59:59",
  },
  {
    image: "/course2.jpg",
    title: "Certified Bug Bounty Hunter",
    startDate: "Oct 01, 2025",
    duration: "1.5 Months (Weekend)",
    includes: "Live Sessions + Labs",
    price: "₹16,999",
    oldPrice: "₹24,000",
    cashback: "₹3,000 Cashback!",
    targetDate: "2025-10-01T23:59:59",
  },
  {
    image: "/course3.jpg",
    title: "AWS Cloud Security Practitioner",
    startDate: "Oct 20, 2025",
    duration: "2 Months (Weekend)",
    includes: "Live Sessions + Labs",
    price: "₹44,999",
    oldPrice: "₹50,000",
    cashback: "₹4,000 Cashback!",
    targetDate: "2025-10-20T23:59:59",
  },
];

function UpcomingBatchCard() {
  const [[currentIndex, direction], setCurrentIndex] = useState<[number, number]>([0, 0]);
  const currentBatch = batches[currentIndex];

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  // 🌊 Ripple effect
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
  };

  // 🔄 Navigate batches
  const handlePrev = () => {
    setCurrentIndex([
      currentIndex === 0 ? batches.length - 1 : currentIndex - 1,
      -1,
    ]);
  };

  const handleNext = () => {
    setCurrentIndex([
      currentIndex === batches.length - 1 ? 0 : currentIndex + 1,
      1,
    ]);
  };

  // 🔀 Slide animation variants
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
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -150 : 150,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.25, ease: "easeIn" },
  }),
};

  return (
    <motion.div
      className="relative -mt-9 -mr-40 w-[700px] h-[550px] rounded-[80px] p-8 border-2 border-white/20 bg-black/0 shadow-[inset_-3px_-1px_9px_rgba(255,255,255,0.5),_inset_10px_10px_20px_rgba(0,0,0,0.2),_0_4px_30px_rgba(0,0,0,0.1)] flex text-white overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Aurora */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-50"></div>

{/* Layout */}
<div className="relative w-full h-full flex gap-8">
  {/* Left Side */}
  <div className="w-1/2 flex flex-col items-center justify-center gap-6 relative">
    {/* Arrows (center of image) */}
    <button
      onClick={handlePrev}
      className="absolute left-3 top-[44%] -translate-y-1/2 w-12 h-12 flex items-center justify-center 
                 bg-black/60 hover:bg-black/80 rounded-full z-10 cursor-pointer transition-all duration-200"
    >
      <ChevronLeft size={32} />
    </button>
    <button
      onClick={handleNext}
      className="absolute right-3 top-[44%] -translate-y-1/2 w-12 h-12 flex items-center justify-center 
                 bg-black/60 hover:bg-black/80 rounded-full z-10 cursor-pointer transition-all duration-200"
    >
      <ChevronRight size={32} />
    </button>
          
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
    <img
      src={currentBatch.image}
      className="w-full h-60 object-cover rounded-[40px] border-2 border-white/20 shadow-lg"
    />
    <p className="text-md text-gray-300 mt-2">{currentBatch.title}</p>
  </motion.div>
</AnimatePresence>


{/* ✅ Offer Box (static container) */}
<div className="w-full text-center bg-black/30 p-4 rounded-3xl border border-white/10 mt-4">
  <h4 className="text-lg font-bold text-cyan-300 tracking-wider">
    SPECIAL OFFER
  </h4>

  <div className="flex flex-col items-center justify-center mt-1">
    <span className="text-2xl text-gray-400 line-through">
      {currentBatch.oldPrice}
    </span>

    {/* 🔥 Animated price */}
    <motion.span
      key={currentIndex} // re-trigger animation when batch changes
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="text-5xl font-extrabold text-grey-100 -mt-2"
    >
      {currentBatch.price}
    </motion.span>
  </div>

  {/* 🔥 Animated cashback */}
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
        <div className="w-1/2 flex flex-col">
          <h3 className="text-[35px] font-bold">Upcoming Batch</h3>

          <div className="flex-grow flex flex-col justify-center space-y-4 text-base text-gray-200 border-t border-b border-white/10 my-6 py-2">
            <p className="flex items-center gap-2">
              <Calendar size={18} className="text-white" />
              <strong>Start Date:</strong> {currentBatch.startDate}
            </p>
            <p className="flex items-center gap-2">
              <Clock size={18} className="text-white" />
              <strong>Duration:</strong> {currentBatch.duration}
            </p>
            <p className="flex items-center gap-2">
              <Laptop size={18} className="text-white" />
              <strong>Includes:</strong> {currentBatch.includes}
            </p>
            <p className="flex items-center gap-2 text-red-500">
              <AlertTriangle size={18} className="text-white" />
              <strong> Limited Seats Only!</strong>
            </p>
          </div>

          <div className="text-center mb-4">
            <h5 className="text-sm font-semibold mb-2 text-cyan-300 uppercase">
              Offer Ends In
            </h5>
            <div className="flex justify-center space-x-2 text-white font-mono">
              <div className="bg-black/30 p-2 rounded-md text-center w-16">
                <div className="text-3xl font-bold">{padZero(timeLeft.days)}</div>
                <div className="text-xs">DAYS</div>
              </div>
              <div className="bg-black/30 p-2 rounded-md text-center w-16">
                <div className="text-3xl font-bold">{padZero(timeLeft.hours)}</div>
                <div className="text-xs">HRS</div>
              </div>
              <div className="bg-black/30 p-2 rounded-md text-center w-16">
                <div className="text-3xl font-bold">{padZero(timeLeft.minutes)}</div>
                <div className="text-xs">MIN</div>
              </div>
              <div className="bg-black/30 p-2 rounded-md text-center w-16">
                <div className="text-3xl font-bold">{padZero(timeLeft.seconds)}</div>
                <div className="text-xs">SEC</div>
              </div>
            </div>
          </div>

          <button
            className="relative w-50 ml-9 bg-red-600 text-white font-bold py-3 rounded-3xl hover:bg-green-500 transition-all duration-300 text-lg active:scale-85 overflow-hidden cursor-pointer"
            onClick={onReserveClick}
          >
            Enroll now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default UpcomingBatchCard;
