
// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Dancing_Script } from "next/font/google";
// import Link from "next/link";

// const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

// export default function Home() {
//   return (
//     <main className="min-h-[85vh] bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-100/60 flex items-center justify-center px-6 md:px-16 py-12">
//       <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="space-y-6 text-center md:text-left mx-auto md:mx-0">
          
//           {/* Badge */}
//           <span className="inline-block px-4 py-1.5 bg-blue-900/10 text-blue-900 rounded-full text-xs font-semibold uppercase tracking-widest font-serif border border-blue-900/20 shadow-sm">
//             Shah Fragrance — Signature Edition
//           </span>

//           {/* Heading */}
//           <h1 className={`${dancingScript.className} text-5xl md:text-7xl font-bold text-gray-900 mt-1 leading-tight`}>
//             Where luxury meets <span className="text-blue-700">identity</span>.
//           </h1>

//           {/* Description */}
//           <p className="text-gray-700 text-lg leading-relaxed font-serif max-w-lg">
//             Crafting long-lasting, signature scents that leave a royal impression. Wear the fragrance of confidence.
//           </p>

//           {/* Button with Link */}
//           <Link href="/Product" className="inline-block">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`${dancingScript.className} cursor-pointer mt-4 px-8 py-5 relative text-blue-700 font-bold transition-all duration-300 ease-in-out 
//                 w-auto max-w-xs overflow-hidden
//                 before:absolute before:top-0 before:left-0 before:w-6 before:h-6 
//                 before:border-t-4 before:border-l-4 before:border-blue-700 
//                 before:transition-all before:duration-300
//                 after:absolute after:bottom-0 after:right-0 before:z-10
//                 after:w-6 after:h-6 after:border-b-4 after:border-r-4 after:border-blue-700 
//                 after:transition-all after:duration-300
//                 hover:before:w-full hover:before:h-full hover:after:w-full hover:after:h-full
//                 hover:before:delay-150 hover:after:delay-150 text-2xl font-serif bg-white/40 backdrop-blur-sm rounded-lg shadow-sm`}>
//               Explore Collection
//             </motion.button>
//           </Link>
//         </motion.div>

//         {/* Right Side Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="flex justify-center">
//           <div className="relative w-full max-w-md h-[450px] flex items-center justify-center bg-white/60 backdrop-blur-md rounded-3xl border border-blue-900/10 shadow-2xl p-6">
//             <Image
//               src="/Box4.png"
//               alt="Shah Fragrance Luxury Perfume"
//               width={400}
//               height={400}
//               className="object-contain max-h-full drop-shadow-2xl rounded-2xl"
//               priority
//             />
//           </div>
//         </motion.div>

//       </div>
//     </main>
//   );
// }
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import { FaCrown, FaClock, FaShippingFast, FaWhatsapp } from "react-icons/fa";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center px-6 md:px-16 py-16 overflow-hidden font-serif">
      
      {/* Dynamic Animated Background Smoke / Mist Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Smoke Blob 1 */}
        <motion.div
          className="absolute top-1/4 left-10 w-96 h-96 bg-blue-300/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Smoke Blob 2 */}
        <motion.div
          className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Sparkles/Particles Effect */}
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-blue-900/20 rounded-full blur-[1px]"
            style={{
              top: `${15 + index * 14}%`,
              left: `${10 + index * 15}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: 3 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6 text-center md:text-left mx-auto md:mx-0"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-900/10 text-blue-900 rounded-full text-xs font-semibold uppercase tracking-widest border border-blue-900/20 shadow-sm backdrop-blur-md">
            <FaCrown className="text-amber-500 text-sm" /> Shah Fragrance — Signature Edition
          </span>

          {/* Headline */}
          <h1 className={`${dancingScript.className} text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight`}>
            Where luxury meets <span className="text-blue-900">identity</span>.
          </h1>

          {/* Subtitle Description */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
            Crafting long-lasting, signature scents that leave a royal impression. Wear the fragrance of ultimate confidence and timeless elegance.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
            <Link href="/Product">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-900 hover:bg-blue-950 text-white text-xs md:text-sm font-semibold uppercase tracking-wider rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-blue-700/30"
              >
                Explore Collection
              </motion.button>
            </Link>

            <a
              href="https://wa.me/923410139115"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 bg-white/80 hover:bg-white text-blue-900 text-xs md:text-sm font-semibold uppercase tracking-wider rounded-2xl shadow-md border border-blue-900/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-emerald-600 text-base" /> Order On WhatsApp
              </motion.button>
            </a>
          </div>

          {/* Trust Highlights Grid */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-blue-900/10 text-left">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md p-2.5 rounded-xl border border-blue-900/5">
              <FaCrown className="text-blue-900 text-lg flex-shrink-0" />
              <div>
                <p className="text-[11px] font-bold text-gray-900 leading-tight">100% Pure</p>
                <p className="text-[9px] text-gray-500 uppercase">Concentrated</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md p-2.5 rounded-xl border border-blue-900/5">
              <FaClock className="text-blue-900 text-lg flex-shrink-0" />
              <div>
                <p className="text-[11px] font-bold text-gray-900 leading-tight">24+ Hours</p>
                <p className="text-[9px] text-gray-500 uppercase">Projection</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md p-2.5 rounded-xl border border-blue-900/5">
              <FaShippingFast className="text-blue-900 text-lg flex-shrink-0" />
              <div>
                <p className="text-[11px] font-bold text-gray-900 leading-tight">Fast DC</p>
                <p className="text-[9px] text-gray-500 uppercase">Across PK</p>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Right Stage & Floating Bottle Showcase */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center relative"
        >
          {/* Outer Glowing Stage Frame */}
          <div className="relative w-full max-w-md h-[460px] flex items-center justify-center bg-white/75 backdrop-blur-md rounded-3xl border border-blue-900/15 shadow-2xl p-6">
            
            {/* Animated Light Pedestal Halo behind Perfume */}
            <motion.div
              className="absolute w-64 h-64 bg-gradient-to-tr from-blue-400/30 to-indigo-500/20 rounded-full blur-2xl"
              animate={{
                scale: [0.9, 1.15, 0.9],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Perfume Bottle Image with Floating Motion */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/Box4.png" // Using an existing working perfume image
                alt="Shah Fragrance Luxury Signature Bottle"
                width={380}
                height={380}
                className="object-contain max-h-full rounded-2xl drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Stage Base Reflection Line */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-3 bg-blue-900/10 rounded-full blur-sm"></div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}