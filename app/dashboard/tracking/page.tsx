const liveVehicles = [
  { plate: "CI-221-AB", driver: "Konan Yao", speed: "82 km/h", location: "Autoroute du Nord, Abidjan", status: "En route", statusColor: "#22c55e", bg: "rgba(34,197,94,0.12)", lastUpdate: "il y a 3s" },
  { plate: "CI-773-KK", driver: "Diallo Mamadou", speed: "65 km/h", location: "Bd de Marseille, Zone 4", status: "En route", statusColor: "#22c55e", bg: "rgba(34,197,94,0.12)", lastUpdate: "il y a 5s" },
  { plate: "CI-887-AB", driver: "Kouamé Roger", speed: "0 km/h", location: "Zone Industrielle Yopougon", status: "Arrêté", statusColor: "#f59e0b", bg: "rgba(245,158,11,0.12)", lastUpdate: "il y a 12s" },
  { plate: "CI-445-FT", driver: "Bamba Sékou", speed: "0 km/h", location: "Port Autonome d'Abidjan", status: "Arrêté", statusColor: "#f59e0b", bg: "rgba(245,158,11,0.12)", lastUpdate: "il y a 8s" },
];

export default function TrackingPage() {
  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>Suivi GPS en temps réel</h2>
          <p className="text-xs mt-0.5" style={{ color: "var(--slate)" }}>4 véhicules actifs · Mise à jour toutes les 5s</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: "var(--cyan)" }}>
          <span className="live-dot w-2 h-2 rounded-full" style={{ background: "var(--cyan)" }} />
          Live
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" style={{ minHeight: 500 }}>
        {/* Map */}
        <div
          className="lg:col-span-2 rounded-2xl overflow-hidden"
          style={{ background: "var(--navy-2)", border: "1px solid var(--border-2)" }}
        >
          <svg viewBox="0 0 700 460" width="100%" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
            <rect width="700" height="460" fill="#0a1628" />
            {[60,120,180,240,300,360,420].map(y=><line key={y} x1="0" y1={y} x2="700" y2={y} stroke="#1a2d45" strokeWidth="0.5"/>)}
            {[70,140,210,280,350,420,490,560,630].map(x=><line key={x} x1={x} y1="0" x2={x} y2="460" stroke="#1a2d45" strokeWidth="0.5"/>)}
            <line x1="40" y1="115" x2="320" y2="115" stroke="#1a3050" strokeWidth="8" strokeLinecap="round"/>
            <line x1="100" y1="200" x2="380" y2="200" stroke="#1a3050" strokeWidth="8" strokeLinecap="round"/>
            <line x1="30" y1="290" x2="400" y2="290" stroke="#1a3050" strokeWidth="8" strokeLinecap="round"/>
            <line x1="370" y1="80" x2="680" y2="80" stroke="#1a3050" strokeWidth="8" strokeLinecap="round"/>
            <line x1="400" y1="190" x2="680" y2="190" stroke="#1a3050" strokeWidth="8" strokeLinecap="round"/>
            <line x1="350" y1="300" x2="660" y2="300" stroke="#1a3050" strokeWidth="8" strokeLinecap="round"/>
            <line x1="200" y1="60" x2="200" y2="380" stroke="#1a3050" strokeWidth="5" strokeLinecap="round"/>
            <line x1="450" y1="50" x2="450" y2="360" stroke="#1a3050" strokeWidth="5" strokeLinecap="round"/>
            <rect x="120" y="130" width="60" height="50" rx="4" fill="#0f2040" stroke="#1a3050" strokeWidth="0.5"/>
            <rect x="300" y="215" width="50" height="55" rx="4" fill="#0f2040" stroke="#1a3050" strokeWidth="0.5"/>
            <rect x="500" y="100" width="70" height="65" rx="4" fill="#0f2040" stroke="#1a3050" strokeWidth="0.5"/>
            <rect x="480" y="210" width="55" height="65" rx="4" fill="#0f2040" stroke="#1a3050" strokeWidth="0.5"/>
            <circle cx="180" cy="100" r="14" fill="#1a6ef5" opacity="0.2"/>
            <circle cx="180" cy="100" r="8" fill="#1a6ef5" opacity="0.5"/>
            <circle cx="180" cy="100" r="5" fill="#4d93fa"/>
            <polygon points="180,88 176,98 184,98" fill="#4d93fa"/>
            <text x="196" y="98" fill="#4d93fa" fontSize="10" fontFamily="monospace" fontWeight="bold">CI-221-AB</text>
            <text x="196" y="110" fill="#7a8fa6" fontSize="9" fontFamily="monospace">82 km/h</text>
            <circle cx="430" cy="175" r="14" fill="#22c55e" opacity="0.2"/>
            <circle cx="430" cy="175" r="8" fill="#22c55e" opacity="0.5"/>
            <circle cx="430" cy="175" r="5" fill="#4ade80"/>
            <polygon points="430,163 426,173 434,173" fill="#4ade80"/>
            <text x="446" y="173" fill="#4ade80" fontSize="10" fontFamily="monospace" fontWeight="bold">CI-773-KK</text>
            <text x="446" y="185" fill="#7a8fa6" fontSize="9" fontFamily="monospace">65 km/h</text>
            <circle cx="560" cy="260" r="14" fill="#f59e0b" opacity="0.2"/>
            <circle cx="560" cy="260" r="8" fill="#f59e0b" opacity="0.5"/>
            <circle cx="560" cy="260" r="5" fill="#fbbf24"/>
            <text x="576" y="258" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold">CI-887-AB</text>
            <text x="576" y="270" fill="#7a8fa6" fontSize="9" fontFamily="monospace">Arrêté</text>
            <circle cx="310" cy="340" r="14" fill="#f59e0b" opacity="0.2"/>
            <circle cx="310" cy="340" r="8" fill="#f59e0b" opacity="0.5"/>
            <circle cx="310" cy="340" r="5" fill="#fbbf24"/>
            <text x="326" y="338" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold">CI-445-FT</text>
            <text x="326" y="350" fill="#7a8fa6" fontSize="9" fontFamily="monospace">Arrêté</text>
            <rect x="16" y="16" width="130" height="70" rx="8" fill="#0a1e35" stroke="#1a3050" strokeWidth="0.5"/>
            <text x="26" y="33" fill="#7a8fa6" fontSize="9" fontFamily="monospace">ABIDJAN — LIVE</text>
            <text x="26" y="52" fill="#f0f6ff" fontSize="22" fontWeight="bold" fontFamily="monospace">4</text>
            <text x="26" y="65" fill="#22c55e" fontSize="9" fontFamily="monospace">2 en mouvement</text>
            <text x="26" y="78" fill="#f59e0b" fontSize="9" fontFamily="monospace">2 à l&apos;arrêt</text>
          </svg>
        </div>

        {/* Vehicle list */}
        <div className="flex flex-col gap-3">
          {liveVehicles.map(({ plate, driver, speed, location, status, statusColor, bg, lastUpdate }) => (
            <div
              key={plate}
              className="rounded-2xl p-4 cursor-pointer transition-colors"
              style={{ background: "var(--navy-2)", border: "1px solid var(--border)" }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>{plate}</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: bg, color: statusColor }}>{status}</span>
              </div>
              <p className="text-xs mb-1" style={{ color: "var(--slate-2)" }}>{driver}</p>
              <p className="text-[11px] mb-2" style={{ color: "var(--slate)" }}>{location}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold" style={{ color: "var(--blue-3)" }}>{speed}</span>
                <span className="text-[10px]" style={{ color: "var(--slate)" }}>{lastUpdate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
