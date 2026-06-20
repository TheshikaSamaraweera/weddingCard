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
        <EmptyStamp showPostmark={true}>
          <div className="flex flex-col items-center h-full justify-between w-full pt-8 pb-0">
            {/* Text Section */}
            <div className="flex flex-col items-center px-6">
              <h2 className="font-title text-2xl tracking-[0.15em] text-[#1F4A3A] uppercase mt-4 mb-6 font-bold">
                Thank You
              </h2>
              
              <div className="text-center space-y-4 font-body text-[14px] text-[#1A3B2E] tracking-wide">
                <p>
                  Thank you for being<br />a special part of our journey.
                </p>

                <p>
                  Your love, blessings and presence<br />will make our celebration<br />even more meaningful.
                </p>

                <p>
                  We can&apos;t wait to<br />celebrate with you!
                </p>
              </div>
            </div>

            {/* Couple Illustration */}
            <div className="mt-8 flex justify-center items-end w-full relative">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
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