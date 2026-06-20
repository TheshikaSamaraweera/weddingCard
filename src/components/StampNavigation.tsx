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
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative">
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
            <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
              <path d="M20,0 Q25,15 35,20 Q25,20 20,30 Q15,20 5,20 Q15,15 20,0 Z" />
              <circle cx="20" cy="15" r="2" fill="#0D2B1F" />
            </svg>
          </div>
          <h2 className="font-title text-[22px] tracking-[0.15em] text-[#D2E6DB] uppercase leading-snug">
            Our Wedding<br />Journey
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#D2E6DB]/50" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#D2E6DB]/60" />
            <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[#D2E6DB]/50" />
          </div>
        </div>

        {/* Navigation Buttons Stack */}
        <div className="space-y-4">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.target}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollTo(item.target)}
                className="w-full relative bg-[var(--ivory)] border-2 border-[#1F4A3A] p-1.5 shadow-lg block hover:bg-[#C5DCCF] transition-colors"
                aria-label={`Go to ${item.title}`}
              >
                {/* Inner Border with Dots */}
                <div className="absolute inset-[4px] border border-[#1F4A3A]/60 pointer-events-none" />
                
                {/* Corner Dots (placed explicitly over the inner border corners) */}
                <div className="absolute top-1 left-1 w-1 h-1 rounded-full border border-[#1F4A3A] bg-[var(--ivory)]" />
                <div className="absolute top-1 right-1 w-1 h-1 rounded-full border border-[#1F4A3A] bg-[var(--ivory)]" />
                <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full border border-[#1F4A3A] bg-[var(--ivory)]" />
                <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full border border-[#1F4A3A] bg-[var(--ivory)]" />

                <div className="flex w-full relative z-10 py-3 px-2 items-center">
                  {/* Icon Section */}
                  <div className="w-[60px] flex items-center justify-center text-[#1F4A3A]">
                    <Icon size={30} strokeWidth={1.5} />
                  </div>
                  
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
