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
          <motion.div
            className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#1F4A3A] opacity-60"
            aria-hidden="true"
            initial={{ x: -10, y: -10, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          />
          <motion.div
            className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#1F4A3A] opacity-60"
            aria-hidden="true"
            initial={{ x: 10, y: -10, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          />
          <motion.div
            className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#1F4A3A] opacity-60"
            aria-hidden="true"
            initial={{ x: -10, y: 10, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          />
          <motion.div
            className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#1F4A3A] opacity-60"
            aria-hidden="true"
            initial={{ x: 10, y: 10, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          />

          {/* Content */}
          <div className="relative z-[1]">
            {/* Title */}
            <motion.h2 
              className="font-title text-center text-2xl tracking-[0.15em] gold-text uppercase"
              initial={{ opacity: 0, y: 15, filter: "blur(3px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {title}
            </motion.h2>

            {/* Decorative divider */}
            <motion.div 
              className="flex items-center justify-center gap-3 my-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#1F4A3A]" 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.div 
                className="w-2 h-2 rotate-45 bg-[#1F4A3A] opacity-60"
                animate={{ rotate: [45, 225, 45] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#1F4A3A]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>

            {/* Subtitle */}
            {subtitle && (
              <motion.p 
                className="font-title text-center text-[11px] tracking-[0.2em] text-[#2C5846] uppercase mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                {subtitle}
              </motion.p>
            )}

            {/* Children */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}