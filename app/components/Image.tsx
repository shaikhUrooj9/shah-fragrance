// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function FeaturedOnSection() {
//   useEffect(() => {
//     const link = document.createElement("link");
//     link.href =
//       "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
//     link.rel = "stylesheet";
//     document.head.appendChild(link);
//   }, []);

//   const images = [
//     "/Image1.jpg",
//     "/Image2.jpg",
//     "/Image3.jpg",
//     "/Image4.jpg",
//     "/Image5.jpg",
//     "/Image6.jpg",
//   ];

//   const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
//   const [scrollDuration, setScrollDuration] = useState(20);
//   useEffect(() => {
//     const updateDuration = () => {
//       if (window.innerWidth < 768) setScrollDuration(15); 
//       else setScrollDuration(20);
//     };
//     updateDuration();
//     window.addEventListener("resize", updateDuration);
//     return () => window.removeEventListener("resize", updateDuration);
//   }, []);

//   return (
//     <div className="py-16 px-6 md:px-20 overflow-hidden">
//       <motion.h2
//         className="text-4xl md:text-5xl text-center text-black font-bold"
//         style={{ fontFamily: "'Dancing Script', cursive" }}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={fadeUp}>
//         Featured On
//       </motion.h2>

//       <motion.div
//         className="flex items-center justify-center gap-3 mt-4 mb-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={fadeUp}
//         transition={{ delay: 0.2 }}>
//         <span className="w-16 h-[1px] bg-purple-900"></span>
//         <span className="text-yellow-300">★</span>
//         <span className="w-16 h-[1px] bg-purple-900"></span>
//       </motion.div>

//       <div className="overflow-hidden relative">
//         <motion.div
//           className="flex gap-6 w-max"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{ repeat: Infinity, duration: scrollDuration, ease: "linear" }}>
//           {[...images, ...images].map((img, index) => (
//             <motion.img
//               key={index}
//               src={img}
//               alt={`Featured ${index + 1}`}
//               className="max-h-20 object-contain"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: index * 0.2 }}/>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaCrown, FaClock, FaGem, FaShippingFast, FaCheckCircle, FaAward } from "react-icons/fa";

export default function FeaturedOnSection() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const trustHighlights = [
    { icon: <FaCrown className="text-blue-900 text-xl" />, label: "Royal Signature Scents" },
    { icon: <FaClock className="text-blue-900 text-xl" />, label: "12+ Hours Lasting Projection" },
    { icon: <FaGem className="text-blue-900 text-xl" />, label: "100% Pure Imported Essential Oils" },
    { icon: <FaShippingFast className="text-blue-900 text-xl" />, label: "Fast & Safe Delivery" },
    { icon: <FaAward className="text-blue-900 text-xl" />, label: "Premium Quality Guarantee" },
    { icon: <FaCheckCircle className="text-blue-900 text-xl" />, label: "Leak-Proof Secure Packaging" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-16 px-6 md:px-20 overflow-hidden font-serif">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <span className="text-xs uppercase tracking-widest text-blue-900 font-semibold bg-blue-100/60 px-3 py-1 rounded-full border border-blue-900/10 shadow-sm">
            Shah Fragrance Distinction
          </span>
          <h2
            className="text-5xl md:text-6xl text-center text-gray-900 font-bold mt-3"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Why Choose <span className="text-blue-900">Shah Fragrance</span>
          </h2>
        </motion.div>

        {/* Infinite Scrolling Trust Banner */}
        <div className="overflow-hidden relative w-full py-4 bg-white/60 backdrop-blur-md rounded-2xl border border-blue-900/10 shadow-sm">
          <motion.div
            className="flex gap-12 w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...trustHighlights, ...trustHighlights].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/80 px-6 py-3 rounded-xl border border-blue-900/10 shadow-xs flex-shrink-0"
              >
                <div className="p-2 rounded-lg bg-blue-100/70">
                  {item.icon}
                </div>
                <span className="text-gray-900 font-medium text-sm md:text-base tracking-wide whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}