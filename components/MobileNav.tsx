"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Brain, Dumbbell, User, Target, MapPin, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

export function MobileNav() {
    const pathname = usePathname();
    const { user, isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return (
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-white/10 md:hidden pb-safe">
                <div className="flex justify-around items-center h-16">
                    <Link href="/" className={cn("flex flex-col items-center justify-center w-full h-full space-y-1 text-gray-500 hover:text-white")}>
                        <Home className="w-5 h-5" />
                        <span className="text-[10px] font-bold uppercase tracking-wide">Home</span>
                    </Link>
                    <Link href="/login" className={cn("flex flex-col items-center justify-center w-full h-full space-y-1 text-octagon-red")}>
                        <LogIn className="w-5 h-5" />
                        <span className="text-[10px] font-bold uppercase tracking-wide">Login</span>
                    </Link>
                </div>
            </div>
        );
    }

    const getNavItems = () => {
        const common = [
            { name: "Home", href: "/", icon: Home },
        ];

        if (user?.role === "coach") {
            return [
                ...common,
                { name: "Compare", href: "/comparison", icon: Target },
                { name: "Train", href: "/training", icon: Dumbbell },
                { name: "Profile", href: "/dashboard/coach", icon: User },
            ];
        } else {
            return [
                ...common,
                { name: "Predict", href: "/prediction", icon: Brain },
                { name: "Train", href: "/training", icon: Dumbbell },
                { name: "Profile", href: "/dashboard/fan", icon: User },
            ];
        }
    };

    const navItems = getNavItems();

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
