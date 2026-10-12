
export default function Heading() {
  return null;
}
// 'use client'
// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// export default function Home() {
//   useEffect(() => {
//     const link = document.createElement("link");
//     link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
//     link.rel = "stylesheet";
//     document.head.appendChild(link);
//   }, []);

//   const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

//   return (
//     <main className="w-full min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-6 md:px-16 py-16">
//       <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
//         {/* Left Text Section */}
//         <motion.div 
//           className="text-left flex flex-col justify-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={fadeUp}
//         >
//           <span className="inline-block w-fit px-4 py-1.5 bg-blue-900/10 text-blue-900 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 font-serif border border-blue-900/20 shadow-sm">
//             Shah Fragrance — Signature Edition
//           </span>

//           <h1
//             className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
//             style={{ fontFamily: "'Dancing Script', cursive" }}
//           >
//             Where luxury meets <span className="text-blue-700 bg-blue-200/50 px-3 py-1 rounded-xl">identity.</span>
//           </h1>

//           <p className="text-gray-700 text-lg md:text-xl font-serif leading-relaxed mb-8 max-w-xl">
//             Crafting long-lasting, signature scents that leave a royal impression. Wear the fragrance of confidence.
//           </p>

//           <div className="flex items-center gap-4">
//             <Link 
//               href="/Product" 
//               className="px-8 py-4 bg-blue-900 hover:bg-blue-950 text-white font-serif tracking-wider uppercase text-sm rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
//             >
//               Explore Collection
//             </Link>
//           </div>
//         </motion.div>

//         {/* Right Image Section */}
//         <motion.div 
//           className="flex justify-center relative w-full"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.9 }}
//         >
//           <div className="relative w-full max-w-lg h-[450px] flex items-center justify-center bg-white/60 backdrop-blur-md rounded-3xl border border-blue-900/10 shadow-2xl p-6">
//             <Image 
//               src="/invictus.jpg" 
//               alt="Shah Fragrance Luxury" 
//               width={450} 
//               height={450}
//               className="object-contain max-h-full drop-shadow-2xl rounded-2xl"
//               priority
//             />
//           </div>
//         </motion.div>

//       </div>
//     </main>
//   );
// }