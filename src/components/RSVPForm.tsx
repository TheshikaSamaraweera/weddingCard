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
  const [popup, setPopup] = useState<"none" | "attending" | "not">("none");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submitRSVP = (type: string) => {
    setPopup("none");
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
              {/* Happily Attending Button - Highlighted */}
              <motion.button
                whileHover={{ scale: 1.15, y: -4, boxShadow: "0 8px 20px rgba(18, 51, 38, 0.4)" }}
                whileTap={{ scale: 0.96 }}
                animate={{ 
                  scale: [1, 1.04, 1],
                  boxShadow: ["0 4px 6px rgba(18, 51, 38, 0.1)", "0 8px 15px rgba(18, 51, 38, 0.25)", "0 4px 6px rgba(18, 51, 38, 0.1)"] 
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => setPopup("attending")}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-[#123326] transition-all duration-300 w-full text-center cursor-pointer bg-[#123326] text-[#E1EEE6] shadow-md relative z-10 origin-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.25, 1], opacity: [1, 0.8, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart
                    size={18}
                    className="shrink-0 fill-[#E1EEE6] text-[#E1EEE6]"
                  />
                </motion.div>
                <div className="flex flex-col items-center leading-[1.15] font-title text-[9.5px] font-bold tracking-wider">
                  <span>HAPPILY</span>
                  <span>ATTENDING</span>
                </div>
              </motion.button>

              {/* Not Attending Button */}
              <motion.button
                whileHover={{ scale: 1.06, y: -2, boxShadow: "0 4px 12px rgba(18, 51, 38, 0.15)" }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setPopup("not")}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-[#123326]/30 transition-all duration-300 w-full text-center cursor-pointer bg-[#EBE9D1]/30 hover:bg-[#EBE9D1]/60 text-[#123326]"
              >
                <div className="text-[#123326]">
                  <LeafSprigIcon />
                </div>
                <div className="flex flex-col items-center leading-[1.15] font-title text-[9.5px] font-bold tracking-wider">
                  <span>NOT</span>
                  <span>ATTENDING</span>
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

      {/* Popups */}
      <AnimatePresence>
        {popup !== "none" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
            onClick={() => setPopup("none")}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FDFBF7] rounded-2xl p-6 w-full max-w-xs relative shadow-2xl border border-[#123326]/20"
            >
              <button 
                onClick={() => setPopup("none")} 
                className="absolute top-4 right-4 text-[#123326]/50 hover:text-[#123326] transition-colors"
              >
                ✕
              </button>

              {popup === "attending" ? (
                <div className="flex flex-col">
                  <h4 className="font-title text-[16px] text-[#123326] font-bold text-center mb-4 uppercase tracking-widest">Join Us</h4>
                  <p className="text-[12px] text-center text-[#2C5846] mb-4">Please enter your name to confirm your attendance.</p>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#EBE9D1]/30 border border-[#123326]/20 rounded-xl px-4 py-3 text-[#123326] outline-none focus:border-[#123326] transition-colors mb-4 placeholder:text-[#123326]/40 text-sm"
                  />
                  <button
                    onClick={() => submitRSVP("attending")}
                    disabled={!name.trim()}
                    className="w-full bg-[#123326] text-[#E1EEE6] rounded-xl py-3 font-title text-[11px] font-bold tracking-widest uppercase disabled:opacity-50 transition-opacity"
                  >
                    Send Attending
                  </button>
                </div>
              ) : (
                <div className="flex flex-col">
                  <h4 className="font-title text-[16px] text-[#123326] font-bold text-center mb-4 uppercase tracking-widest">Send Blessings</h4>
                  <p className="text-[12px] text-center text-[#2C5846] mb-4">Leave a message for the couple.</p>
                  <textarea
                    placeholder="Why you can't come / Your blessings"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full bg-[#EBE9D1]/30 border border-[#123326]/20 rounded-xl px-4 py-3 text-[#123326] outline-none focus:border-[#123326] transition-colors mb-4 placeholder:text-[#123326]/40 text-sm resize-none"
                  />
                  <button
                    onClick={() => submitRSVP("blessings")}
                    disabled={!message.trim()}
                    className="w-full bg-[#123326] text-[#E1EEE6] rounded-xl py-3 font-title text-[11px] font-bold tracking-widest uppercase disabled:opacity-50 transition-opacity"
                  >
                    Send Message
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}