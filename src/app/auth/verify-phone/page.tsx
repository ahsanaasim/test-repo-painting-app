"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";
import { Loader2 } from "lucide-react";
import { useApp } from "@/context/app-context";
import { getDemoState } from "@/lib/utils";
import { LogoMark } from "@/components/shared/status";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";

export default function VerifyPhonePage() {
  const searchParams = useSearchParams();
  const state = getDemoState({ state: searchParams.get("state") ?? undefined });
  const { locale, setLocale, tr } = useApp();
  const { theme, setTheme } = useTheme();
  const [otp, setOtp] = useState("");
  const [seconds, setSeconds] = useState(45);
  const phone = searchParams.get("phone") ?? "+8801712345678";

  useEffect(() => {
    if (seconds <= 0) return;
    const id = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [seconds]);

  const isError = state === "error";

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

        <h1 className="mb-1 text-center text-2xl font-semibold">{tr("verifyPhone")}</h1>
        <p className="mb-2 text-center text-sm text-muted-foreground">
          Enter the 6-digit code sent to
        </p>
        <p className="mb-6 text-center font-mono text-sm">{phone}</p>

        {isError ? (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>
              Invalid or expired OTP. Retry or request a new code.
            </AlertDescription>
          </Alert>
        ) : null}

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="otp">OTP code</Label>
            <Input
              id="otp"
              inputMode="numeric"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              className="text-center font-mono text-lg tracking-[0.4em]"
              placeholder="••••••"
            />
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Resend in {seconds}s</span>
            <Button
              variant="link"
              className="h-auto px-0"
              disabled={seconds > 0}
              onClick={() => {
                setSeconds(45);
                toast.success("OTP resent");
              }}
            >
              Resend OTP
            </Button>
          </div>
          <Button
            className="w-full"
            disabled={otp.length !== 6 || state === "loading"}
            onClick={() => {
              if (isError && otp === "000000") {
                toast.error("Still invalid");
                return;
              }
              toast.success("Phone verified");
              window.location.assign("/checkout");
            }}
          >
            {state === "loading" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : null}
            Verify
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" asChild>
              <Link href="/auth/guest-checkout">Change phone</Link>
            </Button>
            {isError ? (
              <Button variant="secondary" className="flex-1" asChild>
                <Link href="/checkout">Back to checkout</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
