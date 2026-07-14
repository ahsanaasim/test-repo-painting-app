import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBdt(amount: number, locale: "en" | "bn" = "en") {
  return new Intl.NumberFormat(locale === "bn" ? "bn-BD" : "en-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(amount);
}

export type DemoState =
  | "default"
  | "empty"
  | "loading"
  | "error"
  | "plan_limit"
  | "permission_denied"
  | "unavailable"
  | "invalid-address"
  | "request-pending"
  | "approved"
  | "rejected";

export function getDemoState(searchParams?: {
  state?: string | string[];
}): DemoState {
  const raw = Array.isArray(searchParams?.state)
    ? searchParams?.state[0]
    : searchParams?.state;
  const allowed: DemoState[] = [
    "default",
    "empty",
    "loading",
    "error",
    "plan_limit",
    "permission_denied",
    "unavailable",
    "invalid-address",
    "request-pending",
    "approved",
    "rejected",
  ];
  if (raw && allowed.includes(raw as DemoState)) return raw as DemoState;
  return "default";
}
