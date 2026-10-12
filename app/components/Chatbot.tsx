// "use client";
// import { useEffect, useRef, useState } from "react";
// import { X } from "lucide-react";
// import { TbPerfume } from "react-icons/tb";

// type Message = { role: "user" | "assistant"; content: string };

// export default function Chatbot() {
//   const [open, setOpen] = useState(false);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     { role: "assistant", content: "Hey! 👋 I'm AromaBot, your perfume expert. How can I help?" },
//   ]);
//   const [animate, setAnimate] = useState(true);
//   const endRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const timer = setTimeout(() => setAnimate(false), 180000); 
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const sendMessage = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim() || loading) return;

//     const userMessage: Message = { role: "user", content: input };
//     setMessages(prev => [...prev, userMessage]);
//     setInput("");
//     setLoading(true);

//     try {
//       const response = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ messages: [...messages, userMessage] }),
//       });

//       if (!response.ok) throw new Error(response.statusText);

//       const data = await response.json();
//       setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
//     } catch (error) {
//       console.error("Chat error:", error);
//       setMessages(prev => [
//         ...prev,
//         { role: "assistant", content: "Sorry, technical issue. Please try again." },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {!open ? (
//         <button
//           onClick={() => setOpen(true)}
//           className={`p-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition transform hover:scale-110
//             ${animate ? "animate-bounce-slow" : ""}`}
//           title="Ask AromaBot"
//         >
//           <TbPerfume size={24} />
//         </button>
//       ) : (
//         <div className="w-72 sm:w-80 md:w-96 h-[28rem] sm:h-[32rem] bg-white rounded-lg shadow-xl flex flex-col border border-gray-200">
//           {/* Header */}
//           <div className="bg-purple-600 text-white p-3 sm:p-4 flex justify-between items-center rounded-t-lg">
//             <h2 className="font-bold text-sm sm:text-base">Perfume Assistant</h2>
//             <button onClick={() => setOpen(false)} className="p-1 hover:bg-purple-700 rounded">
//               <X size={20} />
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-2 sm:space-y-3">
//             {messages.map((msg, i) => (
//               <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
//                 <div
//                   className={`max-w-[80%] rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base ${
//                     msg.role === "user"
//                       ? "bg-purple-600 text-white rounded-br-none"
//                       : "bg-gray-100 text-gray-800 rounded-bl-none"
//                   }`}
//                 >
//                   {msg.content}
//                 </div>
//               </div>
//             ))}
//             {loading && (
//               <div className="flex justify-start">
//                 <div className="bg-gray-100 px-3 py-2 rounded-lg rounded-bl-none">
//                   <div className="flex space-x-2">
//                     <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
//                     <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100"></div>
//                     <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200"></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={endRef} />
//           </div>

//           <form onSubmit={sendMessage} className="p-3 sm:p-4 border-t">
//             <div className="flex gap-2">
//               <input
//                 value={input}
//                 onChange={e => setInput(e.target.value)}
//                 placeholder="Ask about perfumes..."
//                 className="flex-1 border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 disabled={loading}
//               />
//               <button
//                 type="submit"
//                 disabled={loading || !input.trim()}
//                 className="px-4 py-2 bg-purple-600 text-white rounded-lg disabled:opacity-50 hover:bg-purple-700 text-sm sm:text-base"
//               >
//                 Send
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 1.5s infinite;
//         }
//       `}</style>
//     </div>
//   );
// }



"use client";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { TbPerfume } from "react-icons/tb";

type Message = { role: "user" | "assistant"; content: string };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Welcome to Shah Fragrance! 👑 How can I assist you with our royal fragrance collection today?" },
  ]);
  const [animate, setAnimate] = useState(true);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 180000); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error(response.statusText);

      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "Sorry, I am having a temporary connection issue. Please feel free to WhatsApp us directly!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-serif">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className={`p-4 bg-blue-900 text-white rounded-full shadow-2xl hover:bg-blue-950 border border-blue-700/30 transition-all duration-300 transform hover:scale-110 flex items-center justify-center
            ${animate ? "animate-bounce-slow" : ""}`}
          title="Ask Shah Fragrance Assistant"
        >
          <TbPerfume size={28} />
        </button>
      ) : (
        <div className="w-72 sm:w-80 md:w-96 h-[28rem] sm:h-[32rem] bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl flex flex-col border border-blue-900/20 overflow-hidden">
          
          {/* Header */}
          <div className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <TbPerfume size={22} className="text-blue-200" />
              <div>
                <h2 className="font-bold text-sm sm:text-base leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>Shah Fragrance AI</h2>
                <span className="text-[10px] text-blue-200 uppercase tracking-widest block">Online Assistant</span>
              </div>
            </div>
            <button 
              onClick={() => setOpen(false)} 
              className="p-1.5 hover:bg-blue-800 rounded-full transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 bg-gradient-to-b from-slate-50/50 to-blue-50/30">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm shadow-xs ${
                    msg.role === "user"
                      ? "bg-blue-900 text-white rounded-br-none font-serif"
                      : "bg-white text-gray-800 border border-blue-900/10 rounded-bl-none font-serif leading-relaxed"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-blue-900/10 px-4 py-3 rounded-2xl rounded-bl-none shadow-xs">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-blue-900 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-900 animate-bounce delay-100"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-900 animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={sendMessage} className="p-3 border-t border-blue-900/10 bg-white">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask about perfumes, notes, prices..."
                className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 bg-slate-50 text-gray-900"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="px-4 py-2 bg-blue-900 text-white rounded-xl disabled:opacity-50 hover:bg-blue-950 text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all shadow-sm"
              >
                Send
              </button>
            </div>
          </form>

        </div>
      )}

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </div>
  );
}