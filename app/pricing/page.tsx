import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "29 000",
    period: "/ mois",
    desc: "Pour les petites flottes qui démarrent",
    vehicles: "Jusqu'à 10 véhicules",
    features: ["Géolocalisation temps réel", "Historique 30 jours", "3 alertes configurables", "Rapport mensuel PDF", "Support email"],
    cta: "Démarrer gratuit",
    href: "/auth/register",
    highlight: false,
  },
  {
    name: "Pro",
    price: "89 000",
    period: "/ mois",
    desc: "Pour les flottes en croissance",
    vehicles: "Jusqu'à 50 véhicules",
    features: ["Tout Starter inclus", "Historique illimité", "Alertes illimitées", "Geofencing avancé", "Rapports PDF/Excel/CSV", "API REST", "Support prioritaire"],
    cta: "Essayer 14 jours",
    href: "/auth/register",
    highlight: true,
  },
  {
    name: "Entreprise",
    price: "Sur devis",
    period: "",
    desc: "Pour les grandes flottes et groupes",
    vehicles: "Véhicules illimités",
    features: ["Tout Pro inclus", "Multi-sites & multi-flottes", "SLA 99.9% garanti", "Intégration ERP/SAP", "Administrateur dédié", "Formation incluse", "Support 24/7"],
    cta: "Nous contacter",
    href: "/auth/register",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div style={{ background: "var(--navy)" }} className="min-h-screen">
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--cyan)" }}>Tarifs</p>
          <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--white-fleet)", letterSpacing: "-1.5px", fontFamily: "'Space Grotesk', sans-serif" }}>
            Simple et transparent
          </h1>
          <p className="text-sm" style={{ color: "var(--slate-2)" }}>Sans frais cachés · Essai 14 jours gratuit · Résiliation à tout moment</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map(({ name, price, period, desc, vehicles, features, cta, href, highlight }) => (
            <div
              key={name}
              className="rounded-2xl p-7 flex flex-col relative"
              style={{
                background: highlight ? "var(--navy-3)" : "var(--navy-2)",
                border: `1px solid ${highlight ? "var(--blue)" : "var(--border)"}`,
              }}
            >
              {highlight && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full"
                  style={{ background: "var(--blue)", color: "white" }}
                >
                  Recommandé
                </div>
              )}
              <div className="mb-6">
                <h2 className="text-base font-bold mb-1" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>{name}</h2>
                <p className="text-xs mb-4" style={{ color: "var(--slate)" }}>{desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>{price}</span>
                  {period && <span className="text-sm" style={{ color: "var(--slate)" }}>FCFA{period}</span>}
                </div>
                <p className="text-xs mt-2" style={{ color: "var(--blue-3)" }}>{vehicles}</p>
              </div>

              <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-xs" style={{ color: "var(--white-2)" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--cyan)">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={href}
                className="w-full text-sm font-semibold text-center py-3 rounded-xl no-underline block transition-opacity hover:opacity-90"
                style={{
                  background: highlight ? "var(--blue)" : "var(--navy)",
                  color: highlight ? "white" : "var(--white-2)",
                  border: highlight ? "none" : "1px solid var(--border-2)",
                }}
              >
                {cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
