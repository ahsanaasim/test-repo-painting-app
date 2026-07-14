"use client";

import Link from "next/link";
import Image from "next/image";
import { use, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Info, ShoppingCart, ZoomIn } from "lucide-react";
import { getPainting, paintings, deliveryFeeFor } from "@/data/sample";
import { useApp } from "@/context/app-context";
import { formatBdt, getDemoState } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DemoStateHint,
  EmptyState,
  ErrorState,
  PageHeader,
  StatusBanner,
  SupportCard,
  TwoColumn,
} from "@/components/shared/status";
import { toast } from "sonner";

export default function PaintingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const searchParams = useSearchParams();
  const state = getDemoState({ state: searchParams.get("state") ?? undefined });
  const { locale, tr, setLocale } = useApp();
  const [area, setArea] = useState<"dhaka" | "outside">("dhaka");
  const [zoomed, setZoomed] = useState(false);

  const painting = getPainting(id);
  const unavailable =
    state === "unavailable" || (painting && !painting.available);
  const actionsDisabled =
    unavailable || state === "plan_limit" || state === "permission_denied";

  if (state === "loading") {
    return (
      <div>
        <DemoStateHint state={state} />
        <TwoColumn
          main={
            <div className="space-y-4">
              <Skeleton className="aspect-[4/3] w-full" />
              <Skeleton className="h-8 w-2/3" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-6 w-1/3" />
            </div>
          }
          rail={
            <div className="space-y-3">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          }
        />
      </div>
    );
  }

  if (state === "error") {
    return (
      <div>
        <DemoStateHint state={state} />
        <TwoColumn
          main={
            <ErrorState
              onRetry={() => window.location.assign(`/painting/${id}`)}
            />
          }
          rail={
            <Card>
              <CardContent className="p-4 text-sm text-muted-foreground">
                Purchase actions are unavailable while this painting fails to
                load.
              </CardContent>
            </Card>
          }
        />
      </div>
    );
  }

  if (state === "empty" || !painting) {
    return (
      <EmptyState
        title="Painting not found"
        description="This piece may have been removed or the link is incorrect."
        action={
          <Button asChild>
            <Link href="/">{tr("browseCatalog")}</Link>
          </Button>
        }
      />
    );
  }

  const title = locale === "bn" ? painting.titleBn : painting.title;
  const description =
    locale === "bn" ? painting.descriptionBn : painting.description;
  const related = paintings.filter((p) => painting.relatedIds.includes(p.id));
  const fee = deliveryFeeFor(area);

  return (
    <div>
      <DemoStateHint state={state} />
      <PageHeader
        title={title}
        description={painting.size}
        actions={
          <Button variant="outline" asChild>
            <Link href="/">{tr("browseCatalog")}</Link>
          </Button>
        }
      />
      <StatusBanner state={state} />

      <TwoColumn
        main={
          <div className="space-y-5 animate-fade-in-up">
            <div
              className="relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-lg border bg-muted"
              onClick={() => setZoomed((z) => !z)}
            >
              <Image
                src={painting.image}
                alt={title}
                fill
                className={
                  zoomed
                    ? "object-cover scale-150 transition-transform duration-300"
                    : "object-cover transition-transform duration-300"
                }
                sizes="(max-width:1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute bottom-3 right-3 rounded-md bg-card/90 px-2 py-1 text-[12px] shadow">
                <ZoomIn className="mr-1 inline h-3 w-3" />
                Click to zoom
              </div>
              {unavailable ? (
                <Badge
                  variant="destructive"
                  className="absolute left-3 top-3"
                >
                  {tr("soldOut")}
                </Badge>
              ) : null}
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary">{painting.size}</Badge>
                <span className="font-mono text-lg font-semibold text-primary">
                  {formatBdt(painting.price, locale)}
                </span>
              </div>

              <div className="rounded-lg border bg-card p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium">{tr("deliveryFee")}</span>
                  <span className="font-mono text-sm">
                    {formatBdt(fee, locale)}
                  </span>
                </div>
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

              <div className="flex flex-wrap gap-2">
                <Button
                  disabled={actionsDisabled}
                  onClick={() => {
                    toast.success("Proceeding to checkout");
                    window.location.assign(`/checkout?painting=${painting.id}`);
                  }}
                >
                  {tr("buyNow")}
                </Button>
                <Button
                  variant="secondary"
                  disabled={actionsDisabled}
                  onClick={() => toast.success("Added to cart")}
                >
                  <ShoppingCart className="h-4 w-4" />
                  {tr("addToCart")}
                </Button>
                {unavailable ? (
                  <Button variant="outline" asChild>
                    <Link href="/">{tr("browseCatalog")}</Link>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        }
        rail={
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">
                  {tr("relatedPaintings")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
                  {related.map((p) => (
                    <Link
                      key={p.id}
                      href={`/painting/${p.id}`}
                      className="flex min-w-[200px] gap-3 rounded-md border p-2 transition-colors hover:bg-accent lg:min-w-0"
                    >
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="truncate text-sm font-medium">
                          {locale === "bn" ? p.titleBn : p.title}
                        </div>
                        <div className="font-mono text-[12px] text-primary">
                          {formatBdt(p.price, locale)}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-3 p-4">
                <div className="flex items-start gap-2 text-sm">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        className="mt-0.5 text-primary"
                        aria-label="Delivery info"
                      >
                        <Info className="h-4 w-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      {tr("deliveryInfo")}
                    </TooltipContent>
                  </Tooltip>
                  <p className="text-muted-foreground">{tr("deliveryInfo")}</p>
                </div>
                <Separator />
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setLocale(locale === "en" ? "bn" : "en")}
                  >
                    {locale === "en" ? "বাং" : "EN"}
                  </Button>
                </div>
              </CardContent>
            </Card>
            <SupportCard />
          </div>
        }
      />
    </div>
  );
}
