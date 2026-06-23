"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface EnvelopeProps {
  onOpen: () => void;
  guestName?: string;
}

type Phase = "intro" | "waiting" | "opening" | "greeting";

export default function Envelope({ onOpen, guestName }: EnvelopeProps) {
  const [phase, setPhase] = useState<Phase>("intro");
  const openVideoRef = useRef<HTMLVideoElement>(null);

  const handleSwipeUp = () => {
    if (phase === "waiting") {
      setPhase("opening");
      if (openVideoRef.current) {
        openVideoRef.current.play().catch((err) => {
          console.error("Video play failed:", err);
          // Fallback just in case video fails to play
          onOpen();
        });
      }
    }
  };

  const handleVideoEnded = () => {
    if (guestName) {
      setPhase("greeting");
      setTimeout(onOpen, 5000);
    } else {
      setTimeout(onOpen, 5000);
    }
  };

  return (
    <motion.div
      // We use onPanEnd to detect a swipe without physically moving the container
      onPanEnd={(e, info) => {
        if (info.offset.y < -50) {
          handleSwipeUp();
        }
      }}
      className="min-h-screen flex flex-col items-center justify-center bg-[#0D2B1F] select-none relative overflow-hidden touch-none"
    >
      <div className="w-full h-full absolute inset-0 flex items-center justify-center max-w-[430px] mx-auto">
        
        {/* Intro Video */}
        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${phase === "intro" ? "opacity-100 z-20" : "opacity-0 z-0"}`}
          src="/inro.mp4"
          autoPlay
          playsInline
          muted
          onEnded={() => setPhase("waiting")}
        />

        {/* Envelope Open Video */}
        <video
          ref={openVideoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${phase !== "intro" ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          src="/envilopOpen.mp4"
          playsInline
          muted
          onEnded={handleVideoEnded}
          preload="auto"
        />

        {/* Guest Name Greeting - shown during the 3s delay after envelope video */}
        <AnimatePresence>
          {phase === "greeting" && guestName && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 z-30 flex items-center justify-center bg-[#0D2B1F]/80 backdrop-blur-sm"
            >
              <motion.div className="flex flex-col items-center text-center px-8">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                  className="font-title text-[13px] tracking-[0.3em] text-white/70 uppercase mb-4 font-bold"
                >
                  We joyfully invite
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="font-title text-[38px] text-white leading-tight tracking-wide drop-shadow-lg font-extrabold"
                >
                  {guestName}
                </motion.h2>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
                  className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mt-4 mb-3"
                />

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="font-title text-[10px] tracking-[0.25em] text-white/50 uppercase"
                >
                  To our special day
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Swipe up prompt overlay */}
        <AnimatePresence>
          {phase === "waiting" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute bottom-16 left-0 right-0 text-center z-30"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ChevronUp
                  size={36}
                  className="mx-auto text-white opacity-80 drop-shadow-md"
                  aria-hidden="true"
                />
                <p className="font-body text-xl mt-2 text-white drop-shadow-md tracking-wide">
                  Swipe up to open
                </p>
                <p className="font-title tracking-[0.25em] text-[11px] text-white/80 mt-1 uppercase drop-shadow-md">
                  Our Invitation
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}