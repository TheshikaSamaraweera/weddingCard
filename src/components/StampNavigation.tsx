"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  Heart,
  Calendar,
  Mail,
  Image as ImageIcon,
  Leaf,
} from "lucide-react";

const navItems = [
  {
    icon: Landmark,
    title: "WEDDING DETAILS",
    subtitle: "Ceremony & Important Info",
    target: "wedding-details",
  },
  {
    icon: Heart,
    title: "OUR STORY",
    subtitle: "Our Beautiful Journey",
    target: "our-story",
  },
  {
    icon: Calendar,
    title: "RECEPTION",
    subtitle: "Venue, Calendar & Location",
    target: "reception",
  },
  {
    icon: Mail,
    title: "RSVP",
    subtitle: "Kindly Confirm Your Presence",
    target: "rsvp",
  },
  {
    icon: Leaf,
    title: "THANK YOU",
    subtitle: "With Love & Gratitude",
    target: "thank-you",
  },
];

export default function StampNavigation() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Elegant Side Borders using SVG */}
      <div className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none opacity-20">
        <svg className="w-full h-full text-[#D2E6DB]" preserveAspectRatio="none" viewBox="0 0 100 1000">
          <path d="M 0 0 Q 80 100, 30 200 T 50 400 T 20 600 T 60 800 T 0 1000" fill="none" stroke="currentColor" strokeWidth="2" />
          {Array.from({ length: 10 }).map((_, i) => (
            <path key={i} d={`M ${30 + (i%2)*20} ${i * 100 + 50} C ${60 + (i%2)*30} ${i * 100 + 30}, ${80 + (i%2)*20} ${i * 100 + 70}, ${30 + (i%2)*20} ${i * 100 + 50}`} fill="currentColor" />
          ))}
        </svg>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none opacity-20 scale-x-[-1]">
        <svg className="w-full h-full text-[#D2E6DB]" preserveAspectRatio="none" viewBox="0 0 100 1000">
          <path d="M 0 0 Q 80 100, 30 200 T 50 400 T 20 600 T 60 800 T 0 1000" fill="none" stroke="currentColor" strokeWidth="2" />
          {Array.from({ length: 10 }).map((_, i) => (
            <path key={i} d={`M ${30 + (i%2)*20} ${i * 100 + 50} C ${60 + (i%2)*30} ${i * 100 + 30}, ${80 + (i%2)*20} ${i * 100 + 70}, ${30 + (i%2)*20} ${i * 100 + 50}`} fill="currentColor" />
          ))}
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[360px]"
      >
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="mx-auto text-[#D2E6DB] mb-3 flex justify-center">
            <svg width="80" height="35" viewBox="0 0 100 40" fill="currentColor">
              <path d="M50 0 C55 10, 75 15, 90 20 C75 25, 55 30, 50 40 C45 30, 25 25, 10 20 C25 15, 45 10, 50 0 Z" />
              <path d="M50 12 C53 15, 62 18, 68 20 C62 22, 53 25, 50 28 C47 25, 38 22, 32 20 C38 18, 47 15, 50 12 Z" fill="#0D2B1F" />
              <circle cx="50" cy="20" r="3" fill="#D2E6DB" />
              <circle cx="20" cy="20" r="2" fill="currentColor" />
              <circle cx="80" cy="20" r="2" fill="currentColor" />
            </svg>
          </div>
          <h2 className="font-title text-[22px] tracking-[0.15em] text-[#D2E6DB] uppercase leading-snug">
            Our Wedding<br />Journey
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D2E6DB]/80" />
            <div className="w-2 h-2 rotate-45 border border-[#D2E6DB] bg-[#D2E6DB]/20" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D2E6DB]/80" />
          </div>
        </div>

        {/* Navigation Buttons Stack */}
        <div className="space-y-4">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.target}
                initial={{ opacity: 0, x: -40, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                whileHover={{ scale: 1.03, y: -2, boxShadow: "0 8px 30px rgba(13, 43, 31, 0.25)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo(item.target)}
                className="w-full relative bg-[#F7F6E2] border-2 border-[#1F4A3A] p-1.5 shadow-lg block hover:bg-[#EBE9D1] transition-colors ripple-effect"
                aria-label={`Go to ${item.title}`}
              >
                {/* Inner Border with Dots */}
                <div className="absolute inset-[4px] border border-[#1F4A3A]/60 pointer-events-none" />
                
                {/* Corner Dots (placed explicitly over the inner border corners) */}
                <div className="absolute top-1 left-1 w-1 h-1 rounded-full border border-[#1F4A3A] bg-[#F7F6E2]" />
                <div className="absolute top-1 right-1 w-1 h-1 rounded-full border border-[#1F4A3A] bg-[#F7F6E2]" />
                <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full border border-[#1F4A3A] bg-[#F7F6E2]" />
                <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full border border-[#1F4A3A] bg-[#F7F6E2]" />

                <div className="flex w-full relative z-10 py-3 px-2 items-center">
                  {/* Icon Section */}
                  <motion.div
                    className="w-[60px] flex items-center justify-center text-[#1F4A3A]"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={30} strokeWidth={1.5} />
                  </motion.div>
                  
                  {/* Vertical Divider */}
                  <div className="w-[1px] h-[40px] bg-[#1F4A3A]/40 mx-2" />
                  
                  {/* Text Section */}
                  <div className="text-left flex-1 pl-4">
                    <h3 className="font-title text-[15px] text-[#0D2B1F] tracking-widest uppercase font-bold leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-body text-[13.5px] text-[#1A3B2E] mt-0.5 tracking-wide">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
