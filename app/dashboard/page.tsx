import Link from "next/link";

const stats = [
  { label: "Véhicules actifs", value: "24", sub: "+2 ce mois", color: "#4d93fa", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" /></svg> },
  { label: "En mouvement", value: "18", sub: "75% de la flotte", color: "#22c55e", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg> },
  { label: "Chauffeurs actifs", value: "21", sub: "3 disponibles", color: "#00d4aa", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg> },
  { label: "Alertes actives", value: "5", sub: "2 urgentes", color: "#ef4444", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg> },
];

const recentVehicles = [
  { plate: "CI-221-AB", driver: "Konan Yao", status: "En route", speed: "82 km/h", statusColor: "#22c55e", bg: "rgba(34,197,94,0.15)" },
  { plate: "CI-445-FT", driver: "Bamba Sékou", status: "Arrêté", speed: "0 km/h", statusColor: "#f59e0b", bg: "rgba(245,158,11,0.15)" },
  { plate: "CI-773-KK", driver: "Diallo Mamadou", status: "En route", speed: "65 km/h", statusColor: "#22c55e", bg: "rgba(34,197,94,0.15)" },
  { plate: "CI-558-LM", driver: "Non affecté", status: "Hors service", speed: "—", statusColor: "#ef4444", bg: "rgba(239,68,68,0.15)" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, sub, color, icon }) => (
          <div
            key={label}
            className="rounded-2xl p-5"
            style={{ background: "var(--navy-2)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium" style={{ color: "var(--slate)" }}>{label}</span>
              <span style={{ color }}>{icon}</span>
            </div>
            <div className="text-3xl font-bold mb-1" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>
              {value}
            </div>
            <div className="text-xs" style={{ color: "var(--slate)" }}>{sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Vehicles table */}
        <div className="lg:col-span-2 rounded-2xl overflow-hidden" style={{ background: "var(--navy-2)", border: "1px solid var(--border)" }}>
          <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
            <h2 className="text-sm font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--white-fleet)" }}>Véhicules récents</h2>
            <Link href="/dashboard/vehicles" className="text-xs no-underline" style={{ color: "var(--blue-3)" }}>Voir tout →</Link>
          </div>
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                {["Immatriculation", "Chauffeur", "Vitesse", "Statut"].map((h) => (
                  <th key={h} className="text-left px-5 py-3 text-xs font-medium" style={{ color: "var(--slate)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentVehicles.map(({ plate, driver, status, speed, statusColor, bg }) => (
                <tr key={plate} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td className="px-5 py-3.5 text-xs font-bold" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>{plate}</td>
                  <td className="px-5 py-3.5 text-xs" style={{ color: "var(--slate-2)" }}>{driver}</td>
                  <td className="px-5 py-3.5 text-xs font-medium" style={{ color: "var(--white-2)" }}>{speed}</td>
                  <td className="px-5 py-3.5">
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ background: bg, color: statusColor }}>{status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick links */}
        <div className="rounded-2xl p-5" style={{ background: "var(--navy-2)", border: "1px solid var(--border)" }}>
          <h2 className="text-sm font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--white-fleet)" }}>Accès rapide</h2>
          <div className="flex flex-col gap-2">
            {[
              { label: "Carte GPS live", href: "/dashboard/tracking", color: "var(--blue)" },
              { label: "Ajouter un véhicule", href: "/dashboard/vehicles", color: "var(--cyan)" },
              { label: "Ajouter un chauffeur", href: "/dashboard/drivers", color: "#00d4aa" },
              { label: "Générer un rapport", href: "/dashboard/reports", color: "#f59e0b" },
              { label: "Voir les alertes", href: "/dashboard/alerts", color: "#ef4444" },
            ].map(({ label, href, color }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm no-underline transition-colors"
                style={{ background: "var(--navy-3)", color: "var(--white-2)", border: "1px solid var(--border)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
