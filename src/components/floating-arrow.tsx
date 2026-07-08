"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

/**
 * FloatingArrowButton — Cercle flottant (design.json §floatingArrowButton)
 * Position: coin inférieur droit du bloc héro, légèrement débordant
 * Fond cream/white, icône navy900, ombre cardShadow
 */
interface FloatingArrowProps {
  onClick?: () => void;
  className?: string;
  targetId?: string;
}

export function FloatingArrow({
  onClick,
  className,
  targetId,
}: FloatingArrowProps) {
  const handleClick = () => {
    if (targetId) {
      const el = document.getElementById(targetId);
      el?.scrollIntoView({ behavior: "smooth" });
    }
    onClick?.();
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className={cn(
        "flex items-center justify-center",
        "size-12 rounded-full",
        "bg-cream text-navy-900",
        "shadow-[0_8px_24px_rgba(10,42,84,0.25)]",
        "hover:shadow-[0_12px_32px_rgba(10,42,84,0.35)]",
        "transition-shadow duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      aria-label="Découvrir plus"
    >
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={22} aria-hidden="true" />
      </motion.div>
    </motion.button>
  );
}