"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CountdownTimer } from "@/components/CountdownTimer";
import { ArrowRight, TrendingUp, AlertTriangle, BarChart2, Brain, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PredictionPage() {
    const [persona, setPersona] = useState<"FAN" | "COACH">("FAN");

    return (
        <div className="min-h-screen bg-black pt-16">
            {/* FEATURED FIGHT HERO */}
            <section className="relative h-[70vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-neutral-900/20" />

                <div className="relative z-10 text-center mb-8">
                    <div className="text-octagon-red font-heading font-bold tracking-widest text-sm mb-2 animate-pulse">NEXT LIVE EVENT</div>
                    <h1 className="text-5xl md:text-7xl font-display uppercase italic text-white leading-none mb-6">
                        TSARUKYAN <span className="text-gray-500 not-italic text-3xl align-middle mx-2">VS</span> HOOKER
                    </h1>
                    <div className="flex justify-center">
                        <CountdownTimer />
                    </div>
                </div>

                <div className="relative z-10 grid grid-cols-2 gap-20 items-end h-[300px]">
                    <img
                        src="/images/tsarukyan.png"
                        alt="Tsarukyan"
                        className="h-full object-contain drop-shadow-[0_0_15px_rgba(210,10,10,0.3)] mask-image-gradient-b"
                    />
                    <img
                        src="/images/hooker.png"
                        alt="Hooker"
                        className="h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] mask-image-gradient-b"
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Persona Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white/5 p-1 rounded-lg flex">
                        <button
                            onClick={() => setPersona("FAN")}
                            className={`px-6 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all ${persona === "FAN" ? "bg-octagon-red text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
                        >
                            Fan View
                        </button>
                        <button
                            onClick={() => setPersona("COACH")}
                            className={`px-6 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all ${persona === "COACH" ? "bg-octagon-gold text-black shadow-lg" : "text-gray-400 hover:text-white"}`}
                        >
                            Coach View
                        </button>
                    </div>
                </div>

                {/* AI Prediction Card */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-display uppercase text-white">AI Prediction Analysis</h2>
                        <div className="bg-octagon-gold/10 text-octagon-gold px-3 py-1 rounded text-xs font-bold uppercase border border-octagon-gold/20">
                            Confidence: High (87%)
                        </div>
                    </div>

                    <Card variant="glass" className="p-8 border-t-4 border-t-octagon-red">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Winner Prediction */}
                            <div className="text-center border-r border-white/10 pr-8">
                                <div className="text-sm text-gray-400 font-heading uppercase mb-2">Predicted Winner</div>
                                <div className="text-5xl font-display italic text-white mb-2">TSARUKYAN</div>
                                <div className="text-octagon-red font-bold uppercase text-sm">By KO/TKO (Round 2)</div>
                            </div>

                            {/* Dynamic Content Based on Persona */}
                            <div className="md:col-span-2">
                                <h3 className="text-lg font-display uppercase text-white mb-4">
                                    {persona === "FAN" ? "Key Victory Factors" : "Strategic Blueprint"}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {persona === "FAN" ? (
                                        <>
                                            <FactorCard
                                                icon={<TrendingUp className="text-green-500" />}
                                                title="Grappling Advantage"
                                                desc="Superior takedown accuracy (68%) vs Hooker's defense."
                                            />
                                            <FactorCard
                                                icon={<AlertTriangle className="text-octagon-gold" />}
                                                title="Damage Output"
                                                desc="Higher significant strikes per minute in last 3 bouts."
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <FactorCard
                                                icon={<Brain className="text-blue-500" />}
                                                title="Suggested Strategy"
                                                desc="Focus on level changes to set up the overhand right. Exploit Hooker's low lead hand."
                                            />
                                            <FactorCard
                                                icon={<Target className="text-octagon-red" />}
                                                title="Key Drill"
                                                desc="Drill: Single leg entry -> High crotch -> Dump. 5 rounds x 5 mins."
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Prediction History (Logged In User) */}
                <div className="mb-16">
                    <h2 className="text-3xl font-display uppercase text-white mb-6">Your Prediction History</h2>
                    <Card variant="glass" className="p-0 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-gray-400">
                                <thead className="bg-white/5 text-xs uppercase font-bold text-white">
                                    <tr>
                                        <th className="px-6 py-4">Event</th>
                                        <th className="px-6 py-4">Fight</th>
                                        <th className="px-6 py-4">Your Pick</th>
                                        <th className="px-6 py-4">Result</th>
                                        <th className="px-6 py-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4">UFC 295</td>
                                        <td className="px-6 py-4 text-white font-bold">Prochazka vs Pereira</td>
                                        <td className="px-6 py-4">Pereira (KO)</td>
                                        <td className="px-6 py-4">Pereira (KO R2)</td>
                                        <td className="px-6 py-4 text-green-500 font-bold uppercase">Won</td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4">UFC 295</td>
                                        <td className="px-6 py-4 text-white font-bold">Aspinall vs Pavlovich</td>
                                        <td className="px-6 py-4">Pavlovich (KO)</td>
                                        <td className="px-6 py-4">Aspinall (KO R1)</td>
                                        <td className="px-6 py-4 text-octagon-red font-bold uppercase">Lost</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function FactorCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="bg-white/5 p-4 rounded border border-white/10 flex items-start gap-3">
            <div className="mt-1">{icon}</div>
            <div>
                <div className="text-white font-bold uppercase text-sm mb-1">{title}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{desc}</div>
            </div>
        </div>
    );
}

function BoutRow({ fighter1, fighter2, date, event, odds1, odds2 }: { fighter1: string, fighter2: string, date: string, event: string, odds1: string, odds2: string }) {
    return (
        <Card variant="glass" className="p-4 flex flex-col md:flex-row items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="flex items-center gap-4 mb-4 md:mb-0 w-full md:w-auto">
                <div className="text-center w-16">
                    <div className="text-xs font-bold text-gray-500 uppercase">{date}</div>
                    <div className="text-xs font-bold text-octagon-red uppercase">{event}</div>
                </div>
                <div className="flex-grow md:flex-grow-0">
                    <div className="text-xl font-display uppercase text-white">
                        {fighter1} <span className="text-gray-500 text-sm mx-1">VS</span> {fighter2}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                <div className="flex gap-4 text-sm font-mono text-gray-400">
                    <span>{odds1}</span>
                    <span>{odds2}</span>
                </div>
                <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">Analyze</Button>
            </div>
        </Card>
    );
}
