"use client";

import { cn } from "@/lib/utils";
import {
  Globe,
  GraduationCap,
  MessageSquareText,
  Sparkles,
} from "lucide-react";
import { AnimatedContainer } from "./animated-container";
import { FeatureCard } from "./feature-card";
import { motion } from "framer-motion";

const features = [
  {
    icon: MessageSquareText,
    title: "Messages Privés",
    description:
      "Échangez en tête-à-tête avec des partenaires linguistiques de votre niveau et de vos centres d'intérêt.",
  },
  {
    icon: Globe,
    title: "Salons Communautaires",
    description:
      "Rejoignez des groupes thématiques pour pratiquer en temps réel avec des apprenants du monde entier.",
  },
  {
    icon: GraduationCap,
    title: "Parcours Guidés",
    description:
      "Suivez des programmes structurés conçus par les enseignants de l'université U-AUBEN.",
  },
  {
    icon: Sparkles,
    title: "Correction Interactive",
    description:
      "Recevez des feedbacks instantanés sur votre prononciation et votre grammaire par l'IA.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

interface SectionFeaturesProps {
  className?: string;
}

export function SectionFeatures({ className }: SectionFeaturesProps) {
  return (
    <section
      id="features"
      className={cn(
        "relative py-16 md:py-24 bg-cream",
        className,
      )}
      aria-label="Fonctionnalités"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* En-tête de section */}
        <AnimatedContainer animation="fadeInUp" className="text-center mb-12">
          <h2 className="font-display text-fluid-section font-bold text-navy-900">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-slate-600 text-fluid-body mt-4 max-w-lg mx-auto">
            Une plateforme complète pour maîtriser une nouvelle langue, à votre
            rythme et en communauté.
          </p>
        </AnimatedContainer>

        {/* Grille de cartes avec stagger animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={cardVariants}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}