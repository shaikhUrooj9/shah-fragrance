
// "use client";
// import { useEffect } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function ProductCollection() {
//   useEffect(() => {
//     const link = document.createElement("link");
//     link.href =
//       "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
//     link.rel = "stylesheet";
//     document.head.appendChild(link);
//   }, []);

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const products = [
//     {
//       id: 1,
//       name: "Invictus Men",
//       brand: "Paco Rabanne",
//       desc: "A fresh and energetic fragrance crafted by Shah Fragrance.",
//       price: "350",
//       image: "/perfume1.jpg",
//       discount: "20% OFF",
//     },
//     {
//       id: 2,
//       name: "Oudh & Rose",
//       brand: "Ahmed Al Maghribi",
//       desc: "A rich and captivating blend of traditional oud and soft rose.",
//       price: "450",
//       image: "/perfume2.jpg",
//     },
//     {
//       id: 3,
//       name: "Sauvage",
//       brand: "Christian Dior",
//       desc: "A radically fresh, raw, and noble signature fragrance.",
//       price: "500",
//       image: "/perfume3.jpg",
//       discount: "15% OFF",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-white px-6 py-12">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <motion.div
//           className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-12"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.8 }}
//         >
//           <p
//             className="text-7xl text-black"
//             style={{ fontFamily: "'Dancing Script', cursive" }}
//           >
//             Top <span className="text-purple-600">Collection</span>
//           </p>
//           <p className="text-gray-800 leading-relaxed text-xl max-w-md sm:max-w-xl font-serif">
//             Explore our exclusive collection crafted with premium notes to leave a lasting royal impression.
//           </p>
//         </motion.div>

//         {/* Products Grid */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {products.map((product) => (
//             <Link key={product.id} href={`/Product/${product.id}`}>
//               <motion.div
//                 className="flex flex-col h-full bg-white cursor-pointer group"
//                 variants={itemVariants}
//               >
//                 {/* Image Container with object-contain to show full picture */}
//                 <div className="relative w-full h-[400px] bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center p-2">
//                   {product.discount && (
//                     <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-white font-semibold text-sm shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 -rotate-12">
//                       {product.discount}
//                     </span>
//                   )}
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     width={400}
//                     height={500}
//                     className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>

//                 <div className="mt-4 flex-1 flex flex-col justify-between">
//                   <div>
//                     <span className="text-xs uppercase tracking-wider text-purple-600 font-semibold font-serif">
//                       {product.brand}
//                     </span>
//                     <h3
//                       className="text-3xl font-bold text-black"
//                       style={{ fontFamily: "'Dancing Script', cursive" }}
//                     >
//                       {product.name}
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-2 font-serif">
//                       {product.desc}
//                     </p>
//                   </div>
//                   <p className="text-purple-600 font-semibold text-lg font-serif">
//                     {product.price}
//                   </p>
//                 </div>
//               </motion.div>
//             </Link>
//           ))}
//         </motion.div>
//       </div>
//     </main>
//   );
// }


"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductCollection() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const products = [
    {
      id: 1,
      name: "Invictus Men",
      brand: "Paco Rabanne",
      desc: "A fresh and energetic fragrance crafted by Shah Fragrance.",
      price: "3,500",
      image: "/perfume1.jpg",
    },
    {
      id: 2,
      name: "Oudh & Rose",
      brand: "Ahmed Al Maghribi",
      desc: "A rich and captivating blend of traditional oud and soft rose.",
      price: "4,500",
      image: "/perfume2.jpg",
    },
    {
      id: 3,
      name: "Sauvage",
      brand: "Christian Dior",
      desc: "A radically fresh, raw, and noble signature fragrance.",
      price: "5,000",
      image: "/perfume3.jpg",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16 border-b border-blue-900/10 pb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-blue-900 font-semibold font-serif">
              Premium Perfumes
            </span>
            <h2
              className="text-6xl md:text-7xl text-gray-900 mt-1 font-bold"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Top <span className="text-blue-900">Collection</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-md font-serif">
            Explore our exclusive collection crafted with premium imported notes to leave a lasting royal impression.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product) => (
            <Link key={product.id} href={`/Product/${product.id}`}>
              <motion.div
                className="flex flex-col h-full bg-white/70 backdrop-blur-md rounded-2xl border border-blue-900/10 shadow-md hover:shadow-2xl transition-all duration-300 p-5 cursor-pointer group"
                variants={itemVariants}
              >
                {/* Image Box */}
                <div className="relative w-full h-[380px] bg-white/60 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-blue-900/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={500}
                    className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Details Box */}
                <div className="mt-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-blue-900 font-semibold font-serif bg-blue-100/60 px-2.5 py-1 rounded-md">
                      {product.brand}
                    </span>
                    <h3
                      className="text-3xl font-bold text-gray-900 mt-2"
                      style={{ fontFamily: "'Dancing Script', cursive" }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1 mb-4 font-serif leading-normal">
                      {product.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-blue-900/10 pt-3">
                    <span className="text-xs text-gray-500 uppercase font-serif">Price</span>
                    <p className="text-blue-900 font-bold text-xl font-serif">
                      Rs. {product.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}