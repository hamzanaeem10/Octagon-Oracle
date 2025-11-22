import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-octagon-red/20 blur-[100px] rounded-full pointer-events-none" />

            <Card variant="glass" className="w-full max-w-md p-10 relative z-10 border-white/10">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-display italic text-white mb-2">
                        WELCOME <span className="text-octagon-red">BACK</span>
                    </h1>
                    <p className="text-gray-400 text-sm">Enter your credentials to access the octagon.</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-white focus:border-octagon-red focus:outline-none transition-colors font-heading"
                            placeholder="fighter@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-white focus:border-octagon-red focus:outline-none transition-colors font-heading"
                            placeholder="••••••••"
                        />
                    </div>
                    <Button className="w-full" size="lg" variant="primary">Sign In</Button>
                </form>
                <div className="mt-8 text-center text-sm text-gray-500">
                    Don&apos;t have an account? <Link href="/register" className="text-octagon-red hover:text-white transition-colors font-bold uppercase">Join Now</Link>
                </div>
            </Card>
        </div>
    );
}
