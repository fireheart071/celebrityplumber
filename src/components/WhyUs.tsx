"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaUserTie,
  FaDollarSign,
  FaBolt,
  FaGem,
  FaHardHat,
  FaSmile,
} from "react-icons/fa";

const benefits = [
  {
    icon: FaUserTie,
    title: "Professional Service",
    desc: "Our trained team delivers expert-level workmanship on every job, big or small.",
  },
  {
    icon: FaDollarSign,
    title: "Affordable Pricing",
    desc: "Transparent quotes with no hidden fees. We offer competitive rates without compromising quality.",
  },
  {
    icon: FaBolt,
    title: "Fast Response",
    desc: "We respond quickly to your requests and minimize downtime for emergency situations.",
  },
  {
    icon: FaGem,
    title: "Quality Materials",
    desc: "We only use premium, certified materials to ensure long-lasting and reliable results.",
  },
  {
    icon: FaHardHat,
    title: "Skilled Workmanship",
    desc: "Decades of hands-on experience across plumbing and tiling disciplines.",
  },
  {
    icon: FaSmile,
    title: "Customer Satisfaction",
    desc: "Your satisfaction is our top priority — we don't stop until the job meets your standards.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="why-us" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="accent-bar mx-auto" />
          <h2 className="section-heading mb-3">Why Choose Celebrity Plumber?</h2>
          <p className="section-subheading mx-auto text-center">
            We set the standard for quality, reliability, and customer care in
            every project we undertake.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, i) => {
            const { icon: Icon, title, desc } = benefit;
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="flex gap-5 p-6 rounded-2xl border border-slate-100 bg-[#f8faff] hover:bg-white hover:shadow-lg hover:border-blue-100 transition-all duration-300 group"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.15, type: "spring", stiffness: 200 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b2c6b] to-[#1a4499] flex items-center justify-center text-white shadow-md shrink-0 group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon className="text-xl" />
                </motion.div>

                {/* Text */}
                <div>
                  <h3
                    className="font-bold text-[#0b2c6b] mb-2"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 bg-gradient-to-r from-[#0b2c6b] to-[#1a4499] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2aDZ2LTZoLTZ2NnptLTEyIDBoNnYtNmgtNnY2em0tNiAwaDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50 pointer-events-none" />
          <h3
            className="text-2xl sm:text-3xl font-bold mb-4 relative z-10"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Ready to Get Started?
          </h3>
          <p className="text-blue-100 mb-7 max-w-xl mx-auto relative z-10">
            Contact us today for a free consultation and competitive quote. Our
            team is ready to handle your project with care.
          </p>
          <button
            id="whyus-cta-btn"
            onClick={() =>
              document
                .getElementById("footer")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="relative z-10 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Request a Free Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
