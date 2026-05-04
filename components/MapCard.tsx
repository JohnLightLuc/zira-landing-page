const vehicles = [
  {
    plate: "CI-221-AB",
    driver: "Konan Yao · Toyota HiAce",
    speed: "82 km/h",
    status: "En route",
    dotColor: "#22c55e",
    tagBg: "rgba(34,197,94,0.15)",
    tagColor: "#22c55e",
  },
  {
    plate: "CI-445-FT",
    driver: "Bamba Sékou · Renault Master",
    speed: "0 km/h",
    status: "Arrêté",
    dotColor: "#f59e0b",
    tagBg: "rgba(245,158,11,0.15)",
    tagColor: "#f59e0b",
  },
];

export default function MapCard() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "var(--navy-2)",
        border: "1px solid var(--border-2)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3.5"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <span
          className="text-xs font-medium tracking-wide"
          style={{ color: "var(--slate-2)", fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Carte en temps réel — Abidjan
        </span>
        <span
          className="flex items-center gap-1.5 text-xs font-semibold"
          style={{ color: "var(--cyan)" }}
        >
          <span
            className="live-dot w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--cyan)" }}
          />
          Live
        </span>
      </div>

      {/* SVG Map */}
      <div className="relative overflow-hidden" style={{ height: 240 }}>
        <svg
          viewBox="0 0 420 240"
          width="100%"
          height="240"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
        >
          <rect width="420" height="240" fill="#0a1628" />
          {/* Grid */}
          {[40, 80, 120, 160, 200].map((y) => (
            <line key={y} x1="0" y1={y} x2="420" y2={y} stroke="#1a2d45" strokeWidth="0.5" />
          ))}
          {[70, 140, 210, 280, 350].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="240" stroke="#1a2d45" strokeWidth="0.5" />
          ))}
          {/* Roads */}
          <line x1="40" y1="62" x2="190" y2="62" stroke="#1a3050" strokeWidth="5" strokeLinecap="round" />
          <line x1="60" y1="102" x2="180" y2="102" stroke="#1a3050" strokeWidth="5" strokeLinecap="round" />
          <line x1="20" y1="142" x2="220" y2="142" stroke="#1a3050" strokeWidth="5" strokeLinecap="round" />
          <line x1="220" y1="72" x2="410" y2="72" stroke="#1a3050" strokeWidth="5" strokeLinecap="round" />
          <line x1="230" y1="122" x2="380" y2="122" stroke="#1a3050" strokeWidth="5" strokeLinecap="round" />
          <line x1="200" y1="162" x2="360" y2="162" stroke="#1a3050" strokeWidth="5" strokeLinecap="round" />
          {/* Buildings */}
          <rect x="80" y="75" width="40" height="30" rx="3" fill="#0f2040" stroke="#1a3050" strokeWidth="0.5" />
          <rect x="200" y="88" width="35" height="26" rx="3" fill="#0f2040" stroke="#1a3050" strokeWidth="0.5" />
          <rect x="302" y="108" width="46" height="28" rx="3" fill="#0f2040" stroke="#1a3050" strokeWidth="0.5" />
          {/* Vehicle 1 — Blue (moving) */}
          <circle cx="110" cy="52" r="10" fill="#1a6ef5" opacity="0.25" />
          <circle cx="110" cy="52" r="6" fill="#1a6ef5" opacity="0.6" />
          <circle cx="110" cy="52" r="3.5" fill="#4d93fa" />
          <polygon points="110,42 107,50 113,50" fill="#4d93fa" />
          {/* Vehicle 2 — Green (moving) */}
          <circle cx="260" cy="82" r="10" fill="#22c55e" opacity="0.2" />
          <circle cx="260" cy="82" r="6" fill="#22c55e" opacity="0.5" />
          <circle cx="260" cy="82" r="3.5" fill="#4ade80" />
          <polygon points="260,72 257,80 263,80" fill="#4ade80" />
          {/* Vehicle 3 — Amber (stopped) */}
          <circle cx="370" cy="135" r="10" fill="#f59e0b" opacity="0.2" />
          <circle cx="370" cy="135" r="6" fill="#f59e0b" opacity="0.5" />
          <circle cx="370" cy="135" r="3.5" fill="#fbbf24" />
          {/* Vehicle 4 — Blue (moving) */}
          <circle cx="160" cy="172" r="10" fill="#1a6ef5" opacity="0.25" />
          <circle cx="160" cy="172" r="6" fill="#1a6ef5" opacity="0.6" />
          <circle cx="160" cy="172" r="3.5" fill="#4d93fa" />
          <polygon points="160,162 157,170 163,170" fill="#4d93fa" />
          {/* Info boxes */}
          <rect x="14" y="14" width="94" height="52" rx="6" fill="#0a1e35" stroke="#1a3050" strokeWidth="0.5" />
          <text x="22" y="28" fill="#7a8fa6" fontSize="8" fontFamily="monospace">FLOTTE ACTIVE</text>
          <text x="22" y="45" fill="#f0f6ff" fontSize="19" fontWeight="bold" fontFamily="monospace">24</text>
          <text x="22" y="58" fill="#22c55e" fontSize="8" fontFamily="monospace">18 en mouvement</text>
          <rect x="313" y="14" width="94" height="52" rx="6" fill="#0a1e35" stroke="#1a3050" strokeWidth="0.5" />
          <text x="321" y="28" fill="#7a8fa6" fontSize="8" fontFamily="monospace">EN MOUVEMENT</text>
          <text x="321" y="45" fill="#f0f6ff" fontSize="19" fontWeight="bold" fontFamily="monospace">18</text>
          <text x="321" y="58" fill="#4d93fa" fontSize="8" fontFamily="monospace">75% de la flotte</text>
        </svg>
      </div>

      {/* Vehicle list */}
      <div className="p-3 flex flex-col gap-2">
        {vehicles.map((v) => (
          <div
            key={v.plate}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
            style={{
              background: "var(--navy-3)",
              border: "1px solid var(--border)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: v.dotColor }}
            />
            <div className="flex-1 min-w-0">
              <div
                className="text-xs font-bold truncate"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--white-fleet)" }}
              >
                {v.plate}
              </div>
              <div className="text-[11px] truncate mt-0.5" style={{ color: "var(--slate)" }}>
                {v.driver}
              </div>
            </div>
            <span
              className="text-xs font-medium flex-shrink-0"
              style={{ color: "var(--slate-2)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {v.speed}
            </span>
            <span
              className="text-[10px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
              style={{ background: v.tagBg, color: v.tagColor }}
            >
              {v.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
