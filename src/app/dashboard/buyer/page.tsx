"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Download,
  MoreHorizontal,
  RotateCcw,
  Search,
  XCircle,
} from "lucide-react";
import { getPainting, orders } from "@/data/sample";
import { useApp } from "@/context/app-context";
import { formatBdt, getDemoState } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
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

export default function BuyerDashboardPage() {
  const searchParams = useSearchParams();
  const state = getDemoState({ state: searchParams.get("state") ?? undefined });
  const { locale, tr, user } = useApp();
  const [statusTab, setStatusTab] = useState("all");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(orders[0]?.id ?? "");
  const [cancelOpen, setCancelOpen] = useState(false);
  const [returnOpen, setReturnOpen] = useState(false);
  const [resultOpen, setResultOpen] = useState(
    state === "approved" || state === "rejected"
  );
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [detailOpen, setDetailOpen] = useState(false);

  const filtered = useMemo(() => {
    return orders.filter((o) => {
      const painting = getPainting(o.paintingId);
      const matchesQuery =
        !query ||
        painting?.title.toLowerCase().includes(query.toLowerCase()) ||
        o.id.toLowerCase().includes(query.toLowerCase());
      const matchesStatus =
        statusTab === "all" ||
        (statusTab === "pending" && o.status === "pending") ||
        (statusTab === "shipped" && o.status === "shipped");
      return matchesQuery && matchesStatus;
    });
  }, [query, statusTab]);

  const selected = orders.find((o) => o.id === selectedId) ?? filtered[0];
  const selectedPainting = selected
    ? getPainting(selected.paintingId)
    : undefined;
  const showPendingUi =
    state === "request-pending" || selected?.requestPending;

  if (state === "loading") {
    return (
      <div>
        <PageHeader title={tr("buyerDashboard")} />
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-24 animate-shimmer rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div>
        <PageHeader title={tr("buyerDashboard")} />
        <ErrorState onRetry={() => window.location.assign("/dashboard/buyer")} />
      </div>
    );
  }

  if (state === "empty") {
    return (
      <div>
        <PageHeader title={tr("buyerDashboard")} />
        <EmptyState
          title="No orders yet"
          description={tr("noOrders")}
          action={
            <Button asChild>
              <Link href="/">{tr("browseCatalog")}</Link>
            </Button>
          }
        />
      </div>
    );
  }

  const detailPanel = selected && selectedPainting ? (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="font-mono text-sm">{selected.id}</CardTitle>
            <Badge
              variant={selected.status === "shipped" ? "success" : "warning"}
            >
              {selected.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="relative aspect-video overflow-hidden rounded-md">
            <Image
              src={selectedPainting.image}
              alt={selectedPainting.title}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-medium">
              {locale === "bn"
                ? selectedPainting.titleBn
                : selectedPainting.title}
            </div>
            <div className="font-mono text-sm text-primary">
              {formatBdt(selectedPainting.price, locale)}
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            {selected.address}
            <br />
            Delivery {formatBdt(selected.deliveryFee, locale)}
          </div>
          {showPendingUi ? (
            <div className="rounded-md border border-warning/40 bg-warning/5 p-3 text-sm">
              <Badge variant="warning" className="mb-2">
                Request pending
              </Badge>
              <div>
                Type: {selected.requestType} · Submitted{" "}
                {selected.requestDate}
              </div>
              <div className="mt-1 text-muted-foreground">
                {selected.requestReason}
              </div>
              <p className="mt-2 text-[13px] text-muted-foreground">
                Further cancel/return actions are disabled while review is
                in progress.
              </p>
            </div>
          ) : null}
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="outline"
              disabled={!!showPendingUi}
              onClick={() => setCancelOpen(true)}
            >
              <XCircle className="h-4 w-4" />
              {tr("cancelOrder")}
            </Button>
            <Button
              size="sm"
              variant="outline"
              disabled={!!showPendingUi || selected.status !== "shipped"}
              onClick={() => setReturnOpen(true)}
            >
              <RotateCcw className="h-4 w-4" />
              {tr("returnOrder")}
            </Button>
            <Button
              size="sm"
              variant="secondary"
              disabled={!!showPendingUi}
              onClick={() => toast.success("Invoice downloading")}
            >
              <Download className="h-4 w-4" />
              Invoice
            </Button>
          </div>
          <div className="rounded-md border p-3 text-sm">
            <div className="mb-2 font-medium">Order timeline</div>
            <ol className="space-y-2 text-muted-foreground">
              <li>Ordered · {selected.createdAt}</li>
              <li>Payment confirmed</li>
              <li>
                {selected.status === "shipped"
                  ? "Shipped"
                  : "Awaiting shipment"}
              </li>
            </ol>
          </div>
        </CardContent>
      </Card>
      <SupportCard />
    </div>
  ) : null;

  return (
    <div>
      <DemoStateHint state={state} />
      <PageHeader
        title={tr("buyerDashboard")}
        description={`Hello, ${user.name}`}
      />
      <StatusBanner state={state} />

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Tabs value={statusTab} onValueChange={setStatusTab}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">{tr("pending")}</TabsTrigger>
            <TabsTrigger value="shipped">{tr("shipped")}</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-8"
            placeholder="Search by painting or order id"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Input type="date" className="w-auto" aria-label="Date range start" />
      </div>

      <TwoColumn
        main={
          <div className="space-y-3">
            {filtered.map((order) => {
              const painting = getPainting(order.paintingId)!;
              return (
                <button
                  key={order.id}
                  type="button"
                  onClick={() => {
                    setSelectedId(order.id);
                    setDetailOpen(true);
                  }}
                  className={`w-full rounded-lg border bg-card p-4 text-left transition-colors hover:border-primary/40 ${
                    selectedId === order.id ? "border-primary ring-1 ring-primary/30" : ""
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={painting.image}
                        alt={painting.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-mono text-[12px] text-muted-foreground">
                            {order.id}
                          </div>
                          <div className="font-medium">
                            {locale === "bn" ? painting.titleBn : painting.title}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={
                              order.status === "shipped" ? "success" : "warning"
                            }
                          >
                            {order.status}
                          </Badge>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <span
                                role="button"
                                className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => setSelectedId(order.id)}
                              >
                                View details
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => setCancelOpen(true)}>
                                Cancel
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => setReturnOpen(true)}>
                                Return
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {order.address} · {formatBdt(painting.price + order.deliveryFee, locale)}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        }
        rail={<div className="hidden lg:block">{detailPanel}</div>}
      />

      <Sheet open={detailOpen} onOpenChange={setDetailOpen}>
        <SheetContent className="overflow-y-auto sm:max-w-md lg:hidden">
          <SheetHeader>
            <SheetTitle>Order detail</SheetTitle>
          </SheetHeader>
          <div className="mt-4">{detailPanel}</div>
        </SheetContent>
      </Sheet>

      <Dialog open={cancelOpen} onOpenChange={setCancelOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancel order</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="space-y-2">
              <Label>Cancellation reason</Label>
              <Select value={reason} onValueChange={setReason}>
                <SelectTrigger>
                  <SelectValue placeholder="Select reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="changed-mind">Changed my mind</SelectItem>
                  <SelectItem value="wrong-item">Wrong item</SelectItem>
                  <SelectItem value="delay">Shipping delay</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Details</Label>
              <Textarea value={details} onChange={(e) => setDetails(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCancelOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setCancelOpen(false);
                toast.success("Cancellation request submitted");
                setResultOpen(true);
              }}
              disabled={!reason}
            >
              Submit cancellation
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={returnOpen} onOpenChange={setReturnOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request return</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="space-y-2">
              <Label>Return reason</Label>
              <Select value={reason} onValueChange={setReason}>
                <SelectTrigger>
                  <SelectValue placeholder="Select reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="damaged">Damaged in transit</SelectItem>
                  <SelectItem value="not-as-described">Not as described</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Details</Label>
              <Textarea value={details} onChange={(e) => setDetails(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setReturnOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setReturnOpen(false);
                toast.success("Return request submitted");
                setResultOpen(true);
              }}
              disabled={!reason}
            >
              Submit return
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={resultOpen} onOpenChange={setResultOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Request {state === "rejected" ? "rejected" : "approved"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 text-sm">
            <p>
              Your {selected?.requestType ?? "cancel"} request submitted on{" "}
              {selected?.requestDate ?? "today"} has been{" "}
              {state === "rejected" ? "rejected" : "approved"}.
            </p>
            <div className="rounded-md border bg-muted/40 p-3">
              <div className="font-medium">Next steps</div>
              <p className="text-muted-foreground">
                {state === "rejected"
                  ? "Your order continues as scheduled. Contact support if you need help."
                  : "Refund will be processed within 3–5 business days."}
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setResultOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
