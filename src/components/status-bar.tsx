"use client";

import { Wifi, BatteryFull } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * StatusBar — Simulation de barre d'état mobile (design.json §statusBar)
 * Couleur white sur fond sombre, visible uniquement sur mobile
 */
export function StatusBar({ className }: { className?: string }) {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  return (
    <div
      className={cn(
        "flex items-center justify-between px-6 py-2 text-white/90 text-xs font-medium",
        "md:hidden",
        className,
      )}
      role="status"
      aria-label="Barre d'état"
    >
      <span className="tabular-nums" aria-label="Heure">
        {hours}:{minutes}
      </span>

      <div className="flex items-center gap-1.5" aria-label="Indicateurs réseau">
        <span className="text-[10px] font-semibold">5G</span>
        <Wifi className="size-3.5" aria-hidden="true" />
        <BatteryFull className="size-3.5" aria-hidden="true" />
      </div>
    </div>
  );
}