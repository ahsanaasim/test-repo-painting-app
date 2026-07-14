import type { Metadata } from "next";
import { Suspense } from "react";
import { Fira_Code, Fira_Sans } from "next/font/google";
import { AppProviders } from "@/context/app-context";
import { AppShell } from "@/components/layout/app-shell";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArtVault — Original Paintings Marketplace",
  description:
    "Discover, buy, and sell original paintings across Bangladesh with ArtVault.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${firaSans.variable} ${firaCode.variable} min-h-screen font-sans antialiased`}
      >
        <AppProviders>
          <AppShell>
            <Suspense
              fallback={
                <div className="space-y-4 py-6">
                  <div className="h-8 w-48 animate-shimmer rounded-md" />
                  <div className="h-40 animate-shimmer rounded-lg" />
                  <div className="h-40 animate-shimmer rounded-lg" />
                </div>
              }
            >
              {children}
            </Suspense>
          </AppShell>
        </AppProviders>
      </body>
    </html>
  );
}
