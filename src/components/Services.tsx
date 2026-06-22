"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaWrench,
  FaTint,
  FaToilet,
  FaShower,
  FaBolt,
  FaTools,
  FaTh,
  FaBorderAll,
  FaBath,
  FaUtensils,
  FaLayerGroup,
  FaPaintRoller,
} from "react-icons/fa";
import { GiWaterTank } from "react-icons/gi";
import { MdPlumbing, MdOutlineWaterDrop } from "react-icons/md";

const plumbingServices = [
  {
    icon: MdPlumbing,
    title: "Pipe Installation",
    desc: "Expert installation of all pipe types for new builds and renovations.",
  },
  {
    icon: MdOutlineWaterDrop,
    title: "Leak Detection & Repair",
    desc: "Advanced detection techniques to find and fix leaks fast.",
  },
  {
    icon: FaTint,
    title: "Drain Cleaning",
    desc: "Professional drain unblocking and cleaning services.",
  },
  {
    icon: FaToilet,
    title: "Bathroom Plumbing",
    desc: "Full bathroom plumbing installations and upgrades.",
  },
  {
    icon: GiWaterTank,
    title: "Water Tank Installation",
    desc: "Safe, code-compliant water tank setup and maintenance.",
  },
  {
    icon: FaTools,
    title: "Maintenance Services",
    desc: "Routine checks and preventive maintenance for your systems.",
  },
];

const tilingServices = [
  {
    icon: FaTh,
    title: "Floor Tiling",
    desc: "Precision floor tile laying for any room or surface type.",
  },
  {
    icon: FaBorderAll,
    title: "Wall Tiling",
    desc: "Beautiful, durable wall tile fitting with clean finishes.",
  },
  {
    icon: FaBath,
    title: "Bathroom Tiling",
    desc: "Complete bathroom tiling from floor to ceiling.",
  },
  {
    icon: FaUtensils,
    title: "Kitchen Tiling",
    desc: "Stylish and hygienic kitchen backsplash and floor tiles.",
  },
  {
    icon: FaWrench,
    title: "Tile Repairs",
    desc: "Cracked or loose tile repairs matched and replaced seamlessly.",
  },
  {
    icon: FaPaintRoller,
    title: "Tile Finishing",
    desc: "Expert grouting, sealing, and polishing for perfect results.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

function ServiceCard({
  service,
  index,
  accent,
}: {
  service: { icon: React.ElementType; title: string; desc: string };
  index: number;
  accent: string;
}) {
  const { icon: Icon, title, desc } = service;
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-shadow duration-300 group"
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
          accent === "orange"
            ? "bg-orange-50 text-orange-500"
            : "bg-blue-50 text-[#0b2c6b]"
        }`}
      >
        <Icon className="text-2xl" />
      </div>
      <h3
        className="text-[#0b2c6b] font-bold text-base mb-2"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" className="py-20 bg-[#f4f6fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="accent-bar mx-auto" />
          <h2 className="section-heading mb-3">Our Services</h2>
          <p className="section-subheading mx-auto text-center">
            From emergency repairs to complete installations — we handle it all
            with precision and care.
          </p>
        </motion.div>

        <div ref={ref}>
          {/* Plumbing Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center shadow-md">
              <MdPlumbing className="text-white text-xl" />
            </div>
            <h3
              className="text-xl font-bold text-[#0b2c6b]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Plumbing Services
            </h3>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
          >
            {plumbingServices.map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={i}
                accent="orange"
              />
            ))}
          </motion.div>

          {/* Tiling Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0b2c6b] flex items-center justify-center shadow-md">
              <FaLayerGroup className="text-white text-lg" />
            </div>
            <h3
              className="text-xl font-bold text-[#0b2c6b]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Tiling Services
            </h3>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {tilingServices.map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={i + 6}
                accent="blue"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
