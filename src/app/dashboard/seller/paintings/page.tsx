"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Pencil, Plus, Search, Trash2 } from "lucide-react";
import { sellerPaintings } from "@/data/sample";
import { useApp } from "@/context/app-context";
import { formatBdt } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PageHeader,
  MasterDetailWorkspace,
} from "@/components/shared/status";
import { toast } from "sonner";

export default function SellerPaintingsPage() {
  const { locale, tr, setLocale } = useApp();
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(sellerPaintings[0]?.id);

  const list = useMemo(
    () =>
      sellerPaintings.filter(
        (p) =>
          !query ||
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.titleBn.includes(query)
      ),
    [query]
  );
  const selected = list.find((p) => p.id === selectedId) ?? list[0];

  return (
    <div>
      <PageHeader
        title={tr("myPaintings")}
        actions={
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLocale(locale === "en" ? "bn" : "en")}
            >
              {locale === "en" ? "বাং" : "EN"}
            </Button>
            <Button asChild>
              <a href="/dashboard/seller?add=1">
                <Plus className="h-4 w-4" />
                {tr("addPainting")}
              </a>
            </Button>
          </div>
        }
      />

      <div className="mb-4 relative max-w-md">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          className="pl-8"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search paintings"
        />
      </div>

      <MasterDetailWorkspace
        master={
          <div className="overflow-hidden rounded-lg border bg-card">
            <table className="w-full text-sm">
              <thead className="border-b bg-muted/40 text-left">
                <tr>
                  <th className="p-3 font-medium">Painting</th>
                  <th className="hidden p-3 font-medium md:table-cell">Size</th>
                  <th className="p-3 font-medium">Price</th>
                  <th className="p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {list.map((p) => (
                  <tr
                    key={p.id}
                    className={`border-b last:border-0 hover:bg-accent/40 ${
                      selected?.id === p.id ? "bg-accent/60" : ""
                    }`}
                    onClick={() => setSelectedId(p.id)}
                  >
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 overflow-hidden rounded-md">
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium">
                            {locale === "bn" ? p.titleBn : p.title}
                          </div>
                          <div className="line-clamp-1 text-[12px] text-muted-foreground">
                            {locale === "bn" ? p.descriptionBn : p.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="hidden p-3 md:table-cell">
                      <Badge variant="secondary">{p.size}</Badge>
                    </td>
                    <td className="p-3 font-mono">
                      {formatBdt(p.price, locale)}
                    </td>
                    <td className="p-3">
                      <div className="flex gap-1">
                        <Button size="icon" variant="ghost">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() =>
                            toast.success("Removal queued", {
                              action: {
                                label: "Undo",
                                onClick: () => toast.message("Restored"),
                              },
                            })
                          }
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }
        detail={
          selected ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Painting preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="font-semibold">
                  {locale === "bn" ? selected.titleBn : selected.title}
                </div>
                <p className="text-sm text-muted-foreground">
                  {locale === "bn"
                    ? selected.descriptionBn
                    : selected.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <Badge variant="secondary">{selected.size}</Badge>
                  <span className="font-mono text-primary">
                    {formatBdt(selected.price, locale)}
                  </span>
                </div>
                <Badge variant={selected.available ? "success" : "destructive"}>
                  {selected.available ? "Available" : "Sold out"}
                </Badge>
              </CardContent>
            </Card>
          ) : null
        }
      />
    </div>
  );
}
