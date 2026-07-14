"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  LogIn,
  Moon,
  Package,
  Palette,
  Settings,
  Store,
  Sun,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useApp } from "@/context/app-context";
import { LogoMark } from "@/components/shared/status";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";

function NavItems({ collapsed }: { collapsed?: boolean }) {
  const pathname = usePathname();
  const { tr, role } = useApp();

  const items = [
    { href: "/", label: tr("catalog"), icon: LayoutGrid },
    ...(role === "buyer" || role === "guest"
      ? [{ href: "/dashboard/buyer", label: tr("buyerDashboard"), icon: Package }]
      : []),
    ...(role === "seller"
      ? [
          {
            href: "/dashboard/seller",
            label: tr("sellerDashboard"),
            icon: Store,
          },
        ]
      : []),
    { href: "/notifications", label: tr("notifications"), icon: Bell },
    { href: "/settings", label: tr("settings"), icon: Settings },
  ];

  return (
    <nav className="space-y-1 px-2">
      {items.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
              active
                ? "bg-sidebar-accent text-white"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-white",
              collapsed && "justify-center px-2"
            )}
            title={item.label}
          >
            <Icon className="h-4 w-4 shrink-0" />
            {!collapsed ? <span>{item.label}</span> : null}
          </Link>
        );
      })}
    </nav>
  );
}

function TopBar() {
  const { locale, setLocale, tr, role, setRole, user, unreadCount } = useApp();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b bg-card/90 px-4 backdrop-blur supports-[backdrop-filter]:bg-card/75">
      <div className="flex items-center gap-2 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Open menu">
              <Palette className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 bg-sidebar p-0 text-sidebar-foreground">
            <div className="border-b border-sidebar-border p-4">
              <LogoMark className="text-white [&_span:last-child]:text-white" />
            </div>
            <div className="py-4">
              <NavItems />
            </div>
          </SheetContent>
        </Sheet>
        <LogoMark />
      </div>

      <div className="hidden text-sm text-muted-foreground md:block">
        Catalog Browse
      </div>

      <div className="flex items-center gap-1.5">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLocale(locale === "en" ? "bn" : "en")}
          aria-label="Language switcher"
        >
          {locale === "en" ? "বাং" : "EN"}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Theme toggle"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
        <Button variant="ghost" size="icon" asChild className="relative">
          <Link href="/notifications" aria-label="Notifications">
            <Bell className="h-4 w-4" />
            {unreadCount > 0 ? (
              <Badge className="absolute -right-1 -top-1 h-4 min-w-4 px-1 text-[10px]">
                {unreadCount}
              </Badge>
            ) : null}
          </Link>
        </Button>

        {role === "guest" ? (
          <div className="flex gap-1">
            <Button size="sm" variant="outline" asChild>
              <Link href="/auth/login">
                <LogIn className="h-3.5 w-3.5" />
                {tr("login")}
              </Link>
            </Button>
            <Button size="sm" asChild className="hidden sm:inline-flex">
              <Link href="/auth/register">{tr("register")}</Link>
            </Button>
          </div>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2 px-2">
                <Avatar className="h-7 w-7">
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden text-sm sm:inline">{user.name}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/settings">
                  <UserRound className="mr-2 h-4 w-4" />
                  {tr("settings")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setRole("buyer")}>
                Switch to buyer
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setRole("seller")}>
                Switch to seller
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setRole("guest")}>
                Sign out (guest)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const { sidebarCollapsed, setSidebarCollapsed } = useApp();

  return (
    <TooltipProvider>
      <div className="flex min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--accent)_0%,_var(--background)_45%)]">
        <aside
          className={cn(
            "sticky top-0 hidden h-screen shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-[width] duration-200 md:flex",
            sidebarCollapsed ? "w-[72px]" : "w-60"
          )}
        >
          <div
            className={cn(
              "flex h-14 items-center border-b border-sidebar-border px-3",
              sidebarCollapsed ? "justify-center" : "justify-between"
            )}
          >
            {sidebarCollapsed ? (
              <Link
                href="/"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#a855f7] text-white"
              >
                <Palette className="h-4 w-4" />
              </Link>
            ) : (
              <LogoMark className="text-white [&_span:last-child]:text-white" />
            )}
            <Button
              variant="ghost"
              size="icon"
              className="text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-white"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              aria-label="Collapse sidebar"
            >
              {sidebarCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto py-4">
            <NavItems collapsed={sidebarCollapsed} />
          </div>
          {!sidebarCollapsed ? (
            <div className="border-t border-sidebar-border p-3 text-[12px] text-sidebar-foreground/50">
              Art marketplace for Bangladesh
            </div>
          ) : null}
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <TopBar />
          <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6">
            {children}
          </main>
        </div>
        <Toaster richColors position="top-right" />
      </div>
    </TooltipProvider>
  );
}
