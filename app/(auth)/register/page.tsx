import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden py-12">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-octagon-gold/10 blur-[100px] rounded-full pointer-events-none" />

            <Card variant="glass" className="w-full max-w-lg p-10 relative z-10 border-white/10">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-display italic text-white mb-2">
                        JOIN THE <span className="text-octagon-gold">RANKINGS</span>
                    </h1>
                    <p className="text-gray-400 text-sm">Create your profile and start your journey.</p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">First Name</label>
                            <input
                                type="text"
                                className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-white focus:border-octagon-gold focus:outline-none transition-colors font-heading"
                                placeholder="Jon"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Last Name</label>
                            <input
                                type="text"
                                className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-white focus:border-octagon-gold focus:outline-none transition-colors font-heading"
                                placeholder="Jones"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-white focus:border-octagon-gold focus:outline-none transition-colors font-heading"
                            placeholder="champion@ufc.com"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-white focus:border-octagon-gold focus:outline-none transition-colors font-heading"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="pt-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Account Type</label>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="border border-octagon-gold/50 bg-octagon-gold/10 p-4 rounded-sm cursor-pointer hover:bg-octagon-gold/20 transition-colors">
                                <div className="font-display text-xl text-white mb-1">FIGHTER</div>
                                <div className="text-xs text-gray-400">For active competitors</div>
                            </div>
                            <div className="border border-white/10 bg-black/50 p-4 rounded-sm cursor-pointer hover:bg-white/5 transition-colors">
                                <div className="font-display text-xl text-gray-400 mb-1">FAN</div>
                                <div className="text-xs text-gray-500">For analytics & news</div>
                            </div>
                        </div>
                    </div>

                    <Button className="w-full" size="lg" variant="secondary">Create Account</Button>
                </form>
                <div className="mt-8 text-center text-sm text-gray-500">
                    Already a member? <Link href="/login" className="text-octagon-gold hover:text-white transition-colors font-bold uppercase">Log In</Link>
                </div>
            </Card>
        </div>
    );
}
