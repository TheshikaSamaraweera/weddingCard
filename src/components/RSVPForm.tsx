"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

// Leaf Sprig SVG icon to match the design in the mockup
const LeafSprigIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-[20px] h-[20px] shrink-0"
    fill="currentColor"
  >
    <path
      d="M4.5 19.5 C8 16 16 8 20 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />
    <path d="M8.5 15.5 C6.5 15 5.5 13 6.5 11.5 C7.5 10 9.5 11 10.5 12.5 C10.5 12.5 9 14.5 8.5 15.5 Z" />
    <path d="M12.5 11.5 C10.5 11 9.5 9 10.5 7.5 C11.5 6 13.5 7 14.5 8.5 C14.5 8.5 13 10.5 12.5 11.5 Z" />
    <path d="M10.5 15.5 C12.5 15 13.5 13 12.5 11.5 C11.5 10 9.5 11 8.5 12.5 C8.5 12.5 10 14.5 10.5 15.5 Z" />
    <path d="M14.5 11.5 C16.5 11 17.5 9 16.5 7.5 C15.5 6 13.5 7 12.5 8.5 C12.5 8.5 14 10.5 14.5 11.5 Z" />
    <path d="M18.5 6.5 C18.5 4.5 17 3.5 15.5 4.5 C14 5.5 15 7.5 16.5 8.5 C18 8.5 18.5 7.5 18.5 6.5 Z" />
  </svg>
);

export default function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);
  const [attendance, setAttendance] = useState("");

  const submitRSVP = (type: string) => {
    setAttendance(type);
    setTimeout(() => {
      setSubmitted(true);
    }, 400);
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* RSVP Header */}
            <div className="text-center mb-3">
              <h3 className="font-title text-[18px] tracking-[0.2em] text-[#123326] uppercase font-bold">
                RSVP
              </h3>
              <p className="font-title text-[9.5px] tracking-[0.12em] text-[#2C5846] mt-1.5 uppercase font-semibold">
                Kindly confirm by 10th June 2026
              </p>
            </div>

            {/* RSVP Buttons Grid */}
            <div className="grid grid-cols-2 gap-3 w-[75%] mx-auto">
              <motion.button
                whileHover={{ scale: 1.06, y: -2, boxShadow: "0 4px 12px rgba(18, 51, 38, 0.15)" }}
                whileTap={{ scale: 0.96 }}
                onClick={() => submitRSVP("attending")}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all duration-300 w-full text-left cursor-pointer ${attendance === "attending"
                  ? "bg-[#123326] text-[#E1EEE6] border-[#123326] shadow-md"
                  : "bg-[#EBE9D1]/50 hover:bg-[#EBE9D1]/80 text-[#123326] border-[#123326]/20"
                  }`}
              >
                <Heart
                  size={20}
                  className={`shrink-0 ${attendance === "attending" ? "fill-[#E1EEE6] text-[#E1EEE6]" : "fill-[#123326] text-[#123326]"}`}
                />
                <div className="flex flex-col items-start leading-[1.15] font-title text-[9.5px] font-bold tracking-wider">
                  <span>HAPPILY</span>
                  <span>ATTENDING</span>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.06, y: -2, boxShadow: "0 4px 12px rgba(18, 51, 38, 0.15)" }}
                whileTap={{ scale: 0.96 }}
                onClick={() => submitRSVP("blessings")}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all duration-300 w-full text-left cursor-pointer ${attendance === "blessings"
                  ? "bg-[#123326] text-[#E1EEE6] border-[#123326] shadow-md"
                  : "bg-[#EBE9D1]/50 hover:bg-[#EBE9D1]/80 text-[#123326] border-[#123326]/20"
                  }`}
              >
                <div className={attendance === "blessings" ? "text-[#E1EEE6]" : "text-[#123326]"}>
                  <LeafSprigIcon />
                </div>
                <div className="flex flex-col items-start leading-[1.15] font-title text-[9.5px] font-bold tracking-wider">
                  <span>SENDING</span>
                  <span>BLESSINGS</span>
                </div>
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="confirmed"
            initial={{ scale: 0.6, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
            className="flex flex-col items-center py-4"
          >
            {/* Gold seal confirmation */}
            <motion.div 
              className="wax-seal w-[90px] h-[90px] shadow-xl relative"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="text-center absolute inset-0 flex items-center justify-center">
                <span className="text-white font-title text-[10px] tracking-wider block font-bold leading-tight">
                  {attendance === "attending"
                    ? "CONFIRMED"
                    : "BLESSED"}
                </span>
              </div>
            </motion.div>

            <motion.p 
              className="mt-4 text-[14.5px] text-center font-body text-[#1A3B2E] font-semibold leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {attendance === "attending"
                ? "We look forward to celebrating with you!"
                : "Thank you for your blessings!"}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}