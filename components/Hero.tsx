import MapCard from "./MapCard";
import AppStoreButtons from "./AppStoreButtons";

export default function Hero() {
  return (
    <section style={{ background: "var(--navy)", paddingBottom: 0 }}>
      <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="animate-slide-up">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{
              background: "var(--navy-3)",
              border: "1px solid var(--border-2)",
            }}
          >
            <span
              className="live-dot w-2 h-2 rounded-full"
              style={{ background: "var(--cyan)" }}
            />
            <span className="text-xs font-medium tracking-wide" style={{ color: "var(--cyan)" }}>
              Suivi GPS en temps réel
            </span>
          </div>

          <h1
            className="font-bold leading-none mb-5"
            style={{
              fontSize: "clamp(32px, 4vw, 46px)",
              letterSpacing: "-1.5px",
              color: "var(--white-fleet)",
            }}
          >
            Gérez votre flotte,
            <br />
            <span className="text-gradient">où que vous soyez</span>
          </h1>

          <p
            className="text-base leading-relaxed mb-8 max-w-md"
            style={{ color: "var(--slate-2)", fontWeight: 300 }}
          >
            Plateforme complète de gestion de flotte avec géolocalisation GPS,
            gestion des chauffeurs, alertes intelligentes et reporting avancé.
          </p>

          {/* Buttons */}
          {/* <div className="flex flex-wrap gap-3 items-center">
            <button
              className="text-sm font-semibold text-white px-6 py-3 rounded-xl transition-opacity hover:opacity-90"
              style={{ background: "var(--blue)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Demander une démo
            </button>
            <button
              className="flex items-center gap-2 text-sm font-normal px-5 py-3 rounded-xl transition-colors hover:border-opacity-80"
              style={{
                background: "transparent",
                color: "var(--white-2)",
                border: "1px solid var(--border-2)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: "var(--navy-3)" }}
              >
                <svg width="8" height="10" viewBox="0 0 8 10" fill="white">
                  <path d="M0 0l8 5-8 5V0z" />
                </svg>
              </span>
              Voir la démo
            </button>
          </div> */}

          {/* Store buttons */}
          <div className="mt-5">
            <p className="text-xs mb-3 flex items-center gap-2" style={{ color: "var(--slate)" }}>
              <span
                className="inline-block h-px flex-1"
                style={{ background: "var(--border)", maxWidth: 40 }}
              />
              Telecharger l'application mobile
              <span
                className="inline-block h-px flex-1"
                style={{ background: "var(--border)", maxWidth: 40 }}
              />
            </p>
            <AppStoreButtons size="md" />
          </div>

          {/* Store buttons */}
          {/* <div className="flex items-center gap-3 mt-5">
            <span className="text-xs" style={{ color: "var(--slate)" }}>Aussi sur mobile :</span>
            <AppStoreButtons size="sm" />
          </div> */}

          {/* Stats */}
          <div
            className="flex gap-8 mt-9 pt-7"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {[
              { num: "10K+", label: "Véhicules simultanés" },
              { num: "99.9%", label: "Disponibilité" },
              { num: "< 5s", label: "Mise à jour GPS" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div
                  className="font-bold text-xl"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--white-fleet)" }}
                >
                  {num}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "var(--slate)" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Map card */}
        <div className="animate-fade-in">
          <MapCard />
        </div>
      </div>
    </section>
  );
}
