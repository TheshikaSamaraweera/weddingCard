"use client";

import { motion } from "framer-motion";
import EmptyStamp from "./EmptyStamp";
import { invitationData } from "@/types/invitation";
import { CalendarDays, Clock, MapPin } from "lucide-react";

// Custom Temple line-art icon
const TempleIcon = () => (
  <svg width="46" height="36" viewBox="0 0 46 36" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 26h30" />
    <path d="M12 26v-8l11-6 11 6v8" />
    <path d="M23 12V4" />
    <path d="M19 4h8" />
    <path d="M16 18h14" />
    <path d="M21 26v-4h4v4" />
  </svg>
);

// Custom elegant Dress icon
const DressIcon = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 4h10l2 5-4 1-3-1-3 1-4-1 2-5z" />
    <path d="M5 10l-2 12h18l-2-12" />
  </svg>
);

export default function WeddingDetailsStamp() {
  const details = [
    {
      icon: CalendarDays,
      label: "Date",
      value: `${invitationData.day}, ${invitationData.date}`,
    },
    {
      icon: Clock,
      label: "Time",
      value: invitationData.time,
    },
    {
      icon: MapPin,
      label: "Venue",
      value: `${invitationData.venue}\n${invitationData.venueAddress}`,
    },
    {
      icon: DressIcon,
      label: "Dress Code",
      value: invitationData.dressCode,
    },
  ];

  return (
    <section id="wedding-details" className="min-h-screen flex items-center justify-center px-3 py-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[410px]"
      >
        <EmptyStamp showPostmark={false} className="pb-6 h-[620px]">
          {/* Postmark Seal Image */}


          <div className="flex flex-col items-center w-full h-full justify-between relative z-10 pt-4">

            {/* Header Area */}
            <div className="flex flex-col items-center w-full px-4">
              <div className="mb-2 text-[#0D2B1F]">
                {/* <TempleIcon /> */}
              </div>
              <h2 className="font-title text-[22px] text-[#0D2B1F] tracking-widest uppercase font-bold text-center mt-14">
                WEDDING DETAILS
              </h2>

              {/* Fancy Divider */}
              <div className="flex items-center justify-center gap-3 my-4">
                <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#0D2B1F]/60" />
                <img src="/seal1.png" alt="Seal Ornament" className="w-8 h-8 object-contain opacity-85" />
                <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#0D2B1F]/60" />
              </div>

              <h3 className="font-title text-[15px] text-[#0D2B1F] tracking-widest uppercase font-bold mb-4">
                THE CEREMONY
              </h3>

              {/* Details List */}
              <div className="w-full space-y-4 px-2 pl-12">
                {details.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                    >
                      <div className="mt-1.5 text-[#0D2B1F]">
                        <Icon size={26} strokeWidth={1.8} />
                      </div>
                      <div>
                        <p className="font-title text-[16px] text-[#0D2B1F] font-bold tracking-wide">
                          {item.label}
                        </p>
                        <p className="font-body text-[14.5px] text-[#1A3B2E] mt-0.5 leading-snug whitespace-pre-line">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Graphic - home2 */}
            <div className="w-full flex justify-center mt-4 relative z-20">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                src="/home2.png"
                alt="Kandyan Heritage Hotel"
                className="w-full max-w-[230px] object-contain drop-shadow-md"
              />
            </div>

          </div>
        </EmptyStamp>
      </motion.div>
    </section>
  );
}