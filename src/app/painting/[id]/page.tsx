"use client";

import Link from "next/link";
import Image from "next/image";
import { use, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Info, ShoppingCart, ZoomIn } from "lucide-react";
import { getPainting, paintings, deliveryFeeFor } from "@/data/sample";
import { useApp } from "@/context/app-context";
import { cn, formatBdt, getDemoState } from "@/lib/utils";
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
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DemoStateHint,
  EmptyState,
  ErrorState,
  MasterDetailWorkspace,
  PageHeader,
  StatusBanner,
  SupportCard,
} from "@/components/shared/status";
import { toast } from "sonner";

export default function PaintingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const searchParams = useSearchParams();
  const state = getDemoState({ state: searchParams.get("state") ?? undefined });
  const { locale, tr, setLocale } = useApp();
  const [area, setArea] = useState<"dhaka" | "outside">("dhaka");
  const [zoomed, setZoomed] = useState(false);
  const [mobileDetailOpen, setMobileDetailOpen] = useState(true);

  const painting = getPainting(id);
  const unavailable =
    state === "unavailable" || (painting && !painting.available);
  const actionsDisabled =
    unavailable || state === "plan_limit" || state === "permission_denied";

  const masterList = (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">Catalog master list</h2>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">{tr("browseCatalog")}</Link>
        </Button>
      </div>
      <ul className="divide-y rounded-lg border xl:border-0">
        {paintings.map((p) => {
          const active = p.id === id;
          return (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => {
                  router.push(
                    `/painting/${p.id}${
                      searchParams.get("state")
                        ? `?state=${searchParams.get("state")}`
                        : ""
                    }`
                  );
                  setMobileDetailOpen(true);
                }}
                className={cn(
                  "flex w-full gap-3 px-3 py-3 text-start transition-colors",
                  active ? "bg-accent/80" : "hover:bg-muted/60"
                )}
              >
                <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded-md bg-muted">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">
                    {locale === "bn" ? p.titleBn : p.title}
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">
                      {formatBdt(p.price, locale)}
                    </span>
                    <Badge variant="secondary" className="text-[10px]">
                      {p.size}
                    </Badge>
                    {!p.available ? (
                      <Badge variant="destructive" className="text-[10px]">
                        {tr("soldOut")}
                      </Badge>
                    ) : null}
                  </div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );

  let detailPanel: React.ReactNode;

  if (state === "loading") {
    detailPanel = (
      <div className="space-y-4">
        <Skeleton className="aspect-[4/3] w-full" />
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  } else if (state === "error") {
    detailPanel = (
      <div className="space-y-4">
        <ErrorState
          onRetry={() => window.location.assign(`/painting/${id}`)}
        />
        <Card>
          <CardContent className="p-4 text-sm text-muted-foreground">
            Purchase actions are disabled while this painting fails to load.
          </CardContent>
        </Card>
      </div>
    );
  } else if (state === "empty" || !painting) {
    detailPanel = (
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
  } else {
    const title = locale === "bn" ? painting.titleBn : painting.title;
    const description =
      locale === "bn" ? painting.descriptionBn : painting.description;
    const related = paintings.filter((p) =>
      painting.relatedIds.includes(p.id)
    );
    const fee = deliveryFeeFor(area);

    detailPanel = (
      <div className="animate-fade-in-up space-y-5">
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
            sizes="(max-width:1280px) 100vw, 45vw"
            priority
          />
          <div className="absolute bottom-3 right-3 rounded-md bg-card/90 px-2 py-1 text-[12px] shadow">
            <ZoomIn className="mr-1 inline h-3 w-3" />
            Click to zoom
          </div>
          {unavailable ? (
            <Badge variant="destructive" className="absolute left-3 top-3">
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
              <span className="font-mono text-sm">{formatBdt(fee, locale)}</span>
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

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">{tr("relatedPaintings")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 overflow-x-auto pb-1">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/painting/${p.id}`}
                  className="w-36 shrink-0 overflow-hidden rounded-lg border transition-colors hover:border-primary/40"
                >
                  <div className="relative aspect-[4/3] bg-muted">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="144px"
                    />
                  </div>
                  <div className="space-y-1 p-2">
                    <p className="truncate text-xs font-medium">
                      {locale === "bn" ? p.titleBn : p.title}
                    </p>
                    <p className="font-mono text-[11px] text-primary">
                      {formatBdt(p.price, locale)}
                    </p>
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
    );
  }

  return (
    <div>
      <DemoStateHint state={state} />
      <PageHeader
        title={
          painting
            ? locale === "bn"
              ? painting.titleBn
              : painting.title
            : "Painting detail"
        }
        description="Master list stays visible so you can inspect other pieces without leaving the workspace."
      />
      <StatusBanner state={state} />

      <MasterDetailWorkspace
        master={<div className="hidden xl:block">{masterList}</div>}
        detail={
          <div>
            <div className="hidden xl:block">{detailPanel}</div>
            <Card className="xl:hidden">
              <CardContent className="space-y-3 p-4">
                <p className="text-sm text-muted-foreground">
                  On mobile, the catalog master list collapses and the detail
                  opens as a drawer.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => setMobileDetailOpen(true)}>
                    Open detail
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/">{tr("browseCatalog")}</Link>
                  </Button>
                </div>
                <div className="max-h-64 overflow-y-auto">{masterList}</div>
              </CardContent>
            </Card>
          </div>
        }
      />

      <Sheet open={mobileDetailOpen} onOpenChange={setMobileDetailOpen}>
        <SheetContent side="bottom" className="h-[88vh] overflow-y-auto xl:hidden">
          <SheetHeader>
            <SheetTitle>
              {painting
                ? locale === "bn"
                  ? painting.titleBn
                  : painting.title
                : "Painting detail"}
            </SheetTitle>
          </SheetHeader>
          <div className="mt-4">{detailPanel}</div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
