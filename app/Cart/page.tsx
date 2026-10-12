"use client";
import { useEffect, useState } from "react";
import { FaTrash, FaShoppingBag, FaArrowLeft, FaWhatsapp, FaTimes } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useCart } from '../Context/cartcontext';
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart() {
  const { cartItems, removeFromCart, updateItemQuantity } = useCart();
  
  // Checkout Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Delivery Charges (DC) - Rs. 200 or FREE over Rs. 5000
  const deliveryCharges = subtotal > 5000 ? 0 : 200;
  const grandTotal = subtotal + deliveryCharges;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    // Owner WhatsApp Number Updated to 03410139115
    const ownerWhatsAppNumber = "923410139115"; 

    // Format Cart Items list
    const itemsList = cartItems
      .map((item, index) => `${index + 1}. *${item.name}* (Qty: ${item.quantity}) - Rs. ${(item.price * item.quantity).toLocaleString()}`)
      .join("\n");

    // Construct WhatsApp Message
    const message = `🛍️ *NEW PERFUME ORDER - SHAH FRAGRANCE* 🛍️\n\n` +
      `👤 *Customer Details:*\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Email: ${formData.email}\n` +
      `• City: ${formData.city}\n` +
      `• Address: ${formData.address}\n\n` +
      `📦 *Order Items:*\n${itemsList}\n\n` +
      `-----------------------------------\n` +
      `🔹 Subtotal: Rs. ${subtotal.toLocaleString()}\n` +
      `🚚 Delivery Charges: ${deliveryCharges === 0 ? "FREE" : `Rs. ${deliveryCharges}`}\n` +
      `💰 *Grand Total: Rs. ${grandTotal.toLocaleString()}*\n` +
      `-----------------------------------\n` +
      `✨ Please confirm my order!`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${ownerWhatsAppNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    setIsModalOpen(false);
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-6 md:px-16 py-12 font-serif text-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center">
            <div className="w-2 h-10 bg-blue-900 rounded-full mr-4 shadow-sm"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Your <span className="text-blue-900">Cart</span>
            </h1>
          </div>

          <Link href="/Product" className="inline-flex items-center gap-2 text-xs uppercase font-serif font-semibold text-blue-900 bg-white/70 backdrop-blur-md px-4 py-2.5 rounded-xl border border-blue-900/10 shadow-sm hover:bg-white transition-all">
            <FaArrowLeft className="text-xs" /> Continue Shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <motion.div 
            className="bg-white/70 backdrop-blur-md rounded-3xl border border-blue-900/10 p-12 text-center shadow-md max-w-xl mx-auto my-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}>
            <FaShoppingBag className="text-5xl text-blue-900/40 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Dancing Script', cursive" }}>Your cart is empty</h2>
            <p className="text-gray-600 text-sm mb-6">Looks like you haven&apos;t added any luxury scents yet.</p>
            <Link href="/Product" className="inline-block px-8 py-3 bg-blue-900 hover:bg-blue-950 text-white font-serif text-xs uppercase tracking-wider font-semibold rounded-xl shadow-md transition-all">
              Explore Collection
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-8">
            
            {/* Desktop Table View */}
            <div className="hidden sm:block overflow-hidden bg-white/75 backdrop-blur-md rounded-3xl border border-blue-900/10 shadow-xl p-6">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="border-b border-blue-900/10 text-xs font-serif uppercase tracking-widest text-blue-900 font-bold">
                    <th className="pb-4 px-4">Item</th>
                    <th className="pb-4 px-4">Price</th>
                    <th className="pb-4 px-4">Quantity</th>
                    <th className="pb-4 px-4">Subtotal</th>
                    <th className="pb-4 px-4 text-center">Remove</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-900/5">
                  {cartItems.map((item) => (
                    <tr key={item.id} className="hover:bg-blue-50/30 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16 bg-white rounded-xl border border-blue-900/10 p-1 flex items-center justify-center flex-shrink-0">
                            <Image src={item.image} alt={item.name} width={56} height={56} className="object-contain max-h-full rounded-lg" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-base" style={{ fontFamily: "'Dancing Script', cursive" }}>{item.name}</h3>
                            <span className="text-[10px] uppercase tracking-wider text-blue-900 font-semibold bg-blue-100/60 px-2 py-0.5 rounded-md">Signature</span>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-4 font-serif font-semibold text-gray-800 text-sm">
                        Rs. {item.price.toLocaleString()}
                      </td>

                      <td className="py-4 px-4">
                        <div className="inline-flex items-center gap-2 bg-slate-100/80 p-1.5 rounded-xl border border-blue-900/10">
                          <button
                            onClick={() => updateItemQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="w-7 h-7 bg-white text-blue-900 font-bold rounded-lg flex items-center justify-center shadow-xs cursor-pointer"
                          >
                            <FiMinus className="text-xs" />
                          </button>
                          <span className="px-2 text-sm font-bold text-gray-900">{item.quantity}</span>
                          <button
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 bg-white text-blue-900 font-bold rounded-lg flex items-center justify-center shadow-xs cursor-pointer"
                          >
                            <GoPlus className="text-xs" />
                          </button>
                        </div>
                      </td>

                      <td className="py-4 px-4 font-serif font-bold text-blue-900 text-base">
                        Rs. {(item.price * item.quantity).toLocaleString()}
                      </td>

                      <td className="py-4 px-4 text-center">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-rose-500 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors cursor-pointer"
                        >
                          <FaTrash className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="sm:hidden space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white/75 backdrop-blur-md rounded-2xl border border-blue-900/10 p-4 shadow-md flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 bg-white rounded-xl border border-blue-900/10 p-1 flex justify-center items-center flex-shrink-0">
                      <Image src={item.image} alt={item.name} width={56} height={56} className="object-contain max-h-full" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg" style={{ fontFamily: "'Dancing Script', cursive" }}>{item.name}</h3>
                      <p className="text-blue-900 font-bold text-sm">Rs. {item.price.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-blue-900/10 pt-3">
                    <div className="flex items-center gap-2 bg-slate-100/80 p-1 rounded-xl border border-blue-900/10">
                      <button onClick={() => updateItemQuantity(item.id, Math.max(1, item.quantity - 1))} className="w-7 h-7 bg-white text-blue-900 font-bold rounded-lg flex items-center justify-center shadow-xs">
                        <FiMinus className="text-xs" />
                      </button>
                      <span className="px-2 text-sm font-bold text-gray-900">{item.quantity}</span>
                      <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="w-7 h-7 bg-white text-blue-900 font-bold rounded-lg flex items-center justify-center shadow-xs">
                        <GoPlus className="text-xs" />
                      </button>
                    </div>

                    <span className="text-blue-900 font-bold text-base">Rs. {(item.price * item.quantity).toLocaleString()}</span>

                    <button onClick={() => removeFromCart(item.id)} className="p-2 text-rose-500 bg-rose-50 rounded-xl">
                      <FaTrash className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Breakdown & Checkout Button Box */}
            <div className="bg-white/75 backdrop-blur-md rounded-3xl border border-blue-900/10 p-6 md:p-8 shadow-xl space-y-6">
              
              <div className="space-y-2 border-b border-blue-900/10 pb-4 text-sm md:text-base">
                <div className="flex justify-between text-gray-600">
                  <span>Items Subtotal:</span>
                  <span className="font-bold text-gray-900">Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Charges (DC):</span>
                  <span className="font-bold text-gray-900">
                    {deliveryCharges === 0 ? <span className="text-emerald-600">FREE</span> : `Rs. ${deliveryCharges}`}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 pt-2">
                  <span>Grand Total:</span>
                  <span className="text-blue-900 text-2xl">Rs. {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsModalOpen(true)}
                  className="w-full md:w-auto px-12 py-4 bg-blue-900 hover:bg-blue-950 text-white font-serif uppercase tracking-wider text-xs font-semibold rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <FaWhatsapp className="text-lg" /> Proceed to WhatsApp Checkout
                </motion.button>
              </div>
            </div>

          </div>
        )}

        {/* Customer Details Checkout Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl border border-blue-900/10 relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-2 rounded-full bg-slate-100 transition-colors"
                >
                  <FaTimes />
                </button>

                <h3 className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Dancing Script', cursive" }}>Complete Your Order</h3>
                <p className="text-gray-500 text-xs mb-6 font-serif">Please enter your delivery details to forward your order directly to our WhatsApp.</p>

                <form onSubmit={handleWhatsAppCheckout} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="Customer Name" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-slate-50"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Phone / WhatsApp Number</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        placeholder="0300 1234567" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        placeholder="example@gmail.com" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-slate-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">City</label>
                    <input 
                      type="text" 
                      name="city" 
                      required 
                      value={formData.city} 
                      onChange={handleInputChange} 
                      placeholder="City Name" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Complete Delivery Address</label>
                    <textarea 
                      name="address" 
                      required 
                      rows={3} 
                      value={formData.address} 
                      onChange={handleInputChange} 
                      placeholder="House #, Street name, Area..." 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-slate-50 resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-serif uppercase tracking-wider text-xs font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <FaWhatsapp className="text-lg" /> Confirm & Send Order to WhatsApp
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}