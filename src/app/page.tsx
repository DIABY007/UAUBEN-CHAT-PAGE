"use client";

import Image from "next/image";
import { MessageCircle, Users } from "lucide-react";

export default function HomePage() {
  return (
    <main
      className="relative w-full bg-gradient-to-b from-[#0A1F5C] via-[#0D2870] to-[#0A1F5C]"
      style={{ height: "100dvh", overflow: "hidden" }}
    >
      {/* Blobs décoratifs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-[#0D2870] opacity-40 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/3 -right-16 w-56 h-56 rounded-full bg-[#0D2870] opacity-40 blur-3xl" aria-hidden="true" />

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col justify-between" style={{ height: "100dvh" }}>

        {/* Logo */}
        <div className="flex items-center justify-center pt-4 shrink-0">
          <div className="relative w-10 h-10">
            <Image src="/logo.png" alt="U-AUBEN" fill className="object-contain drop-shadow-lg" priority />
          </div>
        </div>

        {/* Texte */}
        <div className="shrink-0 px-6 text-center">
          <h1 className="font-display text-[22px] md:text-[28px] font-extrabold text-white uppercase leading-[1.15] tracking-[-0.02em]">
            Rejoignez notre
            <br />
            <span
              style={{
                display: "inline-block",
                border: "3px solid #D4A017",
                borderRadius: "50%",
                padding: "3px 20px 5px 20px",
                marginTop: "4px",
                lineHeight: "1.15",
              }}
            >
              COMMUNAUTÉ
            </span>
          </h1>
          <p className="text-white/70 text-[12px] font-medium leading-relaxed mt-2 max-w-[260px] mx-auto">
            Pour des réponses instantanées à toutes vos questions et des réponses en inbox à vos attentes personnelles.
          </p>
        </div>

        {/* Photo */}
        <div className="flex justify-center items-end shrink-0">
          <div className="relative w-[200px] h-[220px]">
            <Image
              src="/student.png"
              alt="Étudiant U-AUBEN"
              fill
              className="object-contain"
              style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.4))" }}
              priority
            />
          </div>
        </div>

        {/* Boutons */}
        <div className="shrink-0 w-full px-5 pb-5 pt-2">
          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
            <a
              href="https://wa.me/55197164"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 w-full h-[80px] bg-[#CC1B1B] rounded-2xl shadow-lg active:scale-[0.97] transition-all duration-150 hover:opacity-90"
            >
              <div className="size-8 rounded-xl bg-white/20 flex items-center justify-center">
                <MessageCircle className="size-4 text-white" />
              </div>
              <span className="text-[10px] font-bold text-white uppercase tracking-wide text-center leading-tight">
                Messages<br />Privés
              </span>
            </a>
            <a
              href="https://chat.whatsapp.com/HBPOV2pqzDV35tpRWA0rg3?s=cl&p=a&ilr=1&amv=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 w-full h-[80px] bg-[#D4A017] rounded-2xl shadow-lg active:scale-[0.97] transition-all duration-150 hover:opacity-90"
            >
              <div className="size-8 rounded-xl bg-white/20 flex items-center justify-center">
                <Users className="size-4 text-white" />
              </div>
              <span className="text-[10px] font-bold text-white uppercase tracking-wide text-center leading-tight">
                Groupe<br />Communautaire
              </span>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
