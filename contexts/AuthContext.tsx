"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type UserRole = "coach" | "fan";

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatar?: string;
    joinDate: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Load user from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem("octagon_user");
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setUser(userData);
            setIsAuthenticated(true);
        }
    }, []);

    const login = async (email: string, password: string) => {
        // Mock authentication - in production, this would call your API
        // For now, check if user exists in localStorage
        const storedUser = localStorage.getItem("octagon_user");

        if (storedUser) {
            const userData = JSON.parse(storedUser);
            if (userData.email === email) {
                setUser(userData);
                setIsAuthenticated(true);
                return;
            }
        }

        throw new Error("Invalid credentials");
    };

    const register = async (name: string, email: string, password: string, role: UserRole) => {
        // Mock registration - in production, this would call your API
        const newUser: User = {
            id: Math.random().toString(36).substr(2, 9),
            name,
            email,
            role,
            joinDate: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })
        };

        // Store in localStorage
        localStorage.setItem("octagon_user", JSON.stringify(newUser));

        setUser(newUser);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("octagon_user");
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
