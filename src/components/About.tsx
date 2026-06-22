"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const highlights = [
  "Expert installations and repairs",
  "Fast and reliable response times",
  "Premium quality materials used",
  "Fully trained and certified team",
  "Satisfaction guaranteed on all jobs",
  "Competitive and transparent pricing",
];

const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Emergency Support" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px] sm:h-[480px] w-full">
              <Image
                src="/about-team.png"
                alt="Celebrity Plumber team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 580px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2c6b]/30 to-transparent" />
            </div>

            {/* Floating experience card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#0b2c6b] text-white rounded-2xl px-6 py-5 shadow-2xl border border-white/10"
            >
              <div
                className="text-4xl font-extrabold text-orange-400"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                10+
              </div>
              <div className="text-sm text-slate-300 mt-1 font-medium">
                Years of Expertise
              </div>
            </motion.div>

            {/* Verified badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-4 -left-4 sm:-left-6 bg-orange-500 text-white rounded-xl px-4 py-3 shadow-xl flex items-center gap-2"
            >
              <MdVerified className="text-xl" />
              <span className="text-sm font-semibold">Certified Professionals</span>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <div className="accent-bar" />
            <h2 className="section-heading mb-4">About Celebrity Plumber</h2>
            <p className="section-subheading mb-6">
              Celebrity Plumber is dedicated to delivering high-quality plumbing
              and tiling services with professionalism and precision. With
              extensive experience in installations, repairs, maintenance, and
              finishing, we ensure every project is completed to the highest
              standard.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Whether you need a single tap fixed or a full bathroom renovation,
              our skilled team brings the same level of care and craftsmanship to
              every job. We work with homes, offices, and commercial properties
              throughout the region.
            </p>

            {/* Highlights */}
            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-orange-500 text-base shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              id="about-cta-btn"
              className="px-8 py-3.5 bg-[#0b2c6b] hover:bg-[#1a4499] text-white font-semibold rounded-full shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Work With Us
            </button>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-[#f4f6fb] rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all duration-200"
            >
              <div
                className="text-3xl font-extrabold text-[#0b2c6b] mb-1"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
