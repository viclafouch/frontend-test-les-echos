'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import UserProvider from '@/store/User'
import { NextUIProvider } from '@nextui-org/react'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <UserProvider>{children}</UserProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}
