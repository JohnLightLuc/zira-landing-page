const vehicles = [
  { plate: "CI-221-AB", brand: "Toyota", model: "HiAce", driver: "Konan Yao", status: "Actif", year: 2021, type: "Minibus", statusColor: "#22c55e", bg: "rgba(34,197,94,0.12)" },
  { plate: "CI-445-FT", brand: "Renault", model: "Master", driver: "Bamba Sékou", status: "Arrêté", year: 2020, type: "Utilitaire", statusColor: "#f59e0b", bg: "rgba(245,158,11,0.12)" },
  { plate: "CI-773-KK", brand: "Mercedes", model: "Sprinter", driver: "Diallo Mamadou", status: "Actif", year: 2022, type: "Fourgon", statusColor: "#22c55e", bg: "rgba(34,197,94,0.12)" },
  { plate: "CI-558-LM", brand: "Ford", model: "Transit", driver: "—", status: "Maintenance", year: 2019, type: "Fourgon", statusColor: "#f59e0b", bg: "rgba(245,158,11,0.12)" },
  { plate: "CI-887-AB", brand: "Isuzu", model: "D-Max", driver: "Kouamé Roger", status: "Actif", year: 2023, type: "Pick-up", statusColor: "#22c55e", bg: "rgba(34,197,94,0.12)" },
  { plate: "CI-330-ZZ", brand: "Nissan", model: "Urvan", driver: "—", status: "Hors service", year: 2018, type: "Minibus", statusColor: "#ef4444", bg: "rgba(239,68,68,0.12)" },
];

export default function VehiclesPage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>Gestion des véhicules</h2>
          <p className="text-xs mt-0.5" style={{ color: "var(--slate)" }}>{vehicles.length} véhicules enregistrés</p>
        </div>
        <button
          className="flex items-center gap-2 text-sm font-semibold text-white px-4 py-2.5 rounded-xl"
          style={{ background: "var(--blue)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
          Ajouter un véhicule
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-3 flex-wrap">
        {["Tous", "Actif", "Arrêté", "Maintenance", "Hors service"].map((f) => (
          <button
            key={f}
            className="text-xs font-medium px-3 py-1.5 rounded-lg"
            style={{
              background: f === "Tous" ? "var(--blue)" : "var(--navy-3)",
              color: f === "Tous" ? "white" : "var(--slate-2)",
              border: `1px solid ${f === "Tous" ? "var(--blue)" : "var(--border)"}`,
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="rounded-2xl overflow-hidden" style={{ background: "var(--navy-2)", border: "1px solid var(--border)" }}>
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              {["Immatriculation", "Marque / Modèle", "Type", "Année", "Chauffeur", "Statut", "Actions"].map((h) => (
                <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold" style={{ color: "var(--slate)", fontFamily: "'Space Grotesk', sans-serif" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vehicles.map(({ plate, brand, model, driver, status, year, type, statusColor, bg }) => (
              <tr key={plate} style={{ borderBottom: "1px solid var(--border)" }}>
                <td className="px-5 py-4 text-xs font-bold" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>{plate}</td>
                <td className="px-5 py-4 text-xs" style={{ color: "var(--white-2)" }}>{brand} {model}</td>
                <td className="px-5 py-4 text-xs" style={{ color: "var(--slate-2)" }}>{type}</td>
                <td className="px-5 py-4 text-xs" style={{ color: "var(--slate-2)" }}>{year}</td>
                <td className="px-5 py-4 text-xs" style={{ color: "var(--slate-2)" }}>{driver}</td>
                <td className="px-5 py-4">
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ background: bg, color: statusColor }}>{status}</span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex gap-2">
                    <button className="text-[11px] px-2.5 py-1 rounded-lg" style={{ background: "var(--navy-3)", color: "var(--blue-3)", border: "1px solid var(--border)" }}>Voir</button>
                    <button className="text-[11px] px-2.5 py-1 rounded-lg" style={{ background: "var(--navy-3)", color: "var(--slate-2)", border: "1px solid var(--border)" }}>Modifier</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
