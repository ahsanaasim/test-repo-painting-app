"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Check,
  Pencil,
  Plus,
  Search,
  Trash2,
  Truck,
  X,
} from "lucide-react";
import {
  getPainting,
  orders,
  paymentMethods,
  sellerPaintings,
} from "@/data/sample";
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
  DemoStateHint,
  EmptyState,
  ErrorState,
  PageHeader,
  StatusBanner,
  SupportCard,
  MasterDetailWorkspace,
} from "@/components/shared/status";
import { toast } from "sonner";

export default function SellerDashboardPage() {
  const searchParams = useSearchParams();
  const state = getDemoState({ state: searchParams.get("state") ?? undefined });
  const { locale, tr } = useApp();
  const [tab, setTab] = useState("pending");
  const [query, setQuery] = useState("");
  const [paymentFilter, setPaymentFilter] = useState("all");
  const [selectedOrderId, setSelectedOrderId] = useState("ORD-1042");
  const [shipOpen, setShipOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [removeOpen, setRemoveOpen] = useState(false);
  const [selectedPaintingId, setSelectedPaintingId] = useState(
    sellerPaintings[0]?.id ?? "p1"
  );
  const [partner, setPartner] = useState("pathao");
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    size: "Medium",
  });

  const pendingCount = orders.filter((o) => o.status === "pending").length;
  const shippedCount = orders.filter((o) => o.status === "shipped").length;

  const filtered = useMemo(() => {
    return orders.filter((o) => {
      const painting = getPainting(o.paintingId);
      const matchesTab = tab === "all" || o.status === tab;
      const matchesPay =
        paymentFilter === "all" || o.paymentMethod === paymentFilter;
      const matchesQuery =
        !query ||
        o.buyerName.toLowerCase().includes(query.toLowerCase()) ||
        painting?.title.toLowerCase().includes(query.toLowerCase()) ||
        o.id.toLowerCase().includes(query.toLowerCase());
      return matchesTab && matchesPay && matchesQuery;
    });
  }, [tab, query, paymentFilter]);

  const selectedOrder = orders.find((o) => o.id === selectedOrderId);
  const selectedPainting = getPainting(selectedPaintingId);

  if (state === "loading") {
    return (
      <div>
        <PageHeader title={tr("sellerDashboard")} />
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="h-20 animate-shimmer rounded-lg" />
          <div className="h-20 animate-shimmer rounded-lg" />
        </div>
        <MasterDetailWorkspace
          master={
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-28 animate-shimmer rounded-lg" />
              ))}
            </div>
          }
          detail={<div className="h-64 animate-shimmer rounded-lg" />}
        />
      </div>
    );
  }

  if (state === "error") {
    return (
      <div>
        <PageHeader title={tr("sellerDashboard")} />
        <MasterDetailWorkspace
          master={
            <ErrorState
              onRetry={() => window.location.assign("/dashboard/seller")}
            />
          }
          detail={
            <div className="space-y-4">
              <SupportCard />
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Troubleshooting</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Check your connection, then retry. If the issue persists,
                  contact support with the order timestamp.
                </CardContent>
              </Card>
            </div>
          }
        />
      </div>
    );
  }

  if (state === "empty") {
    return (
      <div>
        <PageHeader title={tr("sellerDashboard")} />
        <MasterDetailWorkspace
          master={
            <EmptyState
              title="No orders yet"
              description="Add paintings to start receiving orders from buyers across Bangladesh."
              action={
                <Button onClick={() => setAddOpen(true)}>
                  <Plus className="h-4 w-4" />
                  {tr("addPainting")}
                </Button>
              }
            />
          }
          detail={
            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Onboarding checklist</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>☐ Upload your first painting</div>
                  <div>☐ Set delivery preferences</div>
                  <div>☐ Verify payout method</div>
                </CardContent>
              </Card>
              <SupportCard />
            </div>
          }
        />
        <PaintingFormDialog
          open={addOpen}
          onOpenChange={setAddOpen}
          title="Add painting"
          form={form}
          setForm={setForm}
          onSave={() => {
            setAddOpen(false);
            toast.success("Painting added");
          }}
        />
      </div>
    );
  }

  return (
    <div>
      <DemoStateHint state={state} />
      <PageHeader
        title={tr("sellerDashboard")}
        description="Pending & shipped orders with listing management"
        actions={
          <Button onClick={() => setAddOpen(true)}>
            <Plus className="h-4 w-4" />
            {tr("addPainting")}
          </Button>
        }
      />
      <StatusBanner state={state} />

      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">{tr("pending")}</div>
            <div className="text-2xl font-semibold">{pendingCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">{tr("shipped")}</div>
            <div className="text-2xl font-semibold">{shippedCount}</div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="pending">{tr("pending")}</TabsTrigger>
            <TabsTrigger value="shipped">{tr("shipped")}</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-8"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search orders"
          />
        </div>
        <Select value={paymentFilter} onValueChange={setPaymentFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Payment method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All methods</SelectItem>
            {paymentMethods.map((m) => (
              <SelectItem key={m.id} value={m.id}>
                {tr(m.labelKey)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input type="date" className="w-auto" />
      </div>

      <MasterDetailWorkspace
        master={
          <div className="space-y-3">
            {filtered.map((order) => {
              const painting = getPainting(order.paintingId)!;
              return (
                <Card key={order.id} className="overflow-hidden">
                  <CardContent className="grid gap-4 p-4 md:grid-cols-[1fr_auto]">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-sm">{order.id}</span>
                        <Badge
                          variant={
                            order.status === "shipped" ? "success" : "warning"
                          }
                        >
                          {order.status}
                        </Badge>
                        {order.requestPending ? (
                          <Badge variant="destructive">Request</Badge>
                        ) : null}
                      </div>
                      <div className="flex gap-3">
                        <div className="relative h-14 w-14 overflow-hidden rounded-md">
                          <Image
                            src={painting.image}
                            alt={painting.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-sm">
                          <div className="font-medium">
                            {locale === "bn" ? painting.titleBn : painting.title}
                          </div>
                          <div className="text-muted-foreground">
                            {order.buyerName} · {order.buyerPhone}
                          </div>
                          <div className="text-muted-foreground">
                            {order.address} · {tr(
                              paymentMethods.find(
                                (m) => m.id === order.paymentMethod
                              )?.labelKey ?? "bcash"
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 self-start">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedOrderId(order.id)}
                      >
                        Details
                      </Button>
                      {order.status === "pending" ? (
                        <Button
                          size="sm"
                          onClick={() => {
                            setSelectedOrderId(order.id);
                            setShipOpen(true);
                          }}
                        >
                          <Truck className="h-4 w-4" />
                          {tr("markShipped")}
                        </Button>
                      ) : null}
                      {order.requestPending ? (
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => {
                            setSelectedOrderId(order.id);
                            setReviewOpen(true);
                          }}
                        >
                          Review request
                        </Button>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        }
        detail={
          <div className="space-y-4">
            <Card>
              <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">{tr("myPaintings")}</CardTitle>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/dashboard/seller/paintings">Manage</Link>
                </Button>
              </CardHeader>
              <CardContent className="space-y-2">
                {sellerPaintings.slice(0, 4).map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center gap-2 rounded-md border p-2"
                  >
                    <div className="relative h-10 w-10 overflow-hidden rounded">
                      <Image src={p.image} alt={p.title} fill className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-medium">
                        {locale === "bn" ? p.titleBn : p.title}
                      </div>
                      <div className="font-mono text-[12px] text-primary">
                        {formatBdt(p.price, locale)}
                      </div>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => {
                        setSelectedPaintingId(p.id);
                        setForm({
                          title: p.title,
                          description: p.description,
                          price: String(p.price),
                          size: p.size,
                        });
                        setEditOpen(true);
                      }}
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => {
                        setSelectedPaintingId(p.id);
                        setRemoveOpen(true);
                      }}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => setAddOpen(true)}
                >
                  <Plus className="h-4 w-4" />
                  Upload painting
                </Button>
              </CardContent>
            </Card>
            <SupportCard />
          </div>
        }
      />

      {selectedOrder ? (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-sm">
              Selected order · {selectedOrder.id}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-2 text-sm">
              <div className="font-medium">Buyer</div>
              <div>{selectedOrder.buyerName}</div>
              <div>{selectedOrder.buyerPhone}</div>
              <div>{selectedOrder.buyerEmail}</div>
              <div>{selectedOrder.address}</div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="font-medium">Activity</div>
              <ol className="list-decimal space-y-1 pl-4 text-muted-foreground">
                <li>Order placed {selectedOrder.createdAt}</li>
                <li>Payment received</li>
                <li>
                  {selectedOrder.requestPending
                    ? "Cancellation request pending review"
                    : selectedOrder.status}
                </li>
              </ol>
              <div className="rounded-md border p-3">
                Delivery partner: Pathao Courier · ETA 1–2 days
              </div>
            </div>
          </CardContent>
        </Card>
      ) : null}

      <Dialog open={shipOpen} onOpenChange={setShipOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{tr("markShipped")}</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            Confirm that {selectedOrderId} has been handed to the delivery
            partner.
          </p>
          <div className="space-y-2">
            <Label>Delivery partner</Label>
            <Select value={partner} onValueChange={setPartner}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pathao">Pathao</SelectItem>
                <SelectItem value="redx">RedX</SelectItem>
                <SelectItem value="steadfast">Steadfast</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShipOpen(false)}>
              Undo
            </Button>
            <Button
              onClick={() => {
                setShipOpen(false);
                toast.success("Order marked as shipped");
              }}
            >
              <Check className="h-4 w-4" />
              Confirm shipped
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={reviewOpen} onOpenChange={setReviewOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Review {selectedOrder?.requestType ?? "cancel"} request
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 text-sm">
            <Badge>{selectedOrder?.requestType}</Badge>
            <p>{selectedOrder?.requestReason}</p>
            <div className="rounded-md border p-3 text-muted-foreground">
              Buyer message: Please cancel before packing if possible.
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="destructive"
              onClick={() => {
                setReviewOpen(false);
                toast.message("Request rejected");
              }}
            >
              <X className="h-4 w-4" />
              Reject
            </Button>
            <Button
              onClick={() => {
                setReviewOpen(false);
                toast.success("Request approved");
              }}
            >
              Approve
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <PaintingFormDialog
        open={addOpen}
        onOpenChange={setAddOpen}
        title="Add painting"
        form={form}
        setForm={setForm}
        onSave={() => {
          setAddOpen(false);
          toast.success("Painting added");
        }}
      />
      <PaintingFormDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        title="Edit painting"
        form={form}
        setForm={setForm}
        onSave={() => {
          setEditOpen(false);
          toast.success("Painting updated");
        }}
      />

      <Dialog open={removeOpen} onOpenChange={setRemoveOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Remove painting</DialogTitle>
          </DialogHeader>
          {selectedPainting ? (
            <div className="flex gap-3">
              <div className="relative h-16 w-16 overflow-hidden rounded-md">
                <Image
                  src={selectedPainting.image}
                  alt={selectedPainting.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{selectedPainting.title}</div>
                <div className="text-sm text-muted-foreground">
                  {selectedPainting.size} ·{" "}
                  {formatBdt(selectedPainting.price, locale)}
                </div>
              </div>
            </div>
          ) : null}
          <p className="text-sm text-muted-foreground">
            This removes the listing from the catalog. You can undo within a
            few seconds via toast.
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRemoveOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                setRemoveOpen(false);
                toast.success("Painting removed", {
                  action: { label: "Undo", onClick: () => toast.message("Restored") },
                });
              }}
            >
              Remove
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function PaintingFormDialog({
  open,
  onOpenChange,
  title,
  form,
  setForm,
  onSave,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  title: string;
  form: { title: string; description: string; price: string; size: string };
  setForm: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      price: string;
      size: string;
    }>
  >;
  onSave: () => void;
}) {
  const { locale, setLocale, tr } = useApp();
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="mb-2 flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setLocale(locale === "en" ? "bn" : "en")}
          >
            {locale === "en" ? "বাং" : "EN"}
          </Button>
        </div>
        <div className="space-y-3">
          <div className="space-y-2">
            <Label>Image upload</Label>
            <Input type="file" accept="image/*" />
          </div>
          <div className="space-y-2">
            <Label>Title</Label>
            <Input
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label>Short description</Label>
            <Textarea
              value={form.description}
              onChange={(e) =>
                setForm((f) => ({ ...f, description: e.target.value }))
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label>Price (BDT)</Label>
              <Input
                value={form.price}
                onChange={(e) =>
                  setForm((f) => ({ ...f, price: e.target.value }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Size</Label>
              <Select
                value={form.size}
                onValueChange={(v) => setForm((f) => ({ ...f, size: v }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Small">{tr("small")}</SelectItem>
                  <SelectItem value="Medium">{tr("medium")}</SelectItem>
                  <SelectItem value="Large">{tr("large")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={onSave}
            disabled={!form.title || !form.description || !form.price}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
