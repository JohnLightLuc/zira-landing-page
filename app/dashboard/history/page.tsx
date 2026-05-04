const trips = [
  { plate: "CI-221-AB", driver: "Konan Yao", date: "04/05/2025", start: "06:30", end: "09:45", distance: "87 km", duration: "3h15", stops: 2 },
  { plate: "CI-773-KK", driver: "Diallo Mamadou", date: "04/05/2025", start: "07:00", end: "11:20", distance: "124 km", duration: "4h20", stops: 3 },
  { plate: "CI-887-AB", driver: "Kouamé Roger", date: "03/05/2025", start: "08:15", end: "12:00", distance: "65 km", duration: "3h45", stops: 1 },
  { plate: "CI-445-FT", driver: "Bamba Sékou", date: "03/05/2025", start: "05:45", end: "10:30", distance: "148 km", duration: "4h45", stops: 4 },
  { plate: "CI-221-AB", driver: "Konan Yao", date: "02/05/2025", start: "06:15", end: "08:50", distance: "72 km", duration: "2h35", stops: 1 },
];

export default function HistoryPage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>Historique des trajets</h2>
          <p className="text-xs mt-0.5" style={{ color: "var(--slate)" }}>{trips.length} trajets récents</p>
        </div>
        <div className="flex gap-2">
          <select className="text-xs px-3 py-2 rounded-lg" style={{ background: "var(--navy-3)", color: "var(--slate-2)", border: "1px solid var(--border)" }}>
            <option>Tous les véhicules</option>
            <option>CI-221-AB</option>
            <option>CI-773-KK</option>
          </select>
          <button className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg" style={{ background: "var(--blue)", color: "white" }}>
            Exporter CSV
          </button>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden" style={{ background: "var(--navy-2)", border: "1px solid var(--border)" }}>
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              {["Véhicule", "Chauffeur", "Date", "Départ", "Fin", "Distance", "Durée", "Arrêts", ""].map(h => (
                <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold" style={{ color: "var(--slate)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {trips.map(({ plate, driver, date, start, end, distance, duration, stops }, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                <td className="px-5 py-3.5 text-xs font-bold" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>{plate}</td>
                <td className="px-5 py-3.5 text-xs" style={{ color: "var(--slate-2)" }}>{driver}</td>
                <td className="px-5 py-3.5 text-xs" style={{ color: "var(--slate-2)" }}>{date}</td>
                <td className="px-5 py-3.5 text-xs" style={{ color: "var(--white-2)" }}>{start}</td>
                <td className="px-5 py-3.5 text-xs" style={{ color: "var(--white-2)" }}>{end}</td>
                <td className="px-5 py-3.5 text-xs font-semibold" style={{ color: "var(--blue-3)" }}>{distance}</td>
                <td className="px-5 py-3.5 text-xs" style={{ color: "var(--white-2)" }}>{duration}</td>
                <td className="px-5 py-3.5 text-xs" style={{ color: "var(--slate-2)" }}>{stops}</td>
                <td className="px-5 py-3.5">
                  <button className="text-[11px] px-2.5 py-1 rounded-lg" style={{ background: "var(--navy-3)", color: "var(--blue-3)", border: "1px solid var(--border)" }}>Relire</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
