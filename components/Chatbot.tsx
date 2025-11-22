"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "./ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-octagon-black border border-white/20 rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-octagon-red p-4 flex justify-between items-center">
                            <h3 className="text-white font-bold">Octagon Assistant</h3>
                            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-octagon-dark">
                            <div className="flex justify-start">
                                <div className="bg-white/10 text-gray-200 p-3 rounded-lg rounded-tl-none max-w-[80%] text-sm">
                                    Hello! I&apos;m your AI fight analyst. Ask me about fight predictions, training tips, or gym recommendations.
                                </div>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10 bg-octagon-black">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Ask anything..."
                                    className="flex-grow bg-white/5 border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-octagon-red"
                                />
                                <button className="bg-octagon-red p-2 rounded text-white hover:bg-red-700 transition-colors">
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-octagon-red text-white p-4 rounded-full shadow-lg z-50 border-2 border-white/10 hover:shadow-red-900/50 hover:shadow-xl transition-shadow"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </motion.button>
        </>
    );
}
