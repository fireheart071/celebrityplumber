"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const number =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "233000000000";
  const message =
    "Hello%20Celebrity%20Plumber%2C%20I%20would%20like%20to%20make%20an%20inquiry.";
  const href = `https://wa.me/${number}?text=${message}`;

  return (
    <div className="fixed bottom-10 right-5 z-50 flex flex-col items-center gap-2">
      {/* Tooltip label */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 4 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.4 }}
        className="bg-white text-[#0b2c6b] text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-slate-100 whitespace-nowrap pointer-events-none"
      >
        Chat with us
      </motion.div>

      {/* Pulse ring */}
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

        {/* Main button */}
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          id="whatsapp-floating-btn"
          aria-label="Contact Celebrity Plumber on WhatsApp"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-shadow duration-200"
        >
          <FaWhatsapp className="text-3xl sm:text-4xl" />
        </motion.a>
      </div>
    </div>
  );
}
