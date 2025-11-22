"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MapPin, Phone, Star, Navigation } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '0.5rem'
};

const center = {
    lat: 40.7128,
    lng: -74.0060
};

const gyms = [
    { id: 1, name: "Renzo Gracie Academy", lat: 40.7505, lng: -73.9934 },
    { id: 2, name: "Marcelo Garcia Jiu-Jitsu", lat: 40.7527, lng: -73.9930 },
    { id: 3, name: "Unity Jiu Jitsu", lat: 40.7619, lng: -73.9663 }
];

export default function GymsPage() {
    return (
        <div className="min-h-screen bg-black pt-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-display italic text-white mb-4">FIND A <span className="text-octagon-red">GYM</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">Locate top-rated MMA gyms and dojos near you.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
                    {/* Gym List */}
                    <div className="space-y-4 overflow-y-auto pr-2">
                        <GymCard
                            name="Renzo Gracie Academy"
                            rating="5.0"
                            address="224 W 30th St, New York, NY"
                            distance="0.8 miles"
                        />
                        <GymCard
                            name="Marcelo Garcia Jiu-Jitsu"
                            rating="4.9"
                            address="325 W 38th St, New York, NY"
                            distance="1.2 miles"
                        />
                        <GymCard
                            name="Unity Jiu Jitsu"
                            rating="4.8"
                            address="13 E 37th St, New York, NY"
                            distance="1.5 miles"
                        />
                        <GymCard
                            name="Shaolin's MMA"
                            rating="4.7"
                            address="780 8th Ave, New York, NY"
                            distance="2.1 miles"
                        />
                    </div>

                    {/* Map Interface */}
                    <div className="lg:col-span-2 bg-neutral-900 rounded-lg border border-white/10 overflow-hidden relative">
                        <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={13}
                                options={{
                                    styles: [
                                        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                                        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                                        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                                        {
                                            featureType: "administrative.locality",
                                            elementType: "labels.text.fill",
                                            stylers: [{ color: "#d59563" }],
                                        },
                                    ]
                                }}
                            >
                                {gyms.map(gym => (
                                    <Marker key={gym.id} position={{ lat: gym.lat, lng: gym.lng }} />
                                ))}
                            </GoogleMap>
                        </LoadScript>

                        {/* Fallback/Overlay if no API key */}
                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/50">
                            <div className="text-center p-6 bg-black/80 rounded border border-octagon-red/50 backdrop-blur-sm">
                                <MapPin className="w-12 h-12 text-octagon-red mx-auto mb-4" />
                                <h3 className="text-xl font-display text-white mb-2">Map Integration Ready</h3>
                                <p className="text-gray-400 text-sm">Add your Google Maps API Key in the code to enable live map data.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function GymCard({ name, rating, address, distance }: { name: string, rating: string, address: string, distance: string }) {
    return (
        <Card variant="glass" className="p-6 hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-display uppercase text-white group-hover:text-octagon-red transition-colors">{name}</h3>
                <div className="flex items-center bg-octagon-gold/10 px-2 py-1 rounded">
                    <Star className="w-3 h-3 text-octagon-gold fill-current mr-1" />
                    <span className="text-xs font-bold text-octagon-gold">{rating}</span>
                </div>
            </div>
            <div className="flex items-start text-gray-400 text-sm mb-4">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                {address}
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="text-xs font-bold uppercase text-gray-500">{distance}</div>
                <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0"><Phone className="w-4 h-4" /></Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0"><Navigation className="w-4 h-4" /></Button>
                </div>
            </div>
        </Card>
    );
}
