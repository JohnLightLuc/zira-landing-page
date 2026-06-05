const alertItems = [
  {
    bg: "rgba(239,68,68,0.15)",
    iconColor: "#f87171",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#f87171">
        <path d="M13 13H11V7H13M13 17H11V15H13M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2Z" />
      </svg>
    ),
    main: (
      <>
        <strong style={{ color: "var(--white-fleet)" }}>CI-221-AB</strong> — Excès de vitesse détecté (112 km/h)
      </>
    ),
    time: "Il y a 2 min · Autoroute du Nord",
  },
  {
    bg: "rgba(245,158,11,0.15)",
    iconColor: "#fbbf24",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    main: (
      <>
        <strong style={{ color: "var(--white-fleet)" }}>CI-773-KK</strong> — Sortie de zone autorisée
      </>
    ),
    time: "Il y a 15 min · Zone Industrielle Yopougon",
  },
  {
    bg: "rgba(239,68,68,0.15)",
    iconColor: "#f87171",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#f87171">
        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
      </svg>
    ),
    main: (
      <>
        <strong style={{ color: "var(--white-fleet)" }}>CI-558-LM</strong> — Déconnexion GPS tracker
      </>
    ),
    time: "Il y a 32 min · Dernière position connue",
  },
  {
    bg: "rgba(245,158,11,0.15)",
    iconColor: "#fbbf24",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
      </svg>
    ),
    main: (
      <>
        <strong style={{ color: "var(--white-fleet)" }}>Bamba Sékou</strong> — Permis expire dans 15 jours
      </>
    ),
    time: "Aujourd'hui · Document à renouveler",
  },
  {
    bg: "rgba(77,147,250,0.15)",
    iconColor: "#4d93fa",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#4d93fa">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
    main: (
      <>
        <strong style={{ color: "var(--white-fleet)" }}>CI-887-AB</strong> — Nouveau chauffeur affecté
      </>
    ),
    time: "Il y a 1h · Konan Yao remplace Diallo M.",
  },
];

export default function AlertsSection() {
  return (
    <section style={{ background: "var(--navy-2)" }} className="py-16">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* Left text */}
        <div>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--cyan)" }}
          >
            Alertes intelligentes
          </p>
          <h2
            className="font-bold mb-4"
            style={{
              fontSize: "clamp(24px, 3vw, 30px)",
              letterSpacing: "-0.8px",
              color: "var(--white-fleet)",
            }}
          >
            Ne manquez plus
            <br />
            aucun événement
          </h2>
          <p
            className="text-sm leading-relaxed mb-7 max-w-sm"
            style={{ color: "var(--slate-2)" }}
          >
            Recevez des notifications instantanées pour chaque événement critique
            de votre flotte, sur mobile et sur le web.
          </p>
          <ul className="flex flex-col gap-3">
            {[
              { dot: "#22c55e", text: "Zones de geofencing personnalisables" },
              { dot: "#22c55e", text: "Seuils de vitesse configurables" },
              { dot: "#f59e0b", text: "Alertes expiration permis & documents" },
              { dot: "#ef4444", text: "Déconnexion GPS détectée instantanément" },
              { dot: "#4d93fa", text: "Notifications push mobile & web" },
            ].map(({ dot, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: dot }}
                />
                <span className="text-sm" style={{ color: "var(--white-2)" }}>
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right alert feed */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "var(--navy-2)",
            border: "1px solid var(--border-2)",
          }}
        >
          <div
            className="flex items-center justify-between px-5 py-3.5"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <span
              className="text-sm font-semibold"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--white-fleet)" }}
            >
              Alertes récentes
            </span>
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ background: "rgba(239,68,68,0.2)", color: "#f87171" }}
            >
              5 nouvelles
            </span>
          </div>

          <div className="flex flex-col">
            {alertItems.map(({ bg, icon, main, time }, i) => (
              <div
                key={i}
                className="flex items-start gap-3 px-5 py-4"
                style={{ borderBottom: i < alertItems.length - 1 ? "1px solid var(--border)" : "none" }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: bg }}
                >
                  {icon}
                </div>
                <div className="flex-1">
                  <p className="text-xs leading-snug" style={{ color: "var(--white-2)" }}>
                    {main}
                  </p>
                  <p className="text-[11px] mt-1" style={{ color: "var(--slate)" }}>
                    {time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
