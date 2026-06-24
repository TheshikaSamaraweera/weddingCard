"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface EnvelopeProps {
  onOpen: () => void;
  guestName?: string;
}

type Phase = "intro" | "waiting" | "opening";

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
    onOpen();
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