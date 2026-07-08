"use client";

import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream px-6">
      <div className="text-center max-w-sm">
        <div className="size-16 rounded-2xl bg-navy-700 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="size-8 text-white" aria-hidden="true" />
        </div>
        <h1 className="font-display text-2xl font-bold text-navy-900 mb-3">
          Une erreur est survenue
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-8">
          Désolé, quelque chose s&apos;est mal passé. Notre équipe technique a
          été notifiée.
        </p>
        <Button
          onClick={reset}
          variant="default"
          className="rounded-full px-8"
        >
          Réessayer
        </Button>
      </div>
    </div>
  );
}