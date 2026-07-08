"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MessageCircle, Users, ArrowRight } from "lucide-react";
import { StatusBar } from "./status-bar";
import { AppIconBadge } from "./app-icon-badge";
import { ActionPill } from "./action-pill";
import { FloatingArrow } from "./floating-arrow";

/**
 * HeroSection — Bloc héro complet (design.json)
 * - StatusBar (mobile only)
 * - AppIconBadge (livre ouvert)
 * - Headline 3 lignes centré, mot-clé cerclé crimson500
 * - Subtitle centré
 * - 2 ActionPill côte à côte
 * - FloatingArrow bouton débordant
 * Fond: dégradé navy900 → navy700 (diagonal 135deg)
 */
interface HeroSectionProps {
  className?: string;
  onCtaClick?: (type: "private" | "community") => void;
}

export function HeroSection({ className, onCtaClick }: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative min-h-screen flex flex-col",
        "bg-hero-gradient",
        "overflow-hidden",
        className,
      )}
      aria-label="Section principale U-AUBEN"
    >
      {/* Effet de motif subtil en arrière-plan */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Status Bar */}
      <StatusBar />

      {/* Contenu Hero centré */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 relative z-10">
        {/* Spacer supérieur pour compenser l'icône */}
        <div className="flex-1" />

        {/* App Icon Badge */}
        <AppIconBadge size="lg" className="mb-8" />

        {/* Headline — 3 lignes centré, mot-clé cerclé */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="font-display text-fluid-hero font-extrabold text-white uppercase leading-[1.05] tracking-[-0.02em] text-center max-w-[320px]"
        >
          <span>U-AUBEN</span>
          <br />
          <span className="relative inline-block">
            COMMUNAUTAIRE
            {/* Cercle dessiné à la main en crimson500 (design.json §titleHighlightStyle) */}
            <svg
              className="absolute -inset-x-2 -inset-y-1 pointer-events-none"
              viewBox="0 0 200 50"
              fill="none"
              aria-hidden="true"
            >
              <ellipse
                cx="100"
                cy="25"
                rx="98"
                ry="22"
                stroke="#BB0619"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="0"
                className="opacity-90"
              />
            </svg>
          </span>
          <br />
          <span>Language Hub</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
          className="text-fog-300 text-center text-[15px] font-medium leading-[1.4] mt-4 max-w-[260px]"
        >
          Échangez, apprenez et connectez-vous avec la communauté linguistique
          de l&apos;université
        </motion.p>

        {/* Spacer */}
        <div className="flex-1 min-h-6" />

        {/* Action Pills — côte à côte */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          className="w-full flex gap-4 max-w-[360px]"
        >
          <ActionPill
            label="Privé"
            description="Messages individuels"
            icon={MessageCircle}
            variant="primary"
            onClick={() => onCtaClick?.("private")}
          />
          <ActionPill
            label="Groupe"
            description="Salons communautaires"
            icon={Users}
            variant="secondary"
            onClick={() => onCtaClick?.("community")}
          />
        </motion.div>

        {/* Bottom spacer */}
        <div className="h-12" />
      </div>

      {/* Floating Arrow Button — débordant en bas */}
      <FloatingArrow
        targetId="features"
        className="absolute -bottom-6 right-6 z-20"
      />
    </section>
  );
}