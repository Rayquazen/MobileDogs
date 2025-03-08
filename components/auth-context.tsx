import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
	name: string;

	// строчку ниже заменить на email
	logIn: string;
	dogBreed?: string;
	dogName?: string;
	dogAge?: number;
	isFormDone?: boolean;
}

interface AuthContextType {
	user: User | null;
	isAuthenticated: boolean;
	login: (userData: User) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);

	const login = (userData: User) => {
		setUser(userData);
	};

	const logout = () => {
		setUser(null);
	};

	return (
		<AuthContext.Provider
			value={{ user, isAuthenticated: !!user, login, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
