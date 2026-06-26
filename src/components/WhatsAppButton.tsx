"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const whatsappNumbers = [
    { label: "020 017 1258", value: "233200171258" },
    { label: "050 122 6174", value: "233501226174" },
  ];

  const message = "Hello Celebrity Plumber, I would like to make an inquiry.";

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="fixed bottom-10 right-5 z-50 flex flex-col items-end gap-3">
      {/* Selection Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 flex flex-col gap-2 min-w-[200px]"
          >
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 mb-1">
              Select WhatsApp Number:
            </div>
            {whatsappNumbers.map((num) => (
              <a
                key={num.value}
                href={`https://wa.me/${num.value}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-green-50 text-slate-700 hover:text-green-600 font-semibold transition-all duration-200 text-sm"
              >
                <FaWhatsapp className="text-xl text-[#25D366]" />
                <span>{num.label}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating button */}
      <div className="relative">
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: "easeOut",
          }}
        />

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          id="whatsapp-floating-btn"
          aria-label="Toggle WhatsApp Contact Options"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-shadow duration-200 focus:outline-none"
        >
          <FaWhatsapp className="text-3xl sm:text-4xl" />
        </motion.button>
      </div>
    </div>
  );
}
