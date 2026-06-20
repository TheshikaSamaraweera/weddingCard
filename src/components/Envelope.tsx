"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Trigger the opening animation
  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    // Wait for the open animation to play, then signal to parent to transition to main app
    setTimeout(() => {
      onOpen();
    }, 1500); // 1.5s delay to show the open envelope before crossfading to content
  };

  return (
    <motion.div
      // We use onPanEnd to detect a swipe without physically moving the container
      onPanEnd={(e, info) => {
        if (info.offset.y < -50) {
          handleOpen();
        }
      }}
      className="min-h-screen flex flex-col items-center justify-center bg-[#0D2B1F] select-none relative overflow-hidden touch-none"
    >
      <div className="w-full h-full absolute inset-0 flex items-center justify-center max-w-[430px] mx-auto">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="closed"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: "url('/envilop_close.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Swipe up prompt overlay */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="absolute bottom-16 left-0 right-0 text-center"
              >
                <ChevronUp
                  size={36}
                  className="mx-auto text-white opacity-80 drop-shadow-md"
                  aria-hidden="true"
                />
                <p className="font-body text-xl mt-2 text-white drop-shadow-md tracking-wide">
                  Slide upward to unveil
                </p>
                <p className="font-title tracking-[0.25em] text-[11px] text-white/80 mt-1 uppercase drop-shadow-md">
                  Our Invitation
                </p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: "url('/envilop_open.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}