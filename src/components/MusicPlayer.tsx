"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.4;
  }, []);

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
      <audio ref={audioRef} loop src="/music.mp3" preload="none" />

      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
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
      </button>
    </>
  );
}