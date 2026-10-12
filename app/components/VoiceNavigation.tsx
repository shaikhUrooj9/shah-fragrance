// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { VscRobot } from "react-icons/vsc";

// export default function VoiceNavigation() {
//   const [listening, setListening] = useState(false);
//   const [recognition, setRecognition] = useState<any>(null);
//   const [showHey, setShowHey] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const SpeechRecognition =
//       (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       alert("Speech Recognition not supported in this browser.");
//       return;
//     }

//     const recog = new SpeechRecognition();
//     recog.continuous = false;
//     recog.lang = "en-US";
//     setRecognition(recog);
//   }, []);

//   const speak = (text: string, callback?: () => void) => {
//     if (!("speechSynthesis" in window)) return;
//     const utter = new SpeechSynthesisUtterance(text);
//     utter.lang = "en-US";
//     utter.rate = 1;
//     utter.pitch = 1;
//     utter.onend = () => {
//       if (callback) callback();
//     };
//     window.speechSynthesis.speak(utter);
//   };

//   const startListening = () => {
//     if (!recognition) return;

//     // Show Hey message when robot clicked
//     setShowHey(true);

//     const welcomeMessage = `
//       Hey! Welcome to our perfume page.
//       Here you can find details about our perfumes in the About section,
//       and contact the owner directly if you want to order something cool.
//       Online payment options are available for a smooth shopping experience.
//     `;

//     speak(welcomeMessage, () => {
//       recognition.start();
//       setListening(true);

//       recognition.onresult = (ev: any) => {
//         const transcript = ev.results[0][0].transcript.toLowerCase().trim();
//         console.log("Heard:", transcript);

//         if (transcript.includes("scroll down")) {
//           window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
//           speak("Scrolling to bottom");
//         } else if (transcript.includes("scroll up") || transcript.includes("go to top")) {
//           window.scrollTo({ top: 0, behavior: "smooth" });
//           speak("Going to top");
//         } else if (transcript.includes("reload page")) {
//           speak("Reloading page");
//           window.location.reload();
//         } else if (transcript.includes("home")) {
//           router.push("/Home");
//           speak("Navigating to Home");
//         } else if (transcript.includes("about")) {
//           router.push("/About");
//           speak("Navigating to About");
//         } else if (transcript.includes("contact")) {
//           router.push("/Contact");
//           speak("Navigating to Contact");
//         } else if (transcript.includes("product")) {
//           router.push("/Product");
//           speak("Navigating to Product");
//         } else {
//           speak("Command not recognized.");
//         }

//         setListening(false);
//       };

//       recognition.onend = () => setListening(false);
//       recognition.onerror = (e: any) => {
//         console.error("Recognition error", e);
//         setListening(false);
//       };
//     });
//   };

//   return (
//     <>
//       <div className="fixed top-24 right-6 z-50"> {/* robot moved slightly lower */}
//         <motion.div
//           whileHover={{ scale: 1.3, rotate: [0, 10, -10, 0] }}
//           animate={{ y: [0, -5, 0, 5, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           onClick={startListening} // click to start
//           className={`cursor-pointer text-7xl p-2 rounded-full shadow-lg ${
//             listening ? "text-red-500" : "text-purple-500"
//           }`}
//         >
//           <VscRobot />
//         </motion.div>
//       </div>

//       {showHey && (
//         <div className="fixed top-40 right-6 z-50 bg-white text-black p-3 rounded shadow-lg flex items-center gap-2">
//           <span>👋 Hey!</span>
//         </div>
//       )}
//     </>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { VscRobot } from "react-icons/vsc";

export default function VoiceNavigation() {
  const [listening, setListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [showHey, setShowHey] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("Speech Recognition not supported in this browser.");
      return;
    }

    const recog = new SpeechRecognition();
    recog.continuous = false;
    recog.lang = "en-US";
    setRecognition(recog);
  }, []);

  // Urdu Speech Synthesis Assistant
  const speakUrdu = (text: string, callback?: () => void) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel(); // Stop previous voice

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ur-PK"; // Urdu Accent
    utter.rate = 0.95; // Clear natural speed
    utter.pitch = 1;

    utter.onend = () => {
      if (callback) callback();
    };

    window.speechSynthesis.speak(utter);
  };

  const startListening = () => {
    setShowHey(true);

    // Clear Urdu Intro Message detailing Shah Fragrance & WhatsApp Ordering Flow
    const welcomeUrdu = `
      KhushAamdeed Shah Fragrance par! 
      Yahan aap hamaray luxury perfumes dekh saktay hain. 
      Jab aapko koi perfume pasand aaye, toh cart mein add karke Proceed to WhatsApp Checkout par click karein. 
      Aapki delivery details seedha hamaray WhatsApp par confirm ho jayengi.
    `;

    speakUrdu(welcomeUrdu, () => {
      if (!recognition) return;
      try {
        recognition.start();
        setListening(true);
      } catch (err) {
        console.error("Speech recognition error:", err);
      }

      recognition.onresult = (ev: any) => {
        const transcript = ev.results[0][0].transcript.toLowerCase().trim();
        console.log("Voice Command Heard:", transcript);

        if (transcript.includes("scroll down") || transcript.includes("neeche")) {
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
          speakUrdu("Neeche scroll kar diya gaya hai.");
        } else if (
          transcript.includes("scroll up") ||
          transcript.includes("go to top") ||
          transcript.includes("uppar")
        ) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          speakUrdu("Sab se uppar chalay gaye hain.");
        } else if (transcript.includes("reload") || transcript.includes("refresh")) {
          speakUrdu("Page reload ho raha hai.");
          window.location.reload();
        } else if (transcript.includes("home")) {
          router.push("/");
          speakUrdu("Home page par jaa rahay hain.");
        } else if (transcript.includes("about")) {
          router.push("/About");
          speakUrdu("About Us page par jaa rahay hain.");
        } else if (transcript.includes("contact")) {
          router.push("/Contact");
          speakUrdu("Contact page par jaa rahay hain.");
        } else if (transcript.includes("product") || transcript.includes("collection")) {
          router.push("/Product");
          speakUrdu("Perfume collection page par jaa rahay hain.");
        } else if (transcript.includes("cart") || transcript.includes("order")) {
          router.push("/Cart");
          speakUrdu("Shopping cart par jaa rahay hain.");
        } else {
          speakUrdu("Aap ka hukam samajh nahi aaya, dubara koshish karein.");
        }

        setListening(false);
      };

      recognition.onend = () => setListening(false);
      recognition.onerror = () => setListening(false);
    });
  };

  return (
    <>
      {/* Floating Robot Icon */}
      <div className="fixed top-28 right-6 z-50">
        <motion.div
          whileHover={{ scale: 1.25, rotate: [0, 8, -8, 0] }}
          animate={{ y: [0, -6, 0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          onClick={startListening}
          className={`cursor-pointer text-6xl md:text-7xl p-3 rounded-full shadow-2xl backdrop-blur-md transition-all border ${
            listening
              ? "text-rose-600 bg-rose-50/80 border-rose-300"
              : "text-blue-900 bg-white/80 border-blue-900/20 hover:bg-white"
          }`}
          title="Click for Voice Assistant Guide"
        >
          <VscRobot />
        </motion.div>
      </div>

      {/* Greeting Speech Bubble */}
      <AnimatePresence>
        {showHey && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-48 right-6 z-50 bg-white/90 backdrop-blur-md text-gray-900 border border-blue-900/15 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 font-serif text-xs md:text-sm"
          >
            <span className="text-base">👋</span>
            <span className="font-semibold text-blue-900">Shah AI Assistant Listening...</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}