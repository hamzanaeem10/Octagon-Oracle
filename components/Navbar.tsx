"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "./ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10 h-16 flex items-center justify-center">
            <div className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                {/* Left Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {["PREDICTIONS", "FIGHTERS"].map((item) => (
                        <Link key={item} href={item === "PREDICTIONS" ? "/prediction" : item === "FIGHTERS" ? "/comparison" : "#"} className="text-white text-xs font-bold uppercase tracking-wider hover:text-octagon-red transition-colors font-heading">
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Center Logo */}
                <Link href="/" className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2 group">
                    <span className="text-3xl font-display italic tracking-tighter text-white relative">
                        OCTAGON <span className="text-octagon-red">ORACLE</span>
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-octagon-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    </span>
                </Link>

                {/* Right Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {["TRAINING", "GYMS"].map((item) => (
                        <Link key={item} href={item === "TRAINING" ? "/training" : item === "GYMS" ? "/gyms" : "#"} className="text-white text-xs font-bold uppercase tracking-wider hover:text-octagon-red transition-colors font-heading">
                            {item}
                        </Link>
                    ))}
                    <button className="text-white hover:text-octagon-red transition-colors">
                        <Search className="w-4 h-4" />
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden ml-auto">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
                    >
                        {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-16 left-0 right-0 bg-black border-b border-white/10 overflow-hidden md:hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {["PREDICTIONS", "FIGHTERS", "TRAINING", "GYMS"].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-white block px-3 py-4 text-lg font-heading uppercase tracking-wider border-b border-white/5"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
