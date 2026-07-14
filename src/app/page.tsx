"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { paintings, PaintingSize } from "@/data/sample";
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
import {
  DemoStateHint,
  EmptyState,
  ErrorState,
  LoadingCards,
  PageHeader,
  StatusBanner,
  TwoColumn,
} from "@/components/shared/status";
import { Card, CardContent } from "@/components/ui/card";

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

  const filterRail = (
    <div className="space-y-5 rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          <X className="h-3.5 w-3.5" />
          {tr("clearFilters")}
        </Button>
      </div>

      {state === "loading" ? (
        <div className="space-y-3">
          <div className="h-9 animate-shimmer rounded-md" />
          <div className="h-9 animate-shimmer rounded-md" />
          <div className="h-16 animate-shimmer rounded-md" />
          <div className="h-20 animate-shimmer rounded-md" />
        </div>
      ) : (
        <>
          <div className="space-y-2">
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
              <span className="font-mono text-[12px] text-muted-foreground">
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
            {(["Small", "Medium", "Large"] as PaintingSize[]).map((size) => (
              <label
                key={size}
                className="flex cursor-pointer items-center gap-2 text-sm"
              >
                <Checkbox
                  checked={sizes.includes(size)}
                  onCheckedChange={() => toggleSize(size)}
                />
                {tr(
                  size.toLowerCase() as "small" | "medium" | "large"
                )}
              </label>
            ))}
          </div>
        </>
      )}
    </div>
  );

  let mainContent: React.ReactNode;

  if (state === "permission_denied") {
    mainContent = (
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
  } else if (state === "error") {
    mainContent = <ErrorState onRetry={() => window.location.assign("/")} />;
  } else if (state === "loading") {
    mainContent = <LoadingCards />;
  } else if (state === "empty" || filtered.length === 0) {
    mainContent = (
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
              <Link href="/dashboard/seller/paintings">{tr("emptyCatalogCta")}</Link>
            </Button>
          ) : (
            <Button variant="secondary" onClick={clearFilters}>
              {tr("clearFilters")}
            </Button>
          )
        }
      />
    );
  } else {
    mainContent = (
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {filtered.length} paintings
            {state === "plan_limit" ? " · browse only" : ""}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {pageItems.map((painting, index) => (
            <Link
              key={painting.id}
              href={`/painting/${painting.id}`}
              className={cn(
                "group animate-fade-in-up overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              )}
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={painting.image}
                  alt={painting.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, 33vw"
                />
                {!painting.available ? (
                  <Badge
                    variant="destructive"
                    className="absolute left-3 top-3"
                  >
                    {tr("soldOut")}
                  </Badge>
                ) : null}
              </div>
              <Card className="border-0 shadow-none">
                <CardContent className="space-y-2 p-4">
                  <h3 className="font-semibold leading-snug">
                    {locale === "bn" ? painting.titleBn : painting.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {locale === "bn"
                      ? painting.descriptionBn
                      : painting.description}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-mono text-sm font-semibold text-primary">
                      {formatBdt(painting.price, locale)}
                    </span>
                    <Badge variant="secondary">{painting.size}</Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {totalPages > 1 ? (
          <div className="flex items-center justify-center gap-2 pt-2">
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
  }

  return (
    <div>
      <DemoStateHint state={state} />
      <PageHeader
        title={tr("catalog")}
        description={
          locale === "bn"
            ? "আসল পেইন্টিং খুঁজুন, ফিল্টার করুন এবং কিনুন।"
            : "Discover original paintings with search, sort, and size filters."
        }
      />
      <StatusBanner state={state} />
      <TwoColumn main={mainContent} rail={filterRail} />
    </div>
  );
}
