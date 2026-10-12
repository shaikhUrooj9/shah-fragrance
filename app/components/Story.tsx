"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BrandStorySection() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-16 px-6 md:px-20 font-serif">
      <div className="max-w-4xl mx-auto text-center">
        {/* Glassmorphic Container Card */}
        <motion.div
          className="bg-white/70 backdrop-blur-md rounded-3xl border border-blue-900/10 shadow-lg p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 bg-blue-100/70 text-blue-900 rounded-full text-xs font-semibold uppercase tracking-widest font-serif border border-blue-900/10 shadow-sm mb-4">
            Heritage & Passion
          </span>

          {/* Heading */}
          <h2
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Our Brand <span className="text-blue-900">Story</span>
          </h2>

          {/* Description */}
          <p className="text-gray-700 max-w-3xl mx-auto mb-8 font-serif text-base md:text-lg leading-relaxed">
            Shah Fragrance was born from the desire to craft luxurious, long-lasting signature scents that leave a royal impression. Each fragrance—from The Executive to Dark Horizon and After Hours—is meticulously curated to match your unique identity, blending confidence with timeless elegance. Our story is about passion, quality, and wearing the fragrance of confidence.
          </p>

          {/* Read More Link / Button */}
          <Link href="/About">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-blue-900 hover:bg-blue-950 text-white font-serif tracking-wider uppercase text-sm rounded-xl shadow-md transition-all duration-300"
            >
              Read More
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}