
// "use client";
// import { Dancing_Script } from "next/font/google";
// import { motion } from "framer-motion";

// const dancing = Dancing_Script({
//   subsets: ["latin"],
//   weight: ["700"],
// });

// export default function Footer() {
//   const containerVariants = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.2 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <footer className="text-black bg-gradient-to-tl from-purple-200 to-white pt-12 pb-6 mt-16">
//       <motion.div
//         className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}>
//         <motion.div variants={itemVariants}>
//           <h2 className={`${dancing.className} text-3xl mb-4`}>
//             <span className="text-purple-800">Shah</span> Fragrance
//           </h2>
//           <p className="text-sm leading-relaxed font-serif">
//             Crafting long-lasting, signature scents that leave a royal impression. Wear the fragrance of confidence with Shah Fragrance.
//           </p>
//         </motion.div>
//         <motion.div variants={itemVariants}>
//           <h3 className="text-lg font-semibold mb-4 font-serif">Quick Links</h3>
//           <ul className="space-y-2 font-serif">
//             <li className="hover:text-purple-800 cursor-pointer transition">Home</li>
//             <li className="hover:text-purple-800 cursor-pointer transition">Products</li>
//             <li className="hover:text-purple-800 cursor-pointer transition">About</li>
//             <li className="hover:text-purple-800 cursor-pointer transition">Contact</li>
//           </ul>
//         </motion.div>
//         <motion.div variants={itemVariants}>
//           <h3 className="text-lg font-semibold mb-4 font-serif">Customer Care</h3>
//           <ul className="space-y-2 font-serif">
//             <li className="hover:text-purple-800 cursor-pointer transition">FAQs</li>
//             <li className="hover:text-purple-800 cursor-pointer transition">Shipping</li>
//             <li className="hover:text-purple-800 cursor-pointer transition">Returns</li>
//             <li className="hover:text-purple-800 cursor-pointer transition">Contact Us</li>
//           </ul>
//         </motion.div>
//         <motion.div variants={itemVariants}>
//           <h3 className="text-lg font-semibold mb-4 font-serif">Newsletter</h3>
//           <p className="text-sm mb-4 font-serif">
//             Subscribe to get special offers and signature fragrance updates.
//           </p>
//           <div className="flex bg-white rounded-full overflow-hidden shadow-sm border border-gray-300">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 px-4 py-2 outline-none text-sm"/>
//             <button className="bg-purple-900 font-serif text-white px-4 py-2 text-sm font-medium hover:bg-purple-800 transition">
//               Subscribe
//             </button>
//           </div>
//         </motion.div>
//       </motion.div>
//       <motion.div
//         className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-black font-serif"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.2 }}
//         transition={{ duration: 0.6, delay: 0.2 }}>
//         © 2026 Shah Fragrance All rights reserved developed by Urooj Fatima
//       </motion.div>
//     </footer>
//   );
// }

"use client";
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Footer() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="w-full text-gray-900 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 pt-16 pb-8 border-t border-blue-900/10 font-serif">
      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}>
        
        {/* Brand Column */}
        <motion.div variants={itemVariants}>
          <h2 className={`${dancing.className} text-3xl md:text-4xl mb-4 font-bold`}>
            <span className="text-blue-900">Shah</span> Fragrance
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed font-serif">
            Crafting long-lasting, signature scents that leave a royal impression. Wear the fragrance of confidence with Shah Fragrance.
          </p>
        </motion.div>

        {/* Quick Links Column */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-bold mb-4 text-gray-900 font-serif tracking-wide">Quick Links</h3>
          <ul className="space-y-2.5 text-sm text-gray-700 font-serif">
            <li>
              <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/Product" className="hover:text-blue-900 transition-colors">Products</Link>
            </li>
            <li>
              <Link href="/About" className="hover:text-blue-900 transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:text-blue-900 transition-colors">Contact Us</Link>
            </li>
          </ul>
        </motion.div>

        {/* Customer Care Column */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-bold mb-4 text-gray-900 font-serif tracking-wide">Customer Care</h3>
          <ul className="space-y-2.5 text-sm text-gray-700 font-serif">
            <li className="hover:text-blue-900 cursor-pointer transition-colors">FAQs</li>
            <li className="hover:text-blue-900 cursor-pointer transition-colors">Shipping Policy</li>
            <li className="hover:text-blue-900 cursor-pointer transition-colors">Returns & Exchanges</li>
            <li>
              <Link href="/Contact" className="hover:text-blue-900 transition-colors">Direct Support</Link>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter Column */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-bold mb-4 text-gray-900 font-serif tracking-wide">Newsletter</h3>
          <p className="text-sm mb-4 text-gray-700 font-serif leading-relaxed">
            Subscribe to get special offers and signature fragrance updates.
          </p>
          <div className="flex bg-white/80 backdrop-blur-md rounded-xl overflow-hidden shadow-sm border border-blue-900/10 p-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 outline-none text-sm text-gray-900 bg-transparent font-serif placeholder-gray-400"
            />
            <button className="bg-blue-900 font-serif text-white px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-blue-950 transition-all shadow-sm">
              Subscribe
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Copyright Bar */}
      <motion.div
        className="border-t border-blue-900/10 mt-12 pt-6 text-center text-xs md:text-sm text-gray-600 font-serif tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}>
        © 2026 Shah Fragrance. All rights reserved. Developed by Urooj Fatima.
      </motion.div>
    </footer>
  );
}