"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Brain, Dumbbell, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileNav() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "Predict", href: "/prediction", icon: Brain },
        { name: "Train", href: "/training", icon: Dumbbell },
        { name: "Profile", href: "/dashboard", icon: User },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-white/10 md:hidden pb-safe">
            <div className="flex justify-around items-center h-16">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
                                isActive ? "text-octagon-red" : "text-gray-500 hover:text-gray-300"
                            )}
                        >
                            <Icon className={cn("w-5 h-5", isActive && "fill-current")} />
                            <span className="text-[10px] font-bold uppercase tracking-wide">{item.name}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
