"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EmptyStamp from "./EmptyStamp";
import { invitationData } from "@/types/invitation";

// Gold scroll corner ornament to match the premium vintage look in other pages
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

// Leaf branch flanking components
const LeftBranch = () => (
  <svg viewBox="0 0 50 120" className="w-[45px] h-[110px] text-[#2C5846]/80 absolute left-[-48px] top-[30px] pointer-events-none select-none">
    <path d="M45,110 C30,90 20,60 30,10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M38,95 C25,92 20,85 28,78 C33,83 36,90 38,95 Z" fill="currentColor" />
    <path d="M30,75 C15,72 10,65 18,58 C23,63 27,70 30,75 Z" fill="currentColor" />
    <path d="M26,55 C12,52 8,45 15,38 C20,43 23,50 26,55 Z" fill="currentColor" />
    <path d="M27,35 C15,30 12,22 20,17 C24,22 26,29 27,35 Z" fill="currentColor" />
    <path d="M30,15 C22,10 20,2 26,0 C29,5 30,10 30,15 Z" fill="currentColor" />
  </svg>
);

const RightBranch = () => (
  <svg viewBox="0 0 50 120" className="w-[45px] h-[110px] text-[#2C5846]/80 absolute right-[-48px] top-[30px] pointer-events-none select-none">
    <path d="M5,110 C20,90 30,60 20,10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12,95 C25,92 30,85 22,78 C17,83 14,90 12,95 Z" fill="currentColor" />
    <path d="M20,75 C35,72 40,65 32,58 C27,63 23,70 20,75 Z" fill="currentColor" />
    <path d="M24,55 C38,52 42,45 35,38 C30,43 27,50 24,55 Z" fill="currentColor" />
    <path d="M23,35 C35,30 38,22 30,17 C26,22 24,29 23,35 Z" fill="currentColor" />
    <path d="M20,15 C28,10 30,2 24,0 C21,5 20,10 20,15 Z" fill="currentColor" />
  </svg>
);

// Flower petal drawing component for bottom corners
const FlowerPetals = ({ cx, cy, r }: { cx: number, cy: number, r: number }) => {
  const pd = r * 0.7; // Petal displacement distance
  return (
    <g>
      <circle cx={cx} cy={cy - pd} r={r * 0.65} fill="#FEFCF7" stroke="#2C5846" strokeWidth="0.8" />
      <circle cx={cx + pd * 0.95} cy={cy - pd * 0.31} r={r * 0.65} fill="#FEFCF7" stroke="#2C5846" strokeWidth="0.8" />
      <circle cx={cx + pd * 0.59} cy={cy + pd * 0.81} r={r * 0.65} fill="#FEFCF7" stroke="#2C5846" strokeWidth="0.8" />
      <circle cx={cx - pd * 0.59} cy={cy + pd * 0.81} r={r * 0.65} fill="#FEFCF7" stroke="#2C5846" strokeWidth="0.8" />
      <circle cx={cx - pd * 0.95} cy={cy - pd * 0.31} r={r * 0.65} fill="#FEFCF7" stroke="#2C5846" strokeWidth="0.8" />
      <circle cx={cx} cy={cy} r={r * 0.38} fill="#C3A261" />
    </g>
  );
};

// Bottom left corner flower spray
const BottomLeftFlower = () => (
  <svg viewBox="0 0 100 100" className="w-[85px] h-[85px] text-[#2C5846]/60 absolute bottom-4 left-4 pointer-events-none select-none">
    {/* Stems */}
    <path d="M 5,95 C 10,75 22,60 25,45" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 5,95 C 30,85 50,75 65,72" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 5,95 C 15,80 30,70 40,55" fill="none" stroke="currentColor" strokeWidth="1" />
    {/* Leaves */}
    <path d="M 21,53 Q 16,48 13,38 Q 20,43 23,50 Z" fill="currentColor" />
    <path d="M 44,76 Q 49,69 57,68 Q 50,76 43,79 Z" fill="currentColor" />
    <path d="M 32,64 Q 28,55 24,48 Q 30,53 33,60 Z" fill="currentColor" />
    {/* Flowers */}
    <FlowerPetals cx={25} cy={45} r={8} />
    <FlowerPetals cx={52} cy={72} r={6} />
    <FlowerPetals cx={40} cy={55} r={5} />
  </svg>
);

// Bottom right corner flower spray
const BottomRightFlower = () => (
  <svg viewBox="0 0 100 100" className="w-[85px] h-[85px] text-[#2C5846]/60 absolute bottom-4 right-4 pointer-events-none select-none">
    {/* Stems mirrored */}
    <path d="M 95,95 C 90,75 78,60 75,45" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 95,95 C 70,85 50,75 35,72" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 95,95 C 85,80 70,70 60,55" fill="none" stroke="currentColor" strokeWidth="1" />
    {/* Leaves */}
    <path d="M 79,53 Q 84,48 87,38 Q 80,43 77,50 Z" fill="currentColor" />
    <path d="M 56,76 Q 51,69 43,68 Q 50,76 57,79 Z" fill="currentColor" />
    <path d="M 68,64 Q 72,55 76,48 Q 70,53 67,60 Z" fill="currentColor" />
    {/* Flowers */}
    <FlowerPetals cx={75} cy={45} r={8} />
    <FlowerPetals cx={48} cy={72} r={6} />
    <FlowerPetals cx={60} cy={55} r={5} />
  </svg>
);

export default function BlessingSeal() {
  const [sealed, setSealed] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-3 py-16">
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

          {/* Bottom corner flower decorations */}
          <BottomLeftFlower />
          <BottomRightFlower />

          <div className="flex flex-col items-center justify-between w-full h-full relative z-10 pt-10 min-h-[420px]">

            {/* Header Area */}
            <div className="text-center mb-2 mt-10">
              <h2 className="font-title text-[20px] text-[#123326] tracking-[0.15em] uppercase font-bold text-center leading-none">
                SEAL YOUR BLESSINGS
              </h2>
              <p className="font-title text-[10.5px] tracking-[0.18em] text-[#2C5846] mt-2 uppercase font-semibold">
                {sealed ? "YOUR BLESSINGS ARE SEALED!" : "TAP THE SEAL"}
              </p>
            </div>

            {/* Central Seal Area with flanking branches */}
            <div className="relative my-2 flex items-center justify-center w-[200px] h-[200px]">
              {/* Flanking leaf branches */}
              <LeftBranch />
              <RightBranch />

              {/* Interactive Seal */}
              <AnimatePresence mode="wait">
                {!sealed ? (
                  <motion.button
                    key="unsealed"
                    onClick={() => setSealed(true)}
                    whileTap={{ scale: 0.92 }}
                    whileHover={{ scale: 1.03 }}
                    className="absolute cursor-pointer seal-pulse focus:outline-none"
                    aria-label="Tap to seal your blessings"
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="wax-seal w-[170px] h-[170px] shadow-xl gold-glow">
                      <div className="text-center">
                        <span className="text-white text-4xl block mb-0.5">♥</span>
                        <span className="text-white/90 font-title text-[10.5px] tracking-widest block font-bold leading-tight">
                          TAP TO
                        </span>
                        <span className="text-white/90 font-title text-[10.5px] tracking-widest block font-bold leading-tight">
                          SEAL
                        </span>
                      </div>
                    </div>
                  </motion.button>
                ) : (
                  <motion.div
                    key="sealed"
                    className="absolute stamp-press z-20"
                  >
                    <img
                      src="/seal2.png"
                      alt="Sealed Blessings"
                      className="w-[180px] h-[180px] object-contain drop-shadow-xl"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            With Love 🤍
            <p className="font-title text-[16px] tracking-[0.18em] text-[#123326] uppercase font-bold">
              MUDITHA & MAHELI
            </p>
            <div className="text-center mt-14 flex flex-col items-center">
              <p className="font-title text-[14px] font-light text-[#123326] tracking-[0.15em] uppercase">

              </p>

              <span className="text-[#123326] text-sm block mt-2 mb-1">♥</span>
            </div>

          </div>
        </EmptyStamp>
      </motion.div>
    </section>
  );
}