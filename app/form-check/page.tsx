import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Camera, RefreshCw } from "lucide-react";

export default function FormCheckPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-black italic text-white mb-8">FORM <span className="text-octagon-red">CORRECTION</span></h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="col-span-1 lg:col-span-2">
                    <div className="aspect-video bg-black rounded-lg border-2 border-white/10 relative overflow-hidden flex items-center justify-center group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-50" />

                        {/* Overlay UI */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <Camera className="w-16 h-16 text-white/50 mb-4" />
                            <Button size="lg" className="z-10">Enable Camera</Button>
                            <p className="text-gray-400 mt-4 text-sm max-w-md text-center px-4">
                                Allow camera access to analyze your stance and striking form in real-time using our AI vision model.
                            </p>
                        </div>

                        {/* Analysis Overlay Mock */}
                        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur p-4 rounded border border-green-500/50">
                            <p className="text-green-400 font-bold text-sm flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                                AI Active
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 space-y-4">
                    <Card className="h-full">
                        <h3 className="font-bold text-white mb-4 uppercase tracking-wider">Analysis Feedback</h3>

                        <div className="space-y-4">
                            <div className="p-3 bg-green-900/20 border border-green-500/30 rounded">
                                <h4 className="text-green-400 font-bold text-sm">Good Posture</h4>
                                <p className="text-gray-400 text-xs">Your back is straight and chin is tucked.</p>
                            </div>

                            <div className="p-3 bg-red-900/20 border border-red-500/30 rounded">
                                <h4 className="text-red-400 font-bold text-sm">Elbow Flare Detected</h4>
                                <p className="text-gray-400 text-xs">Keep your elbows tight to your body to protect ribs.</p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h4 className="text-white font-bold mb-2">Session Stats</h4>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-400">Jabs Thrown</span>
                                    <span className="text-white">42</span>
                                </div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-400">Form Score</span>
                                    <span className="text-octagon-gold">8.5/10</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
