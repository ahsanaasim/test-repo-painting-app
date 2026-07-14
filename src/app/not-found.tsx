"use client";

import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { useApp } from "@/context/app-context";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/shared/status";

export default function NotFound() {
  const { tr, locale, setLocale } = useApp();

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center text-center">
      <LogoMark className="mb-6" />
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent text-primary">
        <FileQuestion className="h-7 w-7" />
      </div>
      <h1 className="text-2xl font-semibold">404</h1>
      <p className="mt-2 text-muted-foreground">{tr("notFound")}</p>
      <div className="mt-6 flex gap-2">
        <Button asChild>
          <Link href="/">{tr("goHome")}</Link>
        </Button>
        <Button
          variant="outline"
          onClick={() => setLocale(locale === "en" ? "bn" : "en")}
        >
          {locale === "en" ? "বাং" : "EN"}
        </Button>
      </div>
    </div>
  );
}
