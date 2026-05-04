import Link from "next/link";

interface Props {
  size?: "sm" | "md" | "lg";
}

export default function AppStoreButtons({ size = "md" }: Props) {
  const h = { sm: "36px", md: "44px", lg: "52px" }[size];
  const titleSize = { sm: "11px", md: "13px", lg: "15px" }[size];
  const iconSize = size === "sm" ? 18 : 22;

  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="https://play.google.com/store"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-4 rounded-xl no-underline hover:opacity-85 transition-opacity"
        style={{ background: "var(--navy-3)", border: "1px solid var(--border-2)", height: h, minWidth: 160 }}
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <path d="M3.18 23.76c.37.2.8.22 1.19.07L15.31 12 4.37.17C3.98.02 3.55.04 3.18.24 2.46.64 2 1.4 2 2.28v19.44c0 .88.46 1.64 1.18 2.04z" fill="#4285F4"/>
          <path d="M20.82 10.6l-3.03-1.74-3.48 3.14 3.48 3.14 3.06-1.76c.87-.5.87-1.78-.03-2.78z" fill="#FBBC05"/>
          <path d="M15.31 12L4.37.17c.12-.05.24-.1.37-.14L17.79 8.86 15.31 12z" fill="#34A853"/>
          <path d="M17.79 15.14L4.74 23.97c-.13-.04-.25-.09-.37-.14L15.31 12l2.48 3.14z" fill="#EA4335"/>
        </svg>
        <div>
          <div style={{ fontSize: "9px", color: "var(--slate-2)", lineHeight: 1, marginBottom: 2 }}>Disponible sur</div>
          <div style={{ fontSize: titleSize, fontWeight: 700, color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}>Google Play</div>
        </div>
      </Link>

      <Link
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-4 rounded-xl no-underline hover:opacity-85 transition-opacity"
        style={{ background: "var(--navy-3)", border: "1px solid var(--border-2)", height: h, minWidth: 160 }}
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="var(--white-fleet)">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div>
          <div style={{ fontSize: "9px", color: "var(--slate-2)", lineHeight: 1, marginBottom: 2 }}>Télécharger sur</div>
          <div style={{ fontSize: titleSize, fontWeight: 700, color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}>App Store</div>
        </div>
      </Link>
    </div>
  );
}
