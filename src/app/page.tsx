"use client";

import Image from "next/image";
import { MessageCircle, Users } from "lucide-react";

export default function HomePage() {
  return (
    <main
      className="relative h-screen w-full bg-gradient-to-b from-[#0A1F5C] via-[#0D2870] to-[#0A1F5C]"
      style={{ height: "100dvh", overflow: "hidden" }}
    >
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
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* ===== HEADER : Logo ===== */}
        <div className="flex items-center justify-center pt-4 pb-1 shrink-0">
          <div className="relative w-10 h-10">
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
        <div className="relative z-10 shrink-0 px-6 text-center">
          {/* H1 */}
          <h1 className="font-display text-[22px] md:text-[28px] font-extrabold text-white uppercase leading-[1.08] tracking-[-0.02em]">
            Rejoignez notre
            <br />
            <span className="relative inline-block mt-1">
              COMMUNAUTÉ
              {/* Ellipse SVG dessinée à la main — Or U-AUBEN */}
              <svg
                className="absolute inset-x-[-8px] inset-y-[-6px] pointer-events-none w-full h-full overflow-visible"
                viewBox="0 0 280 60"
                fill="none"
                aria-hidden="true"
              >
                <ellipse
                  cx="140"
                  cy="30"
                  rx="135"
                  ry="26"
                  stroke="#D4A017"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="opacity-85"
                />
              </svg>
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="text-white/70 text-[12px] md:text-[13px] font-medium leading-relaxed mt-1 max-w-[260px] mx-auto">
            Pour des réponses instantanées à toutes vos questions et des
            réponses en inbox à vos attentes personnelles.
          </p>
        </div>

        {/* ===== ZONE PHOTO : Étudiant ===== */}
        <div className="flex justify-center items-center pt-1 pb-0 shrink-0">
          <div className="relative w-[200px] h-[220px]">
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
        <div className="shrink-0 w-full px-5 pb-4 pt-2">
          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
            {/* Bouton 1 : Messages Privés — Rouge U-AUBEN */}
            <button className="flex flex-col items-center justify-center gap-2 w-full h-[80px] py-4 px-3 bg-[#CC1B1B] rounded-2xl shadow-lg hover:shadow-xl active:scale-[0.97] transition-all duration-150">
              <div className="size-8 rounded-xl bg-white/20 flex items-center justify-center">
                <MessageCircle className="size-4 text-white" />
              </div>
              <span className="text-[10px] font-bold text-white uppercase tracking-wide text-center leading-tight">
                Messages
                <br />
                Privés
              </span>
            </button>

            {/* Bouton 2 : Groupe Communautaire — Or U-AUBEN */}
            <button className="flex flex-col items-center justify-center gap-2 w-full h-[80px] py-4 px-3 bg-[#D4A017] rounded-2xl shadow-lg hover:shadow-xl active:scale-[0.97] transition-all duration-150">
              <div className="size-8 rounded-xl bg-white/20 flex items-center justify-center">
                <Users className="size-4 text-white" />
              </div>
              <span className="text-[10px] font-bold text-white uppercase tracking-wide text-center leading-tight">
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