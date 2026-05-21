import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zira — Gestion de flotte GPS",
  description:
    "Plateforme complète de gestion de flotte avec géolocalisation GPS, gestion des chauffeurs, alertes intelligentes et reporting avancé.",
  keywords: "flotte, gps, géolocalisation, chauffeurs, véhicules, tracking",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
