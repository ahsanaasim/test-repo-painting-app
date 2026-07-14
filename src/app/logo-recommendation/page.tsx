"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";
import { Frame, Loader2 } from "lucide-react";
import { useApp } from "@/context/app-context";
import { getDemoState } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  DemoStateHint,
  EmptyState,
  PageHeader,
  StatusBanner,
} from "@/components/shared/status";
import { toast } from "sonner";

export default function LogoRecommendationPage() {
  const searchParams = useSearchParams();
  const state = getDemoState({ state: searchParams.get("state") ?? undefined });
  const { tr } = useApp();
  const { theme, setTheme } = useTheme();
  const [placement, setPlacement] = useState(true);

  if (state === "loading") {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (state === "empty") {
    return (
      <EmptyState
        title="No logo recommendation yet"
        description="Generate a brand mark suggestion for your seller storefront."
      />
    );
  }

  if (state === "error") {
    return (
      <div className="mx-auto max-w-lg space-y-4">
        <Alert variant="destructive">
          <AlertDescription>{tr("errorGeneric")}</AlertDescription>
        </Alert>
        <Button onClick={() => window.location.reload()}>{tr("retry")}</Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg">
      <DemoStateHint state={state} />
      <PageHeader title="Logo recommendation" />
      <StatusBanner state={state} />

      <Card className="animate-fade-in-up">
        <CardContent className="space-y-5 p-6">
          <div className="flex flex-col items-center gap-4 rounded-lg border bg-gradient-to-br from-slate-50 to-blue-50 p-8 dark:from-slate-900 dark:to-slate-800">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#a855f7] text-white shadow-md">
              <Frame className="h-12 w-12" />
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold">{tr("appName")}</div>
              <p className="mt-2 text-sm text-muted-foreground">
                A violet art-inspired mark recommending geometric framing for
                gallery trust and marketplace clarity.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="placement">Placement preview</Label>
            <Switch
              id="placement"
              checked={placement}
              onCheckedChange={setPlacement}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label>Theme mode</Label>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              Toggle theme
            </Button>
          </div>

          {placement ? (
            <div className="rounded-md border bg-sidebar p-4 text-sidebar-foreground">
              <div className="flex items-center gap-2 text-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#7c3aed] to-[#a855f7]">
                  <Frame className="h-3.5 w-3.5" />
                </span>
                Sidebar placement preview
              </div>
            </div>
          ) : null}

          <div className="flex gap-2">
            <Button
              className="flex-1"
              onClick={() => toast.success("Logo accepted")}
            >
              Accept logo
            </Button>
            <Button
              variant="secondary"
              className="flex-1"
              onClick={() => toast.message("Revision requested")}
            >
              Request revision
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
