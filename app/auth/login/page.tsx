import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "var(--navy)" }}
    >
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center gap-3 justify-center mb-8">
          <Image src="/logo_ic.png" width={36} height={36} alt="Zira" className="rounded-xl" />
          <div>
            <div className="font-bold text-base" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>Zira</div>
            <div className="text-[10px] font-medium tracking-widest uppercase" style={{ color: "var(--cyan)", marginTop: "-2px" }}>GPS Management</div>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl p-8" style={{ background: "var(--navy-2)", border: "1px solid var(--border-2)" }}>
          <h1 className="text-xl font-bold mb-1 text-center" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>
            Connexion
          </h1>
          <p className="text-sm text-center mb-7" style={{ color: "var(--slate)" }}>
            Accédez à votre espace de gestion
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-medium mb-2" style={{ color: "var(--slate-2)" }}>Adresse email</label>
              <input
                type="email"
                placeholder="vous@exemple.ci"
                className="w-full text-sm px-4 py-3 rounded-xl outline-none transition-colors"
                style={{
                  background: "var(--navy-3)",
                  border: "1px solid var(--border-2)",
                  color: "var(--white-fleet)",
                }}
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-xs font-medium" style={{ color: "var(--slate-2)" }}>Mot de passe</label>
                <Link href="#" className="text-xs no-underline" style={{ color: "var(--blue-3)" }}>Oublié ?</Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full text-sm px-4 py-3 rounded-xl outline-none"
                style={{
                  background: "var(--navy-3)",
                  border: "1px solid var(--border-2)",
                  color: "var(--white-fleet)",
                }}
              />
            </div>

            <Link
              href="/dashboard"
              className="w-full text-sm font-semibold text-white text-center py-3.5 rounded-xl mt-2 block no-underline transition-opacity hover:opacity-90"
              style={{ background: "var(--blue)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Se connecter
            </Link>
          </div>

          <p className="text-xs text-center mt-6" style={{ color: "var(--slate)" }}>
            Pas encore de compte ?{" "}
            <Link href="/auth/register" className="no-underline" style={{ color: "var(--blue-3)" }}>
              Créer un compte
            </Link>
          </p>
        </div>

        <p className="text-xs text-center mt-6" style={{ color: "var(--slate)" }}>
          <Link href="/" className="no-underline hover:opacity-80" style={{ color: "var(--slate-2)" }}>
            ← Retour à l'accueil
          </Link>
        </p>
      </div>
    </div>
  );
}
