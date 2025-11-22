import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Search, BarChart2, ArrowRightLeft } from "lucide-react";
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
            </div>
        </div>
    );
}
