"use client";

import { PermissionDeniedPanel } from "@/components/shared/status";

export default function AccessDeniedPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <PermissionDeniedPanel />
    </div>
  );
}
