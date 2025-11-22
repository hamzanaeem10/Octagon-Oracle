import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Activity, Calendar, Trophy, TrendingUp, User } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
                <div>
                    <h1 className="text-5xl font-display italic text-white mb-2">FIGHTER <span className="text-octagon-red">DASHBOARD</span></h1>
                    <p className="text-gray-400">Welcome back, <span className="text-white font-bold">Champion</span></p>
                </div>
                <div className="mt-4 md:mt-0">
                    <Button variant="outline" size="sm">Edit Profile</Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <StatCard icon={<Activity className="text-octagon-red" />} label="Training Sessions" value="12" subtext="This Week" />
                <StatCard icon={<Trophy className="text-octagon-gold" />} label="Win Streak" value="5" subtext="Active" />
                <StatCard icon={<TrendingUp className="text-green-500" />} label="Prediction Accuracy" value="87%" subtext="Last 30 Days" />
                <StatCard icon={<Calendar className="text-blue-500" />} label="Next Fight" value="14" subtext="Days Left" />
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 space-y-8">
                    <h2 className="text-2xl font-display uppercase text-white mb-6">Recent Activity</h2>
                    <Card variant="glass" className="p-0">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center p-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                                    <User className="w-6 h-6 text-gray-400" />
                                </div>
                                <div className="flex-grow">
                                    <div className="text-white font-bold font-heading uppercase">Completed Heavy Bag Session</div>
                                    <div className="text-sm text-gray-500">Striking • 45 Mins</div>
                                </div>
                                <div className="text-sm text-gray-500 font-mono">2h ago</div>
                            </div>
                        ))}
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-display uppercase text-white mb-6">Upcoming Events</h2>
                    <Card variant="glass" className="p-6">
                        <div className="space-y-6">
                            <EventItem date="DEC 16" title="UFC 296" subtitle="Edwards vs Covington" />
                            <EventItem date="JAN 20" title="UFC 297" subtitle="Strickland vs Du Plessis" />
                            <EventItem date="FEB 17" title="UFC 298" subtitle="Volkanovski vs Topuria" />
                        </div>
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <Button variant="ghost" className="w-full text-xs">View Full Calendar</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, label, value, subtext }: { icon: React.ReactNode, label: string, value: string, subtext: string }) {
    return (
        <Card variant="glass" className="p-6">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-white/5 rounded-lg">{icon}</div>
                <div className="text-xs font-bold uppercase text-gray-500 bg-white/5 px-2 py-1 rounded">{subtext}</div>
            </div>
            <div className="text-3xl font-display text-white mb-1">{value}</div>
            <div className="text-sm text-gray-400 font-heading uppercase tracking-wide">{label}</div>
        </Card>
    );
}

function EventItem({ date, title, subtitle }: { date: string, title: string, subtitle: string }) {
    return (
        <div className="flex items-center">
            <div className="w-16 text-center mr-4">
                <div className="text-xs font-bold text-octagon-red uppercase">{date.split(' ')[0]}</div>
                <div className="text-xl font-display text-white">{date.split(' ')[1]}</div>
            </div>
            <div>
                <div className="text-white font-bold uppercase font-heading">{title}</div>
                <div className="text-sm text-gray-500">{subtitle}</div>
            </div>
        </div>
    );
}
