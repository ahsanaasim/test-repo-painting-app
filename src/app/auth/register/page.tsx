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

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const state = getDemoState({ state: searchParams.get("state") ?? undefined });
  const { locale, setLocale, tr, setRole } = useApp();
  const { theme, setTheme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(state === "loading");

  const canSubmit =
    name.trim() &&
    email.includes("@") &&
    password.length >= 6 &&
    phone.trim() &&
    !loading;

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

        <h1 className="mb-1 text-center text-2xl font-semibold">
          {tr("createAccount")}
        </h1>
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Join {tr("appName")} to buy or sell original art
        </p>

        {state === "error" ? (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>Could not create account. Try again.</AlertDescription>
          </Alert>
        ) : null}

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setTimeout(() => {
              setRole("buyer");
              toast.success("Account created — verify your phone");
              window.location.assign("/auth/verify-phone");
            }, 700);
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="name">{tr("name")}</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{tr("email")}</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">{tr("password")}</Label>
            <div className="relative">
              <Input
                id="password"
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-muted-foreground"
                onClick={() => setShow((s) => !s)}
              >
                {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">{tr("phone")}</Label>
            <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <Button className="w-full" disabled={!canSubmit}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {tr("register")}
          </Button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-[13px] text-muted-foreground">{tr("orContinueWith")}</span>
          <Separator className="flex-1" />
        </div>

        <div className="grid gap-2">
          <Button variant="outline">Google</Button>
          <Button variant="outline">Facebook</Button>
          <Button variant="outline" asChild>
            <Link href="/auth/verify-phone">
              <Phone className="h-4 w-4" />
              Phone
            </Link>
          </Button>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already registered?{" "}
          <Link href="/auth/login" className="text-primary hover:underline">
            {tr("login")}
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
