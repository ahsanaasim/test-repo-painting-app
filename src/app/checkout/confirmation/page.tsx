"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Download, MessageSquare, Truck } from "lucide-react";
import { deliveryFeeFor, getPainting } from "@/data/sample";
import { useApp } from "@/context/app-context";
import { formatBdt, getDemoState } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  DemoStateHint,
  EmptyState,
  ErrorState,
  PageHeader,
  StatusBanner,
  SupportCard,
  MasterDetailWorkspace,
} from "@/components/shared/status";
import { toast } from "sonner";

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams();
  const state = getDemoState({ state: searchParams.get("state") ?? undefined });
  const painting = getPainting(searchParams.get("painting") ?? "p1");
  const { locale, tr } = useApp();
  const fee = deliveryFeeFor("dhaka");

  if (state === "loading") {
    return (
      <div className="space-y-4">
        <div className="h-24 animate-shimmer rounded-lg" />
        <div className="h-40 animate-shimmer rounded-lg" />
      </div>
    );
  }

  if (state === "error") {
    return <ErrorState onRetry={() => window.location.reload()} />;
  }

  if (state === "empty" || !painting) {
    return (
      <EmptyState
        title="No order found"
        description="We could not find a confirmation for this checkout session."
        action={
          <Button asChild>
            <Link href="/">{tr("browseCatalog")}</Link>
          </Button>
        }
      />
    );
  }

  const total = painting.price + fee;

  return (
    <div>
      <DemoStateHint state={state} />
      <PageHeader title={tr("orderConfirmed")} />
      <StatusBanner state={state} />
      <MasterDetailWorkspace
        master={
          <div className="space-y-4 animate-fade-in-up">
            <Card className="border-success/30 bg-success/5">
              <CardContent className="flex items-start gap-3 p-5">
                <CheckCircle2 className="mt-0.5 h-6 w-6 text-success" />
                <div>
                  <div className="font-semibold">
                    Thank you — your order is confirmed
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Order <span className="font-mono">ORD-1049</span> ·
                    Notification sent to your phone and email.
                  </p>
                  <Badge className="mt-3" variant="success">
                    Pending shipment
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Order summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Order date</span>
                  <span>14 Jul 2026</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="font-mono">{formatBdt(total, locale)}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Painting details</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-3">
                <div className="relative h-24 w-24 overflow-hidden rounded-md">
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

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Delivery details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-sm">
                <div>Nusrat Rahman</div>
                <div>+8801712345678</div>
                <div>12 Banani Road, Dhaka 1213</div>
                <div className="pt-2 font-mono">
                  {tr("deliveryFee")}: {formatBdt(fee, locale)}
                </div>
              </CardContent>
            </Card>

            <Button
              onClick={() => toast.success("Invoice download started (preview)")}
            >
              <Download className="h-4 w-4" />
              {tr("downloadInvoice")}
            </Button>
          </div>
        }
        detail={
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <MessageSquare className="h-4 w-4" />
                  Feedback
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Textarea placeholder="How was checkout?" />
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => toast.success("Thanks for your feedback")}
                >
                  Submit feedback
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-2 p-4 text-sm">
                <Link
                  href="/dashboard/buyer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Truck className="h-4 w-4" />
                  Track order
                </Link>
              </CardContent>
            </Card>
            <SupportCard />
          </div>
        }
      />
    </div>
  );
}
