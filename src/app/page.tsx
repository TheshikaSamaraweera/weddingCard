"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Envelope from "@/components/Envelope";
import StampNavigation from "@/components/StampNavigation";
import WeddingDetailsStamp from "@/components/WeddingDetailsStamp";
import StoryStamp from "@/components/StoryStamp";
import ReceptionStamp from "@/components/ReceptionStamp";
import ThankYouStamp from "@/components/ThankYouStamp";
import BlessingSeal from "@/components/BlessingSeal";
import MusicPlayer from "@/components/MusicPlayer";
import { invitationData } from "@/types/invitation";
import EmptyStamp from "@/components/EmptyStamp";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="mobile-container relative bg-transparent min-h-screen">
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="envelope"
            exit={{
              opacity: 0,
              y: -50,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[var(--deep-bg)]"
          >
            <Envelope onOpen={() => setOpened(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Main Stamp - Screen 2 */}
            <section className="min-h-screen flex items-center justify-center px-3 py-16 invitation-gradient relative">
              {/* Particle overlay (optional) */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
                <div className="shimmer absolute inset-0" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-full max-w-[410px]"
              >
                <EmptyStamp showPostmark={true} className="h-[620px]">
                  <div className="flex flex-col items-center justify-center w-full relative z-[1] pt-6 pb-2 px-2">
                    {/* Top lotus ornament */}
                    <div className="mx-auto text-[#1F4A3A] mb-5">
                      <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                        <path d="M20,0 Q25,15 35,20 Q25,20 20,30 Q15,20 5,20 Q15,15 20,0 Z" />
                        <circle cx="20" cy="15" r="2" fill="#D2E6DB" />
                      </svg>
                    </div>

                    <p className="font-title text-[9px] tracking-[0.2em] text-[#1F4A3A] font-bold uppercase mb-4">
                      Together with their families
                    </p>

                    <h1 className="font-title text-[44px] text-[#0D2B1F] leading-none tracking-wide">
                      {invitationData.groom}
                    </h1>
                    <p className="font-title text-[28px] text-[#0D2B1F] leading-none my-1">
                      &amp;
                    </p>
                    <h1 className="font-title text-[44px] text-[#0D2B1F] leading-none tracking-wide mb-6">
                      {invitationData.bride}
                    </h1>

                    <p className="font-title text-[10px] tracking-[0.15em] text-[#1F4A3A] uppercase font-bold leading-relaxed mb-4 text-center">
                      Joyfully invite you to<br />celebrate their wedding
                    </p>

                    <div className="flex items-center justify-center gap-2 mb-4 w-full px-8">
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#1F4A3A]/60" />
                      <div className="w-2 h-2 rotate-45 border border-[#1F4A3A]/60" />
                      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#1F4A3A]/60" />
                    </div>

                    <p className="font-title text-[11px] tracking-[0.15em] text-[#0D2B1F] uppercase font-bold mb-2">
                      {invitationData.day} | {invitationData.date}
                    </p>
                    <p className="font-title text-[11px] tracking-[0.15em] text-[#0D2B1F] uppercase font-bold mb-4">
                      At {invitationData.time}
                    </p>

                    <p className="font-title text-[10px] tracking-[0.12em] text-[#1F4A3A] font-bold uppercase leading-relaxed text-center mb-6">
                      {invitationData.venue}<br />
                      Kandy
                    </p>

                    <div className="w-full flex justify-center mt-3 relative z-20">
                      <img
                        src="/home1.png"
                        alt="Kandyan Heritage Hotel"
                        className="w-full max-w-[230px] object-contain"
                      />
                    </div>
                  </div>
                </EmptyStamp>
              </motion.div>
            </section>

            {/* Stamp Navigation - Screen 3 */}
            <StampNavigation />

            {/* Wedding Details - Screen 4 */}
            <WeddingDetailsStamp />

            {/* Our Story - Screen 5 */}
            <StoryStamp />

            {/* Reception & RSVP - Screen 6 */}
            <ReceptionStamp />

            {/* Thank You - Screen 8 */}
            <ThankYouStamp />

            {/* Final Seal - Screen 9 */}
            <BlessingSeal />

            {/* Global Music Player */}
            <MusicPlayer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}