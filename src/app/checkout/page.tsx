"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Banknote,
  CheckCircle2,
  CreditCard,
  Loader2,
  Smartphone,
  Wallet,
} from "lucide-react";
import { deliveryFeeFor, getPainting, paymentMethods } from "@/data/sample";
import { useApp } from "@/context/app-context";
import { formatBdt, getDemoState } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  DemoStateHint,
  PageHeader,
  StatusBanner,
  SupportCard,
  TwoColumn,
} from "@/components/shared/status";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

type Step = 1 | 2 | 3 | 4 | 5;

const paymentIcons = {
  cod: Banknote,
  bcash: Smartphone,
  mobile_wallet: Wallet,
  ssl: CreditCard,
};

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const state = getDemoState({ state: searchParams.get("state") ?? undefined });
  const stepParam = Number(searchParams.get("step") ?? "1") as Step;
  const step: Step = [1, 2, 3, 4, 5].includes(stepParam) ? stepParam : 1;
  const paintingId = searchParams.get("painting") ?? "p1";
  const painting = getPainting(paintingId) ?? getPainting("p1")!;
  const { locale, tr } = useApp();

  const [name, setName] = useState("Nusrat Rahman");
  const [address, setAddress] = useState("12 Banani Road, Dhaka 1213");
  const [phone, setPhone] = useState("+8801712345678");
  const [area, setArea] = useState<"dhaka" | "outside">("dhaka");
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [payment, setPayment] = useState("bcash");
  const [otpTriggered, setOtpTriggered] = useState(false);

  const fee = deliveryFeeFor(area);
  const total = painting.price + fee;

  const go = (next: Step, extra?: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("step", String(next));
    params.set("painting", paintingId);
    if (extra) Object.entries(extra).forEach(([k, v]) => params.set(k, v));
    router.push(`/checkout?${params.toString()}`);
  };

  const addressSuggestions = useMemo(
    () => [
      "12 Banani Road, Dhaka 1213",
      "House 7, Gulshan 2, Dhaka",
      "Agrabad C/A, Chattogram",
    ],
    []
  );

  const buyerSummary = (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">Buyer summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <div>
          <div className="text-muted-foreground">Name</div>
          <div className="font-medium">{name}</div>
        </div>
        <div>
          <div className="text-muted-foreground">Phone</div>
          <div className="font-medium">{phone}</div>
        </div>
        <div>
          <div className="text-muted-foreground">Address</div>
          <div className="font-medium">{address}</div>
        </div>
        <Button variant="link" className="h-auto px-0" onClick={() => go(1)}>
          Edit delivery info
        </Button>
      </CardContent>
    </Card>
  );

  const deliverySummary = (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">Delivery summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>{area === "dhaka" ? tr("dhaka") : tr("outsideDhaka")}</span>
          <span className="font-mono">{formatBdt(fee, locale)}</span>
        </div>
        <div className="text-muted-foreground">{address}</div>
      </CardContent>
    </Card>
  );

  let content: React.ReactNode;

  if (state === "permission_denied") {
    content = (
      <Alert variant="destructive">
        <AlertTitle>Permission denied</AlertTitle>
        <AlertDescription>{tr("permissionDenied")}</AlertDescription>
      </Alert>
    );
  } else if (step === 1) {
    content = (
      <div className="mx-auto max-w-xl space-y-5">
        {(state === "invalid-address" ||
          address.toLowerCase().includes("india")) && (
          <Alert variant="destructive">
            <AlertTitle>Bangladesh only</AlertTitle>
            <AlertDescription>{tr("bangladeshOnly")}</AlertDescription>
          </Alert>
        )}
        <StatusBanner state={state} />
        {state === "loading" ? (
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-10 animate-shimmer rounded-md" />
            ))}
          </div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>{tr("deliveryInformation")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="buyer-name">Buyer name</Label>
                <Input
                  id="buyer-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyer-address">Buyer address</Label>
                <Textarea
                  id="buyer-address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div className="flex flex-wrap gap-2">
                  {addressSuggestions.map((s) => (
                    <Button
                      key={s}
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={() => setAddress(s)}
                    >
                      {s}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label>Delivery area</Label>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    size="sm"
                    variant={area === "dhaka" ? "default" : "outline"}
                    onClick={() => setArea("dhaka")}
                  >
                    {tr("dhaka")}
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant={area === "outside" ? "default" : "outline"}
                    onClick={() => setArea("outside")}
                  >
                    {tr("outsideDhaka")}
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyer-phone">Buyer phone number</Label>
                <div className="flex gap-2">
                  <Input
                    id="buyer-phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setPhoneVerified(false);
                    }}
                  />
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {
                      setOtpTriggered(true);
                      setPhoneVerified(true);
                      toast.success("OTP verified (preview)");
                    }}
                  >
                    Verify OTP
                  </Button>
                </div>
                {otpTriggered ? (
                  <Badge variant="success">Phone verified</Badge>
                ) : null}
              </div>
              <div className="rounded-md border bg-muted/40 p-3 text-sm">
                <div className="flex justify-between">
                  <span>{tr("deliveryFee")}</span>
                  <span className="font-mono">{formatBdt(fee, locale)}</span>
                </div>
              </div>
              <Button
                className="w-full"
                disabled={
                  !name.trim() ||
                  !address.trim() ||
                  !phone.trim() ||
                  !phoneVerified ||
                  state === "invalid-address" ||
                  state === "plan_limit" ||
                  state === "error" ||
                  address.toLowerCase().includes("india")
                }
                onClick={() => go(2)}
              >
                Continue to payment
              </Button>
              {state === "error" ? (
                <Alert variant="destructive">
                  <AlertDescription>{tr("errorGeneric")}</AlertDescription>
                </Alert>
              ) : null}
            </CardContent>
          </Card>
        )}
        <div className="flex justify-center gap-4 text-sm text-muted-foreground">
          <Link href="#">{tr("terms")}</Link>
          <Link href="#">{tr("privacy")}</Link>
          <Link href="#">{tr("support")}</Link>
        </div>
      </div>
    );
  } else if (step === 2) {
    content = (
      <TwoColumn
        main={
          <Card>
            <CardHeader>
              <CardTitle>{tr("paymentMethod")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {state === "empty" ? (
                <Alert>
                  <AlertDescription>
                    No payment methods are available right now.
                  </AlertDescription>
                </Alert>
              ) : state === "loading" ? (
                <div className="flex justify-center py-10">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <RadioGroup value={payment} onValueChange={setPayment}>
                  {paymentMethods.map((m) => {
                    const Icon = paymentIcons[m.id];
                    return (
                      <label
                        key={m.id}
                        className="flex cursor-pointer items-start gap-3 rounded-lg border p-3 hover:bg-accent"
                      >
                        <RadioGroupItem value={m.id} className="mt-1" />
                        <Icon className="mt-0.5 h-5 w-5 text-primary" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 font-medium">
                            {tr(m.labelKey)}
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button type="button" className="text-muted-foreground">
                                  ?
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>{m.description}</TooltipContent>
                            </Tooltip>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {m.description}
                          </p>
                        </div>
                      </label>
                    );
                  })}
                </RadioGroup>
              )}
              {deliverySummary}
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => go(1)}>
                  <ArrowLeft className="h-4 w-4" />
                  {tr("back")}
                </Button>
                <Button
                  disabled={state === "empty" || state === "plan_limit"}
                  onClick={() => go(3)}
                >
                  {tr("continue")}
                </Button>
              </div>
            </CardContent>
          </Card>
        }
        rail={
          <>
            {buyerSummary}
            {deliverySummary}
          </>
        }
      />
    );
  } else if (step === 3) {
    content = (
      <TwoColumn
        main={
          <div className="space-y-4">
            <Card>
              <CardHeader className="flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm">Painting</CardTitle>
                <Button variant="link" className="h-auto px-0" asChild>
                  <Link href={`/painting/${painting.id}`}>Edit</Link>
                </Button>
              </CardHeader>
              <CardContent className="flex gap-3">
                <div className="relative h-20 w-20 overflow-hidden rounded-md">
                  <Image
                    src={painting.image}
                    alt={painting.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">
                    {locale === "bn" ? painting.titleBn : painting.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {painting.size}
                  </div>
                  <div className="font-mono text-sm text-primary">
                    {formatBdt(painting.price, locale)}
                  </div>
                </div>
              </CardContent>
            </Card>
            {deliverySummary}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Payment</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                {tr(
                  paymentMethods.find((m) => m.id === payment)?.labelKey ??
                    "bcash"
                )}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-between p-4">
                <span className="font-semibold">Order total</span>
                <span className="font-mono text-lg font-semibold text-primary">
                  {formatBdt(total, locale)}
                </span>
              </CardContent>
            </Card>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => go(2)}>
                {tr("back")}
              </Button>
              <Button
                disabled={state === "plan_limit"}
                onClick={() => {
                  if (payment === "cod") {
                    router.push(
                      `/checkout/confirmation?painting=${painting.id}`
                    );
                  } else {
                    go(4);
                    setTimeout(() => {
                      if (searchParams.get("forceError") === "1") go(5);
                      else
                        router.push(
                          `/checkout/confirmation?painting=${painting.id}`
                        );
                    }, 1800);
                  }
                }}
              >
                {tr("confirmOrder")}
              </Button>
            </div>
          </div>
        }
        rail={buyerSummary}
      />
    );
  } else if (step === 4) {
    content = (
      <div className="mx-auto max-w-md space-y-5 text-center">
        <Card>
          <CardContent className="flex flex-col items-center gap-4 p-8">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
            <div className="text-lg font-semibold">{tr("processingPayment")}</div>
            <Progress value={62} className="w-full" />
            <p className="text-sm text-muted-foreground">
              This can take up to 30 seconds. Do not close this window.
            </p>
            <Alert variant="warning" className="text-left">
              <AlertTitle>Timeout warning</AlertTitle>
              <AlertDescription>
                If processing stalls, you can retry or go back to payment
                methods.
              </AlertDescription>
            </Alert>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => go(3)}>
                {tr("back")}
              </Button>
              <Button variant="secondary" onClick={() => go(5)}>
                {tr("retry")}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    content = (
      <TwoColumn
        main={
          <div className="space-y-4">
            <Alert variant="destructive">
              <AlertTitle>{tr("paymentFailed")}</AlertTitle>
              <AlertDescription>
                Your bank or wallet declined this attempt. Retry or choose
                another method.
              </AlertDescription>
            </Alert>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Order summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{painting.title}</span>
                  <span className="font-mono">
                    {formatBdt(painting.price, locale)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{tr("deliveryFee")}</span>
                  <span className="font-mono">{formatBdt(fee, locale)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="font-mono">{formatBdt(total, locale)}</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-1 p-4 text-sm">
                <div className="font-medium">{name}</div>
                <div className="text-muted-foreground">{phone}</div>
                <div className="text-muted-foreground">{address}</div>
              </CardContent>
            </Card>
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => go(4)}>{tr("retry")}</Button>
              <Button variant="secondary" onClick={() => go(2)}>
                Change payment method
              </Button>
            </div>
          </div>
        }
        rail={
          <>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Payment methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                {paymentMethods.map((m) => (
                  <div key={m.id}>{tr(m.labelKey)}</div>
                ))}
              </CardContent>
            </Card>
            <SupportCard />
            <Button variant="link" className="px-0" asChild>
              <Link href="#">FAQ</Link>
            </Button>
          </>
        }
      />
    );
  }

  return (
    <div>
      <DemoStateHint state={state} />
      <PageHeader
        title={tr("checkout")}
        description={`Step ${Math.min(step, 5)} of 5`}
        actions={
          step < 4 ? (
            <Badge variant="secondary">
              <CheckCircle2 className="mr-1 h-3 w-3" />
              Secure checkout
            </Badge>
          ) : null
        }
      />
      {content}
    </div>
  );
}
