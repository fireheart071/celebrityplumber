"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { MdPlumbing } from "react-icons/md";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Other Services", href: "#other-services" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-[#0b2c6b]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Celebrity Plumber Home"
          >
            <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
              <MdPlumbing className="text-white text-lg" />
            </div>
            <span
              className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
                scrolled ? "text-[#0b2c6b]" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Celebrity<span className="text-orange-500">Plumber</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md group ${
                  scrolled
                    ? activeSection === link.href.replace("#", "")
                      ? "text-orange-500"
                      : "text-slate-700 hover:text-[#0b2c6b]"
                    : activeSection === link.href.replace("#", "")
                    ? "text-orange-400"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "w-4/5"
                      : "w-0 group-hover:w-4/5"
                  }`}
                />
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#footer")}
              className="ml-3 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-orange-500/30 transition-all duration-200 hover:scale-105 active:scale-95"
              id="navbar-cta-btn"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled ? "text-[#0b2c6b]" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            id="mobile-menu-btn"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-50 hover:text-[#0b2c6b] transition-colors duration-150"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#footer")}
                className="mt-2 px-4 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-150"
              >
                Get a Free Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
