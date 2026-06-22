"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MdPhone, MdRequestQuote } from "react-icons/md";
import { FaShieldAlt, FaStar, FaAward } from "react-icons/fa";

const badges = [
  { icon: FaShieldAlt, label: "Trusted & Insured" },
  { icon: FaStar, label: "5-Star Rated" },
  { icon: FaAward, label: "10+ Years Experience" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#071d47]"
    >
      {/* Parallax Background Image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Professional plumber working"
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071d47]/95 via-[#0b2c6b]/80 to-[#0b2c6b]/40" />
      </motion.div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ y: contentY }}
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                Professional Plumbing & Tiling
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-5"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Celebrity{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                Plumber
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-blue-200 mb-4"
            >
              Quality Plumbing & Tiling Solutions{" "}
              <span className="text-white">You Can Trust</span>
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
            >
              We provide professional plumbing and tiling services for homes,
              offices, and commercial properties. Quality workmanship, timely
              delivery, and customer satisfaction guaranteed.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="tel:+233000000000"
                id="hero-call-btn"
                className="flex items-center gap-2.5 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <MdPhone className="text-lg" />
                Call Now
              </a>
              <button
                id="hero-quote-btn"
                onClick={() => handleScroll("contact")}
                className="flex items-center gap-2.5 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/50 text-white font-semibold rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <MdRequestQuote className="text-lg" />
                Get a Quote
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-slate-300 text-sm"
                >
                  <Icon className="text-orange-400 text-base shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image Card */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 h-[460px] w-full">
              <Image
                src="/hero-bg.png"
                alt="Skilled plumber at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 580px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071d47]/60 via-transparent to-transparent" />

              {/* Stats overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex gap-3">
                {[
                  { value: "10+", label: "Years Experience" },
                  { value: "500+", label: "Projects Done" },
                  { value: "100%", label: "Satisfaction" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 bg-white/10 backdrop-blur-md rounded-xl px-3 py-3 border border-white/20 text-center"
                  >
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-poppins)" }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-slate-400 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-orange-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
