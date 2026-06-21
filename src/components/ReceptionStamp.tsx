"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Search } from "lucide-react";
import EmptyStamp from "./EmptyStamp";
import RSVPForm from "./RSVPForm";

// August 2025 calendar data
// Aug 1, 2025 = Friday
const calendarDays = [
  // Row 1: empty Mon-Thu, then Fri=1, Sat=2, Sun=3
  null, null, null, null, 1, 2, 3,
  // Row 2
  4, 5, 6, 7, 8, 9, 10,
  // Row 3
  11, 12, 13, 14, 15, 16, 17,
  // Row 4
  18, 19, 20, 21, 22, 23, 24,
  // Row 5
  25, 26, 27, 28, 29, 30, 31,
];

const dayHeaders = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

// Gold scroll corner ornament to match the premium vintage look in the mockup
const CornerOrnament = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 45 45"
    className={`w-10 h-10 text-[#C3A261] opacity-70 pointer-events-none select-none ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Fine border lines inside the stamp edge */}
    <path d="M 4,45 L 4,4 L 45,4" strokeWidth="0.8" />
    {/* Scroll flourishes */}
    <path d="M 7,7 C 15,7 19,11 19,19 C 19,11 11,7 7,7 Z" fill="currentColor" fillOpacity="0.05" />
    <path d="M 7,7 C 7,15 11,19 19,19 C 10,19 7,15 7,7 Z" fill="currentColor" fillOpacity="0.05" />
    <path d="M 7,7 L 15,15" />
    <path d="M 7,19 C 11,23 15,23 19,19" />
    <path d="M 19,7 C 23,11 23,15 19,19" />
    <path d="M 7,25 C 10,28 13,28 16,25" strokeWidth="0.8" />
    <path d="M 25,7 C 28,10 28,13 25,16" strokeWidth="0.8" />
    <circle cx="11" cy="11" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="22" cy="22" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

// Tiny top center accent decoration
const TopAccentOrnament = () => (
  <svg
    viewBox="0 0 30 10"
    className="w-7 h-2 text-[#C3A261] opacity-75"
    fill="currentColor"
  >
    <path d="M15,0 L18,4 L24,4 L19,6 L21,10 L15,7 L9,10 L11,6 L6,4 L12,4 Z" />
    <circle cx="15" cy="5" r="1.2" className="text-[#123326]" />
  </svg>
);

// Ornate leaf divider line separating calendar actions and RSVP
const OrnateDivider = () => (
  <div className="flex items-center justify-center w-full my-4">
    <div className="h-[1.5px] w-20 bg-gradient-to-r from-transparent to-[#123326]/30" />
    <svg
      viewBox="0 0 50 15"
      className="w-14 h-4 text-[#123326] mx-2 shrink-0"
      fill="currentColor"
    >
      <circle cx="25" cy="7.5" r="2" className="text-[#C3A261]" />
      <path d="M25,7.5 C22.5,4 19,4 17,7.5 C19,11 22.5,11 25,7.5 Z" />
      <path d="M25,7.5 C27.5,4 31,4 33,7.5 C31,11 27.5,11 25,7.5 Z" />
      <circle cx="15" cy="7.5" r="1" />
      <circle cx="35" cy="7.5" r="1" />
      <path d="M 15,7.5 L 7,7.5" stroke="currentColor" strokeWidth="0.8" />
      <path d="M 35,7.5 L 43,7.5" stroke="currentColor" strokeWidth="0.8" />
    </svg>
    <div className="h-[1.5px] w-20 bg-gradient-to-l from-transparent to-[#123326]/30" />
  </div>
);

export default function ReceptionStamp() {
  const googleMapsUrl =
    "https://maps.google.com/?q=Kandyan+Heritage+Hotel+Kandy";
  const calendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Muditha+%26+Maheli+Wedding&dates=20250824T100000/20250824T200000&location=Kandyan+Heritage+Hotel,+Kandy";

  return (
    <section id="reception" className="min-h-screen flex items-center justify-center px-3 py-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[410px]"
      >
        <EmptyStamp showPostmark={false} className="pb-8 h-[620px]">
          {/* Custom Gold Corner Ornaments */}
          <CornerOrnament className="absolute top-5 left-5" />
          <CornerOrnament className="absolute top-5 right-5 rotate-90" />
          <CornerOrnament className="absolute bottom-5 left-5 -rotate-90" />
          <CornerOrnament className="absolute bottom-5 right-5 rotate-180" />

          {/* Tiny accent decoration at the top center */}
          <div className="absolute top-[22px] left-1/2 -translate-x-1/2">
            <TopAccentOrnament />
          </div>

          <div className="flex flex-col items-center w-full h-full relative z-10 pt-2">

            {/* Header */}
            <div className="text-center mb-3 mt-16">
              <motion.h2
                className="font-title text-[22px] text-[#123326] tracking-[0.2em] uppercase font-bold text-center leading-none"
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                RECEPTION
              </motion.h2>
              <motion.p
                className="font-title text-[10px] tracking-[0.2em] text-[#2C5846] mt-1.5 uppercase font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                PLEASE JOIN US
              </motion.p>
            </div>

            {/* Calendar Widget Container */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
              className="bg-[#EBE9D1]/50 border border-[#A6C9B7]/40 p-2 pb-2 rounded-2xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] w-[85%] mb-3"
            >
              {/* Calendar Month Header */}
              <div className="relative flex items-center justify-center mb-2.5 px-1">
                <h3 className="font-title text-[12.5px] tracking-[0.18em] text-[#123326] uppercase font-bold">
                  August 2025
                </h3>
                <Search size={14} className="absolute right-0 text-[#123326] opacity-90 cursor-pointer" />
              </div>

              {/* Grid of Days */}
              <div className="grid grid-cols-7 gap-y-0.5 gap-x-1 text-center">
                {/* Weekday headers */}
                {dayHeaders.map((day) => (
                  <div
                    key={day}
                    className="text-[8.5px] font-bold text-[#2C5846] font-title tracking-wider py-0.5"
                  >
                    {day}
                  </div>
                ))}

                {/* Day numbers */}
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center h-5"
                  >
                    {day ? (
                      <div
                        className={`font-title text-[10px] font-semibold flex items-center justify-center transition-all duration-300 ${day === 24
                          ? "bg-[#123326] text-[#E1EEE6] rounded-full w-[20px] h-[20px] font-bold shadow-sm"
                          : "text-[#123326]"
                          }`}
                      >
                        {day}
                      </div>
                    ) : (
                      <span className="w-[20px] h-[20px]" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons Grid */}
            <div className="grid grid-cols-2 gap-2 w-[85%]">
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-2.5 py-2 rounded-xl border border-[#123326]/20 bg-[#EBE9D1]/50 hover:bg-[#EBE9D1]/80 transition-all duration-300 w-full text-left no-underline cursor-pointer"
              >
                <Calendar size={16} className="text-[#123326] shrink-0" />
                <div className="flex flex-col items-start leading-[1.15] font-title text-[8.5px] font-bold tracking-wider text-[#123326]">
                  <span>ADD TO</span>
                  <span>CALENDAR</span>
                </div>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-2.5 py-2 rounded-xl border border-[#123326]/20 bg-[#EBE9D1]/50 hover:bg-[#EBE9D1]/80 transition-all duration-300 w-full text-left no-underline cursor-pointer"
              >
                <MapPin size={16} className="text-[#123326] shrink-0" />
                <div className="flex flex-col items-start leading-[1.15] font-title text-[8.5px] font-bold tracking-wider text-[#123326]">
                  <span>VIEW</span>
                  <span>LOCATION</span>
                </div>
              </a>
            </div>

            {/* Elegant Leaf Divider */}
            <OrnateDivider />

            {/* RSVP Form Component */}
            <div id="rsvp" className="w-full">
              <RSVPForm />
            </div>

          </div>
        </EmptyStamp>
      </motion.div>
    </section>
  );
}