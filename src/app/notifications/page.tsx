"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Bell, CheckCheck, Search, Settings2 } from "lucide-react";
import { notifications } from "@/data/sample";
import { useApp } from "@/context/app-context";
import { getDemoState } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  TwoColumn,
} from "@/components/shared/status";
import { toast } from "sonner";

export default function NotificationsPage() {
  const searchParams = useSearchParams();
  const state = getDemoState({ state: searchParams.get("state") ?? undefined });
  const { locale, tr } = useApp();
  const [type, setType] = useState("all");
  const [readStatus, setReadStatus] = useState("all");
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(notifications);

  const filtered = useMemo(() => {
    return items.filter((n) => {
      const matchesType = type === "all" || n.type === type;
      const matchesRead =
        readStatus === "all" ||
        (readStatus === "unread" && !n.read) ||
        (readStatus === "read" && n.read);
      const matchesQuery =
        !query ||
        n.title.toLowerCase().includes(query.toLowerCase()) ||
        n.body.toLowerCase().includes(query.toLowerCase()) ||
        n.titleBn.includes(query);
      return matchesType && matchesRead && matchesQuery;
    });
  }, [items, type, readStatus, query]);

  if (state === "loading") {
    return (
      <div>
        <PageHeader title={tr("notifications")} />
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-20 animate-shimmer rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (state === "error") {
    return (
      <TwoColumn
        main={
          <ErrorState
            onRetry={() => window.location.assign("/notifications")}
          />
        }
        rail={
          <Card>
            <CardContent className="space-y-2 p-4 text-sm">
              <Link href="/dashboard/buyer" className="text-primary hover:underline">
                Buyer dashboard
              </Link>
              <br />
              <Link href="/settings" className="text-primary hover:underline">
                Notification settings
              </Link>
            </CardContent>
          </Card>
        }
      />
    );
  }

  return (
    <div>
      <DemoStateHint state={state} />
      <PageHeader
        title={tr("notifications")}
        actions={
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/settings">
                <Settings2 className="h-4 w-4" />
                Settings
              </Link>
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setItems((prev) => prev.map((n) => ({ ...n, read: true })));
                toast.success("All marked as read");
              }}
            >
              <CheckCheck className="h-4 w-4" />
              {tr("markAllRead")}
            </Button>
          </div>
        }
      />
      <StatusBanner state={state} />

      <div className="mb-4 grid gap-3 md:grid-cols-4">
        <Select value={type} onValueChange={setType}>
          <SelectTrigger>
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All types</SelectItem>
            <SelectItem value="order">Order</SelectItem>
            <SelectItem value="payment">Payment</SelectItem>
            <SelectItem value="system">System</SelectItem>
            <SelectItem value="promo">Promo</SelectItem>
          </SelectContent>
        </Select>
        <Select value={readStatus} onValueChange={setReadStatus}>
          <SelectTrigger>
            <SelectValue placeholder="Read status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="unread">Unread</SelectItem>
            <SelectItem value="read">Read</SelectItem>
          </SelectContent>
        </Select>
        <Input type="date" />
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-8"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
          />
        </div>
      </div>

      <TwoColumn
        main={
          state === "empty" || filtered.length === 0 ? (
            <EmptyState
              title={tr("noNotifications")}
              description="New order and payment updates will appear here."
              icon={<Bell className="h-7 w-7" />}
            />
          ) : (
            <div className="space-y-3">
              {filtered.map((n) => (
                <Card
                  key={n.id}
                  className={n.read ? "opacity-80" : "border-primary/30"}
                >
                  <CardContent className="flex items-start justify-between gap-3 p-4">
                    <div>
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <span className="font-medium">
                          {locale === "bn" ? n.titleBn : n.title}
                        </span>
                        <Badge variant="secondary">{n.type}</Badge>
                        {!n.read ? <Badge>Unread</Badge> : null}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {locale === "bn" ? n.bodyBn : n.body}
                      </p>
                      <div className="mt-2 text-[12px] text-muted-foreground">
                        {new Date(n.createdAt).toLocaleString()}
                      </div>
                      {n.orderId ? (
                        <Link
                          href="/dashboard/buyer"
                          className="mt-2 inline-block text-sm text-primary hover:underline"
                        >
                          View {n.orderId}
                        </Link>
                      ) : null}
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        setItems((prev) =>
                          prev.map((x) =>
                            x.id === n.id ? { ...x, read: !x.read } : x
                          )
                        )
                      }
                    >
                      {n.read ? "Unread" : "Read"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )
        }
        rail={
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Preferences</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Manage email, in-app, and SMS alerts from Settings.
                <Button variant="link" className="mt-2 h-auto px-0" asChild>
                  <Link href="/settings">Open settings</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Quick links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <Link href="/dashboard/buyer" className="block text-primary hover:underline">
                  Buyer orders
                </Link>
                <Link href="/dashboard/seller" className="block text-primary hover:underline">
                  Seller orders
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
