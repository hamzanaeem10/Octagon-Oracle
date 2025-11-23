"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BarChart2, Target, TrendingUp, Calendar, Dumbbell, Users } from "lucide-react";
import Link from "next/link";

export default function CoachDashboard() {
    const { user, isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/login");
        } else if (user?.role !== "coach") {
            router.push("/dashboard/fan");
        }
    }, [isAuthenticated, user, router]);

    if (!user) return null;

    const stats = [
        { label: "Training Sessions", value: "23", icon: Dumbbell, color: "text-octagon-gold" },
        { label: "Fighter Comparisons", value: "15", icon: Users, color: "text-octagon-gold" },
        { label: "Avg Performance", value: "87%", icon: TrendingUp, color: "text-green-500" },
        { label: "This Month", value: "12", icon: Calendar, color: "text-octagon-gold" }
    ];

    const recentActivity = [
        { action: "Fighter Comparison", detail: "Analyzed McGregor vs Khabib", time: "2 hours ago" },
        { action: "Training Session", detail: "Completed striking fundamentals", time: "1 day ago" },
        { action: "Performance Review", detail: "Reviewed athlete progress", time: "2 days ago" }
    ];

    return (
        <div className="min-h-screen bg-black pt-24 px-4 sm:px-6 lg:px-8 pb-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <h1 className="text-5xl font-display italic text-white">
                            COACH <span className="text-octagon-gold">DASHBOARD</span>
                        </h1>
                        <div className="bg-octagon-gold/20 text-octagon-gold px-3 py-1 rounded text-xs font-bold uppercase border border-octagon-gold/30 flex items-center gap-2">
                            <Dumbbell className="w-3 h-3" />
                            Coach/Fighter
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
                            <Link href="/comparison">
                                <div className="p-6 bg-white/5 rounded border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                                    <BarChart2 className="w-8 h-8 text-octagon-gold mb-3 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-display text-white mb-2">Fighter Comparison</h3>
                                    <p className="text-sm text-gray-400">Analyze fighter stats and strategies</p>
                                </div>
                            </Link>
                            <Link href="/training">
                                <div className="p-6 bg-white/5 rounded border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                                    <Target className="w-8 h-8 text-octagon-gold mb-3 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-display text-white mb-2">Training Programs</h3>
                                    <p className="text-sm text-gray-400">Access advanced training modules</p>
                                </div>
                            </Link>
                            <Link href="/gyms">
                                <div className="p-6 bg-white/5 rounded border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                                    <Dumbbell className="w-8 h-8 text-octagon-gold mb-3 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-display text-white mb-2">Find Gyms</h3>
                                    <p className="text-sm text-gray-400">Locate training facilities nearby</p>
                                </div>
                            </Link>
                            <Link href="/profile">
                                <div className="p-6 bg-white/5 rounded border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                                    <Users className="w-8 h-8 text-octagon-gold mb-3 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-display text-white mb-2">Profile</h3>
                                    <p className="text-sm text-gray-400">Manage your account settings</p>
                                </div>
                            </Link>
                        </div>
                    </Card>

                    {/* Recent Activity */}
                    <Card variant="glass" className="p-8">
                        <h2 className="text-2xl font-display uppercase text-white mb-6">Recent Activity</h2>
                        <div className="space-y-4">
                            {recentActivity.map((activity, idx) => (
                                <div key={idx} className="p-4 bg-white/5 rounded border border-white/10">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-octagon-gold rounded-full mt-2 flex-shrink-0" />
                                        <div className="flex-1">
                                            <p className="text-white font-bold text-sm">{activity.action}</p>
                                            <p className="text-gray-400 text-sm">{activity.detail}</p>
                                            <span className="text-xs text-gray-500">{activity.time}</span>
                                        </div>
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
