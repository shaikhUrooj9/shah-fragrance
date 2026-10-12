// import type { Metadata } from "next";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import "./globals.css";
// import { CartProvider } from "./Context/cartcontext";
// import Chatbot from "./components/Chatbot";
// import VoiceNavigation from "./components/VoiceNavigation"; 

// export const metadata: Metadata = {
//   title: "Perfume Store",
//   description: "Perfume store with AI Chatbot",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en">
//       <body>
//         <CartProvider>
//           <Navbar />
//           {children}
//           <Footer />
//           <Chatbot />
//           <VoiceNavigation /> 
//         </CartProvider>
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { CartProvider } from "./Context/cartcontext";
import Chatbot from "./components/Chatbot";
import VoiceNavigation from "./components/VoiceNavigation"; 

export const metadata: Metadata = {
  title: "Shah Fragrance | Premium & Royal Perfumes",
  description: "Discover luxury signature scents, long-lasting fragrances, and Arabian oud collections crafted by Shah Fragrance.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased selection:bg-yellow-500 selection:text-black">
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <Chatbot />
            <VoiceNavigation /> 
          </div>
        </CartProvider>
      </body>
    </html>
  );
}