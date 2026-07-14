"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useApp } from "@/context/app-context";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertTriangle,
  Frame,
  ImageOff,
  Lock,
  PackageOpen,
  RefreshCw,
  ShieldAlert,
} from "lucide-react";
import { DemoState } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  const { tr } = useApp();
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#a855f7] text-white shadow-sm">
        <Frame className="h-4 w-4" />
      </span>
      <span className="font-semibold tracking-tight text-foreground">
        {tr("appName")}
      </span>
    </Link>
  );
}

export function StatusBanner({ state }: { state: DemoState }) {
  const { tr } = useApp();
  if (state === "plan_limit") {
    return (
      <Alert variant="warning" className="mb-4">
        <AlertTitle>Plan limit</AlertTitle>
        <AlertDescription>{tr("planLimit")}</AlertDescription>
      </Alert>
    );
  }
  if (state === "permission_denied") {
    return (
      <Alert variant="destructive" className="mb-4">
        <AlertTitle>Permission denied</AlertTitle>
        <AlertDescription>{tr("permissionDenied")}</AlertDescription>
      </Alert>
    );
  }
  return null;
}

export function EmptyState({
  title,
  description,
  action,
  icon,
}: {
  title: string;
  description: string;
  action?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="animate-fade-in-up flex flex-col items-center justify-center rounded-lg border border-dashed bg-card px-6 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent text-primary">
        {icon ?? <PackageOpen className="h-7 w-7" />}
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">{description}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}

export function ErrorState({
  onRetry,
  message,
}: {
  onRetry?: () => void;
  message?: string;
}) {
  const { tr } = useApp();
  return (
    <div className="animate-fade-in-up flex flex-col items-center justify-center rounded-lg border bg-card px-6 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
        <ImageOff className="h-7 w-7" />
      </div>
      <h2 className="text-lg font-semibold">Unable to load</h2>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {message ?? tr("errorGeneric")}
      </p>
      <Button className="mt-6" onClick={onRetry} variant="secondary">
        <RefreshCw className="h-4 w-4" />
        {tr("retry")}
      </Button>
    </div>
  );
}

export function PermissionDeniedPanel() {
  const { tr } = useApp();
  return (
    <div className="mx-auto flex max-w-md flex-col items-center rounded-lg border bg-card p-8 text-center shadow-sm">
      <Lock className="mb-4 h-10 w-10 text-destructive" />
      <h1 className="text-xl font-semibold">Access Denied</h1>
      <p className="mt-2 text-sm text-muted-foreground">{tr("permissionDenied")}</p>
      <div className="mt-6 flex gap-2">
        <Button asChild>
          <Link href="/auth/login">{tr("login")}</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">{tr("goHome")}</Link>
        </Button>
      </div>
    </div>
  );
}

export function LoadingCards({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="space-y-3 rounded-lg border bg-card p-3">
          <Skeleton className="aspect-[4/3] w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      ))}
    </div>
  );
}

export function PageHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {description ? (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
    </div>
  );
}

export function ContextRail({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "space-y-4 lg:sticky lg:top-20 lg:self-start",
        className
      )}
    >
      {children}
    </aside>
  );
}

export function TwoColumn({
  main,
  rail,
}: {
  main: React.ReactNode;
  rail: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="min-w-0">{main}</div>
      <ContextRail>{rail}</ContextRail>
    </div>
  );
}

export function DemoStateHint({ state }: { state: DemoState }) {
  if (state === "default") return null;
  return (
    <div className="mb-4 flex items-center gap-2 rounded-md border border-dashed border-primary/30 bg-accent px-3 py-2 text-[13px] text-accent-foreground">
      <AlertTriangle className="h-3.5 w-3.5" />
      Previewing status variant: <code className="font-mono">{state}</code>
    </div>
  );
}

export function SupportCard() {
  const { tr } = useApp();
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
        <ShieldAlert className="h-4 w-4 text-primary" />
        {tr("support")}
      </div>
      <p className="text-sm text-muted-foreground">
        support@artvault.bd · +880 9600-123456
      </p>
      <Button variant="link" className="mt-1 h-auto px-0" asChild>
        <a href="mailto:support@artvault.bd">Email support</a>
      </Button>
    </div>
  );
}
