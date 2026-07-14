"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";
import { Eye, EyeOff, Loader2, Phone } from "lucide-react";
import { useApp } from "@/context/app-context";
import { getDemoState } from "@/lib/utils";
import { LogoMark } from "@/components/shared/status";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const state = getDemoState({ state: searchParams.get("state") ?? undefined });
  const { locale, setLocale, tr, setRole } = useApp();
  const { theme, setTheme } = useTheme();
  const [email, setEmail] = useState("nusrat@email.com");
  const [password, setPassword] = useState("password123");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(state === "loading");

  const canSubmit = email.includes("@") && password.length >= 6 && !loading;

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-8">
      <div className="w-full max-w-md animate-fade-in-up rounded-lg border bg-card p-8 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <LogoMark />
          <div className="flex items-center gap-1">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setLocale(locale === "en" ? "bn" : "en")}
            >
              {locale === "en" ? "বাং" : "EN"}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              Theme
            </Button>
            <Button size="sm" variant="ghost" asChild>
              <Link href="/">✕</Link>
            </Button>
          </div>
        </div>

        <h1 className="mb-1 text-center text-2xl font-semibold">{tr("welcomeBack")}</h1>
        <p className="mb-6 text-center text-sm text-muted-foreground">
          {tr("login")} to continue to {tr("appName")}
        </p>

        {state === "error" ? (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>Invalid email or password.</AlertDescription>
          </Alert>
        ) : null}
        {state === "plan_limit" ? (
          <Alert variant="warning" className="mb-4">
            <AlertDescription>{tr("planLimit")}</AlertDescription>
          </Alert>
        ) : null}
        {state === "permission_denied" ? (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{tr("permissionDenied")}</AlertDescription>
          </Alert>
        ) : null}

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setTimeout(() => {
              setRole("buyer");
              setLoading(false);
              toast.success("Logged in");
              window.location.assign("/");
            }, 700);
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="email">{tr("email")}</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">{tr("password")}</Label>
              <Link href="#" className="text-[13px] text-primary hover:underline">
                {tr("forgotPassword")}
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-muted-foreground"
                onClick={() => setShow((s) => !s)}
                aria-label="Show password"
              >
                {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <Button className="w-full" disabled={!canSubmit || state === "permission_denied"}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {tr("login")}
          </Button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-[13px] text-muted-foreground">{tr("orContinueWith")}</span>
          <Separator className="flex-1" />
        </div>

        <div className="grid gap-2">
          <Button variant="outline" className="w-full" type="button">
            Google
          </Button>
          <Button variant="outline" className="w-full" type="button">
            Facebook
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/auth/verify-phone">
              <Phone className="h-4 w-4" />
              Phone
            </Link>
          </Button>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          New here?{" "}
          <Link href="/auth/register" className="text-primary hover:underline">
            {tr("register")}
          </Link>
        </p>

        <div className="mt-6 flex justify-center gap-4 text-[12px] text-muted-foreground">
          <Link href="#">{tr("terms")}</Link>
          <Link href="#">{tr("privacy")}</Link>
          <Link href="#">{tr("accessibility")}</Link>
        </div>
      </div>
    </div>
  );
}
