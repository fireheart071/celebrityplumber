"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaBuilding,
  FaShieldAlt,
  FaPaintRoller,
  FaPaintBrush,
  FaHome,
  FaBolt,
} from "react-icons/fa";

const otherServices = [
  {
    icon: FaBuilding,
    title: "Masonry & Blockwork",
    desc: "Professional bricklaying, plastering, wall partitioning, and general concrete works executed to strict structural standards.",
  },
  {
    icon: FaShieldAlt,
    title: "Waterproofing & Damp Proofing",
    desc: "Advanced damp proofing solutions for foundations, floors, and retaining walls, preventing peeling paint and mold growth.",
  },
  {
    icon: FaPaintRoller,
    title: "POP Ceilings & Finishes",
    desc: "Modern and decorative POP ceiling designs, decorative moldings, plasterboard partitioning, and clean wall plastering.",
  },
  {
    icon: FaPaintBrush,
    title: "Professional Painting",
    desc: "High-quality interior and exterior painting services utilizing premium weather-shield paints for maximum durability.",
  },
  {
    icon: FaHome,
    title: "Turnkey Renovations",
    desc: "Complete remodeling and upgrades for bathrooms, kitchens, offices, and full residential homes, managed from start to finish.",
  },
  {
    icon: FaBolt,
    title: "Electrical Works",
    desc: "Reliable electrical wiring, conduit piping, distribution board installations, and fixture fittings for domestic and commercial projects.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function OtherServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="other-services" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="accent-bar mx-auto" />
          <h2 className="section-heading mb-3">Other Construction Services</h2>
          <p className="section-subheading mx-auto text-center">
            Beyond plumbing and tiling, we provide reliable, high-end building and renovation solutions to complete your project.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {otherServices.map((service) => {
            const { icon: Icon, title, desc } = service;
            return (
              <motion.div
                key={title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="flex flex-col p-6 rounded-2xl border border-slate-100 bg-[#f8faff] hover:bg-white hover:shadow-lg hover:border-blue-100 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#0b2c6b] text-white flex items-center justify-center shadow-md mb-5 group-hover:bg-orange-500 transition-colors duration-300">
                  <Icon className="text-xl" />
                </div>

                {/* Content */}
                <h3
                  className="font-bold text-[#0b2c6b] text-lg mb-2 group-hover:text-orange-500 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
