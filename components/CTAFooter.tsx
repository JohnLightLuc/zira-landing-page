import Link from "next/link";
import AppStoreButtons from "./AppStoreButtons";

export function CTAFooter() {
  return (
    <section style={{ background: "var(--navy)" }} className="pb-16">
      <div className="max-w-6xl mx-auto px-8">
        <div
          className="rounded-2xl px-10 py-11 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "var(--navy-3)", border: "1px solid var(--border-2)" }}
        >
          <div>
            <h2
              className="font-bold mb-2"
              style={{
                fontSize: "clamp(20px, 2.5vw, 28px)",
                letterSpacing: "-0.8px",
                color: "var(--white-fleet)",
              }}
            >
              Prêt à optimiser votre flotte ?
            </h2>
            <p className="text-sm" style={{ color: "var(--slate-2)" }}>
              Essai gratuit 14 jours · Aucune carte bancaire · Support inclus
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              className="text-sm font-semibold text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
              style={{ background: "var(--blue)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Essai gratuit 14 jours
            </button>
            <button
              className="text-sm font-medium px-5 py-3 rounded-xl transition-colors"
              style={{
                background: "transparent",
                color: "var(--white-2)",
                border: "1px solid var(--border-2)",
              }}
            >
              Contacter l&apos;équipe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      className="px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ borderTop: "1px solid var(--border)", background: "var(--navy)" }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: "var(--blue)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>
        <span
          className="text-sm font-bold"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--white-fleet)" }}
        >
          FleetTrack
        </span>
      </div>
      <div className="flex gap-5">
        {["Confidentialité", "Conditions", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-xs transition-colors hover:opacity-80"
            style={{ color: "var(--slate)" }}
          >
            {item}
          </a>
        ))}
      </div>
      <AppStoreButtons size="sm" />
      <span className="text-xs" style={{ color: "var(--slate)" }}>
        © 2025 FleetTrack · Tous droits réservés
      </span>
    </footer>
  );
}
