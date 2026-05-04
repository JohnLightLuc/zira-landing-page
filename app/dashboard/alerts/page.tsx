const alerts = [
  { type: "Excès de vitesse", plate: "CI-221-AB", detail: "112 km/h détecté sur l'Autoroute du Nord", time: "Il y a 2 min", severity: "high", severityColor: "#ef4444", bg: "rgba(239,68,68,0.12)", read: false },
  { type: "Sortie de zone", plate: "CI-773-KK", detail: "Sortie de la zone autorisée à Yopougon", time: "Il y a 15 min", severity: "medium", severityColor: "#f59e0b", bg: "rgba(245,158,11,0.12)", read: false },
  { type: "Déconnexion GPS", plate: "CI-558-LM", detail: "Tracker hors ligne depuis 32 minutes", time: "Il y a 32 min", severity: "high", severityColor: "#ef4444", bg: "rgba(239,68,68,0.12)", read: false },
  { type: "Permis expirant", plate: "Bamba Sékou", detail: "Permis de conduire expire dans 15 jours", time: "Aujourd'hui", severity: "medium", severityColor: "#f59e0b", bg: "rgba(245,158,11,0.12)", read: false },
  { type: "Affectation", plate: "CI-887-AB", detail: "Konan Yao affecté au véhicule CI-887-AB", time: "Il y a 1h", severity: "low", severityColor: "#4d93fa", bg: "rgba(77,147,250,0.12)", read: true },
  { type: "Maintenance", plate: "CI-330-ZZ", detail: "Visite technique due dans 3 jours", time: "Il y a 2h", severity: "medium", severityColor: "#f59e0b", bg: "rgba(245,158,11,0.12)", read: true },
];

export default function AlertsPage() {
  const unread = alerts.filter(a => !a.read).length;
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>Centre d'alertes</h2>
          <p className="text-xs mt-0.5" style={{ color: "var(--slate)" }}>{unread} alertes non lues</p>
        </div>
        <button className="text-xs px-3 py-2 rounded-lg" style={{ background: "var(--navy-3)", color: "var(--slate-2)", border: "1px solid var(--border)" }}>
          Tout marquer comme lu
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {alerts.map(({ type, plate, detail, time, severityColor, bg, read }, i) => (
          <div
            key={i}
            className="flex items-start gap-4 rounded-2xl p-5"
            style={{
              background: "var(--navy-2)",
              border: `1px solid ${read ? "var(--border)" : "var(--border-2)"}`,
              opacity: read ? 0.7 : 1,
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: bg }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill={severityColor}>
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>{type}</span>
                {!read && <span className="w-1.5 h-1.5 rounded-full" style={{ background: severityColor }} />}
              </div>
              <p className="text-xs mb-1" style={{ color: "var(--slate-2)" }}>
                <span className="font-bold" style={{ color: "var(--white-2)" }}>{plate}</span> — {detail}
              </p>
              <p className="text-[11px]" style={{ color: "var(--slate)" }}>{time}</p>
            </div>
            <button className="text-[11px] px-3 py-1.5 rounded-lg flex-shrink-0" style={{ background: "var(--navy-3)", color: "var(--blue-3)", border: "1px solid var(--border)" }}>
              Voir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
