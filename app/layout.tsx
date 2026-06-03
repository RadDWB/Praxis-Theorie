import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praxis-Theorie-Verknüpfung im Sportunterricht",
  description:
    "Eine moderne, kompetenzorientierte Einseiten-Webpage zur Praxis-Theorie-Verknüpfung im Sportunterricht.",
  keywords: [
    "Praxis-Theorie-Verknüpfung",
    "Sportunterricht",
    "Kompetenzorientierung",
    "Sportdidaktik",
    "Ralf Duwenbeck",
  ],
  metadataBase: new URL("https://sportunterricht.eu"),
  openGraph: {
    title: "Praxis-Theorie-Verknüpfung im Sportunterricht",
    description:
      "Das Leitprinzip modernen Sportunterrichts: Kompetenzen entwickeln, Bildung gestalten.",
    type: "website",
    locale: "de_DE",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8fbff",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
