"use client";

import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "compact";
  className?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

/**
 * FeatureCard — Carte générique (design.json §card)
 * Background white, radius lg, padding lg, shadow cardShadow
 * Border optionnel fog100
 */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = "default",
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        "bg-card text-card-foreground",
        "rounded-[20px]",
        "shadow-[0_8px_24px_rgba(10,42,84,0.25)]",
        "border border-fog-100/80",
        "transition-shadow duration-200",
        "hover:shadow-[0_12px_32px_rgba(10,42,84,0.3)]",
        variant === "default" ? "p-6" : "p-4",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-start gap-4",
          variant === "compact" && "items-center gap-3",
        )}
      >
        {/* Icon container */}
        <div
          className={cn(
            "flex items-center justify-center shrink-0 rounded-xl",
            "bg-cream text-navy-700",
            variant === "default" ? "size-12" : "size-10",
          )}
        >
          <Icon
            size={variant === "default" ? 24 : 20}
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className={cn(variant === "compact" ? "flex-1 min-w-0" : "")}>
          <h3
            className={cn(
              "font-display font-bold text-navy-900",
              variant === "default" ? "text-base" : "text-sm",
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "text-slate-600 mt-1 leading-relaxed",
              variant === "default" ? "text-sm" : "text-xs",
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}