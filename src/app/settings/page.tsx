"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";
import { useApp } from "@/context/app-context";
import { getDemoState } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DemoStateHint,
  LogoMark,
  PageHeader,
  StatusBanner,
  SupportCard,
  TwoColumn,
} from "@/components/shared/status";
import { toast } from "sonner";

export default function SettingsPage() {
  const searchParams = useSearchParams();
  const state = getDemoState({ state: searchParams.get("state") ?? undefined });
  const { locale, setLocale, tr, user, setRole } = useApp();
  const { theme, setTheme } = useTheme();
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [emailOn, setEmailOn] = useState(true);
  const [inAppOn, setInAppOn] = useState(true);
  const [smsOn, setSmsOn] = useState(false);

  return (
    <div>
      <DemoStateHint state={state} />
      <PageHeader title={tr("settings")} />
      <StatusBanner state={state} />

      <TwoColumn
        main={
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Language</Label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setLocale(locale === "en" ? "bn" : "en")}
                  >
                    {locale === "en" ? "English" : "বাংলা"}
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <Label>Theme</Label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    {theme === "dark" ? "Dark" : "Light"}
                  </Button>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium">
                      Notification preferences
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Email {emailOn ? "on" : "off"} · In-app{" "}
                      {inAppOn ? "on" : "off"} · SMS {smsOn ? "on" : "off"}
                    </p>
                  </div>
                  <Button variant="secondary" onClick={() => setPrefsOpen(true)}>
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Account</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Name · </span>
                  {user.name}
                </div>
                <div>
                  <span className="text-muted-foreground">Email · </span>
                  {user.email}
                </div>
                <div>
                  <span className="text-muted-foreground">Phone · </span>
                  {user.phone}
                </div>
                <Button
                  className="mt-3"
                  onClick={() => toast.success("Settings saved")}
                >
                  {tr("saveChanges")}
                </Button>
                <Button
                  variant="outline"
                  className="mt-2 ml-2"
                  onClick={() => {
                    setRole("guest");
                    toast.message("Signed out");
                  }}
                >
                  Log out
                </Button>
              </CardContent>
            </Card>
          </div>
        }
        rail={
          <div className="space-y-4">
            <Card>
              <CardContent className="flex flex-col items-center gap-3 p-6">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="text-lg">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <LogoMark />
                <Button variant="link" asChild>
                  <a href="mailto:support@artvault.bd">{tr("support")}</a>
                </Button>
                <Button variant="link" className="h-auto p-0">
                  Send feedback
                </Button>
              </CardContent>
            </Card>
            <SupportCard />
          </div>
        }
      />

      <Dialog open={prefsOpen} onOpenChange={setPrefsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Notification preferences</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-toggle">Email</Label>
              <Switch
                id="email-toggle"
                checked={emailOn}
                onCheckedChange={setEmailOn}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="inapp-toggle">In-app</Label>
              <Switch
                id="inapp-toggle"
                checked={inAppOn}
                onCheckedChange={setInAppOn}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sms-toggle">SMS</Label>
              <Switch
                id="sms-toggle"
                checked={smsOn}
                onCheckedChange={setSmsOn}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setPrefsOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setPrefsOpen(false);
                toast.success("Notification preferences saved");
              }}
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
