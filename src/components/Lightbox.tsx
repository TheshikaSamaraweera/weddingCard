"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  image: string | null;
  onClose: () => void;
}

export default function Lightbox({
  image,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white"
          >
            <X size={36} />
          </button>

          <motion.img
            src={image}
            alt=""
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-h-[90vh] rounded-3xl shadow-2xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}