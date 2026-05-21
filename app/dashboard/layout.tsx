"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const sideLinks = [
  {
    label: "Vue globale",
    href: "/dashboard",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
      </svg>
    ),
  },
  {
    label: "Véhicules",
    href: "/dashboard/vehicles",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
      </svg>
    ),
  },
  {
    label: "Chauffeurs",
    href: "/dashboard/drivers",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    label: "Suivi GPS",
    href: "/dashboard/tracking",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
  {
    label: "Historique",
    href: "/dashboard/history",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
      </svg>
    ),
  },
  {
    label: "Alertes",
    href: "/dashboard/alerts",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
      </svg>
    ),
    badge: 5,
  },
  {
    label: "Rapports",
    href: "/dashboard/reports",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    ),
  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen" style={{ background: "var(--navy)" }}>
      {/* Sidebar */}
      <aside
        className="hidden md:flex flex-col w-60 flex-shrink-0"
        style={{
          background: "var(--navy-2)",
          borderRight: "1px solid var(--border)",
          position: "sticky",
          top: 0,
          height: "100vh",
        }}
      >
        {/* Sidebar logo */}
        <Link href="/" className="flex items-center gap-2.5 px-5 py-5 no-underline" style={{ borderBottom: "1px solid var(--border)" }}>
          <Image src="/logo_ic.png" width={28} height={28} alt="Zira" className="rounded-lg" />
          <span className="text-sm font-bold" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>
            Zira
          </span>
        </Link>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
          <p className="text-[10px] font-semibold tracking-widest uppercase px-3 mb-2" style={{ color: "var(--slate)" }}>
            Navigation
          </p>
          {sideLinks.map(({ label, href, icon, badge }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all no-underline relative"
                style={{
                  color: active ? "var(--white-fleet)" : "var(--slate-2)",
                  background: active ? "var(--navy-3)" : "transparent",
                  border: active ? "1px solid var(--border-2)" : "1px solid transparent",
                }}
              >
                <span style={{ color: active ? "var(--blue-3)" : "var(--slate)" }}>{icon}</span>
                {label}
                {badge && (
                  <span
                    className="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{ background: "rgba(239,68,68,0.2)", color: "#f87171" }}
                  >
                    {badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom user */}
        <div className="px-4 py-4" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{ background: "var(--blue)", color: "white" }}
            >
              AD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold truncate" style={{ color: "var(--white-fleet)" }}>Admin Zira</p>
              <p className="text-[11px] truncate" style={{ color: "var(--slate)" }}>admin@fleettrack.ci</p>
            </div>
            <Link href="/auth/login" style={{ color: "var(--slate)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
              </svg>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header
          className="flex items-center justify-between px-6 py-4 sticky top-0 z-10"
          style={{ background: "var(--navy-2)", borderBottom: "1px solid var(--border)" }}
        >
          <div>
            <h1 className="text-base font-bold" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>
              {sideLinks.find((l) => l.href === pathname)?.label ?? "Dashboard"}
            </h1>
            <p className="text-xs" style={{ color: "var(--slate)" }}>Bienvenue, Admin</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg"
              style={{ background: "var(--navy-3)", color: "var(--slate-2)", border: "1px solid var(--border)" }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              Rechercher...
            </button>
            <Link
              href="/dashboard/alerts"
              className="relative w-8 h-8 rounded-lg flex items-center justify-center no-underline"
              style={{ background: "var(--navy-3)", border: "1px solid var(--border)", color: "var(--slate-2)" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
              </svg>
              <span
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center"
                style={{ background: "#ef4444", color: "white" }}
              >
                5
              </span>
            </Link>
          </div>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
