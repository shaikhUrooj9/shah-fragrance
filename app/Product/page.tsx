
"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  { 
    id: 1, 
    name: 'Office for Men', 
    subtitle: 'The Executive', 
    price: '4,500', 
    image: '/Box3.jpg', 
    description: 'The executive signature fragrance designed for the modern professional.'
  },
  { 
    id: 2, 
    name: 'Sauvage Dior', 
    subtitle: 'Dark Horizon', 
    price: '5,200', 
    image: '/perfume3.jpg', 
    description: 'Dark horizon edition with deep, bold, and masculine undertones.' 
  },
  { 
    id: 3, 
    name: '9PM Rebel', 
    subtitle: 'After Hours', 
    price: '4,800', 
    image: '/Box1.jpg', 
    description: 'After hours fragrance built for unforgettable nights out.'
  },
  { 
    id: 4, 
    name: 'Royal Blue', 
    subtitle: 'Sapphire', 
    price: '4,200', 
    image: '/Perfume1.jpg', 
    description: 'Sapphire blend combining crisp elegance with lasting freshness.' 
  },
  { 
    id: 5, 
    name: 'Creed Aventus', 
    subtitle: 'Legacy', 
    price: '6,500', 
    image: '/Box2.jpg', 
    description: 'The legacy blend — powerful, sophisticated, and iconic.'
  },
  { 
    id: 6, 
    name: 'Invictus', 
    subtitle: 'Sovereign', 
    price: '4,600', 
    image: '/perfume1.jpg', 
    description: 'A sovereign aroma crafted for champions and leaders.' 
  },
  { 
    id: 7, 
    name: 'Oud and Roses', 
    subtitle: 'Rose Empire', 
    price: '5,000', 
    image: '/perfume2.jpg', 
    description: 'Rose empire edition merging rich oriental oud with royal florals.'
  },
  { 
    id: 8, 
    name: 'Kayali', 
    subtitle: 'Vanilla 28', 
    price: '4,900', 
    image: '/About.jpg', 
    description: 'Vanilla 28 — sweet, warm, and deeply comforting.' 
  },
];

export default function ProductCollection() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-6 md:px-16 py-16 font-serif">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <span className="text-xs uppercase tracking-widest text-blue-900 font-semibold bg-blue-100/70 px-3.5 py-1.5 rounded-full border border-blue-900/10 shadow-sm">
            Curated Inventory
          </span>
          <h2
            className="text-5xl md:text-6xl text-gray-900 font-bold mt-4 mb-3"
            style={{ fontFamily: "'Dancing Script', cursive" }}>
            Shah Fragrance <span className="text-blue-900">Collection</span>
          </h2>
          <p className="text-gray-700 font-serif text-base md:text-lg leading-relaxed">
            Explore our exclusive inventory crafted for luxury, long-lasting projection, and royal impressions.
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative bg-white/70 backdrop-blur-md border border-blue-900/10 rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}>
              
              {/* Image Container */}
              <Link href={`/Product/${product.id}`} className="block overflow-hidden rounded-xl bg-white/60 border border-blue-900/5 p-3">
                <div className="relative w-full h-64 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-105 transition duration-500"/>
                </div>
              </Link>

              {/* Content Details */}
              <div className="text-left mt-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-blue-900 font-semibold font-serif bg-blue-100/60 px-2.5 py-1 rounded-md">
                    {product.subtitle}
                  </span>
                  <h3
                    className="text-2xl font-bold text-gray-900 mt-2"
                    style={{ fontFamily: "'Dancing Script', cursive" }}>
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mt-1 font-serif line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price & Action Button */}
                <div className="mt-5 pt-3 border-t border-blue-900/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-serif">Price</span>
                    <span className="text-blue-900 font-bold text-lg font-serif">
                      Rs. {product.price}
                    </span>
                  </div>
                  
                  <Link href={`/Product/${product.id}`}>
                    <button
                      className="px-4 py-2 text-xs font-serif uppercase tracking-wider bg-blue-900 hover:bg-blue-950 text-white rounded-xl shadow-md transition duration-300">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}