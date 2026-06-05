import Link from "next/link";

const sections = [
  {
    title: "Démarrage rapide",
    items: ["Créer un compte", "Ajouter votre premier véhicule", "Associer un tracker GPS", "Affecter un chauffeur"],
    color: "var(--blue-3)",
    bg: "rgba(77,147,250,0.12)",
  },
  {
    title: "Gestion de la flotte",
    items: ["Gérer les véhicules", "Gérer les chauffeurs", "Affectations véhicule/chauffeur", "Documents et alertes"],
    color: "var(--cyan)",
    bg: "rgba(0,212,170,0.12)",
  },
  {
    title: "GPS & Suivi",
    items: ["Carte en temps réel", "Historique des trajets", "Geofencing", "Diagnostic GPS"],
    color: "#22c55e",
    bg: "rgba(34,197,94,0.12)",
  },
  {
    title: "Rapports",
    items: ["Générer un rapport", "Export PDF/Excel/CSV", "Tableau de bord", "Rapports programmés"],
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.12)",
  },
  {
    title: "API REST",
    items: ["Authentification JWT", "Endpoints véhicules", "Endpoints chauffeurs", "Webhooks & événements"],
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.12)",
  },
  {
    title: "Sécurité & Compte",
    items: ["Gestion des rôles", "Authentification 2FA", "Journal d'audit", "RGPD & confidentialité"],
    color: "#ef4444",
    bg: "rgba(239,68,68,0.12)",
  },
];

export default function Docs() {
  return (
    <section id="docs" style={{ background: "var(--navy-2)" }}>
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--cyan)" }}>Documentation</p>
          <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--white-fleet)", letterSpacing: "-1px", fontFamily: "'Space Grotesk', sans-serif" }}>
            Centre d&apos;aide Zira
          </h2>
          <p className="text-sm mb-6" style={{ color: "var(--slate-2)" }}>Guides, tutoriels et référence API pour tirer le meilleur de votre plateforme.</p>

          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl max-w-md"
            style={{ background: "var(--navy-2)", border: "1px solid var(--border-2)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--slate)">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher dans la documentation..."
              className="flex-1 text-sm bg-transparent outline-none"
              style={{ color: "var(--white-fleet)" }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map(({ title, items, color, bg }) => (
            <div
              key={title}
              className="rounded-2xl p-6"
              style={{ background: "var(--navy-2)", border: "1px solid var(--border)" }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ background: bg }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold mb-3" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>{title}</h3>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="flex items-center gap-2 text-xs no-underline transition-colors" style={{ color: "var(--slate-2)" }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-8 rounded-2xl p-7 flex items-center justify-between flex-wrap gap-4"
          style={{ background: "var(--navy-3)", border: "1px solid var(--border-2)" }}
        >
          <div>
            <h3 className="text-base font-bold mb-1" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>
              Documentation API REST
            </h3>
            <p className="text-xs" style={{ color: "var(--slate-2)" }}>
              Intégrez Zira à vos outils métier via notre API complète.
            </p>
          </div>
          <Link
            href="#"
            className="text-sm font-semibold px-5 py-2.5 rounded-xl no-underline"
            style={{ background: "var(--blue)", color: "white" }}
          >
            Explorer l&apos;API →
          </Link>
        </div>
      </div>
    </section>
  );
}
