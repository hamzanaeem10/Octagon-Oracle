"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Target, TrendingUp, Calendar, Star, Zap, Camera } from "lucide-react";
import Link from "next/link";

export default function FanDashboard() {
    const { user, isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/login");
        } else if (user?.role !== "fan") {
            router.push("/dashboard/coach");
        }
    }, [isAuthenticated, user, router]);

    if (!user) return null;

    const stats = [
        { label: "Predictions Made", value: "47", icon: Target, color: "text-octagon-red" },
        { label: "Accuracy Rate", value: "68%", icon: TrendingUp, color: "text-green-500" },
        { label: "Form Checks", value: "12", icon: Camera, color: "text-octagon-red" },
        { label: "Days Active", value: "45", icon: Calendar, color: "text-octagon-red" }
    ];

    const upcomingFights = [
        { fighter1: "Edwards", fighter2: "Covington", event: "UFC 296", date: "Dec 16" },
        { fighter1: "Makhachev", fighter2: "Volkanovski", event: "UFC 297", date: "Jan 20" },
        { fighter1: "Topuria", fighter2: "Holloway", event: "UFC 298", date: "Feb 17" }
    ];

    const recentPredictions = [
        { fight: "McGregor vs Khabib", prediction: "Khabib", result: "Correct", confidence: "87%" },
        { fight: "Jones vs Gane", prediction: "Jones", result: "Correct", confidence: "92%" },
        { fight: "Adesanya vs Pereira", prediction: "Adesanya", result: "Incorrect", confidence: "75%" }
    ];

    return (
        <div className="min-h-screen bg-black pt-24 px-4 sm:px-6 lg:px-8 pb-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <h1 className="text-5xl font-display italic text-white">
                            FAN <span className="text-octagon-red">DASHBOARD</span>
                        </h1>
                        <div className="bg-octagon-red/20 text-octagon-red px-3 py-1 rounded text-xs font-bold uppercase border border-octagon-red/30 flex items-center gap-2">
                            <Star className="w-3 h-3" />
                            Fan/Learner
                        </div>
                    </div>
                    <p className="text-gray-400">Welcome back, {user.name}</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, idx) => (
                        <Card key={idx} variant="glass" className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                <div className={`text-3xl font-display ${stat.color}`}>{stat.value}</div>
                            </div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </Card>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Quick Actions */}
                    <Card variant="glass" className="p-8 lg:col-span-2">
                        <h2 className="text-2xl font-display uppercase text-white mb-6">Quick Actions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link href="/prediction">
                                <div className="p-6 bg-white/5 rounded border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                                    <Zap className="w-8 h-8 text-octagon-red mb-3 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-display text-white mb-2">Fight Predictions</h3>
                                    <p className="text-sm text-gray-400">Predict upcoming fight outcomes</p>
                                </div>
                            </Link>
                            <Link href="/form-check">
                                <div className="p-6 bg-white/5 rounded border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                                    <Camera className="w-8 h-8 text-octagon-red mb-3 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-display text-white mb-2">Form Correction</h3>
                                    <p className="text-sm text-gray-400">Improve your technique with AI</p>
                                </div>
                            </Link>
                            <Link href="/comparison">
                                <div className="p-6 bg-white/5 rounded border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                                    <Target className="w-8 h-8 text-octagon-red mb-3 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-display text-white mb-2">Fighter Comparison</h3>
                                    <p className="text-sm text-gray-400">Compare fighter statistics</p>
                                </div>
                            </Link>
                            <Link href="/training">
                                <div className="p-6 bg-white/5 rounded border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                                    <Star className="w-8 h-8 text-octagon-red mb-3 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-display text-white mb-2">Training</h3>
                                    <p className="text-sm text-gray-400">Learn MMA fundamentals</p>
                                </div>
                            </Link>
                        </div>

                        {/* Upcoming Fights */}
                        <div className="mt-8">
                            <h3 className="text-xl font-display uppercase text-white mb-4">Upcoming Fights</h3>
                            <div className="space-y-3">
                                {upcomingFights.map((fight, idx) => (
                                    <div key={idx} className="p-4 bg-white/5 rounded border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <span className="text-white font-bold">{fight.fighter1}</span>
                                                <span className="text-gray-500">vs</span>
                                                <span className="text-white font-bold">{fight.fighter2}</span>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs text-octagon-red font-bold">{fight.event}</div>
                                                <div className="text-xs text-gray-500">{fight.date}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    {/* Recent Predictions */}
                    <Card variant="glass" className="p-8">
                        <h2 className="text-2xl font-display uppercase text-white mb-6">Recent Predictions</h2>
                        <div className="space-y-4">
                            {recentPredictions.map((pred, idx) => (
                                <div key={idx} className="p-4 bg-white/5 rounded border border-white/10">
                                    <div className="mb-2">
                                        <p className="text-white font-bold text-sm">{pred.fight}</p>
                                        <p className="text-gray-400 text-xs">Predicted: {pred.prediction}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className={`text-xs font-bold ${pred.result === "Correct" ? "text-green-500" : "text-octagon-red"
                                            }`}>
                                            {pred.result}
                                        </span>
                                        <span className="text-xs text-gray-500">{pred.confidence}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
