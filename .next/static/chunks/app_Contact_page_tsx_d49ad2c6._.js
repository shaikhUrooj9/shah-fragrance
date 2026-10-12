(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/Contact/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import { useState, useEffect } from "react";
// import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Link from "next/link";
// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }
// export default function ContactPage() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");
//   useEffect(() => {
//     const link = document.createElement("link");
//     link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
//     link.rel = "stylesheet";
//     document.head.appendChild(link);
//   }, []);
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setStatus("Sending...");
//     fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         ...formData,
//         access_key: "acc66923-26e8-4083-aa6b-d948f0e61645", 
//       }),
//     })
//       .then((res) => res.json())
//       .then(() => {
//         setStatus("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       })
//       .catch(() => setStatus("Failed to send message."));
//   };
//   return (
//     <div className="w-full min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-6 md:px-16 py-16 items-center justify-center font-serif">
//       <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
//         {/* Left Info Section */}
//         <motion.div
//           className="lg:w-1/2 flex flex-col justify-center w-full"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <span className="w-fit text-xs uppercase tracking-widest text-blue-900 font-semibold bg-blue-100/70 px-3.5 py-1.5 rounded-full border border-blue-900/10 shadow-sm mb-4">
//             Get In Touch
//           </span>
//           <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide text-gray-900" style={{ fontFamily: "'Dancing Script', cursive" }}>
//             <span className="text-blue-900">Contact</span> Us
//           </h2>
//           <div className="w-20 h-[2px] bg-blue-900/30 mb-6"></div>
//           <p className="mb-8 font-serif text-gray-700 text-base md:text-lg leading-relaxed">
//             We&apos;d love to hear from you! Reach out to us with any questions, custom orders, or comments about our royal fragrance collections.
//           </p>
//           {/* Contact Details Cards */}
//           <div className="mb-8 space-y-4 font-serif text-sm">
//             <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-md border border-blue-900/10 p-4 rounded-2xl shadow-sm">
//               <div className="p-3 bg-blue-100 text-blue-900 rounded-xl">
//                 <FaEnvelope className="text-lg" />
//               </div>
//               <div>
//                 <p className="text-gray-500 text-xs uppercase tracking-wider">Email Us</p>
//                 <p className="text-gray-900 font-medium text-base">codeq209@gmail.com</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-md border border-blue-900/10 p-4 rounded-2xl shadow-sm">
//               <div className="p-3 bg-blue-100 text-blue-900 rounded-xl">
//                 <FaPhoneAlt className="text-lg" />
//               </div>
//               <div>
//                 <p className="text-gray-500 text-xs uppercase tracking-wider">Call / WhatsApp</p>
//                 <p className="text-gray-900 font-medium text-base">+92 321 2655093</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-md border border-blue-900/10 p-4 rounded-2xl shadow-sm">
//               <div className="p-3 bg-blue-100 text-blue-900 rounded-xl">
//                 <FaMapMarkerAlt className="text-lg" />
//               </div>
//               <div>
//                 <p className="text-gray-500 text-xs uppercase tracking-wider">Location</p>
//                 <p className="text-gray-900 font-medium text-base">Karachi, Pakistan</p>
//               </div>
//             </div>
//           </div>
//           <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Dancing Script', cursive" }}>Connect With Socials</h3>
//           <div className="flex space-x-4">
//             <a
//               href="https://www.linkedin.com/in/codequeen-ai23/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center w-11 h-11 border border-blue-900/20 text-blue-900 rounded-full bg-white/80 hover:bg-blue-900 hover:text-white transition-all shadow-sm"
//             >
//               <FaLinkedin className="text-lg" />
//             </a>
//             <Link
//               href="https://github.com/CodeQueen-AI"
//               target="_blank"
//               className="flex items-center justify-center w-11 h-11 border border-blue-900/20 text-blue-900 rounded-full bg-white/80 hover:bg-blue-900 hover:text-white transition-all shadow-sm"
//             >
//               <FaGithub className="text-lg" />
//             </Link>
//           </div>
//         </motion.div>
//         {/* Right Form Section */}
//         <motion.div
//           className="lg:w-1/2 w-full bg-white/75 backdrop-blur-md border border-blue-900/10 p-8 md:p-10 rounded-3xl shadow-xl"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h3 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Dancing Script', cursive" }}>Send Us a Message</h3>
//           <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
//             <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
//               <div className="flex-1 flex flex-col">
//                 <label className="mb-1.5 font-serif text-sm font-medium text-gray-700">Your Name</label>
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe"
//                   className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white/60 text-gray-900"/>
//               </div>
//               <div className="flex-1 flex flex-col">
//                 <label className="mb-1.5 font-serif text-sm font-medium text-gray-700">Your Email</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com"
//                   className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white/60 text-gray-900"/>
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <label className="mb-1.5 font-serif text-sm font-medium text-gray-700">Message</label>
//               <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Write your message here..."
//                 className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white/60 text-gray-900 resize-none"/>
//             </div>
//             <button type="submit" className="w-full bg-blue-900 hover:bg-blue-950 text-white font-serif py-4 rounded-xl transition-all duration-300 shadow-md tracking-wider uppercase text-sm font-semibold">
//               Send Message
//             </button>
//             {status && <p className="mt-4 text-center text-sm font-serif text-blue-900 font-semibold">{status}</p>}
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
__turbopack_context__.s({
    "default": ()=>ContactPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ContactPage() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactPage.useEffect": ()=>{
            const link = document.createElement("link");
            link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
            link.rel = "stylesheet";
            document.head.appendChild(link);
        }
    }["ContactPage.useEffect"], []);
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        setStatus("Opening WhatsApp...");
        // Target WhatsApp Number
        const ownerWhatsAppNumber = "923410139115";
        // Format Message
        const whatsappMessage = "📩 *NEW CONTACT INQUIRY - SHAH FRAGRANCE* 📩\n\n" + "👤 *Name:* ".concat(formData.name, "\n") + "📧 *Email:* ".concat(formData.email, "\n\n") + "💬 *Message:*\n".concat(formData.message, "\n\n") + "-----------------------------------\n" + "✨ Sent from Shah Fragrance Contact Page";
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = "https://wa.me/".concat(ownerWhatsAppNumber, "?text=").concat(encodedMessage);
        // Also send via Web3Forms API in background (optional backup)
        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...formData,
                access_key: "acc66923-26e8-4083-aa6b-d948f0e61645"
            })
        }).catch(()=>null);
        // Redirect to WhatsApp
        window.open(whatsappUrl, "_blank");
        setStatus("Message forwarded to WhatsApp!");
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-6 md:px-16 py-16 items-center justify-center font-serif",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "lg:w-1/2 flex flex-col justify-center w-full",
                    initial: {
                        opacity: 0,
                        x: -50
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.8
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-fit text-xs uppercase tracking-widest text-blue-900 font-semibold bg-blue-100/70 px-3.5 py-1.5 rounded-full border border-blue-900/10 shadow-sm mb-4",
                            children: "Get In Touch"
                        }, void 0, false, {
                            fileName: "[project]/app/Contact/page.tsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-5xl md:text-6xl font-bold mb-4 tracking-wide text-gray-900",
                            style: {
                                fontFamily: "'Dancing Script', cursive"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-900",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/app/Contact/page.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this),
                                " Us"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Contact/page.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-[2px] bg-blue-900/30 mb-6"
                        }, void 0, false, {
                            fileName: "[project]/app/Contact/page.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-8 font-serif text-gray-700 text-base md:text-lg leading-relaxed",
                            children: "We'd love to hear from you! Reach out to us with any questions, custom orders, or comments about our royal fragrance collections."
                        }, void 0, false, {
                            fileName: "[project]/app/Contact/page.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 space-y-4 font-serif text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4 bg-white/70 backdrop-blur-md border border-blue-900/10 p-4 rounded-2xl shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-blue-100 text-blue-900 rounded-xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                                                className: "text-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Contact/page.tsx",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Contact/page.tsx",
                                            lineNumber: 268,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 text-xs uppercase tracking-wider",
                                                    children: "Email Us"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Contact/page.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-900 font-medium text-base",
                                                    children: "codeq209@gmail.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Contact/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Contact/page.tsx",
                                            lineNumber: 271,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Contact/page.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4 bg-white/70 backdrop-blur-md border border-blue-900/10 p-4 rounded-2xl shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-blue-100 text-blue-900 rounded-xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhoneAlt"], {
                                                className: "text-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Contact/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Contact/page.tsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 text-xs uppercase tracking-wider",
                                                    children: "Call / WhatsApp"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Contact/page.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-900 font-medium text-base",
                                                    children: "+92 341 0139115"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Contact/page.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Contact/page.tsx",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Contact/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4 bg-white/70 backdrop-blur-md border border-blue-900/10 p-4 rounded-2xl shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-blue-100 text-blue-900 rounded-xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMapMarkerAlt"], {
                                                className: "text-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Contact/page.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Contact/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 text-xs uppercase tracking-wider",
                                                    children: "Location"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Contact/page.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-900 font-medium text-base",
                                                    children: "Karachi, Pakistan"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Contact/page.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Contact/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Contact/page.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Contact/page.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold mb-4 text-gray-900",
                            style: {
                                fontFamily: "'Dancing Script', cursive"
                            },
                            children: "Connect With Socials"
                        }, void 0, false, {
                            fileName: "[project]/app/Contact/page.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.linkedin.com/in/codequeen-ai23/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center justify-center w-11 h-11 border border-blue-900/20 text-blue-900 rounded-full bg-white/80 hover:bg-blue-900 hover:text-white transition-all shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {
                                        className: "text-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Contact/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Contact/page.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://github.com/CodeQueen-AI",
                                    target: "_blank",
                                    className: "flex items-center justify-center w-11 h-11 border border-blue-900/20 text-blue-900 rounded-full bg-white/80 hover:bg-blue-900 hover:text-white transition-all shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGithub"], {
                                        className: "text-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Contact/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Contact/page.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Contact/page.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Contact/page.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "lg:w-1/2 w-full bg-white/75 backdrop-blur-md border border-blue-900/10 p-8 md:p-10 rounded-3xl shadow-xl",
                    initial: {
                        opacity: 0,
                        x: 50
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.8
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-3xl font-bold mb-6 text-gray-900",
                            style: {
                                fontFamily: "'Dancing Script', cursive"
                            },
                            children: "Send Us a Message"
                        }, void 0, false, {
                            fileName: "[project]/app/Contact/page.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "flex flex-col space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mb-1.5 font-serif text-sm font-medium text-gray-700",
                                                    children: "Your Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Contact/page.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "name",
                                                    value: formData.name,
                                                    onChange: handleChange,
                                                    required: true,
                                                    placeholder: "John Doe",
                                                    className: "px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white/60 text-gray-900"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Contact/page.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Contact/page.tsx",
                                            lineNumber: 330,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mb-1.5 font-serif text-sm font-medium text-gray-700",
                                                    children: "Your Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Contact/page.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    name: "email",
                                                    value: formData.email,
                                                    onChange: handleChange,
                                                    required: true,
                                                    placeholder: "john@example.com",
                                                    className: "px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white/60 text-gray-900"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Contact/page.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Contact/page.tsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Contact/page.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-1.5 font-serif text-sm font-medium text-gray-700",
                                            children: "Message"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Contact/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "message",
                                            value: formData.message,
                                            onChange: handleChange,
                                            required: true,
                                            rows: 5,
                                            placeholder: "Write your message here...",
                                            className: "px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white/60 text-gray-900 resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Contact/page.tsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Contact/page.tsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full bg-emerald-600 hover:bg-emerald-700 text-white font-serif py-4 rounded-xl transition-all duration-300 shadow-md tracking-wider uppercase text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                            className: "text-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Contact/page.tsx",
                                            lineNumber: 350,
                                            columnNumber: 15
                                        }, this),
                                        " Send Message via WhatsApp"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Contact/page.tsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this),
                                status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-center text-sm font-serif text-blue-900 font-semibold",
                                    children: status
                                }, void 0, false, {
                                    fileName: "[project]/app/Contact/page.tsx",
                                    lineNumber: 353,
                                    columnNumber: 24
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Contact/page.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Contact/page.tsx",
                    lineNumber: 320,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Contact/page.tsx",
            lineNumber: 242,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Contact/page.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, this);
}
_s(ContactPage, "E4IjtFifTtBTCmKtDEaESLu+3b0=");
_c = ContactPage;
var _c;
__turbopack_context__.k.register(_c, "ContactPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_Contact_page_tsx_d49ad2c6._.js.map