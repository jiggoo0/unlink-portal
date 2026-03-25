/** @format */

"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * 🌍 GLOBAL SERVICE PROVIDERS
 * -------------------------------------------------------------------------
 * รวมระบบศูนย์กลางของแอปพลิเคชัน (React 19 Optimized)
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
