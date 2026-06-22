"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MdPhone, MdEmail, MdLocationOn, MdSend } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  {
    icon: MdPhone,
    label: "Phone",
    value: "+233 000 000 000",
    href: "tel:+233000000000",
    id: "contact-phone-link",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+233 000 000 000",
    href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "233000000000"}?text=Hello%20Celebrity%20Plumber%2C%20I%20would%20like%20to%20make%20an%20inquiry.`,
    id: "contact-whatsapp-link",
  },
  {
    icon: MdEmail,
    label: "Email",
    value: "info@celebrityplumber.com",
    href: "mailto:info@celebrityplumber.com",
    id: "contact-email-link",
  },
  {
    icon: MdLocationOn,
    label: "Location",
    value: "Accra, Ghana",
    href: "#",
    id: "contact-location-link",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      setError("Failed to send message. Please try calling or messaging us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
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
          <h2 className="section-heading mb-3">Get in Touch</h2>
          <p className="section-subheading mx-auto text-center">
            Ready to start your project? Reach out and we&apos;ll get back to you
            promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="bg-gradient-to-br from-[#0b2c6b] to-[#1a4499] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
              {/* Decorative blob */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

              <h3
                className="text-xl font-bold mb-2 relative z-10"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Request a Quote Today
              </h3>
              <p className="text-blue-200 text-sm mb-8 relative z-10">
                Our team typically responds within a few hours. Reach us
                through any of the channels below.
              </p>

              <div className="space-y-5 relative z-10">
                {contactInfo.map((item) => {
                  const { icon: Icon } = item;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      id={item.id}
                      target={item.href.startsWith("https") ? "_blank" : undefined}
                      rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 group hover:opacity-90 transition-opacity"
                    >
                      <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-orange-500/30 group-hover:border-orange-400/30 transition-colors duration-200 shrink-0">
                        <Icon className="text-orange-300 text-xl" />
                      </div>
                      <div>
                        <div className="text-xs text-blue-300 uppercase tracking-wider">
                          {item.label}
                        </div>
                        <div className="text-white font-medium text-sm">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Working Hours */}
              <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                <p className="text-blue-200 text-xs uppercase tracking-wider mb-2 font-medium">
                  Working Hours
                </p>
                <p className="text-white text-sm">Monday – Saturday: 7:00am – 6:00pm</p>
                <p className="text-blue-300 text-sm">Sunday: Emergency calls only</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div className="bg-[#f8faff] rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm">
              <h3
                className="text-xl font-bold text-[#0b2c6b] mb-6"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Send Us a Message
              </h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium"
                >
                  Thank you! Your message has been received. We&apos;ll be in
                  touch soon.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium"
                >
                  {error}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b2c6b]/25 focus:border-[#0b2c6b] transition-colors duration-200 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+233 000 000 000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b2c6b]/25 focus:border-[#0b2c6b] transition-colors duration-200 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project or inquiry..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b2c6b]/25 focus:border-[#0b2c6b] transition-colors duration-200 text-sm resize-none"
                  />
                </div>

                <motion.button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={loading}
                  whileHover={loading ? {} : { scale: 1.02 }}
                  whileTap={loading ? {} : { scale: 0.97 }}
                  className={`w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-white font-semibold rounded-xl shadow-md transition-all duration-200 ${
                    loading
                      ? "bg-slate-400 cursor-not-allowed shadow-none"
                      : "bg-orange-500 hover:bg-orange-600 shadow-orange-500/25 hover:shadow-orange-500/40"
                  }`}
                >
                  <MdSend className="text-lg" />
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
