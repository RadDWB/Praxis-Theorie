"use client";

import { Maximize2, Minus, Plus, Printer, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Infographic } from "./Infographic";

export function LightboxGraphic() {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "+") setZoom((current) => Math.min(1.8, current + 0.1));
      if (event.key === "-") setZoom((current) => Math.max(0.7, current - 0.1));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-ocean/30"
        aria-label="Infografik Praxis-Theorie-Verknüpfung vergrößern"
      >
        <Infographic />
        <span className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-sm font-bold text-ink shadow-lg ring-1 ring-ocean/10 backdrop-blur transition group-hover:-translate-y-0.5 group-hover:bg-white">
          <Maximize2 className="h-4 w-4 text-ocean" />
          Grafik öffnen
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-ink/70 p-3 backdrop-blur-xl print:static print:bg-white print:p-0" role="dialog" aria-modal="true" aria-label="Vergrößerte Infografik">
          <div className="no-print mx-auto mb-3 flex max-w-7xl flex-wrap items-center justify-between gap-2 rounded-2xl bg-white/90 p-3 shadow-2xl backdrop-blur">
            <p className="font-bold text-ink">Infografik · zoombar · druckbar</p>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setZoom((z) => Math.max(0.7, z - 0.1))} className="rounded-full border border-slate-200 bg-white p-2 text-ink hover:bg-mist" aria-label="Verkleinern">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-14 text-center text-sm font-bold">{Math.round(zoom * 100)}%</span>
              <button type="button" onClick={() => setZoom((z) => Math.min(1.8, z + 0.1))} className="rounded-full border border-slate-200 bg-white p-2 text-ink hover:bg-mist" aria-label="Vergrößern">
                <Plus className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-full bg-ocean px-4 py-2 text-sm font-bold text-white hover:bg-ink">
                <Printer className="h-4 w-4" /> Drucken
              </button>
              <button type="button" onClick={() => setOpen(false)} className="rounded-full border border-slate-200 bg-white p-2 text-ink hover:bg-mist" aria-label="Schließen">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="h-[calc(100vh-6.5rem)] overflow-auto rounded-3xl print:h-auto print:overflow-visible">
            <div className="mx-auto w-fit origin-top transition-transform print:transform-none" style={{ transform: `scale(${zoom})` }}>
              <Infographic compact />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
