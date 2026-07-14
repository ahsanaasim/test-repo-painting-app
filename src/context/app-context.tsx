"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Locale, t, TranslationKey } from "@/lib/i18n";
import { currentUser } from "@/data/sample";

type Role = "buyer" | "seller" | "guest";

type AppContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  tr: (key: TranslationKey) => string;
  role: Role;
  setRole: (r: Role) => void;
  user: typeof currentUser;
  unreadCount: number;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (v: boolean) => void;
};

const AppContext = React.createContext<AppContextValue | null>(null);

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = React.useState<Locale>("en");
  const [role, setRole] = React.useState<Role>("buyer");
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  const value = React.useMemo<AppContextValue>(
    () => ({
      locale,
      setLocale,
      tr: (key) => t(key, locale),
      role,
      setRole,
      user: { ...currentUser, role },
      unreadCount: 2,
      sidebarCollapsed,
      setSidebarCollapsed,
    }),
    [locale, role, sidebarCollapsed]
  );

  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </NextThemesProvider>
  );
}

export function useApp() {
  const ctx = React.useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProviders");
  return ctx;
}
