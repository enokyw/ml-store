import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { themeManager } from "@/shared/lib/theme.action";
import "./globals.css"
import ThemeProvider from "@/shared/providers/theme.provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Start-X369",
  description: "Start-X369 - Home",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function BaseLayout({ children }: { children: React.ReactNode }) {
    const theme = await themeManager()

    return (
        <html lang="es" data-theme={theme}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased size-full ease-in-out transition-all duration-300`}>
                <ThemeProvider initialTheme={theme}>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}