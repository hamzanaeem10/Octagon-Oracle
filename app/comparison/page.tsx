"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Search, BarChart2, ArrowRightLeft, Share2, Download, Target, Brain } from "lucide-react";
import { FighterRadarChart } from "@/components/charts/FighterRadarChart";

export default function ComparisonPage() {
    return (
        <div className="min-h-screen bg-black pt-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-display italic text-white mb-4">FIGHTER <span className="text-octagon-red">COMPARISON</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">Select two fighters to analyze their stats head-to-head.</p>
                </div>

                {/* Fighter Selection */}
                <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center mb-12">
                    <div className="md:col-span-5">
                        <Card variant="glass" className="p-6 border-octagon-red/30">
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Fighter A</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-white/10 rounded-sm py-2 pl-10 pr-4 text-white focus:border-octagon-red focus:outline-none font-heading uppercase"
                                    defaultValue="Conor McGregor"
                                />
                            </div>
                            <div className="mt-4 flex items-center gap-4">
                                <div className="w-16 h-16 bg-gray-800 rounded-full overflow-hidden border border-white/10">
                                    <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2021-07/MCGREGOR_CONOR_L_07-10.png?itok=x-2y8y6_" className="w-full h-full object-cover object-top" />
                                </div>
                                <div>
                                    <div className="text-xl font-display text-white">CONOR MCGREGOR</div>
                                    <div className="text-xs text-gray-400 font-bold uppercase">Former Double Champ</div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="md:col-span-1 flex justify-center">
                        <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                            <ArrowRightLeft className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    <div className="md:col-span-5">
                        <Card variant="glass" className="p-6">
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Fighter B</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-white/10 rounded-sm py-2 pl-10 pr-4 text-white focus:border-octagon-red focus:outline-none font-heading uppercase"
                                    defaultValue="Khabib Nurmagomedov"
                                />
                            </div>
                            <div className="mt-4 flex items-center gap-4">
                                <div className="w-16 h-16 bg-gray-800 rounded-full overflow-hidden border border-white/10">
                                    <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2020-10/NURMAGOMEDOV_KHABIB_L_10-24.png?itok=P6-8y8y_" className="w-full h-full object-cover object-top" />
                                </div>
                                <div>
                                    <div className="text-xl font-display text-white">KHABIB NURMAGOMEDOV</div>
                                    <div className="text-xs text-gray-400 font-bold uppercase">Hall of Famer</div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Comparison Stats */}
                <Card variant="glass" className="p-8">
                    <div className="grid grid-cols-3 gap-8 items-center border-b border-white/10 pb-8 mb-8">
                        <div className="text-center">
                            <div className="text-5xl font-display text-white">6&apos;4&quot;</div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Height</div>
                        </div>
                        <div className="text-center text-gray-700 font-display text-2xl">VS</div>
                        <div className="text-center">
                            <div className="text-5xl font-display text-white">6&apos;4&quot;</div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Height</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 items-center border-b border-white/10 pb-8 mb-8">
                        <div className="text-center">
                            <div className="text-5xl font-display text-octagon-red">84.5&quot;</div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Reach</div>
                        </div>
                        <div className="text-center text-gray-700 font-display text-2xl">VS</div>
                        <div className="text-center">
                            <div className="text-5xl font-display text-white">80.0&quot;</div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Reach</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 items-center">
                        <div className="text-center">
                            <div className="text-5xl font-display text-white">27-1-0</div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Record</div>
                        </div>
                        <div className="text-center text-gray-700 font-display text-2xl">VS</div>
                        <div className="text-center">
                            <div className="text-5xl font-display text-white">20-4-0</div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Record</div>
                        </div>
                    </div>

                    <div className="mt-12 p-4 bg-black/40 rounded border border-white/5 flex flex-col items-center justify-center min-h-[400px]">
                        <div className="w-full flex justify-between items-center mb-4 px-4">
                            <div className="text-white font-display text-xl uppercase">Advanced Analytics</div>
                            <div className="flex gap-4 text-xs font-bold uppercase">
                                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-octagon-gold rounded-full"></div>Conor</div>
                                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-octagon-red rounded-full"></div>Khabib</div>
                            </div>
                        </div>
                        <FighterRadarChart
                            data={[
                                { subject: 'Striking', A: 95, B: 60, fullMark: 100 },
                                { subject: 'Grappling', A: 40, B: 98, fullMark: 100 },
                                { subject: 'Stamina', A: 65, B: 90, fullMark: 100 },
                                { subject: 'Defense', A: 70, B: 85, fullMark: 100 },
                                { subject: 'Power', A: 90, B: 75, fullMark: 100 },
                                { subject: 'Speed', A: 85, B: 70, fullMark: 100 },
                            ]}
                            fighterAName="Conor"
                            fighterBName="Khabib"
                        />
                    </div>
                </Card>

                {/* Training Suggestions */}
                <Card variant="glass" className="p-8 mt-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-display uppercase text-white flex items-center">
                            <Brain className="w-6 h-6 mr-3 text-octagon-gold" />
                            Training Suggestions
                        </h2>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                                alert('Export functionality will generate a downloadable comparison report.');
                            }}
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Export Comparison
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Conor's Suggestions */}
                        <div>
                            <h3 className="text-lg font-display text-octagon-gold mb-4 flex items-center">
                                <Target className="w-5 h-5 mr-2" />
                                For Conor McGregor
                            </h3>
                            <div className="space-y-3">
                                <SuggestionItem
                                    title="Improve Takedown Defense"
                                    description="Focus on sprawl drills and cage work to counter Khabib's wrestling pressure"
                                    priority="high"
                                />
                                <SuggestionItem
                                    title="Cardio Conditioning"
                                    description="Increase stamina training for later rounds - 5-round sparring sessions"
                                    priority="high"
                                />
                                <SuggestionItem
                                    title="Ground Game Development"
                                    description="Work on defensive BJJ and getting back to feet quickly"
                                    priority="medium"
                                />
                            </div>
                        </div>

                        {/* Khabib's Suggestions */}
                        <div>
                            <h3 className="text-lg font-display text-octagon-red mb-4 flex items-center">
                                <Target className="w-5 h-5 mr-2" />
                                For Khabib Nurmagomedov
                            </h3>
                            <div className="space-y-3">
                                <SuggestionItem
                                    title="Striking Defense"
                                    description="Improve head movement and footwork to avoid Conor's power shots"
                                    priority="high"
                                />
                                <SuggestionItem
                                    title="Closing Distance"
                                    description="Practice level changes and entries against southpaw strikers"
                                    priority="medium"
                                />
                                <SuggestionItem
                                    title="Maintain Pressure"
                                    description="Continue dominant grappling approach - it's your biggest advantage"
                                    priority="low"
                                />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

function SuggestionItem({ title, description, priority }: { title: string; description: string; priority: "high" | "medium" | "low" }) {
    const priorityColors = {
        high: "border-octagon-red/50 bg-octagon-red/10",
        medium: "border-octagon-gold/50 bg-octagon-gold/10",
        low: "border-white/20 bg-white/5"
    };

    return (
        <div className={`p-4 rounded border ${priorityColors[priority]} transition-colors hover:bg-white/10`}>
            <h4 className="text-white font-bold text-sm mb-1">{title}</h4>
            <p className="text-gray-400 text-xs">{description}</p>
            <div className="mt-2">
                <span className={`text-xs uppercase font-bold ${priority === "high" ? "text-octagon-red" :
                    priority === "medium" ? "text-octagon-gold" :
                        "text-gray-500"
                    }`}>
                    {priority} priority
                </span>
            </div>
        </div>
    );
}
