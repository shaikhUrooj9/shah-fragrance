
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

"use client";
import { useState, useEffect } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Opening WhatsApp...");

    // Target WhatsApp Number
    const ownerWhatsAppNumber = "923410139115";

    // Format Message
    const whatsappMessage = `📩 *NEW CONTACT INQUIRY - SHAH FRAGRANCE* 📩\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n\n` +
      `💬 *Message:*\n${formData.message}\n\n` +
      `-----------------------------------\n` +
      `✨ Sent from Shah Fragrance Contact Page`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${ownerWhatsAppNumber}?text=${encodedMessage}`;

    // Also send via Web3Forms API in background (optional backup)
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        access_key: "acc66923-26e8-4083-aa6b-d948f0e61645", 
      }),
    }).catch(() => null);

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    setStatus("Message forwarded to WhatsApp!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-6 md:px-16 py-16 items-center justify-center font-serif">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Info Section */}
        <motion.div
          className="lg:w-1/2 flex flex-col justify-center w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="w-fit text-xs uppercase tracking-widest text-blue-900 font-semibold bg-blue-100/70 px-3.5 py-1.5 rounded-full border border-blue-900/10 shadow-sm mb-4">
            Get In Touch
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide text-gray-900" style={{ fontFamily: "'Dancing Script', cursive" }}>
            <span className="text-blue-900">Contact</span> Us
          </h2>
          <div className="w-20 h-[2px] bg-blue-900/30 mb-6"></div>
          
          <p className="mb-8 font-serif text-gray-700 text-base md:text-lg leading-relaxed">
            We&apos;d love to hear from you! Reach out to us with any questions, custom orders, or comments about our royal fragrance collections.
          </p>

          {/* Contact Details Cards */}
          <div className="mb-8 space-y-4 font-serif text-sm">
            <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-md border border-blue-900/10 p-4 rounded-2xl shadow-sm">
              <div className="p-3 bg-blue-100 text-blue-900 rounded-xl">
                <FaEnvelope className="text-lg" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Email Us</p>
                <p className="text-gray-900 font-medium text-base">codeq209@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-md border border-blue-900/10 p-4 rounded-2xl shadow-sm">
              <div className="p-3 bg-blue-100 text-blue-900 rounded-xl">
                <FaPhoneAlt className="text-lg" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Call / WhatsApp</p>
                <p className="text-gray-900 font-medium text-base">+92 341 0139115</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-md border border-blue-900/10 p-4 rounded-2xl shadow-sm">
              <div className="p-3 bg-blue-100 text-blue-900 rounded-xl">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Location</p>
                <p className="text-gray-900 font-medium text-base">Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Dancing Script', cursive" }}>Connect With Socials</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/codequeen-ai23/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 border border-blue-900/20 text-blue-900 rounded-full bg-white/80 hover:bg-blue-900 hover:text-white transition-all shadow-sm"
            >
              <FaLinkedin className="text-lg" />
            </a>

            <Link
              href="https://github.com/CodeQueen-AI"
              target="_blank"
              className="flex items-center justify-center w-11 h-11 border border-blue-900/20 text-blue-900 rounded-full bg-white/80 hover:bg-blue-900 hover:text-white transition-all shadow-sm"
            >
              <FaGithub className="text-lg" />
            </Link>
          </div>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          className="lg:w-1/2 w-full bg-white/75 backdrop-blur-md border border-blue-900/10 p-8 md:p-10 rounded-3xl shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Dancing Script', cursive" }}>Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1 flex flex-col">
                <label className="mb-1.5 font-serif text-sm font-medium text-gray-700">Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe"
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white/60 text-gray-900"/>
              </div>

              <div className="flex-1 flex flex-col">
                <label className="mb-1.5 font-serif text-sm font-medium text-gray-700">Your Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com"
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white/60 text-gray-900"/>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mb-1.5 font-serif text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Write your message here..."
                className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white/60 text-gray-900 resize-none"/>
            </div>

            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-serif py-4 rounded-xl transition-all duration-300 shadow-md tracking-wider uppercase text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer">
              <FaWhatsapp className="text-lg" /> Send Message via WhatsApp
            </button>

            {status && <p className="mt-4 text-center text-sm font-serif text-blue-900 font-semibold">{status}</p>}
          </form>
        </motion.div>

      </div>
    </div>
  );
}