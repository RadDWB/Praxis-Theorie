"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-full border border-ocean/20 bg-white/80 px-6 py-3 font-bold text-ink shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
    >
      <Printer className="h-4 w-4" /> Seite drucken
    </button>
  );
}
