'use client';
const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#4d93fa">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    iconBg: "rgba(77,147,250,0.12)",
    title: "Géolocalisation temps réel",
    desc: "Position, vitesse, direction et état moteur mis à jour toutes les 5 secondes sur carte interactive.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#00d4aa">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
      </svg>
    ),
    iconBg: "rgba(0,212,170,0.12)",
    title: "Historique des trajets",
    desc: "Relecture complète des trajets, distance, temps de conduite, points d'arrêt et export des données.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
      </svg>
    ),
    iconBg: "rgba(245,158,11,0.12)",
    title: "Alertes & Notifications",
    desc: "Geofencing, excès de vitesse, déconnexion GPS et expiration de documents en temps réel.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#4d93fa">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
    iconBg: "rgba(77,147,250,0.12)",
    title: "Gestion des chauffeurs",
    desc: "Profils complets, documents, affectations et historique avec alertes permis et contrats.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#00d4aa">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    ),
    iconBg: "rgba(0,212,170,0.12)",
    title: "Reporting & Analyses",
    desc: "Rapports kilométrage, activité chauffeur, incidents. Export PDF, Excel et CSV inclus.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
      </svg>
    ),
    iconBg: "rgba(245,158,11,0.12)",
    title: "Sécurité & Conformité",
    desc: "JWT/OAuth2, chiffrement TLS, isolation des données par propriétaire et journal d'audit.",
  },
];

export default function Features() {
  return (
    <section style={{ background: "var(--navy)" }} className="py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-10">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--cyan)" }}
          >
            Fonctionnalités
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2
                className="font-bold mb-2"
                style={{
                  fontSize: "clamp(24px, 3vw, 32px)",
                  letterSpacing: "-1px",
                  color: "var(--white-fleet)",
                }}
              >
                Tout ce dont vous avez besoin
              </h2>
              <p className="text-sm max-w-md leading-relaxed" style={{ color: "var(--slate-2)" }}>
                Une suite complète pour gérer votre flotte, de la géolocalisation GPS aux rapports d'activité détaillés.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon, iconBg, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl p-6 transition-colors duration-200 cursor-default group"
              style={{
                background: "var(--navy-2)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--border-2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--border)")
              }
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: iconBg }}
              >
                {icon}
              </div>
              <h3
                className="text-sm font-semibold mb-2"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "var(--white-fleet)",
                }}
              >
                {title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--slate)" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
