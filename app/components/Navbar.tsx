



// "use client";
// import { useState } from "react";
// import { FaShoppingCart, FaTimes } from "react-icons/fa";
// import { RiMenu3Fill } from "react-icons/ri";
// import { Dancing_Script } from "next/font/google";
// import Link from "next/link";
// import { useCart } from "../Context/cartcontext";

// const dancing = Dancing_Script({
//   subsets: ["latin"],
//   weight: ["700"],
// });

// export default function Navbar() {
//   const { cartItems } = useCart();
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
//         {/* Logo */}
//         <div className={`${dancing.className} text-3xl text-purple-800`}>
//           <Link href="/">
//             Shah Fragrance
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-black text-lg font-serif justify-center absolute left-1/2 transform -translate-x-1/2">
//           <li className="relative cursor-pointer group">
//             <Link href="/">
//               <span className="relative">
//                 Home
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//               </span>
//             </Link>
//           </li>
//           <li className="relative cursor-pointer group">
//             <Link href="/Product">
//               <span className="relative">
//                 Product
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//               </span>
//             </Link>
//           </li>
//           <li className="relative cursor-pointer group">
//             <Link href="/About">
//               <span className="relative">
//                 About
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//               </span>
//             </Link>
//           </li>
//           <li className="relative cursor-pointer group">
//             <Link href="/Contact">
//               <span className="relative">
//                 Contact
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//               </span>
//             </Link>
//           </li>
//         </ul>

//         {/* Cart + Mobile Menu Icon */}
//         <div className="flex items-center space-x-6 text-xl">
//           <div className="md:hidden cursor-pointer">
//             <RiMenu3Fill
//               className="text-2xl"
//               onClick={() => setMenuOpen(true)}
//             />
//           </div>
//           <Link href="/Cart" className="relative cursor-pointer">
//             <FaShoppingCart className="text-3xl" />
//             {cartItems.length > 0 && (
//               <span className="absolute -top-1 -right-3 bg-purple-600 text-white font-bold rounded-full text-xs px-2 py-1">
//                 {cartItems.length}
//               </span>
//             )}
//           </Link>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border-b border-gray-400 w-[95%] mx-auto"></div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="fixed inset-0 bg-white/20 backdrop-blur-md flex flex-col justify-center items-center z-50">
//           <button
//             className="absolute top-6 right-6 text-3xl cursor-pointer"
//             onClick={() => setMenuOpen(false)}
//           >
//             <FaTimes />
//           </button>

//           <ul className="flex flex-col space-y-8 text-black text-3xl text-center">
//             <li onClick={() => setMenuOpen(false)} className="cursor-pointer relative group">
//               <Link href="/">
//                 <span className={`${dancing.className} relative`}>
//                   Home
//                   <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//                 </span>
//               </Link>
//             </li>
//             <li onClick={() => setMenuOpen(false)} className="cursor-pointer relative group">
//               <Link href="/Product">
//                 <span className={`${dancing.className} relative`}>
//                   Product
//                   <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//                 </span>
//               </Link>
//             </li>
//             <li onClick={() => setMenuOpen(false)} className="cursor-pointer relative group">
//               <Link href="/About">
//                 <span className={`${dancing.className} relative`}>
//                   About
//                   <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//                 </span>
//               </Link>
//             </li>
//             <li onClick={() => setMenuOpen(false)} className="cursor-pointer relative group">
//               <Link href="/Contact">
//                 <span className={`${dancing.className} relative`}>
//                   Contact
//                   <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//                 </span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";
import { useState } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import { useCart } from "../Context/cartcontext";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Navbar() {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className={`${dancing.className} text-3xl md:text-4xl text-blue-900 font-bold tracking-wide`}>
          <Link href="/">
            Shah Fragrance
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-800 text-base font-serif justify-center absolute left-1/2 transform -translate-x-1/2">
          <li className="relative cursor-pointer group">
            <Link href="/">
              <span className="relative font-medium tracking-wide group-hover:text-blue-900 transition-colors">
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-900 via-blue-600 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
          <li className="relative cursor-pointer group">
            <Link href="/Product">
              <span className="relative font-medium tracking-wide group-hover:text-blue-900 transition-colors">
                Product
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-900 via-blue-600 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
          <li className="relative cursor-pointer group">
            <Link href="/About">
              <span className="relative font-medium tracking-wide group-hover:text-blue-900 transition-colors">
                About
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-900 via-blue-600 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
          <li className="relative cursor-pointer group">
            <Link href="/Contact">
              <span className="relative font-medium tracking-wide group-hover:text-blue-900 transition-colors">
                Contact
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-900 via-blue-600 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
        </ul>

        {/* Cart + Mobile Menu Icon */}
        <div className="flex items-center space-x-6 text-xl">
          <div className="md:hidden cursor-pointer">
            <RiMenu3Fill
              className="text-2xl text-blue-900"
              onClick={() => setMenuOpen(true)}
            />
          </div>
          <Link href="/Cart" className="relative cursor-pointer text-blue-900 hover:text-blue-700 transition-colors">
            <FaShoppingCart className="text-2xl" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-900 text-white font-bold rounded-full text-xs px-2 py-0.5 shadow-sm border border-white">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md flex flex-col justify-center items-center z-50">
          <div className="bg-white/95 w-4/5 max-w-sm rounded-3xl p-8 flex flex-col items-center relative shadow-2xl border border-blue-900/10">
            <button
              className="absolute top-6 right-6 text-2xl text-blue-900 cursor-pointer hover:opacity-75 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>

            <ul className="flex flex-col space-y-6 text-2xl text-center mt-4">
              <li onClick={() => setMenuOpen(false)} className="cursor-pointer relative group">
                <Link href="/">
                  <span className={`${dancing.className} text-blue-900 text-3xl relative`}>
                    Home
                  </span>
                </Link>
              </li>
              <li onClick={() => setMenuOpen(false)} className="cursor-pointer relative group">
                <Link href="/Product">
                  <span className={`${dancing.className} text-blue-900 text-3xl relative`}>
                    Product
                  </span>
                </Link>
              </li>
              <li onClick={() => setMenuOpen(false)} className="cursor-pointer relative group">
                <Link href="/About">
                  <span className={`${dancing.className} text-blue-900 text-3xl relative`}>
                    About
                  </span>
                </Link>
              </li>
              <li onClick={() => setMenuOpen(false)} className="cursor-pointer relative group">
                <Link href="/Contact">
                  <span className={`${dancing.className} text-blue-900 text-3xl relative`}>
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}