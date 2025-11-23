"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { User, Mail, Calendar, Target, Award, Edit2, Save, X, Camera } from "lucide-react";
import { motion } from "framer-motion";

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        userType: "Fighter",
        joinDate: "January 2024",
        trainingGoal: "Competition Preparation",
        experienceLevel: "Intermediate",
        weight: "170 lbs",
        height: "5'11\"",
        discipline: "MMA"
    });

    const [editedProfile, setEditedProfile] = useState(profile);

    const handleSave = () => {
        setProfile(editedProfile);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedProfile(profile);
        setIsEditing(false);
    };

    const stats = [
        { label: "Predictions Made", value: "47", icon: Target },
        { label: "Training Sessions", value: "23", icon: Award },
        { label: "Accuracy Rate", value: "68%", icon: Award },
        { label: "Days Active", value: "45", icon: Calendar }
    ];

    return (
        <div className="min-h-screen bg-black pt-24 px-4 sm:px-6 lg:px-8 pb-12">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-display italic text-white mb-4">
                        YOUR <span className="text-octagon-red">PROFILE</span>
                    </h1>
                    <p className="text-gray-400">Manage your account and track your progress</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Profile Card */}
                    <div className="lg:col-span-1">
                        <Card variant="glass" className="p-6">
                            <div className="text-center mb-6">
                                <div className="relative inline-block mb-4">
                                    <div className="w-32 h-32 bg-gradient-to-br from-octagon-red to-octagon-gold rounded-full flex items-center justify-center">
                                        <User className="w-16 h-16 text-white" />
                                    </div>
                                    {isEditing && (
                                        <button className="absolute bottom-0 right-0 w-10 h-10 bg-octagon-red rounded-full flex items-center justify-center hover:bg-octagon-red/80 transition-colors">
                                            <Camera className="w-5 h-5 text-white" />
                                        </button>
                                    )}
                                </div>
                                <h2 className="text-2xl font-display text-white mb-1">{profile.name}</h2>
                                <p className="text-gray-400 text-sm">{profile.userType}</p>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-sm">
                                    <Mail className="w-4 h-4 text-octagon-gold" />
                                    <span className="text-gray-300">{profile.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Calendar className="w-4 h-4 text-octagon-gold" />
                                    <span className="text-gray-300">Joined {profile.joinDate}</span>
                                </div>
                            </div>

                            <Button
                                onClick={() => setIsEditing(!isEditing)}
                                variant={isEditing ? "ghost" : "primary"}
                                className="w-full"
                            >
                                {isEditing ? (
                                    <><X className="w-4 h-4 mr-2" /> Cancel</>
                                ) : (
                                    <><Edit2 className="w-4 h-4 mr-2" /> Edit Profile</>
                                )}
                            </Button>
                        </Card>

                        {/* Stats */}
                        <Card variant="glass" className="p-6 mt-6">
                            <h3 className="text-xl font-display uppercase text-white mb-4">Your Stats</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="text-center p-3 bg-white/5 rounded">
                                        <stat.icon className="w-6 h-6 text-octagon-gold mx-auto mb-2" />
                                        <div className="text-2xl font-display text-white mb-1">{stat.value}</div>
                                        <div className="text-xs text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    {/* Profile Details */}
                    <div className="lg:col-span-2">
                        <Card variant="glass" className="p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-display uppercase text-white">Profile Information</h3>
                                {isEditing && (
                                    <Button onClick={handleSave} variant="primary">
                                        <Save className="w-4 h-4 mr-2" />
                                        Save Changes
                                    </Button>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ProfileField
                                    label="Full Name"
                                    value={isEditing ? editedProfile.name : profile.name}
                                    isEditing={isEditing}
                                    onChange={(value) => setEditedProfile({ ...editedProfile, name: value })}
                                />
                                <ProfileField
                                    label="Email"
                                    value={isEditing ? editedProfile.email : profile.email}
                                    isEditing={isEditing}
                                    onChange={(value) => setEditedProfile({ ...editedProfile, email: value })}
                                />
                                <ProfileField
                                    label="User Type"
                                    value={isEditing ? editedProfile.userType : profile.userType}
                                    isEditing={isEditing}
                                    onChange={(value) => setEditedProfile({ ...editedProfile, userType: value })}
                                    type="select"
                                    options={["Fighter", "Coach", "Beginner", "Analyst"]}
                                />
                                <ProfileField
                                    label="Experience Level"
                                    value={isEditing ? editedProfile.experienceLevel : profile.experienceLevel}
                                    isEditing={isEditing}
                                    onChange={(value) => setEditedProfile({ ...editedProfile, experienceLevel: value })}
                                    type="select"
                                    options={["Beginner", "Intermediate", "Advanced", "Professional"]}
                                />
                                <ProfileField
                                    label="Training Goal"
                                    value={isEditing ? editedProfile.trainingGoal : profile.trainingGoal}
                                    isEditing={isEditing}
                                    onChange={(value) => setEditedProfile({ ...editedProfile, trainingGoal: value })}
                                    type="select"
                                    options={["Self-Defense", "Fitness", "Competition Preparation", "Professional Fighting"]}
                                />
                                <ProfileField
                                    label="Primary Discipline"
                                    value={isEditing ? editedProfile.discipline : profile.discipline}
                                    isEditing={isEditing}
                                    onChange={(value) => setEditedProfile({ ...editedProfile, discipline: value })}
                                    type="select"
                                    options={["MMA", "BJJ", "Muay Thai", "Boxing", "Karate", "Wrestling"]}
                                />
                                <ProfileField
                                    label="Weight"
                                    value={isEditing ? editedProfile.weight : profile.weight}
                                    isEditing={isEditing}
                                    onChange={(value) => setEditedProfile({ ...editedProfile, weight: value })}
                                />
                                <ProfileField
                                    label="Height"
                                    value={isEditing ? editedProfile.height : profile.height}
                                    isEditing={isEditing}
                                    onChange={(value) => setEditedProfile({ ...editedProfile, height: value })}
                                />
                            </div>
                        </Card>

                        {/* Recent Activity */}
                        <Card variant="glass" className="p-8 mt-6">
                            <h3 className="text-2xl font-display uppercase text-white mb-6">Recent Activity</h3>
                            <div className="space-y-4">
                                <ActivityItem
                                    action="Completed training module"
                                    detail="Week 2: Striking Fundamentals"
                                    time="2 hours ago"
                                />
                                <ActivityItem
                                    action="Made a prediction"
                                    detail="Edwards vs Covington - UFC 296"
                                    time="1 day ago"
                                />
                                <ActivityItem
                                    action="Compared fighters"
                                    detail="Conor McGregor vs Khabib Nurmagomedov"
                                    time="2 days ago"
                                />
                                <ActivityItem
                                    action="Form analysis session"
                                    detail="Jab technique - Score: 85%"
                                    time="3 days ago"
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProfileField({
    label,
    value,
    isEditing,
    onChange,
    type = "text",
    options = []
}: {
    label: string;
    value: string;
    isEditing: boolean;
    onChange: (value: string) => void;
    type?: "text" | "select";
    options?: string[];
}) {
    return (
        <div>
            <label className="block text-sm font-heading uppercase text-gray-400 mb-2">{label}</label>
            {isEditing ? (
                type === "select" ? (
                    <select
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-octagon-red transition-colors"
                    >
                        {options.map((option) => (
                            <option key={option} value={option} className="bg-neutral-900">
                                {option}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-octagon-red transition-colors"
                    />
                )
            ) : (
                <div className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white">
                    {value}
                </div>
            )}
        </div>
    );
}

function ActivityItem({ action, detail, time }: { action: string; detail: string; time: string }) {
    return (
        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-2 h-2 bg-octagon-red rounded-full mt-2 flex-shrink-0" />
            <div className="flex-1">
                <p className="text-white font-bold text-sm">{action}</p>
                <p className="text-gray-400 text-sm">{detail}</p>
            </div>
            <span className="text-xs text-gray-500">{time}</span>
        </div>
    );
}
