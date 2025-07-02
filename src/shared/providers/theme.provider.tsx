'use client';

import { createContext, useContext, useState } from "react";
import { themeManager } from "../lib/theme.action";

type Theme = 'light' | 'dark';

const ThemeContext = createContext<{ currentTheme: Theme, toggleTheme: () => Promise<void> }>({ currentTheme: 'light', toggleTheme: async () => {} });

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

interface ThemeProviderProps {
    children: React.ReactNode;
    initialTheme: Theme;
};

export default function ThemeProvider({ children, initialTheme }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(initialTheme);

    const toggleTheme = async () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        await themeManager(newTheme);
    }

    return (
        <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}