"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PerfumeCollectionSection() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const images = [
    "/Box1.jpg",
    "/Box2.jpg",
    "/Box3.jpg",
    "/Box4.png",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-16 px-6 md:px-20 font-serif">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <span className="text-xs uppercase tracking-widest text-blue-900 font-semibold bg-blue-100/60 px-3 py-1 rounded-full border border-blue-900/10 shadow-sm">
            Visual Showcase
          </span>
          <h2
            className="text-5xl md:text-6xl text-center text-gray-900 font-bold mt-3 mb-4"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Perfume <span className="text-blue-900">Gallery</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            A glimpse into our signature bottles, luxury packaging, and royal essential oil blends.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="w-full h-80 bg-white/70 backdrop-blur-md rounded-2xl border border-blue-900/10 shadow-md hover:shadow-2xl transition-all duration-300 p-3 overflow-hidden group cursor-pointer flex items-center justify-center"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center">
                <Image
                  src={img}
                  alt={`Perfume Showcase ${index + 1}`}
                  fill
                  className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}