"use client";

import { motion } from "framer-motion";
import EmptyStamp from "./EmptyStamp";
import { Heart } from "lucide-react";

const storyItems = [
  {
    date: "12th March 2021",
    title: "FIRST MEETING",
    text: "We met for the first time\nand the rest is history.",
  },
  {
    date: "08th May 2023",
    title: "THE PROPOSAL",
    text: "He asked,\nI said yes! 🤍",
  },
  {
    date: "20th October 2023",
    title: "ENGAGEMENT",
    text: "A promise made,\nA lifetime sealed.",
  },
];

export default function StoryStamp() {
  return (
    <section id="our-story" className="min-h-screen flex items-center justify-center px-3 py-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[410px]"
      >
        <EmptyStamp showPostmark={false} className="pb-8 h-[620px]">
          {/* Postmark Seal Image (Bottom Right) */}
          <img
            src="/seal1.png"
            alt="Muditha & Maheli Seal"
            className="absolute bottom-4 right-2 w-[100px] h-[100px] object-contain opacity-85 z-30"
          />

          <div className="flex flex-col items-center w-full relative z-10 pt-8">
            {/* Header Area */}
            <div className="flex flex-col items-center w-full px-4 mb-8">
              <motion.h2
                className="font-title text-[24px] text-[#0D2B1F] tracking-widest uppercase font-bold text-center mt-8"
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                OUR STORY
              </motion.h2>
              <motion.h3
                className="font-title text-[13px] text-[#0D2B1F] tracking-[0.15em] uppercase font-bold mt-1"
                initial={{ opacity: 0, y: 10, filter: "blur(3px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                A JOURNEY OF LOVE
              </motion.h3>
            </div>

            {/* Timeline Area */}
            <div className="w-full relative px-2 pl-8">
              {/* Continuous Vertical Line with Draw-in effect */}
              <motion.div
                className="absolute left-[108px] top-2 w-[1px] bg-[#0D2B1F] z-0 origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                style={{ bottom: "10px" }}
              />

              {/* Terminal knot at bottom of line */}
              <motion.div
                className="absolute left-[104.5px] -bottom-1 text-[#0D2B1F] bg-[#F7F6E2] z-10 pt-1"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor">
                  <path d="M4 0 L8 4 L4 8 L0 4 Z M4 9 A 1.5 1.5 0 1 1 4 12 A 1.5 1.5 0 1 1 4 9" />
                </svg>
              </motion.div>

              <div className="space-y-6 mb-10">
                {storyItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="relative flex items-center gap-14 z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20px" }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.15,
                          delayChildren: index * 0.25 + 0.3
                        }
                      }
                    }}
                  >
                    {/* Circle Image */}
                    <motion.div
                      className="w-[60px] h-[60px] rounded-full border-[3px] border-[#FEFCF7] shadow-[0_2px_8px_rgba(0,0,0,0.15)] overflow-hidden bg-white shrink-0"
                      variants={{
                        hidden: { scale: 0.7, opacity: 0, rotate: -15 },
                        visible: { scale: 1, opacity: 1, rotate: 0 }
                      }}
                      transition={{ type: "spring", stiffness: 120, damping: 12 }}
                    >
                      <img
                        src="/couple.png"
                        alt={item.title}
                        className="w-full h-full object-cover object-top scale-110"
                      />
                    </motion.div>

                    {/* Timeline Node Heart */}
                    <motion.div
                      className="absolute left-[100px] -top-0 w-[17px] h-[17px] bg-transparent flex items-center justify-center text-[#0D2B1F] rounded-full"
                      variants={{
                        hidden: { scale: 0, opacity: 0 },
                        visible: { scale: 1, opacity: 1 }
                      }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: index * 0.4 }}
                      >
                        <Heart size={16} fill="currentColor" stroke="none" />
                      </motion.div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                      className="flex-1 pt-1 pl-4"
                      variants={{
                        hidden: { opacity: 0, x: 20, filter: "blur(2px)" },
                        visible: { opacity: 1, x: 0, filter: "blur(0px)" }
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <h3 className="font-title text-[11.5px] font-bold text-[#0D2B1F] uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <p className="font-body text-[11px] text-[#1A3B2E] mt-0.5">
                        {item.date}
                      </p>
                      <p className="font-body text-[11.5px] text-[#1A3B2E] mt-1.5 leading-relaxed whitespace-pre-line">
                        {item.text}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </EmptyStamp>
      </motion.div>
    </section>
  );
}