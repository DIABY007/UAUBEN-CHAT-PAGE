"use client";

import Image from "next/image";
import { MessageCircle, Users } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0A1F5C] via-[#0D2870] to-[#0A1F5C]">
      {/* ===== ARRIÈRE-PLAN : Blobs décoratifs ===== */}
      <div
        className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-[#0D2870] opacity-40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 -right-16 w-56 h-56 rounded-full bg-[#0D2870] opacity-40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#0D2870] opacity-20 blur-3xl"
        aria-hidden="true"
      />

      {/* ===== CONTENU PRINCIPAL ===== */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
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
        <div className="relative z-10 shrink-0 px-6 text-center pb-4">
          {/* H1 */}
          <h1 className="font-display text-[26px] md:text-[32px] font-extrabold text-white uppercase leading-[1.08] tracking-[-0.02em]">
            Rejoignez notre
            <br />
            <span className="relative inline-block mt-1">
              COMMUNAUTÉ
              {/* Ellipse SVG dessinée à la main — Or U-AUBEN */}
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
                  stroke="#D4A017"
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

        {/* ===== ZONE PHOTO : Étudiant ===== */}
        <div className="flex justify-center items-center py-4 shrink-0">
          <div className="relative w-[240px] h-[280px]">
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
        <div className="shrink-0 w-full px-5 pb-5 pt-2">
          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
            {/* Bouton 1 : Messages Privés — Rouge U-AUBEN */}
            <button className="flex flex-col items-center justify-center gap-2 w-full h-[90px] py-4 px-3 bg-[#CC1B1B] rounded-2xl shadow-lg hover:shadow-xl active:scale-[0.97] transition-all duration-150">
              <div className="size-10 rounded-xl bg-white/20 flex items-center justify-center">
                <MessageCircle className="size-5 text-white" />
              </div>
              <span className="text-[11px] font-bold text-white uppercase tracking-wide text-center leading-tight">
                Messages
                <br />
                Privés
              </span>
            </button>

            {/* Bouton 2 : Groupe Communautaire — Or U-AUBEN */}
            <button className="flex flex-col items-center justify-center gap-2 w-full h-[90px] py-4 px-3 bg-[#D4A017] rounded-2xl shadow-lg hover:shadow-xl active:scale-[0.97] transition-all duration-150">
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