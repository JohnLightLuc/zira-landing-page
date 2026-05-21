import Link from "next/link";
import Image from "next/image";
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
            <Link
              href="/contact-us"
              className="text-sm font-medium px-5 py-3 rounded-xl transition-colors no-underline"
              style={{
                background: "transparent",
                color: "var(--white-2)",
                border: "1px solid var(--border-2)",
              }}
            >
              Contacter l&apos;équipe
            </Link>
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
        <Image src="/logo_ic.png" width={28} height={28} alt="Zira" className="rounded-lg" />
        <span
          className="text-sm font-bold"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--white-fleet)" }}
        >
          Zira
        </span>
      </div>
      <div className="flex gap-5">
        {[
          { label: "Confidentialité", href: "#" },
          { label: "CGU", href: "/cgu" },
          { label: "Contact", href: "/contact-us" },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="text-xs transition-colors hover:opacity-80 no-underline"
            style={{ color: "var(--slate)" }}
          >
            {label}
          </Link>
        ))}
      </div>
      <AppStoreButtons size="sm" />
      <span className="text-xs" style={{ color: "var(--slate)" }}>
        © 2025 Zira · Tous droits réservés
      </span>
    </footer>
  );
}
