"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  end: number;
  duration: number;
}

function Counter({ end, duration }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50); 
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}+</span>;
}

export default function AboutPage() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <section className="w-full min-h-screen px-6 md:px-12 lg:px-20 py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 text-gray-900 font-serif">
      
      {/* Header Title */}
      <motion.div className="max-w-4xl mx-auto text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}>
        
        <span className="text-xs uppercase tracking-widest text-blue-900 font-semibold bg-blue-100/70 px-3.5 py-1.5 rounded-full border border-blue-900/10 shadow-sm">
          Our Philosophy
        </span>

        <h2
          className="text-4xl md:text-6xl font-bold mt-4 mb-3 tracking-wide text-gray-900"
          style={{ fontFamily: "'Dancing Script', cursive" }}>
          Crafting Memories Through <span className="text-blue-900">Fragrance</span>
        </h2>
        
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="w-16 h-[2px] bg-blue-900/30"></span>
          <span className="text-amber-500 text-lg">★</span>
          <span className="w-16 h-[2px] bg-blue-900/30"></span>
        </div>
      </motion.div>
      
      {/* Content Grid with Central Image */}
      <motion.div
        className="grid lg:grid-cols-3 gap-12 items-center max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}>
        
        <motion.p className="text-gray-700 text-base md:text-lg leading-relaxed text-center lg:text-left" variants={fadeUp}>
          Perfume is more than a fragrance — it is an invisible signature that lingers in every room you enter. From the very first drop, our mission has been to craft perfumes that capture emotions, preserve memories, and speak the language of elegance. Each scent is born out of passion, artistry, and the desire to make every moment unforgettable.
        </motion.p>
        
        <motion.div className="flex justify-center" variants={fadeUp}>
          <div className="relative group overflow-hidden rounded-3xl shadow-xl border border-blue-900/10 max-w-sm w-full bg-white/60 p-3 backdrop-blur-md">
            <Image
              src="/About.jpg"
              alt="Luxury Perfume"
              width={500}
              height={500}
              className="w-full h-[380px] object-cover rounded-2xl group-hover:scale-105 transition duration-700"/>
          </div>
        </motion.div>

        <motion.p className="text-gray-700 text-base md:text-lg leading-relaxed text-center lg:text-right" variants={fadeUp}>
          We believe a perfume is not just worn, it is lived. Each bottle is a masterpiece, blending rare ingredients with timeless sophistication. Whether you seek freshness for bright mornings, depth for evening allure, or warmth for intimate moments — our collection holds a story just for you. A story of elegance, luxury, and individuality.
        </motion.p>
      </motion.div>
      
      {/* Statistics Counter Section */}
      <motion.div className="border border-blue-900/10 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl mt-24 py-12 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}>
        
        <div className="grid grid-cols-1 md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x divide-blue-900/10">
          <motion.div className="py-4 md:py-0" variants={fadeUp}>
            <h3 className="text-4xl md:text-5xl font-extrabold text-blue-900">
              <Counter end={450} duration={2000} />
            </h3>
            <p className="text-gray-600 mt-2 font-medium tracking-wide uppercase text-sm">Posted Stories</p>
          </motion.div>
          
          <motion.div className="py-4 md:py-0" variants={fadeUp}>
            <h3 className="text-4xl md:text-5xl font-extrabold text-blue-900">
              <Counter end={2000} duration={2500} />
            </h3>
            <p className="text-gray-600 mt-2 font-medium tracking-wide uppercase text-sm">Collection Items</p>
          </motion.div>
          
          <motion.div className="py-4 md:py-0" variants={fadeUp}>
            <h3 className="text-4xl md:text-5xl font-extrabold text-blue-900">
              <Counter end={5000} duration={3000} />
            </h3>
            <p className="text-gray-600 mt-2 font-medium tracking-wide uppercase text-sm">Happy Customers</p>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}