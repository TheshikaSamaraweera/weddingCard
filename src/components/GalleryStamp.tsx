"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StampContainer from "./StampContainer";

const photos = [
  { src: "/couple.png", rotation: -3 },
  { src: "/couple.png", rotation: 2 },
  { src: "/couple.png", rotation: -1 },
  { src: "/couple.png", rotation: 3 },
];

export default function GalleryStamp() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <StampContainer
        title="Gallery"
        subtitle="Precious Moments"
        id="gallery"
      >
        <div className="grid grid-cols-2 gap-5">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: photo.rotation }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: photo.rotation,
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="polaroid cursor-pointer"
              onClick={() => setSelected(photo.src)}
            >
              {/* Tape */}
              <div className="polaroid-tape" aria-hidden="true" />

              {/* Photo */}
              <div className="aspect-square overflow-hidden bg-[#C5DCCF]">
                <img
                  src={photo.src}
                  alt={`Moment ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </StampContainer>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/85 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="polaroid max-w-[320px] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected}
                alt="Gallery photo"
                className="w-full aspect-square object-cover"
              />
            </motion.div>

            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white text-3xl font-light"
              aria-label="Close gallery"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}