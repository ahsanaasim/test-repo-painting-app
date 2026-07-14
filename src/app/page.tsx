"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Info,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import { deliveryFeeFor, paintings, PaintingSize } from "@/data/sample";
import { useApp } from "@/context/app-context";
import { cn, formatBdt, getDemoState } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DemoStateHint,
  EmptyState,
  ErrorState,
  MasterDetailWorkspace,
  PageHeader,
  StatusBanner,
} from "@/components/shared/status";
import { toast } from "sonner";

const PAGE_SIZE = 6;

export default function CatalogPage() {
  const searchParams = useSearchParams();
  const state = getDemoState({ state: searchParams.get("state") ?? undefined });
  const { locale, tr, role } = useApp();

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");
  const [priceRange, setPriceRange] = useState([5000, 35000]);
  const [sizes, setSizes] = useState<PaintingSize[]>([]);
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState(paintings[0]?.id ?? "");
  const [mobileDetailOpen, setMobileDetailOpen] = useState(false);
  const [area, setArea] = useState<"dhaka" | "outside">("dhaka");

  const filtered = useMemo(() => {
    let list = [...paintings];
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.titleBn.includes(query) ||
          p.descriptionBn.includes(query)
      );
    }
    list = list.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    if (sizes.length) list = list.filter((p) => sizes.includes(p.size));
    if (sort === "price") list.sort((a, b) => a.price - b.price);
    else if (sort === "size")
      list.sort((a, b) => a.size.localeCompare(b.size));
    else list.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    return list;
  }, [query, sort, priceRange, sizes]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    if (!pageItems.some((p) => p.id === selectedId) && pageItems[0]) {
      setSelectedId(pageItems[0].id);
    }
  }, [pageItems, selectedId]);

  const selected =
    pageItems.find((p) => p.id === selectedId) ??
    filtered.find((p) => p.id === selectedId) ??
    pageItems[0];
  const related = selected
    ? paintings.filter((p) => selected.relatedIds.includes(p.id))
    : [];
  const fee = deliveryFeeFor(area);
  const actionsDisabled =
    !selected?.available ||
    state === "plan_limit" ||
    state === "permission_denied";

  function toggleSize(size: PaintingSize) {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
    setPage(1);
  }

  function clearFilters() {
    setQuery("");
    setSort("newest");
    setPriceRange([5000, 35000]);
    setSizes([]);
    setPage(1);
  }

  function selectPainting(id: string) {
    setSelectedId(id);
    if (typeof window !== "undefined" && window.innerWidth < 1280) {
      setMobileDetailOpen(true);
    }
  }

  const filters = (
    <div className="space-y-4 rounded-lg border bg-muted/40 p-4 xl:border-0 xl:bg-transparent xl:p-0">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          <X className="h-3.5 w-3.5" />
          {tr("clearFilters")}
        </Button>
      </div>

      {state === "loading" ? (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-2 sm:col-span-2 xl:col-span-1">
            <Label htmlFor="search">{tr("searchPaintings")}</Label>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                className="pl-8"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                placeholder={tr("searchPaintings")}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>{tr("sortBy")}</Label>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">{tr("newest")}</SelectItem>
                <SelectItem value="price">{tr("price")}</SelectItem>
                <SelectItem value="size">{tr("size")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>{tr("priceRange")}</Label>
              <span className="font-mono text-[11px] text-muted-foreground">
                {formatBdt(priceRange[0], locale)} –{" "}
                {formatBdt(priceRange[1], locale)}
              </span>
            </div>
            <Slider
              min={5000}
              max={35000}
              step={500}
              value={priceRange}
              onValueChange={(v) => {
                setPriceRange(v as number[]);
                setPage(1);
              }}
            />
          </div>

          <div className="space-y-2">
            <Label>{tr("size")}</Label>
            <div className="flex flex-wrap gap-3">
              {(["Small", "Medium", "Large"] as PaintingSize[]).map((size) => (
                <label
                  key={size}
                  className="flex cursor-pointer items-center gap-2 text-sm"
                >
                  <Checkbox
                    checked={sizes.includes(size)}
                    onCheckedChange={() => toggleSize(size)}
                  />
                  {tr(size.toLowerCase() as "small" | "medium" | "large")}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const masterList = (() => {
    if (state === "permission_denied") {
      return (
        <EmptyState
          title="Permission denied"
          description={tr("permissionDenied")}
          icon={<Search className="h-7 w-7" />}
          action={
            <Button asChild>
              <Link href="/auth/login">{tr("login")}</Link>
            </Button>
          }
        />
      );
    }
    if (state === "error") {
      return <ErrorState onRetry={() => window.location.assign("/")} />;
    }
    if (state === "loading") {
      return (
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex gap-3 rounded-lg border p-3"
            >
              <Skeleton className="h-16 w-20 shrink-0 rounded-md" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      );
    }
    if (state === "empty" || filtered.length === 0) {
      return (
        <EmptyState
          title={tr("emptyCatalog")}
          description={
            locale === "bn"
              ? "ফিল্টার পরিবর্তন করুন অথবা নতুন পেইন্টিং যোগ করুন।"
              : "Try adjusting filters or add a new painting to the catalog."
          }
          action={
            role === "seller" ? (
              <Button asChild>
                <Link href="/dashboard/seller/paintings">
                  {tr("emptyCatalogCta")}
                </Link>
              </Button>
            ) : (
              <Button variant="secondary" onClick={clearFilters}>
                {tr("clearFilters")}
              </Button>
            )
          }
        />
      );
    }

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {filtered.length} paintings
            {state === "plan_limit" ? " · browse only" : ""}
          </span>
        </div>
        <div className="overflow-hidden rounded-lg border xl:border-0">
          <div className="hidden grid-cols-[64px_minmax(0,1.4fr)_90px_70px] gap-3 border-b bg-muted/50 px-3 py-2 text-[11px] font-medium uppercase tracking-wide text-muted-foreground sm:grid">
            <span>Image</span>
            <span>Title / description</span>
            <span>Price</span>
            <span>Size</span>
          </div>
          <ul className="divide-y">
            {pageItems.map((painting, index) => {
              const active = painting.id === selected?.id;
              return (
                <li key={painting.id}>
                  <button
                    type="button"
                    onClick={() => selectPainting(painting.id)}
                    className={cn(
                      "animate-fade-in-up flex w-full gap-3 px-3 py-3 text-start transition-colors",
                      active
                        ? "bg-accent/80"
                        : "hover:bg-muted/60"
                    )}
                    style={{ animationDelay: `${index * 35}ms` }}
                  >
                    <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-md bg-muted">
                      <Image
                        src={painting.image}
                        alt={painting.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="truncate font-medium leading-snug">
                          {locale === "bn" ? painting.titleBn : painting.title}
                        </h3>
                        {!painting.available ? (
                          <Badge variant="destructive" className="shrink-0">
                            {tr("soldOut")}
                          </Badge>
                        ) : null}
                      </div>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {locale === "bn"
                          ? painting.descriptionBn
                          : painting.description}
                      </p>
                      <div className="mt-2 flex items-center gap-3 sm:hidden">
                        <span className="font-mono text-sm font-semibold text-primary">
                          {formatBdt(painting.price, locale)}
                        </span>
                        <Badge variant="secondary">{painting.size}</Badge>
                      </div>
                    </div>
                    <div className="hidden w-[90px] shrink-0 font-mono text-sm font-semibold text-primary sm:block">
                      {formatBdt(painting.price, locale)}
                    </div>
                    <div className="hidden w-[70px] shrink-0 sm:block">
                      <Badge variant="secondary">{painting.size}</Badge>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {totalPages > 1 ? (
          <div className="flex items-center justify-center gap-2 pt-1">
            <Button
              variant="outline"
              size="sm"
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
            >
              {tr("back")}
            </Button>
            <span className="text-sm text-muted-foreground">
              {page} / {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              {tr("continue")}
            </Button>
          </div>
        ) : null}
      </div>
    );
  })();

  const detailPanel = (() => {
    if (state === "loading") {
      return (
        <div className="space-y-4">
          <Skeleton className="aspect-[4/3] w-full" />
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      );
    }
    if (state === "error" || state === "permission_denied") {
      return (
        <Card>
          <CardContent className="p-4 text-sm text-muted-foreground">
            Select a painting once the catalog recovers to inspect details,
            delivery fees, and purchase actions.
          </CardContent>
        </Card>
      );
    }
    if (state === "empty" || !selected) {
      return (
        <EmptyState
          title="No selection"
          description="Choose a painting from the master list to inspect pricing, delivery, and related works."
        />
      );
    }

    return (
      <div className="animate-fade-in-up space-y-4">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
          <Image
            src={selected.image}
            alt={selected.title}
            fill
            className="object-cover"
            sizes="(max-width:1280px) 100vw, 40vw"
          />
          {!selected.available ? (
            <Badge variant="destructive" className="absolute left-3 top-3">
              {tr("soldOut")}
            </Badge>
          ) : null}
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            {locale === "bn" ? selected.titleBn : selected.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {locale === "bn" ? selected.descriptionBn : selected.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-lg font-semibold text-primary">
            {formatBdt(selected.price, locale)}
          </span>
          <Badge variant="secondary">{selected.size}</Badge>
          <span className="text-sm text-muted-foreground">
            {tr("deliveryFee")}: {formatBdt(fee, locale)}
          </span>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Delivery info">
                <Info className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              {tr("deliveryInfo")}
            </TooltipContent>
          </Tooltip>
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

        <div className="grid gap-2 sm:grid-cols-2">
          <Button
            disabled={actionsDisabled}
            asChild={!actionsDisabled}
          >
            {!actionsDisabled ? (
              <Link href={`/checkout?painting=${selected.id}`}>
                {tr("buyNow")}
              </Link>
            ) : (
              <span>{tr("buyNow")}</span>
            )}
          </Button>
          <Button
            variant="secondary"
            disabled={actionsDisabled}
            onClick={() => toast.success("Added to cart")}
          >
            <ShoppingCart className="h-4 w-4" />
            {tr("addToCart")}
          </Button>
        </div>

        <Button variant="outline" className="w-full" asChild>
          <Link href={`/painting/${selected.id}`}>Open full detail</Link>
        </Button>

        <Separator />

        <div>
          <h3 className="mb-3 text-sm font-semibold">{tr("relatedPaintings")}</h3>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {related.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => selectPainting(p.id)}
                className="w-36 shrink-0 overflow-hidden rounded-lg border text-start transition-colors hover:border-primary/40"
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
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  })();

  return (
    <div>
      <DemoStateHint state={state} />
      <PageHeader
        title={tr("catalog")}
        description={
          locale === "bn"
            ? "মাস্টার তালিকা থেকে পেইন্টিং নির্বাচন করে বিস্তারিত দেখুন।"
            : "Select a painting from the master list to inspect details in the panel."
        }
      />
      <StatusBanner state={state} />
      <MasterDetailWorkspace
        master={
          <div className="space-y-4">
            {filters}
            {masterList}
          </div>
        }
        detail={
          <div>
            <CardHeader className="hidden px-0 pt-0 xl:block">
              <CardTitle className="text-base">Inspector</CardTitle>
            </CardHeader>
            <div className="hidden xl:block">{detailPanel}</div>
            <Card className="xl:hidden">
              <CardContent className="p-4 text-sm text-muted-foreground">
                Tap a painting in the master list to open the detail drawer.
              </CardContent>
            </Card>
          </div>
        }
      />

      <Sheet open={mobileDetailOpen} onOpenChange={setMobileDetailOpen}>
        <SheetContent side="bottom" className="h-[85vh] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>
              {selected
                ? locale === "bn"
                  ? selected.titleBn
                  : selected.title
                : "Painting detail"}
            </SheetTitle>
          </SheetHeader>
          <div className="mt-4">{detailPanel}</div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
