"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "James Mensah",
    role: "Homeowner",
    rating: 5,
    text: "Excellent service and very professional work. The team arrived on time, fixed our leaking pipes, and left everything clean. Highly recommended!",
    avatar: "JM",
  },
  {
    name: "Ama Boateng",
    role: "Interior Designer",
    rating: 5,
    text: "The tiling finish was absolutely clean and beautiful. Incredible attention to detail. My clients are always amazed at the quality of work Celebrity Plumber delivers.",
    avatar: "AB",
  },
  {
    name: "Richard Asante",
    role: "Commercial Property Owner",
    rating: 5,
    text: "We hired Celebrity Plumber for our office renovation. Full bathroom plumbing and tiling done from scratch. Completed ahead of schedule and within budget.",
    avatar: "RA",
  },
  {
    name: "Linda Owusu",
    role: "Restaurant Owner",
    rating: 5,
    text: "Our kitchen needed complete re-tiling and new drainage installed. They handled everything perfectly. Very experienced and trustworthy team.",
    avatar: "LO",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 bg-[#0b2c6b] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="accent-bar mx-auto" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            What Clients Say
          </h2>
          <p className="text-blue-200 text-base max-w-lg mx-auto">
            Real feedback from our satisfied customers across homes and businesses.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/15"
              >
                <FaQuoteLeft className="text-orange-400 text-3xl mb-6 opacity-70" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} className="text-orange-400 text-lg" />
                  ))}
                </div>

                <p className="text-white text-lg sm:text-xl leading-relaxed mb-8 font-light">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold" style={{ fontFamily: "var(--font-poppins)" }}>
                      {t.name}
                    </div>
                    <div className="text-blue-300 text-sm">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              id="testimonial-prev-btn"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-white/25 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200 flex items-center justify-center"
            >
              <FaChevronLeft className="text-sm" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2.5 bg-orange-400"
                      : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              id="testimonial-next-btn"
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-white/25 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200 flex items-center justify-center"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
