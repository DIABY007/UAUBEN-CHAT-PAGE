import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy-900">
      <div className="size-14 rounded-[14px] bg-navy-700 flex items-center justify-center mb-6">
        <span className="text-white font-display font-bold text-lg">U</span>
      </div>
      <Loader2
        className="size-8 text-white/70 animate-spin"
        aria-label="Chargement en cours"
      />
      <p className="text-fog-300 text-sm mt-4 font-medium">
        U-AUBEN Language Hub
      </p>
    </div>
  );
}