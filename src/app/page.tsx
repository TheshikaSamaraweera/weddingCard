"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
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

// Floating particle component
function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([]);

  useEffect(() => {
    const items = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 12,
      size: 2 + Math.random() * 4,
    }));
    setParticles(items);
  }, []);

  return (
    <div className="particle-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

// Stagger container animation
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

// Individual text item animation
const textRevealUp: Variants = {
  hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

// Scale-in animation for images
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

// Divider line grow animation
const lineGrow: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function InvitationContent() {
  const [opened, setOpened] = useState(false);
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "";

  return (
    <main className="mobile-container relative bg-transparent min-h-screen">
      {/* Global floating particles */}
      {opened && <FloatingParticles />}

      {/* Global Music Player - Starts immediately when page loads */}
      <MusicPlayer />

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
            <Envelope onOpen={() => setOpened(true)} guestName={guestName} />
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
                  <motion.div
                    className="flex flex-col items-center justify-center w-full relative z-[1] pt-6 pb-2 px-2"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {/* Top lotus ornament */}
                    <motion.div className="mx-auto text-[#1F4A3A] mb-5" variants={scaleIn}>
                      <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                        <path d="M20,0 Q25,15 35,20 Q25,20 20,30 Q15,20 5,20 Q15,15 20,0 Z" />
                        <circle cx="20" cy="15" r="2" fill="#D2E6DB" />
                      </svg>
                    </motion.div>

                    <motion.p
                      className="font-title text-[9px] tracking-[0.2em] text-[#1F4A3A] font-bold uppercase mb-4"
                      variants={textRevealUp}
                    >
                      Together with their families
                    </motion.p>

                    <motion.h1
                      className="font-title text-[44px] text-[#0D2B1F] leading-none tracking-wide"
                      variants={textRevealUp}
                    >
                      {invitationData.groom}
                    </motion.h1>
                    <motion.p
                      className="font-title text-[28px] text-[#0D2B1F] leading-none my-1"
                      variants={textRevealUp}
                    >
                      &amp;
                    </motion.p>
                    <motion.h1
                      className="font-title text-[44px] text-[#0D2B1F] leading-none tracking-wide mb-6"
                      variants={textRevealUp}
                    >
                      {invitationData.bride}
                    </motion.h1>

                    <motion.p
                      className="font-title text-[10px] tracking-[0.15em] text-[#1F4A3A] uppercase font-bold leading-relaxed mb-4 text-center"
                      variants={textRevealUp}
                    >
                      Joyfully invite you to<br />celebrate our wedding
                    </motion.p>

                    <motion.div
                      className="flex items-center justify-center gap-2 mb-4 w-full px-8"
                      variants={lineGrow}
                    >
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#1F4A3A]/60" />
                      <motion.div
                        className="w-2 h-2 rotate-45 border border-[#1F4A3A]/60"
                        animate={{ rotate: [45, 225, 45] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#1F4A3A]/60" />
                    </motion.div>

                    <motion.p
                      className="font-title text-[11px] tracking-[0.15em] text-[#0D2B1F] uppercase font-bold mb-2"
                      variants={textRevealUp}
                    >
                      {invitationData.day} | {invitationData.date}
                    </motion.p>
                    <motion.p
                      className="font-title text-[11px] tracking-[0.15em] text-[#0D2B1F] uppercase font-bold mb-4"
                      variants={textRevealUp}
                    >
                      At {invitationData.time}
                    </motion.p>

                    <motion.p
                      className="font-title text-[10px] tracking-[0.12em] text-[#1F4A3A] font-bold uppercase leading-relaxed text-center mb-6"
                      variants={textRevealUp}
                    >
                      {invitationData.venue}<br />
                      {invitationData.venueAddress}
                    </motion.p>

                    <motion.div
                      className="w-full flex justify-center mt-3 relative z-20"
                      variants={scaleIn}
                    >
                      <img
                        src="/home1.png"
                        alt="Manora Heritage"
                        className="w-full max-w-[230px] object-contain"
                      />
                    </motion.div>
                  </motion.div>
                </EmptyStamp>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <div className="scroll-hint flex flex-col items-center gap-1">
                  <span className="font-title text-[8px] tracking-widest text-white/60 uppercase">Scroll</span>
                  <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5">
                    <rect x="4" y="1" width="8" height="14" rx="4" />
                    <motion.circle
                      cx="8" cy="6" r="1.5"
                      fill="rgba(255,255,255,0.6)"
                      animate={{ cy: [6, 10, 6] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <path d="M4 18 L8 22 L12 18" />
                  </svg>
                </div>
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

            {/* Final Seal - Screen 8 */}
            <BlessingSeal />

            {/* Thank You - Screen 9 */}
            <ThankYouStamp />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0D2B1F]" />}>
      <InvitationContent />
    </Suspense>
  );
}