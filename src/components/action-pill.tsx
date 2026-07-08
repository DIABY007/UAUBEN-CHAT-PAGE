"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface ActionPillProps {
  label: string;
  description?: string;
  icon: LucideIcon;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

/**
 * ActionPill — Bouton d'action rectangulaire arrondi (design.json §actionPillButton)
 * Variant primary: crimson500/white (CTA principal)
 * Variant secondary: cream/navy900 (action secondaire)
 * Layout: icône + label empilés verticalement, padding généreux
 */
export function ActionPill({
  label,
  description,
  icon: Icon,
  variant = "secondary",
  onClick,
  className,
}: ActionPillProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.button
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center gap-2",
        "w-full min-h-[100px] px-4 py-5",
        "rounded-[20px]",
        "font-display font-bold text-sm uppercase tracking-[0.04em]",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        isPrimary
          ? [
              "bg-accent text-accent-foreground",
              "shadow-[0_4px_12px_rgba(139,7,20,0.35)]",
              "hover:shadow-[0_6px_20px_rgba(139,7,20,0.45)]",
              "active:shadow-[0_2px_6px_rgba(139,7,20,0.25)]",
            ]
          : [
              "bg-cream text-navy-900",
              "shadow-[0_4px_12px_rgba(10,42,84,0.15)]",
              "hover:shadow-[0_6px_20px_rgba(10,42,84,0.2)]",
              "active:shadow-[0_2px_6px_rgba(10,42,84,0.1)]",
            ],
        className,
      )}
      aria-label={label}
    >
      <Icon
        size={28}
        className={cn(
          isPrimary ? "text-white" : "text-navy-700",
        )}
        aria-hidden="true"
      />
      <span>{label}</span>
      {description && (
        <span className="text-[10px] font-normal opacity-80 -mt-1">
          {description}
        </span>
      )}
    </motion.button>
  );
}