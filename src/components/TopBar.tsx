"use client";

import { MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#071d47] text-white text-sm py-2 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Contact Info */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5">
            <MdPhone className="text-orange-400 text-base shrink-0" />
            <a
              href="tel:+233200171258"
              className="hover:text-orange-400 transition-colors duration-200 font-medium"
              aria-label="Call Celebrity Plumber (primary)"
            >
              020 017 1258
            </a>
            <span className="text-slate-500">/</span>
            <a
              href="tel:+233501226174"
              className="hover:text-orange-400 transition-colors duration-200 font-medium"
              aria-label="Call Celebrity Plumber (secondary)"
            >
              050 122 6174
            </a>
          </div>
          <a
            href="mailto:info@celebrityplumber.com"
            className="flex items-center gap-1.5 hover:text-orange-400 transition-colors duration-200"
            aria-label="Email Celebrity Plumber"
          >
            <MdEmail className="text-orange-400 text-base shrink-0" />
            <span>info@celebrityplumber.com</span>
          </a>
          <span className="hidden md:flex items-center gap-1.5 text-slate-300">
            <MdAccessTime className="text-orange-400 text-base shrink-0" />
            <span>Mon – Sat: 7:00am – 6:00pm</span>
          </span>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="Facebook"
            className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
          >
            <FaFacebook className="text-base" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
          >
            <FaInstagram className="text-base" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
          >
            <FaTwitter className="text-base" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
