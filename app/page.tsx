import { ArrowRight, BookOpenCheck, ExternalLink, GraduationCap, Lightbulb, Sparkles } from "lucide-react";
import { LightboxGraphic } from "@/components/LightboxGraphic";
import { PrintButton } from "@/components/PrintButton";

const principles = [
  {
    title: "Bewegung als Ausgangspunkt",
    text: "Lernende erfahren sportliche Situationen zuerst handelnd, sammeln Beobachtungen und übersetzen diese in Begriffe, Modelle und Regeln.",
  },
  {
    title: "Theorie als Werkzeug",
    text: "Regeln, Trainingslehre, Biomechanik, Gesundheit, Taktik und Werteorientierung werden unmittelbar genutzt, um Praxis besser zu planen und zu beurteilen.",
  },
  {
    title: "Reflexion mit Transfer",
    text: "Aus Erleben wird Verstehen: Schülerinnen und Schüler reflektieren, vernetzen und übertragen Erkenntnisse auf neue Bewegungs- und Entscheidungssituationen.",
  },
];

const competencies = ["Sachkompetenz", "Methodenkompetenz", "Urteilskompetenz"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-hero-radial">
      <a href="#inhalt" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-ink">Zum Inhalt springen</a>

      <header className="no-print sticky top-0 z-40 border-b border-white/60 bg-white/70 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4" aria-label="Hauptnavigation">
          <a href="#top" className="flex items-center gap-3 font-black tracking-tight text-ink">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ocean text-white shadow-lg shadow-ocean/25">PT</span>
            <span>Praxis-Theorie</span>
          </a>
          <div className="flex items-center gap-3">
            <a href="https://sportunterricht.eu" target="_blank" rel="noreferrer" className="hidden rounded-full px-4 py-2 text-sm font-bold text-ink transition hover:bg-white md:inline-flex md:items-center md:gap-2">
              Sportunterricht.eu <ExternalLink className="h-4 w-4" />
            </a>
            <a href="#grafik" className="rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-ink/15 transition hover:-translate-y-0.5 hover:bg-ocean">Infografik</a>
          </div>
        </nav>
      </header>

      <section id="top" className="relative px-5 pb-12 pt-12 md:pt-20">
        <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-ocean/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div id="inhalt" className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/65 px-4 py-2 text-sm font-bold text-ocean shadow-lg backdrop-blur">
              <Sparkles className="h-4 w-4" /> Kompetenzorientiert · vernetzt · reflektiert
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-ink md:text-7xl">
              Praxis-Theorie-Verknüpfung im Sportunterricht
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              Ein helles, modernes Leitprinzip für Unterricht, der Bewegung nicht erklärt, nachdem sie vorbei ist, sondern Theorie als wirksames Werkzeug mitten in der Praxis erfahrbar macht.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#konzept" className="inline-flex items-center gap-2 rounded-full bg-ocean px-6 py-3 font-bold text-white shadow-xl shadow-ocean/25 transition hover:-translate-y-0.5 hover:bg-ink">
                Konzept entdecken <ArrowRight className="h-4 w-4" />
              </a>
              <PrintButton />
            </div>
          </div>

          <aside className="glass-card relative rounded-[2rem] p-6">
            <StraightEdgeLogo />
            <div className="mt-8 grid gap-4">
              {competencies.map((item, index) => (
                <div key={item} className="rounded-3xl border border-white/70 bg-white/65 p-5 shadow-lg shadow-ocean/5">
                  <p className="text-sm font-black text-ocean">0{index + 1}</p>
                  <p className="mt-1 text-2xl font-black text-ink">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="grafik" className="px-5 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-ocean">Interaktive Übersicht</p>
              <h2 className="mt-2 text-3xl font-black text-ink md:text-5xl">Die Grafik als klickbare Lightbox</h2>
            </div>
            <p className="max-w-xl text-slate-600">Öffnen, zoomen und drucken: Die Infografik verbindet Bewegungsfelder, Theoriefelder und Kompetenzdimensionen in einem kompakten Unterrichtsmodell.</p>
          </div>
          <LightboxGraphic />
        </div>
      </section>

      <section id="konzept" className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((item, index) => (
              <article key={item.title} className="glass-card rounded-[2rem] p-7 transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-ocean/10 text-ocean">
                  {index === 0 ? <GraduationCap className="h-7 w-7" /> : index === 1 ? <BookOpenCheck className="h-7 w-7" /> : <Lightbulb className="h-7 w-7" />}
                </div>
                <h3 className="text-2xl font-black text-ink">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-ocean/10 bg-white/75 px-5 py-10 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-black text-ink">Praxis-Theorie-Verknüpfung im Sportunterricht</p>
            <p className="mt-1 text-sm text-slate-600">© 2026 Ralf Duwenbeck · Straight Edge Media</p>
          </div>
          <a href="https://sportunterricht.eu" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full border border-ocean/20 bg-white px-5 py-3 font-bold text-ink hover:bg-mist">
            Sportunterricht.eu <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </main>
  );
}

function StraightEdgeLogo() {
  return (
    <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-900 via-slate-700 to-slate-950 p-6 text-center text-white shadow-2xl shadow-slate-900/20">
      <p className="text-4xl font-black tracking-tight md:text-5xl">STRA<span className="text-sky-400">X</span>GHT</p>
      <p className="text-4xl font-black tracking-[0.18em] md:text-5xl">EDGE</p>
      <p className="mt-2 text-xl font-black tracking-[0.42em] text-white/80">MEDIA</p>
    </div>
  );
}
