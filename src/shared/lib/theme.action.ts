'use server'

import { cookies } from 'next/headers'

type Theme = 'light' | 'dark'

export async function themeManager(theme?: Theme): Promise<Theme> {
    const cookieStore = await cookies()
    const currentTheme = cookieStore.get('theme')?.value as Theme || 'light'

    if (theme && theme !== currentTheme) {
        cookieStore.set('theme', theme, {
            maxAge: 60 * 60 * 24 * 365 * 100,
            sameSite: 'strict',
            secure: true,
            httpOnly: true
        });
        return theme;
    }

    return currentTheme || "light"; 
}