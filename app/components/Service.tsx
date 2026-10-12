// "use client";
// import { FaShippingFast, FaGift } from "react-icons/fa";
// import { GiPerfumeBottle } from "react-icons/gi";
// import { useEffect } from "react";
// import { motion } from "framer-motion";

// export default function ServicesPage() {
//   useEffect(() => {
//     const link = document.createElement("link");
//     link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
//     link.rel = "stylesheet";
//     document.head.appendChild(link);
//   }, []);

//   const services = [
//     {
//       title: "Perfume Customization",
//       desc: "Design your signature fragrance with our personalized blend of notes.",
//       icon: <GiPerfumeBottle className="w-10 h-10 text-pink-500" />,
//       items: ["Custom Fragrance Mix", "Personalized Scent Profile", "Unique Bottling"],
//       color: "text-pink-500",
//     },
//     {
//       title: "Luxury Packaging",
//       desc: "Elegant & premium packaging for special occasions and gifting.",
//       icon: <FaGift className="w-10 h-10 text-yellow-500" />,
//       items: ["Gift Wrapping", "Luxury Boxes", "Personalized Cards"],
//       color: "text-yellow-500",
//     },
//     {
//       title: "Worldwide Shipping",
//       desc: "We deliver perfumes to your doorstep anywhere in the world.",
//       icon: <FaShippingFast className="w-10 h-10 text-sky-500" />,
//       items: ["Fast Delivery", "Global Coverage", "Secure Packaging"],
//       color: "text-sky-500",
//     },
//   ];

//   const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

//   return (
//     <section className="py-16 px-6 lg:px-20">
//       <motion.h2
//         className="text-4xl md:text-5xl text-center text-black font-bold mb-4"
//         style={{ fontFamily: "'Dancing Script', cursive" }}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={fadeUp}>
//         Services
//       </motion.h2>

//       <motion.div
//         className="flex items-center justify-center gap-3 mb-8"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={fadeUp}
//         transition={{ delay: 0.2 }}>
//         <span className="w-16 h-[1px] bg-purple-900"></span>
//         <span className="text-yellow-300">★</span>
//         <span className="w-16 h-[1px] bg-purple-900"></span>
//       </motion.div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ delay: index * 0.2, duration: 0.8 }}>
//             <div className="flex items-center justify-center w-16 h-16 mb-4">
//               {service.icon}
//             </div>
//             <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: "'Dancing Script', cursive" }}>
//               {service.title}
//             </h3>
//             <p className="text-black text-sm mb-4 font-serif">{service.desc}</p>
//             <ul className="space-y-2">
//               {service.items.map((item, i) => (
//                 <li key={i} className="flex items-center gap-2">
//                   <span className={`w-2 h-2 rounded-full ${service.color} bg-current`} />
//                   <span className="text-black text-sm font-serif">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaShippingFast, FaGift, FaCheckCircle } from "react-icons/fa";
import { GiPerfumeBottle } from "react-icons/gi";

export default function ServicesPage() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const services = [
    {
      title: "Perfume Customization",
      desc: "Design your signature fragrance with our bespoke blend of notes tailored to your presence.",
      icon: <GiPerfumeBottle className="w-9 h-9 text-blue-900" />,
      items: [
        "Custom Fragrance Blend",
        "Personalized Scent Profile",
        "Bespoke Bottle Engraving",
      ],
    },
    {
      title: "Luxury Packaging",
      desc: "Exquisite presentation crafted for memorable gifts and royal unboxing experiences.",
      icon: <FaGift className="w-8 h-8 text-blue-900" />,
      items: [
        "Signature Gift Wrapping",
        "Royal Blue Hardbox",
        "Custom Message Cards",
      ],
    },
    {
      title: "Worldwide Shipping",
      desc: "Fast, insured global delivery straight to your doorstep in protective casing.",
      icon: <FaShippingFast className="w-8 h-8 text-blue-900" />,
      items: [
        "Express Doorstep Delivery",
        "Real-Time Order Tracking",
        "Leak-Proof Secure Packing",
      ],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <span className="text-xs uppercase tracking-widest text-blue-900 font-semibold font-serif bg-blue-100/60 px-3 py-1 rounded-full border border-blue-900/10 shadow-sm">
            Shah Fragrance — Our Promise
          </span>
          <h2
            className="text-5xl md:text-6xl font-bold text-gray-900 mt-3 mb-4"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Bespoke Services
          </h2>
          <p className="text-gray-700 font-serif text-base md:text-lg">
            Elevating your olfactory journey with luxury craftsmanship and dedicated global care.
          </p>
        </motion.div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-md rounded-2xl border border-blue-900/10 shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div>
                {/* Icon Container */}
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100/80 mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3
                  className="text-3xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 font-serif leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Items List */}
              <ul className="space-y-3 border-t border-blue-900/10 pt-4">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-blue-900 text-sm flex-shrink-0" />
                    <span className="text-gray-800 text-sm font-serif font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}