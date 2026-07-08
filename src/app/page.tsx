"use client";

import Image from "next/image";
import { MessageCircle, Users } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#0A2A54] via-[#0E3C70] to-[#12518F]">
      {/* ===== ARRIÈRE-PLAN : Forme géométrique (demi-cercle) ===== */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] aspect-square rounded-[50%] bg-[#F5F3EE]/95"
        aria-hidden="true"
      />

      {/* ===== CONTENU PRINCIPAL ===== */}
      <div className="relative z-10 h-full flex flex-col">
        {/* ===== HEADER : Logo ===== */}
        <div className="flex items-center justify-center pt-8 pb-1 shrink-0">
          <div className="relative w-12 h-12 md:w-14 md:h-14">
            <Image
              src="/logo.png"
              alt="U-AUBEN"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>
        </div>

        {/* ===== ZONE TEXTE ===== */}
        <div className="shrink-0 px-6 text-center">
          {/* H1 */}
          <h1 className="font-display text-[26px] md:text-[32px] font-extrabold text-white uppercase leading-[1.08] tracking-[-0.02em]">
            Rejoignez notre
            <br />
            <span className="relative inline-block mt-1">
              COMMUNAUTÉ
              {/* Ellipse SVG dessinée à la main */}
              <svg
                className="absolute -inset-x-3 -inset-y-2 pointer-events-none w-auto h-[140%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                viewBox="0 0 220 56"
                fill="none"
                aria-hidden="true"
              >
                <ellipse
                  cx="110"
                  cy="28"
                  rx="106"
                  ry="24"
                  stroke="#BB0619"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="opacity-85"
                />
              </svg>
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="text-white/70 text-[13px] md:text-[14px] font-medium leading-relaxed mt-2 max-w-[280px] mx-auto">
            Pour des réponses instantanées à toutes vos questions et des
            réponses en inbox à vos attentes personnelles.
          </p>
        </div>

        {/* ===== ZONE HERO : Image étudiant + forme ===== */}
        <div className="relative flex-1 flex items-end justify-center min-h-0">
          {/* Image étudiant */}
          <div className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px] -mb-4 z-20">
            <Image
              src="/student.png"
              alt="Étudiant U-AUBEN"
              fill
              className="object-contain drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.4))" }}
              priority
            />
          </div>
        </div>

        {/* ===== BOUTONS D'ACTION (Footer) ===== */}
        <div className="shrink-0 w-full px-5 pb-5 pt-2 z-30">
          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
            {/* Bouton 1 : Messages Privés */}
            <button className="flex flex-col items-center justify-center gap-2 w-full aspect-[4/3] bg-white rounded-2xl shadow-lg hover:shadow-xl active:scale-[0.97] transition-all duration-150">
              <div className="size-10 rounded-xl bg-[#0A2A54]/10 flex items-center justify-center">
                <MessageCircle className="size-5 text-[#0A2A54]" />
              </div>
              <span className="text-[11px] font-bold text-[#0A2A54] uppercase tracking-wide text-center leading-tight">
                Messages
                <br />
                Privés
              </span>
            </button>

            {/* Bouton 2 : Groupe Communautaire */}
            <button className="flex flex-col items-center justify-center gap-2 w-full aspect-[4/3] bg-[#25D366] rounded-2xl shadow-lg hover:shadow-xl active:scale-[0.97] transition-all duration-150">
              <div className="size-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Users className="size-5 text-white" />
              </div>
              <span className="text-[11px] font-bold text-white uppercase tracking-wide text-center leading-tight">
                Groupe
                <br />
                Communautaire
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}