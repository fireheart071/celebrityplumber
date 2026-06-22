"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaExpand } from "react-icons/fa";

// Unsplash free-to-use stock photos for plumbing/tiling work
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
    alt: "Modern bathroom plumbing installation",
    label: "Bathroom Plumbing",
    span: "lg:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    alt: "Professional copper piping and valves",
    label: "Pipe Fitting",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    alt: "Clean luxury bathroom tiling installation",
    label: "Wall Tiling",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&q=80",
    alt: "Luxury bathroom floor tiles",
    label: "Floor Tiling",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=800&q=80",
    alt: "Kitchen backsplash tiling work",
    label: "Kitchen Tiling",
    span: "lg:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    alt: "Modern kitchen renovation with tiles",
    label: "Kitchen Renovation",
    span: "",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="gallery" className="py-20 bg-[#f4f6fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
          ref={ref}
        >
          <div className="accent-bar mx-auto" />
          <h2 className="section-heading mb-3">Our Work</h2>
          <p className="section-subheading mx-auto text-center">
            A glimpse of the quality and craftsmanship we deliver on every
            project.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 ${img.span} h-64 sm:h-72`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2c6b]/80 via-[#0b2c6b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-5">
                <FaExpand className="text-white text-xl mb-2 opacity-75" />
                <span
                  className="text-white font-semibold text-sm"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {img.label}
                </span>
              </div>

              {/* Always-visible label strip */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-xs font-medium opacity-80 group-hover:opacity-0 transition-opacity duration-200">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-10"
        >
          <button
            id="gallery-contact-btn"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 border-2 border-[#0b2c6b] text-[#0b2c6b] font-semibold rounded-full hover:bg-[#0b2c6b] hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Contact Us for Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
