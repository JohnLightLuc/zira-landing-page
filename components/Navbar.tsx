"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Fonctionnalités", href: "/#features" },
  // { label: "Tableau de bord", href: "/dashboard" },
  { label: "Tarifs", href: "/pricing" },
  { label: "Documentation", href: "/docs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/#features") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      style={{ background: "var(--navy)", borderBottom: "1px solid var(--border)" }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "var(--blue)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-base" style={{ color: "var(--white-fleet)", letterSpacing: "-0.3px" }}>
              FleetTrack
            </div>
            <div className="text-[10px] font-medium tracking-widest uppercase" style={{ color: "var(--cyan)", marginTop: "-2px" }}>
              GPS Management
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-normal transition-colors duration-200 relative"
              style={{
                color: isActive(href) ? "var(--white-fleet)" : "var(--slate-2)",
                textDecoration: "none",
              }}
            >
              {label}
              {isActive(href) && (
                <span
                  className="absolute -bottom-[22px] left-0 right-0 h-[2px] rounded-full"
                  style={{ background: "var(--blue)" }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/auth/login"
            className="text-sm font-medium transition-colors"
            style={{ color: "var(--slate-2)", textDecoration: "none" }}
          >
            Connexion
          </Link>
          <Link
            href="/auth/register"
            className="text-sm font-semibold text-white px-5 py-2 rounded-lg transition-opacity hover:opacity-90 no-underline"
            style={{ background: "var(--blue)", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Démarrer gratuit
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "var(--slate-2)" }}
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-8 pb-5 flex flex-col gap-2"
          style={{ borderTop: "1px solid var(--border)", background: "var(--navy-2)" }}
        >
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm py-2.5 border-b"
              style={{
                color: isActive(href) ? "var(--white-fleet)" : "var(--slate-2)",
                borderColor: "var(--border)",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-3 mt-3">
            <Link
              href="/auth/login"
              className="flex-1 text-sm font-medium text-center py-2.5 rounded-lg border"
              style={{ color: "var(--white-2)", borderColor: "var(--border-2)", textDecoration: "none" }}
            >
              Connexion
            </Link>
            <Link
              href="/auth/register"
              className="flex-1 text-sm font-semibold text-white text-center py-2.5 rounded-lg"
              style={{ background: "var(--blue)", textDecoration: "none" }}
            >
              Démarrer gratuit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
