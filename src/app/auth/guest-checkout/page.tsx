"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useApp } from "@/context/app-context";
import { getDemoState } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export default function GuestCheckoutPage() {
  const searchParams = useSearchParams();
  const state = getDemoState({ state: searchParams.get("state") ?? undefined });
  const { locale, setLocale, tr } = useApp();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("dhaka");
  const [district, setDistrict] = useState("dhaka");
  const [area, setArea] = useState<"dhaka" | "outside">("dhaka");

  const canProceed = name && phone && address && city && district;

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-8">
      <div className="w-full max-w-md animate-fade-in-up rounded-lg border bg-card p-8 shadow-sm">
        <div className="mb-4 flex justify-end">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setLocale(locale === "en" ? "bn" : "en")}
          >
            {locale === "en" ? "বাং" : "EN"}
          </Button>
        </div>
        <h1 className="mb-1 text-center text-2xl font-semibold">
          {tr("guestCheckout")}
        </h1>
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Continue without creating an account. Phone verification is required.
        </p>

        {state === "error" ? (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{tr("errorGeneric")}</AlertDescription>
          </Alert>
        ) : null}

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>{tr("name")}</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>{tr("phone")}</Label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>{tr("address")}</Label>
            <Textarea value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label>City</Label>
              <Select value={city} onValueChange={setCity}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dhaka">Dhaka</SelectItem>
                  <SelectItem value="chattogram">Chattogram</SelectItem>
                  <SelectItem value="sylhet">Sylhet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>District</Label>
              <Select value={district} onValueChange={setDistrict}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dhaka">Dhaka</SelectItem>
                  <SelectItem value="gazipur">Gazipur</SelectItem>
                  <SelectItem value="narayanganj">Narayanganj</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Delivery area</Label>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={area === "dhaka" ? "default" : "outline"}
                onClick={() => setArea("dhaka")}
              >
                {tr("dhaka")}
              </Button>
              <Button
                size="sm"
                variant={area === "outside" ? "default" : "outline"}
                onClick={() => setArea("outside")}
              >
                {tr("outsideDhaka")}
              </Button>
            </div>
          </div>
          <Button
            className="w-full"
            disabled={!canProceed || state === "plan_limit"}
            onClick={() => {
              toast.success("Proceeding to OTP");
              window.location.assign(
                `/auth/verify-phone?phone=${encodeURIComponent(phone)}`
              );
            }}
          >
            Proceed to OTP
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/">{tr("back")}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
