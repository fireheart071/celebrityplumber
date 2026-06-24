"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Other Services", href: "#other-services" },
];

const services = [
  "Pipe Installation",
  "Leak Detection",
  "Drain Cleaning",
  "Floor Tiling",
  "Wall Tiling",
  "Bathroom Tiling",
];

export default function Footer() {
  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#071d47] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center shadow-md">
                <Image
                  src="/logo.png"
                  alt="Celebrity Plumber Logo"
                  fill
                  sizes="36px"
                  className="object-contain"
                  priority
                />
              </div>
              <span
                className="font-bold text-lg"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Celebrity<span className="text-orange-400">Plumber</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Professional plumbing and tiling services for homes, offices, and
              commercial properties. Quality and reliability you can count on.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaFacebook, label: "Facebook", href: "#" },
                { icon: FaInstagram, label: "Instagram", href: "#" },
                { icon: FaTwitter, label: "Twitter", href: "#" },
                {
                  icon: FaWhatsapp,
                  label: "WhatsApp",
                  href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "233000000000"}`,
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("https") ? "_blank" : undefined}
                  rel={href.startsWith("https") ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-200"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold text-white mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="text-slate-400 text-sm hover:text-orange-400 transition-colors duration-150 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-semibold text-white mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleScroll("#services")}
                    className="text-slate-400 text-sm hover:text-orange-400 transition-colors duration-150 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold text-white mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="tel:+233000000000" className="hover:text-orange-400 transition-colors duration-150">
                  +233 000 000 000
                </a>
              </li>
              <li>
                <a href="mailto:info@celebrityplumber.com" className="hover:text-orange-400 transition-colors duration-150">
                  info@celebrityplumber.com
                </a>
              </li>
              <li className="text-slate-400">Accra, Ghana</li>
              <li className="text-slate-400">Mon–Sat: 7:00am – 6:00pm</li>
            </ul>

            <a
              id="footer-quote-btn"
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "233000000000"}?text=Hello%20Celebrity%20Plumber%2C%20I%20would%20like%20to%20make%20an%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>
            &copy; {year} Celebrity Plumber. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-slate-600">
            <span>Professional Plumbing &amp; Tiling Services</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>
              Designed by{" "}
              <a
                href="https://skytechghana.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 text-slate-500 transition-colors font-medium"
              >
                Skytech Ghana
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
