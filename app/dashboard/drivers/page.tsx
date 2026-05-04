const drivers = [
  { name: "Konan Yao", phone: "+225 07 12 34 56", license: "CI-2021-KY", licenseExp: "2026-03-15", vehicle: "CI-221-AB", status: "Actif", initials: "KY", statusColor: "#22c55e", bg: "rgba(34,197,94,0.12)" },
  { name: "Bamba Sékou", phone: "+225 05 98 76 54", license: "CI-2019-BS", licenseExp: "2024-12-01", vehicle: "CI-445-FT", status: "Actif", initials: "BS", statusColor: "#22c55e", bg: "rgba(34,197,94,0.12)" },
  { name: "Diallo Mamadou", phone: "+225 01 23 45 67", license: "CI-2020-DM", licenseExp: "2025-08-20", vehicle: "CI-773-KK", status: "Actif", initials: "DM", statusColor: "#22c55e", bg: "rgba(34,197,94,0.12)" },
  { name: "Kouamé Roger", phone: "+225 07 65 43 21", license: "CI-2022-KR", licenseExp: "2027-01-10", vehicle: "CI-887-AB", status: "Actif", initials: "KR", statusColor: "#22c55e", bg: "rgba(34,197,94,0.12)" },
  { name: "Touré Ibrahim", phone: "+225 05 11 22 33", license: "CI-2018-TI", licenseExp: "2024-06-30", vehicle: "—", status: "Disponible", initials: "TI", statusColor: "#4d93fa", bg: "rgba(77,147,250,0.12)" },
  { name: "Koffi Sylvain", phone: "+225 01 44 55 66", license: "CI-2017-KS", licenseExp: "2024-02-15", vehicle: "—", status: "Inactif", initials: "KS", statusColor: "#6b7280", bg: "rgba(107,114,128,0.12)" },
];

export default function DriversPage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>Gestion des chauffeurs</h2>
          <p className="text-xs mt-0.5" style={{ color: "var(--slate)" }}>{drivers.length} chauffeurs enregistrés</p>
        </div>
        <button className="flex items-center gap-2 text-sm font-semibold text-white px-4 py-2.5 rounded-xl" style={{ background: "var(--blue)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
          Ajouter un chauffeur
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {drivers.map(({ name, phone, license, licenseExp, vehicle, status, initials, statusColor, bg }) => {
          const expDate = new Date(licenseExp);
          const today = new Date();
          const daysLeft = Math.ceil((expDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
          const expWarning = daysLeft < 60;

          return (
            <div key={name} className="rounded-2xl p-5" style={{ background: "var(--navy-2)", border: "1px solid var(--border)" }}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: "var(--blue)", color: "white" }}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>{name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--slate)" }}>{phone}</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ background: bg, color: statusColor }}>{status}</span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-xs" style={{ color: "var(--slate)" }}>Permis</span>
                  <span className="text-xs font-medium" style={{ color: "var(--white-2)" }}>{license}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs" style={{ color: "var(--slate)" }}>Expiration permis</span>
                  <span
                    className="text-xs font-medium"
                    style={{ color: expWarning ? "#f59e0b" : "var(--white-2)" }}
                  >
                    {licenseExp} {expWarning && "⚠️"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs" style={{ color: "var(--slate)" }}>Véhicule affecté</span>
                  <span className="text-xs font-medium" style={{ color: vehicle === "—" ? "var(--slate)" : "var(--blue-3)" }}>{vehicle}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <button className="flex-1 text-xs py-2 rounded-lg" style={{ background: "var(--navy-3)", color: "var(--blue-3)", border: "1px solid var(--border)" }}>Voir profil</button>
                <button className="flex-1 text-xs py-2 rounded-lg" style={{ background: "var(--navy-3)", color: "var(--slate-2)", border: "1px solid var(--border)" }}>Modifier</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
