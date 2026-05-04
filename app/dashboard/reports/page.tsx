const reportTypes = [
  { title: "Rapport de trajet", desc: "Par véhicule, période et chauffeur", icon: "🗺️", color: "var(--blue-3)", bg: "rgba(77,147,250,0.12)" },
  { title: "Activité chauffeur", desc: "Heures, km, comportement", icon: "👤", color: "var(--cyan)", bg: "rgba(0,212,170,0.12)" },
  { title: "Kilométrage", desc: "Total et par véhicule", icon: "📏", color: "#f59e0b", bg: "rgba(245,158,11,0.12)" },
  { title: "Temps d'arrêt", desc: "Arrêts, durée, localisation", icon: "⏱️", color: "#a78bfa", bg: "rgba(167,139,250,0.12)" },
  { title: "Utilisation flotte", desc: "Taux d'utilisation journalier", icon: "📊", color: "#22c55e", bg: "rgba(34,197,94,0.12)" },
  { title: "Rapport incidents", desc: "Alertes, excès, sorties de zone", icon: "⚠️", color: "#ef4444", bg: "rgba(239,68,68,0.12)" },
];

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-lg font-bold" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>Rapports & Analyses</h2>
        <p className="text-xs mt-0.5" style={{ color: "var(--slate)" }}>Générez et exportez vos rapports en PDF, Excel ou CSV</p>
      </div>

      {/* Date filter */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <label className="text-xs" style={{ color: "var(--slate)" }}>Du</label>
          <input type="date" className="text-xs px-3 py-2 rounded-lg" style={{ background: "var(--navy-3)", color: "var(--white-2)", border: "1px solid var(--border)" }} defaultValue="2025-04-01" />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs" style={{ color: "var(--slate)" }}>Au</label>
          <input type="date" className="text-xs px-3 py-2 rounded-lg" style={{ background: "var(--navy-3)", color: "var(--white-2)", border: "1px solid var(--border)" }} defaultValue="2025-04-30" />
        </div>
        <select className="text-xs px-3 py-2 rounded-lg" style={{ background: "var(--navy-3)", color: "var(--slate-2)", border: "1px solid var(--border)" }}>
          <option>Tous les véhicules</option>
          <option>CI-221-AB</option>
        </select>
      </div>

      {/* Report cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reportTypes.map(({ title, desc, color, bg }) => (
          <div
            key={title}
            className="rounded-2xl p-5"
            style={{ background: "var(--navy-2)", border: "1px solid var(--border)" }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: bg }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill={color}><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" /></svg>
            </div>
            <h3 className="text-sm font-bold mb-1" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>{title}</h3>
            <p className="text-xs mb-4" style={{ color: "var(--slate)" }}>{desc}</p>
            <div className="flex gap-2">
              {["PDF", "Excel", "CSV"].map((fmt) => (
                <button
                  key={fmt}
                  className="flex-1 text-[11px] font-medium py-1.5 rounded-lg"
                  style={{ background: "var(--navy-3)", color: "var(--slate-2)", border: "1px solid var(--border)" }}
                >
                  {fmt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
