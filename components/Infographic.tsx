import {
  Activity,
  Brain,
  Dumbbell,
  HeartPulse,
  Medal,
  Network,
  Scale,
  ShieldCheck,
  Sparkles,
  Trophy,
  Waves,
  type LucideIcon,
} from "lucide-react";

const praxis = [
  "Den Körper wahrnehmen und Bewegungsfähigkeiten ausprägen",
  "Spielen entdecken und Spielräume nutzen",
  "Laufen, Springen, Werfen – Leichtathletik",
  "Bewegen im Wasser – Schwimmen",
  "Bewegen an Geräten – Turnen",
  "Gestalten, Tanzen, Darstellen",
  "Spielen in und mit Regelstrukturen – Sportspiele",
  "Gleiten, Fahren, Rollen – Wintersport",
  "Ringen und Kämpfen – Zweikampfsport",
];

const theorie = [
  "Regeln und Normen",
  "Biomechanik und Bewegungsanalyse",
  "Trainingslehre",
  "Gesundheit und Prävention",
  "Taktik und Spielverständnis",
  "Pädagogik und Lernen im Sport",
  "Ernährung",
  "Sportpsychologie und Motivation",
  "Ökologie und Nachhaltigkeit",
  "Ethik, Fairness und Werteorientierung",
];

const icons = [Dumbbell, Trophy, Activity, Waves, Medal, Sparkles, Trophy, Activity, ShieldCheck];
const theoryIcons = [Scale, Activity, Network, HeartPulse, Brain, Brain, HeartPulse, Sparkles, Network, Scale];

export function Infographic({ compact = false }: { compact?: boolean }) {
  return (
    <figure className="mx-auto w-full max-w-5xl rounded-[2rem] border border-slate-200/70 bg-white/90 p-4 shadow-2xl shadow-ocean/10 print:shadow-none md:p-6">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-ocean">Das Leitprinzip modernen Sportunterrichts</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-ink md:text-5xl">Praxis-Theorie-Verknüpfung</h2>
        <p className="mt-2 text-base font-semibold text-ocean md:text-xl">Kompetenzen entwickeln · Bildung gestalten</p>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.2fr_1fr]">
        <Panel title="Praxis" subtitle="Bewegungsfelder im Schulsport" items={praxis} icons={icons} tone="blue" />

        <div className="relative flex min-h-[520px] flex-col items-center justify-center rounded-[2rem] bg-gradient-to-b from-mist to-white p-6 ring-1 ring-ocean/10">
          <div className="absolute left-8 right-8 top-8 h-28 rounded-[50%] border-t-2 border-dashed border-ocean/60" />
          <div className="absolute bottom-10 left-10 right-10 h-28 rounded-[50%] border-b-2 border-dashed border-slate-500/60" />
          <div className="relative grid aspect-square w-full max-w-[390px] place-items-center rounded-full bg-[conic-gradient(from_20deg,#075bb2_0_48%,#71808b_48%_100%)] p-7 shadow-2xl shadow-ocean/20">
            <div className="grid h-full w-full place-items-center rounded-full border-4 border-white/80 bg-white text-center shadow-inner">
              <div>
                <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-3xl bg-ocean/10 text-ocean">
                  <Network className="h-9 w-9" />
                </div>
                <p className="text-3xl font-black leading-tight text-ink">Verstehen<br />durch Handeln</p>
                <div className="mx-auto my-5 h-px w-40 bg-ocean" />
                <p className="text-3xl font-black leading-tight text-ink">Handeln<br />durch Verstehen</p>
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-3xl border border-ocean/30 bg-white/80 px-6 py-4 text-center shadow-lg">
            <p className="text-2xl font-black text-ink">Kompetentes sportliches Handeln</p>
          </div>
        </div>

        <Panel title="Theorie" subtitle="Theoriefelder im Sportunterricht" items={theorie} icons={theoryIcons} tone="slate" />
      </div>

      <div className={`mt-6 grid gap-3 ${compact ? "md:grid-cols-3" : "md:grid-cols-3"}`}>
        {[
          ["Sachkompetenz", "Wissen über Sport, Bewegung und Gesundheit verstehen und anwenden"],
          ["Methodenkompetenz", "Bewegungen planen, durchführen und reflektiert verbessern"],
          ["Urteilskompetenz", "Bewegungssituationen beurteilen und verantwortungsvoll handeln"],
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-ocean/15 bg-mist/70 p-4 text-center">
            <p className="font-black text-ink">{title}</p>
            <p className="mt-1 text-sm text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}

function Panel({ title, subtitle, items, icons: IconList, tone }: { title: string; subtitle: string; items: string[]; icons: LucideIcon[]; tone: "blue" | "slate" }) {
  return (
    <section className={`rounded-[1.6rem] border p-4 ${tone === "blue" ? "border-ocean/40 bg-blue-50/75" : "border-slate-400/40 bg-slate-50/80"}`}>
      <h3 className={`text-center text-3xl font-black uppercase ${tone === "blue" ? "text-ocean" : "text-slate-600"}`}>{title}</h3>
      <p className="text-center font-semibold text-ink/80">{subtitle}</p>
      <div className="mt-4 space-y-2">
        {items.map((item, index) => {
          const Icon = IconList[index % IconList.length];
          return (
            <div key={item} className="flex items-center gap-3 border-b border-slate-300/70 pb-2 last:border-b-0">
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border ${tone === "blue" ? "border-ocean text-ocean" : "border-slate-500 text-slate-600"}`}>
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold leading-snug text-ink">{item}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
