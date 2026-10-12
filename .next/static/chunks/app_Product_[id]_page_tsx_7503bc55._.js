(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/Product/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import { useParams } from "next/navigation";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { FaRegHeart, FaHeart } from "react-icons/fa";
// import { useCart } from "../../Context/cartcontext";
// import { motion, AnimatePresence } from "framer-motion";
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   description: string;
//   quantity: number;
//   discount?: string;
// }
// const products = [
//   { id: 1, name: 'Vera Wang', price: 400 , image: '/Collection1.jpg', description: 'A rich and enchanting oud fragrance for special occasions.', discount: '20% OFF' },
//   { id: 2, name: 'Amber Mystique', price: 300, image: '/Collection2.jpg', description: 'Warm amber tones with a subtle hint of floral notes.' },
//   { id: 3, name: 'Mystic Oud', price: 500, image: '/Collection3.jpg', description: 'Deep and long-lasting oud fragrance perfect for evenings.', discount: '15% OFF' },
//   { id: 4, name: 'Velvet Rose', price: 250, image: '/Collection4.jpg', description: 'Soft rose aroma blended with subtle woody notes.' },
//   { id: 5, name: 'Dior Sauvage', price: 320, image: '/Collection5.jpg', description: 'Fresh bergamot with spicy pepper and warm woody undertones, bold and masculine.' },
//   { id: 6, name: 'Chanel No. 5', price: 600, image: '/Collection6.jpg', description: 'A timeless blend of jasmine, rose, and aldehydes.', discount: '10% OFF' },
//   { id: 7, name: 'Gucci Bloom', price: 420, image: '/Collection7.jpg', description: 'Floral explosion of jasmine, tuberose, and Rangoon creeper.' },
//   { id: 8, name: 'Yves Saint Laurent Black Opium', price: 450, image: '/Collection8.jpg', description: 'Sweet vanilla with notes of coffee and white flowers, bold yet addictive.' },
//   { id: 9, name: 'Tom Ford Black Orchid', price: 350, image: '/Collection9.jpg', description: 'Luxurious dark florals mixed with patchouli, vanilla, and earthy accords.' },
//   { id: 10, name: 'Armani Code', price: 700, image: '/Collection10.jpg', description: 'Seductive notes of citrus, tonka bean, and warm leather for evening charm.' },
//   { id: 11, name: 'Versace Eros', price: 950, image: '/Collection11.png', description: 'Fresh mint, green apple and tonka bean — energetic, powerful, and modern.', discount: '5% OFF' },
//   { id: 12, name: 'Versace', price: 600, image: '/Collection12.jpg', description: 'Sweet berries with soft jasmine and warm amber, youthful and vibrant.' },
// ];
// export default function ProductDetailPage() {
//   const params = useParams();
//   const { id } = params as { id: string };
//   const product = products.find((p) => p.id === parseInt(id));
//   const [quantity, setQuantity] = useState(1);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const { addToCart } = useCart();
//   if (!product) return <div>Product not found</div>;
//   const handleHeartClick = () => setIsFavorite(!isFavorite);
//   const handleAddToCart = () => {
//     addToCart({ ...product, quantity });
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 3000);
//   };
//   useEffect(() => {
//     const link = document.createElement("link");
//     link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
//     link.rel = "stylesheet";
//     document.head.appendChild(link);
//   }, []);
//   return (
//     <motion.section
//       className="text-gray-600 body-font overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}>
//       <div className="container px-4 md:px-5 py-12 mx-auto">
//         <div className="flex flex-col lg:flex-row lg:w-4/5 mx-auto">
//           <motion.div
//             className="lg:w-1/2 w-full relative mb-6 lg:mb-0 h-80 sm:h-96 lg:h-[500px]"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}>
//             <Image
//               alt={product.name}
//               src={product.image}
//               fill
//               className="object-contain rounded-lg"/>
//           </motion.div>
//           <motion.div
//             className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
//             initial={{ x: 50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-purple-900 font-serif" style={{ fontFamily: "'Dancing Script', cursive" }}>
//               {product.name}
//             </h1>
//             <fieldset className="border border-gray-300 rounded-xl px-4 py-3 shadow-sm mb-4">
//               <legend className="text-sm px-2 font-semibold">DESCRIPTION</legend>
//               <p className="text-base sm:text-lg md:text-xl font-bold text-black font-serif">{product.description}</p>
//             </fieldset>
//             <fieldset className="border border-gray-300 rounded-xl px-4 py-3 shadow-sm mb-4">
//               <legend className="text-sm px-2 font-semibold text-gray-500">PRICE</legend>
//               <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Rs.{product.price}</p>
//             </fieldset>
//             <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-4 space-y-2 sm:space-y-0">
//               <div className="flex items-center space-x-2 border border-gray-300 rounded-xl px-3 py-2 w-fit">
//                 <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))} className="w-6 h-6 flex items-center justify-center border border-gray-400 text-gray-700 rounded-md hover:bg-gray-200 cursor-pointer">-</button>
//                 <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-12 h-6 text-center border-none focus:outline-none" min="1" />
//                 <button onClick={() => setQuantity((prev) => prev + 1)} className="w-6 h-6 flex items-center justify-center border border-gray-400 text-gray-700 rounded-md hover:bg-gray-200 cursor-pointer">+</button>
//               </div>
//               <button onClick={handleHeartClick} className={`text-3xl focus:outline-none cursor-pointer ${isFavorite ? "text-pink-500 scale-110" : "text-pink-500"}`}>
//                 {isFavorite ? <FaHeart className="w-9 h-9" /> : <FaRegHeart className="w-9 h-9" />}
//               </button>
//             </div>
//             <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mb-4">
//               <button onClick={handleAddToCart} className="flex-1 text-purple-600 border border-purple-600 bg-white py-3 font-serif hover:bg-purple-600 hover:text-white hover:border-white transition-colors duration-300">Add to Cart</button>
//             </div>
//             <div className="flex flex-wrap gap-3 mt-4">
//               <button className="flex-1 min-w-[100px] text-yellow-600 border border-yellow-300 bg-white py-3 font-serif hover:bg-yellow-300 hover:text-white hover:border-white transition-colors duration-300">Jasmine</button>
//               <button className="flex-1 min-w-[100px] text-red-600 border border-red-600 bg-white py-3 font-serif hover:bg-red-600 hover:text-white hover:border-white transition-colors duration-300">Rose</button>
//               <button className="flex-1 min-w-[100px] text-purple-600 border border-purple-600 bg-white py-3 font-serif hover:bg-purple-600 hover:text-white hover:border-white transition-colors duration-300">Orchid</button>
//             </div>
//             <AnimatePresence>
//               {showPopup && (
//                 <motion.div
//                   className="fixed inset-x-0 top-4 z-[9999] flex justify-center"
//                   initial={{ y: -50, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: -50, opacity: 0 }}
//                   transition={{ duration: 0.4 }}>
//                   <div className="relative w-3/4 max-w-md p-4 bg-white/20 backdrop-blur-md border-2 border-purple-600 shadow-lg flex items-center justify-center">
//                     <span className="absolute top-0 left-0 w-full h-1 bg-purple-600 rounded-t-xl"></span>
//                     <span className="text-purple-600 font-semibold text-lg z-10">
//                       Added to Cart!
//                     </span>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }
__turbopack_context__.s({
    "default": ()=>ProductDetailPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$cartcontext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/cartcontext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Screenshot ke mutabiq exact 8 products
const products = [
    {
        id: 1,
        name: 'Office for Men',
        subtitle: 'The Executive',
        price: 4500,
        image: '/Box3.jpg',
        description: 'The executive signature fragrance designed for the modern professional. Crafted with premium notes for long-lasting confidence.',
        notes: [
            'Fresh Citrus',
            'Bergamot',
            'Ambroxan',
            'Rich Amber'
        ]
    },
    {
        id: 2,
        name: 'Sauvage Dior',
        subtitle: 'Dark Horizon',
        price: 5200,
        image: '/perfume3.jpg',
        description: 'Dark horizon edition with deep, bold, and masculine undertones. A radically fresh and noble signature fragrance.',
        notes: [
            'Sichuan Pepper',
            'Calabrian Bergamot',
            'Woody Amber'
        ]
    },
    {
        id: 3,
        name: '9PM Rebel',
        subtitle: 'After Hours',
        price: 4800,
        image: '/Box1.jpg',
        description: 'After hours fragrance built for unforgettable nights out. Sweet vanilla notes fused with warm oriental spices.',
        notes: [
            'Apple',
            'Cinnamon',
            'Vanilla',
            'Tonka Bean'
        ]
    },
    {
        id: 4,
        name: 'Royal Blue',
        subtitle: 'Sapphire',
        price: 4200,
        image: '/Perfume1.jpg',
        description: 'Sapphire blend combining crisp elegance with lasting freshness. Leaves a lingering royal impression.',
        notes: [
            'Crisp Aquatic',
            'Mint',
            'Lavender',
            'Oakmoss'
        ]
    },
    {
        id: 5,
        name: 'Creed Aventus',
        subtitle: 'Legacy',
        price: 6500,
        image: '/Box2.jpg',
        description: 'The legacy blend — powerful, sophisticated, and iconic. Sensual, audacious, and contemporary scent.',
        notes: [
            'Pineapple',
            'Birch Wood',
            'Musk',
            'Blackcurrant'
        ]
    },
    {
        id: 6,
        name: 'Invictus',
        subtitle: 'Sovereign',
        price: 4600,
        image: '/perfume1.jpg',
        description: 'A sovereign aroma crafted for champions and leaders. Fresh, energetic, and noble signature aroma.',
        notes: [
            'Marine Accord',
            'Grapefruit',
            'Laurel Leaf',
            'Guaiac Wood'
        ]
    },
    {
        id: 7,
        name: 'Oud and Roses',
        subtitle: 'Rose Empire',
        price: 5000,
        image: '/perfume2.jpg',
        description: 'Rose empire edition merging rich oriental oud with royal florals. Captivating balance of luxury and tradition.',
        notes: [
            'Turkish Rose',
            'Traditional Oud',
            'Amber',
            'Saffron'
        ]
    },
    {
        id: 8,
        name: 'Kayali',
        subtitle: 'Vanilla 28',
        price: 4900,
        image: '/About.jpg',
        description: 'Vanilla 28 — sweet, warm, and deeply comforting. Warm oriental notes for a royal sensory experience.',
        notes: [
            'Vanilla Orchid',
            'Brown Sugar',
            'Amberwood',
            'Musk'
        ]
    }
];
function ProductDetailPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { id } = params;
    const product = products.find((p)=>p.id === parseInt(id)) || products[0];
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isFavorite, setIsFavorite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPopup, setShowPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$cartcontext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetailPage.useEffect": ()=>{
            const link = document.createElement("link");
            link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
            link.rel = "stylesheet";
            document.head.appendChild(link);
        }
    }["ProductDetailPage.useEffect"], []);
    const handleHeartClick = ()=>setIsFavorite(!isFavorite);
    const handleAddToCart = ()=>{
        if (addToCart) {
            addToCart({
                ...product,
                quantity
            });
        }
        setShowPopup(true);
        setTimeout(()=>setShowPopup(false), 2500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        className: "w-full min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-12 px-6 md:px-16 font-serif text-gray-900 overflow-hidden",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.6
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/Product",
                    className: "inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-blue-950 transition-colors mb-8 bg-white/70 backdrop-blur-md px-4 py-2 rounded-xl border border-blue-900/10 shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowLeft"], {
                            className: "text-xs"
                        }, void 0, false, {
                            fileName: "[project]/app/Product/[id]/page.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this),
                        " Back to Collection"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Product/[id]/page.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row items-center gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "lg:w-1/2 w-full relative h-[420px] sm:h-[480px] bg-white/75 backdrop-blur-md rounded-3xl border border-blue-900/10 shadow-xl p-6 flex items-center justify-center",
                            initial: {
                                x: -50,
                                opacity: 0
                            },
                            animate: {
                                x: 0,
                                opacity: 1
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                alt: product.name,
                                src: product.image,
                                width: 400,
                                height: 400,
                                className: "max-h-full max-w-full object-contain rounded-2xl drop-shadow-md",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/app/Product/[id]/page.tsx",
                                lineNumber: 293,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Product/[id]/page.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "lg:w-1/2 w-full flex flex-col space-y-6",
                            initial: {
                                x: 50,
                                opacity: 0
                            },
                            animate: {
                                x: 0,
                                opacity: 1
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs uppercase tracking-widest text-blue-900 font-semibold bg-blue-100/70 px-3.5 py-1.5 rounded-full border border-blue-900/10 shadow-sm",
                                            children: product.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/app/Product/[id]/page.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-5xl md:text-6xl font-bold mt-3 text-gray-900",
                                            style: {
                                                fontFamily: "'Dancing Script', cursive"
                                            },
                                            children: product.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/Product/[id]/page.tsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Product/[id]/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/70 backdrop-blur-md rounded-2xl border border-blue-900/10 p-5 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xs uppercase font-bold text-gray-400 tracking-widest mb-1",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Product/[id]/page.tsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 text-base leading-relaxed",
                                            children: product.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/Product/[id]/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Product/[id]/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/70 backdrop-blur-md rounded-2xl border border-blue-900/10 p-5 shadow-sm flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xs uppercase font-bold text-gray-400 tracking-widest",
                                                    children: "Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Product/[id]/page.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-blue-900 mt-0.5",
                                                    children: [
                                                        "Rs. ",
                                                        product.price.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Product/[id]/page.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Product/[id]/page.tsx",
                                            lineNumber: 330,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 bg-slate-100/80 p-2 rounded-xl border border-blue-900/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setQuantity((prev)=>Math.max(prev - 1, 1)),
                                                    className: "w-8 h-8 flex items-center justify-center bg-white text-blue-900 font-bold rounded-lg shadow-xs hover:bg-blue-900 hover:text-white transition-colors",
                                                    children: "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Product/[id]/page.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-8 text-center font-bold text-gray-900",
                                                    children: quantity
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Product/[id]/page.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setQuantity((prev)=>prev + 1),
                                                    className: "w-8 h-8 flex items-center justify-center bg-white text-blue-900 font-bold rounded-lg shadow-xs hover:bg-blue-900 hover:text-white transition-colors",
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Product/[id]/page.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Product/[id]/page.tsx",
                                            lineNumber: 338,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Product/[id]/page.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xs uppercase font-bold text-gray-500 tracking-widest mb-2",
                                            children: "Key Fragrance Notes"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Product/[id]/page.tsx",
                                            lineNumber: 355,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: product.notes.map((note, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-white/80 border border-blue-900/15 text-blue-900 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xs",
                                                    children: note
                                                }, index, false, {
                                                    fileName: "[project]/app/Product/[id]/page.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/Product/[id]/page.tsx",
                                            lineNumber: 356,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Product/[id]/page.tsx",
                                    lineNumber: 354,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleAddToCart,
                                            className: "flex-1 py-4 bg-blue-900 hover:bg-blue-950 text-white font-serif uppercase tracking-wider text-sm font-semibold rounded-2xl shadow-lg transition-all duration-300",
                                            children: "Add to Cart"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Product/[id]/page.tsx",
                                            lineNumber: 369,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleHeartClick,
                                            className: "p-4 bg-white/80 hover:bg-rose-50 text-rose-500 rounded-2xl border border-blue-900/10 shadow-md transition-colors",
                                            children: isFavorite ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaHeart"], {
                                                className: "w-6 h-6 text-rose-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Product/[id]/page.tsx",
                                                lineNumber: 378,
                                                columnNumber: 31
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRegHeart"], {
                                                className: "w-6 h-6 text-rose-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Product/[id]/page.tsx",
                                                lineNumber: 378,
                                                columnNumber: 79
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Product/[id]/page.tsx",
                                            lineNumber: 375,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Product/[id]/page.tsx",
                                    lineNumber: 368,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: showPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "fixed inset-x-0 top-6 z-[9999] flex justify-center px-4",
                                        initial: {
                                            y: -50,
                                            opacity: 0
                                        },
                                        animate: {
                                            y: 0,
                                            opacity: 1
                                        },
                                        exit: {
                                            y: -50,
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: 0.4
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white/90 backdrop-blur-md border border-blue-900/20 shadow-2xl px-6 py-3.5 rounded-2xl flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-1 bg-emerald-100 rounded-full text-emerald-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheck"], {
                                                        className: "text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Product/[id]/page.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Product/[id]/page.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-blue-900 font-semibold text-sm",
                                                    children: [
                                                        product.name,
                                                        " added to your cart!"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Product/[id]/page.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Product/[id]/page.tsx",
                                            lineNumber: 391,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Product/[id]/page.tsx",
                                        lineNumber: 385,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Product/[id]/page.tsx",
                                    lineNumber: 383,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Product/[id]/page.tsx",
                            lineNumber: 304,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Product/[id]/page.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Product/[id]/page.tsx",
            lineNumber: 278,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Product/[id]/page.tsx",
        lineNumber: 272,
        columnNumber: 5
    }, this);
}
_s(ProductDetailPage, "qk89EnEYi/bUp3BGvAQddmfw/eI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$cartcontext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = ProductDetailPage;
var _c;
__turbopack_context__.k.register(_c, "ProductDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_Product_%5Bid%5D_page_tsx_7503bc55._.js.map