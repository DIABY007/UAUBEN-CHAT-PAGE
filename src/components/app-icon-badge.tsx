"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

/**
 * AppIconBadge — Icône carrée à coins arrondis (design.json §appIconBadge)
 * Livre ouvert stylisé en écho au logo U-AUBEN
 * Taille: 56px, fond navy700, icône white
 */
interface AppIconBadgeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "size-12",
  md: "size-14",
  lg: "size-16",
};

const iconSizeMap = {
  sm: 20,
  md: 24,
  lg: 28,
};

export function AppIconBadge({ className, size = "md" }: AppIconBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      }}
      className={cn(
        "flex items-center justify-center",
        "bg-navy-700 rounded-[14px]",
        "shadow-lg shadow-navy-900/25",
        sizeMap[size],
        className,
      )}
      role="img"
      aria-label="U-AUBEN Community Language Hub"
    >
      <BookOpen
        size={iconSizeMap[size]}
        className="text-white"
        aria-hidden="true"
      />
    </motion.div>
  );
}