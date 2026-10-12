// // "use client";
// // import { useState, useEffect } from "react";
// // import { FiPlus, FiMinus } from "react-icons/fi";
// // import { motion, AnimatePresence } from "framer-motion";

// // const faqs = [
// //   { question: "WHO IS OMBRÉ LAMAR?", answer: "Ombré Lamar is a luxury oud fragrance brand known for Arabian and Western oud perfumes." },
// //   { question: "HOW ARE YOUR PARFUMS CREATED?", answer: "All of our parfums are made with absolute oils from our specially selected flowers, creating our signature Ombré Lamar scents." },
// //   { question: "WHAT IS THE BEST FRAGRANCE FOR ME?", answer: "We offer a wide range of fragrances suited for different personalities, occasions, and moods." },
// //   { question: "HOW TO STORE MY FRAGRANCE?", answer: "Keep your perfumes away from direct sunlight and store them in a cool, dry place to preserve their scent." },
// //   { question: "HOW CAN I GET IN TOUCH?", answer: "You can reach us via our contact form or visit our London stores for direct assistance." },
// // ];

// // export default function FaqSection() {
// //   const [openIndex, setOpenIndex] = useState<number | null>(null);
// //   useEffect(() => {
// //     const link = document.createElement("link");
// //     link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
// //     link.rel = "stylesheet";
// //     document.head.appendChild(link);
// //   }, []);

// //   const toggleFaq = (index: number) => {
// //     setOpenIndex(openIndex === index ? null : index);
// //   };

// //   return (
// //     <div className="py-16 px-6 md:px-20 font-serif">
// //       <motion.h2
// //         className="text-4xl md:text-5xl text-center text-black font-bold"
// //         style={{ fontFamily: "'Dancing Script', cursive" }}
// //         initial={{ opacity: 0, y: 50 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true, amount: 0.2 }}
// //         transition={{ duration: 0.8 }}>
// //         All About Ombré Lamar
// //       </motion.h2>
// //       <motion.div
// //         className="flex items-center justify-center gap-3 mt-4 mb-10"
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true, amount: 0.2 }}
// //         transition={{ duration: 0.8, delay: 0.2 }}
// //       >
// //         <span className="w-16 h-[1px] bg-purple-900"></span>
// //         <span className="text-yellow-300">★</span>
// //         <span className="w-16 h-[1px] bg-purple-900"></span>
// //       </motion.div>
// //       <div className="max-w-3xl mx-auto space-y-4">
// //         {faqs.map((faq, index) => (
// //           <motion.div
// //             key={index}
// //             className="border-b border-gray-200 py-4 cursor-pointer"
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true, amount: 0.2 }}
// //             transition={{ duration: 0.5, delay: index * 0.1 }}
// //             onClick={() => toggleFaq(index)}>
// //             <div className="flex justify-between items-center">
// //               <h3 className="text-lg font-semibold text-black">{faq.question}</h3>
// //               {openIndex === index ? <FiMinus className="text-xl" /> : <FiPlus className="text-xl" />}
// //             </div>
// //             <AnimatePresence>
// //               {openIndex === index && (
// //                 <motion.p
// //                   className="mt-3"
// //                   initial={{ opacity: 0, height: 0 }}
// //                   animate={{ opacity: 1, height: "auto" }}
// //                   exit={{ opacity: 0, height: 0 }}
// //                   transition={{ duration: 0.5 }}>
// //                   {faq.answer}
// //                 </motion.p>)}
// //             </AnimatePresence>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// "use client";
// import { useState, useEffect } from "react";
// import { FiPlus, FiMinus } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";

// const faqs = [
//   { question: "WHO IS SHAH FRAGRANCE?", answer: "Shah Fragrance crafts long-lasting, signature scents that leave a royal impression, designed to match your unique identity and confidence." },
//   { question: "HOW ARE YOUR PERFUMES CREATED?", answer: "Our fragrances are meticulously blended using premium ingredients to ensure a powerful, elegant, and long-lasting experience." },
//   { question: "WHAT IS THE BEST FRAGRANCE FOR ME?", answer: "It depends on your style! Choose from executive daily wears like Office for Men, bold evening scents like 9PM Rebel, or royal blends like Oud and Roses." },
//   { question: "HOW TO STORE MY FRAGRANCE?", answer: "Keep your perfumes away from direct sunlight and store them in a cool, dry place to preserve their rich scent." },
//   { question: "HOW CAN I GET IN TOUCH?", answer: "You can reach out to us directly through our Contact page or via our social media channels for orders and inquiries." },
// ];

// export default function FaqSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   useEffect(() => {
//     const link = document.createElement("link");
//     link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
//     link.rel = "stylesheet";
//     document.head.appendChild(link);
//   }, []);

//   const toggleFaq = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="py-16 px-6 md:px-20 font-serif">
//       <motion.h2
//         className="text-4xl md:text-5xl text-center text-black font-bold"
//         style={{ fontFamily: "'Dancing Script', cursive" }}
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.2 }}
//         transition={{ duration: 0.8 }}>
//         All About Shah Fragrance
//       </motion.h2>
//       <motion.div
//         className="flex items-center justify-center gap-3 mt-4 mb-10"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.2 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         <span className="w-16 h-[1px] bg-purple-900"></span>
//         <span className="text-yellow-300">★</span>
//         <span className="w-16 h-[1px] bg-purple-900"></span>
//       </motion.div>
//       <div className="max-w-3xl mx-auto space-y-4">
//         {faqs.map((faq, index) => (
//           <motion.div
//             key={index}
//             className="border-b border-gray-200 py-4 cursor-pointer"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             onClick={() => toggleFaq(index)}>
//             <div className="flex justify-between items-center">
//               <h3 className="text-lg font-semibold text-black">{faq.question}</h3>
//               {openIndex === index ? <FiMinus className="text-xl" /> : <FiPlus className="text-xl" />}
//             </div>
//             <AnimatePresence>
//               {openIndex === index && (
//                 <motion.p
//                   className="mt-3 text-gray-600"
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   transition={{ duration: 0.5 }}>
//                   {faq.answer}
//                 </motion.p>)}
//             </AnimatePresence>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "WHO IS SHAH FRAGRANCE?",
    answer:
      "Shah Fragrance crafts long-lasting, signature scents that leave a royal impression, designed to match your unique identity and confidence.",
  },
  {
    question: "HOW ARE YOUR PERFUMES CREATED?",
    answer:
      "Our fragrances are meticulously blended using premium ingredients to ensure a powerful, elegant, and long-lasting experience.",
  },
  {
    question: "WHAT IS THE BEST FRAGRANCE FOR ME?",
    answer:
      "It depends on your style! Choose from executive daily wears like Office for Men, bold evening scents like 9PM Rebel, or royal blends like Oud and Roses.",
  },
  {
    question: "HOW TO STORE MY FRAGRANCE?",
    answer:
      "Keep your perfumes away from direct sunlight and store them in a cool, dry place to preserve their rich scent.",
  },
  {
    question: "HOW CAN I GET IN TOUCH?",
    answer:
      "You can reach out to us directly through our Contact page or via our social media channels for orders and inquiries.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-16 px-6 md:px-20 font-serif">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-widest text-blue-900 font-semibold font-serif bg-blue-100/60 px-3 py-1 rounded-full border border-blue-900/10 shadow-sm">
            Frequently Asked Questions
          </span>
          <h2
            className="text-5xl md:text-6xl text-center text-gray-900 font-bold mt-3"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            All About <span className="text-blue-900">Shah Fragrance</span>
          </h2>
        </motion.div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-md rounded-2xl border border-blue-900/10 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full py-5 px-6 flex justify-between items-center text-left cursor-pointer group"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-base md:text-lg font-semibold tracking-wide text-gray-900 group-hover:text-blue-900 transition-colors">
                  {faq.question}
                </h3>
                <div className="p-1.5 rounded-full bg-blue-100/70 text-blue-900 ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <FiMinus className="text-lg" />
                  ) : (
                    <FiPlus className="text-lg" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 border-t border-blue-900/5"
                  >
                    <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}