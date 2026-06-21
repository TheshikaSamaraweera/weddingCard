"use client";

import { motion } from "framer-motion";
import EmptyStamp from "./EmptyStamp";

export default function ThankYouStamp() {
  return (
    <section id="thank-you" className="min-h-screen flex items-center justify-center px-3 py-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[410px]"
      >
        <EmptyStamp showPostmark={true} className="h-[620px]">
          <div className="flex flex-col items-center h-full justify-between w-full pt-14 pb-0">
            {/* Text Section */}
            <div className="flex flex-col items-center px-6">
              <motion.h2
                className="font-title text-2xl tracking-[0.15em] text-[#1F4A3A] uppercase mt-4 mb-6 font-bold"
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Thank You
              </motion.h2>

              <div className="text-center space-y-4 font-body text-[14px] text-[#1A3B2E] tracking-wide">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Thank you for being<br />a special part of our journey.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  Your love, blessings and presence<br />will make our celebration<br />even more meaningful.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  We can&apos;t wait to<br />celebrate with you!
                </motion.p>

                <motion.span
                  className="inline-block text-2xl mt-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                >

                </motion.span>
              </div>
            </div>

            {/* Couple Illustration */}
            <div className="flex justify-center items-end w-[45%] relative">
              <motion.img
                initial={{ opacity: 0, y: 30, scale: 0.9, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                src="/couple.png"
                alt="Muditha and Maheli"
                className="w-full max-w-[320px] object-contain relative z-20"
                style={{ marginBottom: "-10px" }}
              />
            </div>
          </div>
        </EmptyStamp>
      </motion.div>
    </section>
  );
}