const metrics = [
  { num: "10K+", label: "Véhicules simultanés" },
  { num: "99.9%", label: "Uptime garanti SLA" },
  { num: "< 5s", label: "Latence GPS" },
  { num: "360°", label: "Visibilité sur votre flotte" },
];

export default function MetricsBar() {
  return (
    <div style={{ background: "var(--navy-2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {metrics.map(({ num, label }, i) => (
          <div
            key={label}
            className="py-7 px-8 text-center"
            style={{
              borderRight: i < metrics.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            <div
              className="text-3xl font-bold"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "var(--white-fleet)",
              }}
            >
              {num.includes("+") ? (
                <>
                  {num.replace("+", "")}
                  <span style={{ color: "var(--blue-3)" }}>+</span>
                </>
              ) : num.includes("%") ? (
                <>
                  {num.replace("%", "")}
                  <span style={{ color: "var(--blue-3)" }}>%</span>
                </>
              ) : num.includes("°") ? (
                <>
                  {num.replace("°", "")}
                  <span style={{ color: "var(--blue-3)" }}>°</span>
                </>
              ) : (
                num
              )}
            </div>
            <div className="text-xs mt-1.5" style={{ color: "var(--slate)" }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
