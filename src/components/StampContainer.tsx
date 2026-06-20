"use client";

import { motion } from "framer-motion";

interface StampContainerProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
}

export default function StampContainer({
  title,
  subtitle,
  children,
  id,
}: StampContainerProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center px-3 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[410px]"
      >
        <div className="stamp-card relative p-7 overflow-hidden">
          {/* Corner ornaments */}
          <div
            className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#1F4A3A] opacity-60"
            aria-hidden="true"
          />
          <div
            className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#1F4A3A] opacity-60"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#1F4A3A] opacity-60"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#1F4A3A] opacity-60"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-[1]">
            {/* Title */}
            <h2 className="font-title text-center text-2xl tracking-[0.15em] gold-text uppercase">
              {title}
            </h2>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 my-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#1F4A3A]" />
              <div className="w-2 h-2 rotate-45 bg-[#1F4A3A] opacity-60" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#1F4A3A]" />
            </div>

            {/* Subtitle */}
            {subtitle && (
              <p className="font-title text-center text-[11px] tracking-[0.2em] text-[#2C5846] uppercase mb-6">
                {subtitle}
              </p>
            )}

            {/* Children */}
            {children}
          </div>
        </div>
      </motion.div>
    </section>
  );
}