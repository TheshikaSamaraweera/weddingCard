"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.4;

    const tryPlay = () => {
      if (audioRef.current && !playing) {
        audioRef.current.play().then(() => {
          setPlaying(true);
          // Remove listeners once it successfully starts playing
          window.removeEventListener('click', tryPlay);
          window.removeEventListener('touchstart', tryPlay);
        }).catch(() => {
          // Still blocked
        });
      }
    };

    // Attempt autoplay immediately
    audioRef.current.play().then(() => {
      setPlaying(true);
    }).catch(() => {
      // Autoplay blocked by browser - wait for user interaction
      window.addEventListener('click', tryPlay);
      window.addEventListener('touchstart', tryPlay);
    });

    return () => {
      window.removeEventListener('click', tryPlay);
      window.removeEventListener('touchstart', tryPlay);
    };
  }, [playing]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay blocked - that's ok
      });
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} autoPlay loop src="/intro.mp3" preload="auto" />

      <div className="fixed bottom-5 right-5 z-[100] flex items-center justify-center">
        {/* Animated ripple rings when playing */}
        {playing && (
          <>
            <motion.div
              className="absolute w-12 h-12 rounded-full bg-[#1F4A3A]/30"
              animate={{ scale: [1, 2.2], opacity: [0.8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
            />
            <motion.div
              className="absolute w-12 h-12 rounded-full bg-[#C9A66B]/20"
              animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: 0.6 }}
            />
            {/* Soft pulse glow */}
            <motion.div
              className="absolute w-12 h-12 rounded-full bg-[#1F4A3A]/20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          </>
        )}

        <motion.button
          onClick={toggleMusic}
          whileHover={{ scale: 1.1, boxShadow: "0 6px 20px rgba(201, 166, 107, 0.6)" }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
          className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #1F4A3A, #123326)",
            boxShadow: "0 4px 15px rgba(201, 166, 107, 0.4)",
          }}
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing ? (
            <Volume2 size={18} className="text-white" />
          ) : (
            <VolumeX size={18} className="text-white" />
          )}
        </motion.button>
      </div>
    </>
  );
}